import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowIcon } from '@/components/ArrowIcon';
import { DocHeader } from '@/components/DocHeader';
import { Footer } from '@/components/Footer';
import { SiteHeader } from '@/components/SiteHeader';
import type { Dictionary } from '@/content/tr';
import { getContent } from '@/lib/content';
import { routes } from '@/lib/routes';
import { siteUrl } from '@/lib/site';
import { breadcrumbJsonLd, jsonLdString, pageMetadata } from '@/lib/seo';
import docStyles from '@/components/Doc.module.css';
import styles from '@/app/sektorler/[slug]/Sector.module.css';

export function sectorStaticParams(t: Dictionary) {
  return getContent(t.locale).sectors.map((s) => ({ slug: s.slug }));
}

export function sectorMetadata(t: Dictionary, slug: string): Metadata {
  const s = getContent(t.locale).getSector(slug);
  if (!s) return {};
  return pageMetadata({ title: s.title, description: s.summary, path: routes[t.locale].sector(s.slug), image: s.image });
}

/*
  Tek sektör. Gövde düz yazı değil, ayrışan bölümler:
  1. Genel bakış: solda etiket, sağda büyük giriş paragrafı.
  2. Sektöre özgü konular: numaralı kartlar (2 sütun).
  3. Nasıl destek oluyoruz?: koyu panel; açıklama + ilgili hizmetler tıklanabilir kartlar.
  4. Kapanış notu ve CTA; altta diğer sektörler.
*/
export function SectorView({ t, slug }: { t: Dictionary; slug: string }) {
  const p = t.sectorsPage;
  const r = routes[t.locale];
  const { sectors, getSector, getService } = getContent(t.locale);
  const s = getSector(slug);
  if (!s) notFound();

  // Hizmet numarasına göre sıralı: kartlar 01, 02, 03… okunur
  const related = s.services
    .map(getService)
    .filter((sv) => sv !== undefined)
    .sort((a, b) => a.num.localeCompare(b.num));
  const others = sectors.filter((o) => o.slug !== s.slug);

  const jsonLd = {
    '@graph': [
      {
        '@type': 'WebPage',
        url: `${siteUrl}${r.sector(s.slug)}`,
        name: s.title,
        description: s.summary,
        inLanguage: t.locale,
        about: { '@id': `${siteUrl}/#organization` },
      },
      breadcrumbJsonLd([
        { name: t.a11y.breadcrumbHome, path: r.home },
        { name: p.title, path: r.sectors },
        { name: s.title, path: r.sector(s.slug) },
      ]),
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(jsonLd) }} />
      <SiteHeader t={t} />
      <main id="main" className={docStyles.main}>
        <article aria-labelledby="doc-title">
          <DocHeader
            back={{ href: r.sectors, label: p.back }}
            kicker={`${p.num} ${s.num}`}
            title={s.title}
            lead={s.summary}
            side={
              <div className={docStyles.sideMedia}>
                <Image src={s.image} alt="" fill preload sizes="(min-width: 1100px) 38vw, 100vw" />
              </div>
            }
          />

          {/* 1 — Genel bakış */}
          <section className={styles.overview} aria-labelledby="overview-title">
            <div className={`container grid ${styles.overviewGrid}`}>
              <h2 className={`label ${styles.label}`} id="overview-title">
                {p.overview}
              </h2>
              <p className={styles.intro}>{s.intro}</p>
            </div>
          </section>

          {/* 2 — Konular */}
          <section className={styles.topicsSection} aria-labelledby="topics-title">
            <div className="container">
              <h2 className={styles.sectionTitle} id="topics-title">
                {p.topics}
              </h2>
              <ol className={styles.topics}>
                {s.topics.map((topic, i) => (
                  <li key={topic} className={styles.topic}>
                    <span className={styles.topicNum} aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p>{topic}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* 3 — Destek paneli */}
          <section className={styles.support} aria-labelledby="support-title">
            <div className={`container grid ${styles.supportGrid}`}>
              <div className={styles.supportText}>
                <h2 className={styles.supportTitle} id="support-title">
                  {p.support}
                </h2>
                <p>{s.support}</p>
              </div>
              <div className={styles.services}>
                <p className={`label ${styles.servicesLabel}`}>{p.related}</p>
                <ul>
                  {related.map((sv) => (
                    <li key={sv.slug}>
                      <Link href={r.service(sv.slug)} className={styles.service}>
                        <span className={styles.serviceNum} aria-hidden="true">
                          {sv.num}
                        </span>
                        <span className={styles.serviceName}>{sv.title}</span>
                        <ArrowIcon className={`link-arrow__icon ${styles.serviceArrow}`} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* 4 — Kapanış ve diğer sektörler */}
          <section className={styles.closing} aria-labelledby="others-title">
            <div className={`container grid ${styles.closingGrid}`}>
              <div className={styles.cta}>
                <p className={styles.disclaimer}>{p.disclaimer}</p>
                <Link className="link-arrow" href={t.cta.href}>
                  <span>{p.cta}</span>
                  <ArrowIcon />
                </Link>
              </div>
              <nav className={styles.others} aria-labelledby="others-title">
                <h2 className={`label ${styles.label}`} id="others-title">
                  {p.others}
                </h2>
                <ul>
                  {others.map((o) => (
                    <li key={o.slug}>
                      <Link href={r.sector(o.slug)}>
                        <span className={styles.serviceNum} aria-hidden="true">
                          {o.num}
                        </span>
                        {o.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </section>
        </article>
      </main>
      <Footer t={t} />
    </>
  );
}
