import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowIcon } from '@/components/ArrowIcon';
import { Footer } from '@/components/Footer';
import { SiteHeader } from '@/components/SiteHeader';
import type { Dictionary } from '@/content/tr';
import { getContent } from '@/lib/content';
import { routes } from '@/lib/routes';
import { legalName, placeholder, siteUrl } from '@/lib/site';
import { breadcrumbJsonLd, jsonLdString, pageMetadata } from '@/lib/seo';
import { NextMember } from '@/app/ekip/[slug]/NextMember';
import styles from '@/app/ekip/[slug]/Member.module.css';

export function memberStaticParams(t: Dictionary) {
  return getContent(t.locale).team.map((m) => ({ slug: m.slug }));
}

export function memberMetadata(t: Dictionary, slug: string): Metadata {
  const member = getContent(t.locale).getMember(slug);
  if (!member) return {};
  return pageMetadata({
    title: `${member.name}, ${member.titles[0]}`,
    // legalName "A.Ş." ile bittiği için ardına ayrıca nokta konmaz
    description: `${member.name}, ${member.titles.join(', ')}. ${legalName}${
      member.focus ? ` ${t.team.focusMeta}: ${member.focus.join(', ')}.` : ''
    }`,
    path: routes[t.locale].member(member.slug),
    image: member.image,
    imageAlt: t.team.portraitAlt.replace('{name}', member.name),
    type: 'profile',
  });
}

/*
  Uzman profili. Üst bant koyu (sabit header açık metinlidir), portre koyu banttan açık
  gövdeye taşar: ana sayfadaki koyu/açık ritmin tek sayfadaki karşılığı. Kart, gölge, ikon yok.
  Hareket iki türle sınırlı (BRIEF §08): satır maskesinden yükselen başlık, perde gibi açılan portre.
*/
const pad = (n: number) => String(n).padStart(2, '0');
export function MemberView({ t, slug }: { t: Dictionary; slug: string }) {
  const r = routes[t.locale];
  const teamMembers = getContent(t.locale).team;
  const index = teamMembers.findIndex((m) => m.slug === slug);
  if (index === -1) notFound();
  const member = teamMembers[index];
  const next = teamMembers[(index + 1) % teamMembers.length];
  const [mainTitle, ...otherTitles] = member.titles;
  // İlk cümle büyük serif giriş olur; tek cümlelik biyografide yalnızca giriş kalır
  const [, lede = member.biography, rest] = member.biography.match(/^(.+?[.!?])\s+(.+)$/s) ?? [];

  const jsonLd = {
    '@graph': [
      {
        '@type': 'ProfilePage',
        url: `${siteUrl}${r.member(member.slug)}`,
        inLanguage: t.locale,
        mainEntity: {
          '@type': 'Person',
          name: member.name,
          jobTitle: member.titles,
          description: member.biography,
          image: `${siteUrl}${member.image}`,
          ...(member.focus ? { knowsAbout: member.focus } : {}),
          worksFor: { '@id': `${siteUrl}/#organization` },
        },
      },
      breadcrumbJsonLd([
        { name: t.a11y.breadcrumbHome, path: r.home },
        { name: t.team.back, path: r.team },
        { name: member.name, path: r.member(member.slug) },
      ]),
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(jsonLd) }} />
      <SiteHeader t={t} />
      <main id="main">
        {/* Üst bant ve gövde tek ızgaradadır: portrenin ilk konumu sayfanın tepesine göre
            hesaplanabilsin ve kayma rayı bant ile metin arasında kesintisiz sürsün diye */}
        <section className={styles.profile} aria-labelledby="member-name">
          <div className={`container grid ${styles.profileGrid}`}>
            <div className={styles.intro}>
              <Link href={r.team} className={`link-arrow link-arrow--plain ${styles.back}`}>
                <ArrowIcon className={`link-arrow__icon ${styles.backIcon}`} />
                <span>{t.team.back}</span>
              </Link>
              <div className={styles.heading}>
                {/* Dizin: ekipteki sıra (gerçek veri) + ince altın çizgi + ana unvan */}
                <p className={`${styles.mask} ${styles.eyebrow}`}>
                  <span className={styles.rise}>
                    <span className={styles.index} aria-hidden="true">
                      {pad(index + 1)}
                      <span> / {pad(teamMembers.length)}</span>
                    </span>
                    <span className={styles.rule} aria-hidden="true" />
                    <span className="label">{mainTitle}</span>
                  </span>
                </p>
                <h1 className={`${styles.mask} ${styles.name}`} id="member-name">
                  <span className={styles.rise}>{member.name}</span>
                </h1>
                {otherTitles.length > 0 && (
                  <ul className={`${styles.mask} ${styles.otherTitles}`}>
                    {otherTitles.map((title) => (
                      <li key={title} className={styles.rise}>
                        {title}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div className={styles.portraitTrack}>
              <figure className={styles.portrait}>
                <div className={styles.portraitImage}>
                  <Image
                    src={member.image}
                    alt={t.team.portraitAlt.replace('{name}', member.name)}
                    fill
                    preload
                    sizes="(min-width: 1100px) 30vw, (min-width: 768px) 40vw, 80vw"
                    className={styles.img}
                  />
                </div>
                <figcaption className={styles.caption}>
                  {member.name} <span>— {mainTitle}</span>
                </figcaption>
              </figure>
            </div>

            <div className={styles.text}>
              <h2 className={`label ${styles.sectionLabel}`}>{t.team.about}</h2>
              <p className={styles.lede}>{lede}</p>
              {rest && <p className={styles.bio}>{rest}</p>}

              {member.focus && (
                <>
                  <h2 className={`label ${styles.sectionLabel}`}>{t.team.focus}</h2>
                  <ol className={styles.focus}>
                    {member.focus.map((item, i) => (
                      <li key={item}>
                        <span className={styles.focusNum} aria-hidden="true">
                          {pad(i + 1)}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ol>
                </>
              )}

              <h2 className={`label ${styles.sectionLabel}`}>{t.team.contact}</h2>
              <dl className={styles.contact}>
                <div>
                  <dt>{t.team.email}</dt>
                  <dd>{member.email ? <a href={`mailto:${member.email}`}>{member.email}</a> : placeholder}</dd>
                </div>
                {member.linkedin && (
                  <div>
                    <dt>LinkedIn</dt>
                    <dd>
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        {member.linkedin.replace(/^https?:\/\/(www\.)?/, '')}
                      </a>
                    </dd>
                  </div>
                )}
              </dl>

              {/* Eylemler: dolu birincil buton + çerçeveli ikincil; ikisi de 56px, net basılma hissi */}
              <div className={styles.actions}>
                <a className={styles.primary} href={r.contact}>
                  <span>{t.team.cta}</span>
                  <ArrowIcon className={`link-arrow__icon ${styles.actionIcon}`} />
                </a>
                {member.email && (
                  <a className={styles.secondary} href={`mailto:${member.email}`}>
                    {t.team.emailCta}
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="container">
            <NextMember href={r.member(next.slug)} label={t.team.next} name={next.name} image={next.image} />
          </div>
        </section>
      </main>
      <Footer t={t} />
    </>
  );
}
