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
import { siteUrl } from '@/lib/site';
import { breadcrumbJsonLd, jsonLdString, pageMetadata } from '@/lib/seo';
import styles from '@/app/hakkimizda/baskanin-mesaji/Chairman.module.css';

export function chairmanMetadata(t: Dictionary): Metadata {
  return pageMetadata({
    title: t.chairman.metaTitle,
    description: t.chairman.metaDescription,
    path: routes[t.locale].chairman,
    // [BİLGİ GİRİLECEK] Mesaj onaylanana kadar arama motoruna girmez
    noindex: true,
  });
}

/*
  Başkanın mesajı. Kişiyi onurlandıran ama iddia içermeyen bir sayfa:
  1. Giriş (koyu): yalnızca tipografi; dev serif alıntı ve imza satırı.
  2. Mektup (açık): solda künye fotoğrafı ölçüsünde portre ve unvanlar (kaynak görsel küçük:
     büyütülmez), sağda mesaj; sonunda serif imza.
  3. Meslekteki yolu (en koyu): üç durak yan yana, ince dikey çizgilerle; altında uzmanlık alanları.
  4. Kapanış (açık): profil, imzalı sirküler ve görüşme bağlantıları.
*/
export function ChairmanView({ t }: { t: Dictionary }) {
  const r = routes[t.locale];
  const c = t.chairman;
  const person = getContent(t.locale).getMember('fatih-olgun');
  if (!person) notFound();

  const jsonLd = {
    '@graph': [
      {
        '@type': 'ProfilePage',
        url: `${siteUrl}${r.chairman}`,
        name: c.metaTitle,
        inLanguage: t.locale,
        mainEntity: {
          '@type': 'Person',
          name: person.name,
          jobTitle: person.titles.join(', '),
          worksFor: { '@id': `${siteUrl}/#organization` },
          image: `${siteUrl}${person.image}`,
        },
      },
      breadcrumbJsonLd([
        { name: t.a11y.breadcrumbHome, path: r.home },
        { name: t.about.hero.kicker, path: r.about },
        { name: c.kicker, path: r.chairman },
      ]),
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(jsonLd) }} />
      <SiteHeader t={t} />
      <main id="main" className={styles.main}>
        {/* 1 — Alıntı */}
        <section className={styles.hero} aria-labelledby="chairman-title">
          <div className={`container ${styles.heroInner}`}>
            <p className={`label ${styles.kicker}`}>{c.kicker}</p>
            <h1 className={styles.quote} id="chairman-title">
              {c.quote}
            </h1>
            <p className={styles.byline}>
              <span className={styles.bylineName}>{person.name}</span>
              <span>{person.titles[1] ?? person.titles[0]}</span>
            </p>
            <p className={`label ${styles.draft}`}>{c.draft}</p>
          </div>
        </section>

        {/* 2 — Mektup */}
        <section className={styles.letter} aria-label={c.kicker}>
          <div className={`container grid ${styles.letterGrid}`}>
            <figure className={styles.card}>
              <div className={styles.portrait}>
                <Image src={person.image} alt={`${person.name} portresi`} fill sizes="240px" />
              </div>
              <figcaption>
                <span className={styles.cardName}>{person.name}</span>
                {person.titles.map((title) => (
                  <span key={title} className={styles.cardTitle}>
                    {title}
                  </span>
                ))}
              </figcaption>
            </figure>

            <div className={styles.message}>
              {c.message.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {/* İmza + kaşe: YMM'nin tasdik eylemi; mektup bir rapor gibi imzalanıp kaşelenir */}
              <div className={styles.signBlock}>
                <p className={styles.sign}>
                  <span className={styles.signName}>{person.name}</span>
                  <span className={styles.signTitle}>{person.titles.slice(0, 2).join(' · ')}</span>
                </p>
                <Image
                  src="/brand/markadenetim-monogram-kucuk-acik-zemin.svg"
                  alt=""
                  width={69}
                  height={56}
                  className={styles.signSeal}
                />
              </div>
            </div>
          </div>
        </section>

        {/* 3 — Meslekteki yolu */}
        <section className={styles.path} aria-labelledby="path-title">
          <div className="container">
            <h2 className={`label ${styles.pathLabel}`} id="path-title">
              {c.pathLabel}
            </h2>
            <ol className={styles.steps}>
              {c.path.map((step, i) => (
                <li key={step.title}>
                  <span className={styles.stepNum} aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className={styles.stepYear}>{step.year}</span>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepText}>{step.text}</p>
                </li>
              ))}
            </ol>

            {person.focus && (
              <div className={styles.focus}>
                <h2 className={`label ${styles.pathLabel}`}>{c.focusLabel}</h2>
                <ul>
                  {person.focus.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>

        {/* 4 — Kapanış */}
        <nav className={styles.closing} aria-label={c.kicker}>
          <div className={`container ${styles.closingInner}`}>
            <Link href={r.member(person.slug)} className="link-arrow">
              <span>{c.profile}</span>
              <ArrowIcon />
            </Link>
            {/* Sirküler yalnızca Türkçede var */}
            {r.circulars && (
              <Link href={r.circulars} className="link-arrow">
                <span>{c.circulars}</span>
                <ArrowIcon />
              </Link>
            )}
            <Link href={t.cta.href} className="link-arrow">
              <span>{t.cta.label}</span>
              <ArrowIcon />
            </Link>
          </div>
        </nav>
      </main>
      <Footer t={t} />
    </>
  );
}
