import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowIcon } from '@/components/ArrowIcon';
import { Footer } from '@/components/Footer';
import { SiteHeader } from '@/components/SiteHeader';
import { teamMembers } from '@/content/team';
import { tr } from '@/content/tr';
import { placeholder } from '@/lib/site';
import styles from './Member.module.css';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return teamMembers.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const member = teamMembers.find((m) => m.slug === slug);
  if (!member) return {};
  return {
    title: `${member.name} | MarkaDenetim`,
    description: `${member.name}, ${member.titles.join(', ')}. MarkaDenetim Yeminli Mali Müşavirlik ve Denetim A.Ş.`,
    alternates: { canonical: `/ekip/${member.slug}` },
  };
}

/*
  Uzman profili. Üst bant koyu (sabit header açık metinlidir), portre koyu banttan açık
  gövdeye taşar: ana sayfadaki koyu/açık ritmin tek sayfadaki karşılığı. Kart, gölge, ikon yok.
*/
export default async function MemberPage({ params }: Params) {
  const t = tr;
  const { slug } = await params;
  const index = teamMembers.findIndex((m) => m.slug === slug);
  if (index === -1) notFound();
  const member = teamMembers[index];
  const next = teamMembers[(index + 1) % teamMembers.length];
  const [mainTitle, ...otherTitles] = member.titles;

  return (
    <>
      <a className="skip-link" href="#main">
        {t.a11y.skip}
      </a>
      <SiteHeader t={t} />
      <main id="main">
        <section className={styles.intro} aria-labelledby="member-name">
          <div className={`container grid ${styles.introGrid}`}>
            <Link href="/#ekip" className={`link-arrow ${styles.back}`}>
              <ArrowIcon className={`link-arrow__icon ${styles.backIcon}`} />
              <span>{t.team.back}</span>
            </Link>
            <div className={styles.heading}>
              <p className={`label ${styles.mainTitle}`}>{mainTitle}</p>
              <h1 className={styles.name} id="member-name">
                {member.name}
              </h1>
              {otherTitles.length > 0 && (
                <ul className={styles.otherTitles}>
                  {otherTitles.map((title) => (
                    <li key={title}>{title}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>

        <section className={styles.body} aria-label={t.team.about}>
          <div className={`container grid ${styles.bodyGrid}`}>
            <figure className={styles.portrait}>
              <Image
                src={member.image}
                alt={`${member.name} portresi`}
                fill
                preload
                sizes="(min-width: 1100px) 30vw, (min-width: 768px) 40vw, 80vw"
                className={styles.img}
              />
            </figure>

            <div className={styles.text}>
              <h2 className={`label ${styles.sectionLabel}`}>{t.team.about}</h2>
              <p className={styles.bio}>{member.biography}</p>

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

              <a className="link-arrow" href="/#iletisim">
                <span>{t.team.cta}</span>
                <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="container">
            <Link href={`/ekip/${next.slug}`} className={styles.next}>
              <span className="label">{t.team.next}</span>
              <span className={styles.nextName}>{next.name}</span>
              <ArrowIcon className={`link-arrow__icon ${styles.nextIcon}`} />
            </Link>
          </div>
        </section>
      </main>
      <Footer t={t} />
    </>
  );
}
