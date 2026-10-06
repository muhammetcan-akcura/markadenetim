import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowIcon } from '@/components/ArrowIcon';
import { DocHeader } from '@/components/DocHeader';
import { Footer } from '@/components/Footer';
import { SiteHeader } from '@/components/SiteHeader';
import type { Dictionary } from '@/content/tr';
import { getContent } from '@/lib/content';
import { routes } from '@/lib/routes';
import { siteUrl } from '@/lib/site';
import { breadcrumbJsonLd, jsonLdString, pageMetadata } from '@/lib/seo';
import styles from '@/components/Doc.module.css';

export function qualityMetadata(t: Dictionary): Metadata {
  return pageMetadata({ title: t.quality.metaTitle, description: t.quality.metaDescription, path: routes[t.locale].quality });
}

/*
  Kalite, bağımsızlık ve şeffaflık. Mesleğin içinden birinin aradığı sayfa: ilkeler meslek
  standartlarına dayanır, firmaya özgü olgular (rapor yılları, kalite sistemi ayrıntısı) görünür
  yer tutucudur. Belge düzeni: solda içindekiler, sağda bölümler; sonda şeffaflık raporları ve
  yetki bilgileri (trust.credentials ile aynı kaynak).
*/
export function QualityView({ t }: { t: Dictionary }) {
  const r = routes[t.locale];
  const q = t.quality;
  const toc = [
    ...q.sections.map((s) => ({ id: s.id, title: s.title })),
    { id: q.reports.id, title: q.reports.title },
    { id: q.credentials.id, title: q.credentials.title },
  ];

  const jsonLd = {
    '@graph': [
      {
        '@type': 'WebPage',
        url: `${siteUrl}${r.quality}`,
        name: q.metaTitle,
        description: q.metaDescription,
        inLanguage: t.locale,
        about: { '@id': `${siteUrl}/#organization` },
      },
      breadcrumbJsonLd([
        { name: t.a11y.breadcrumbHome, path: r.home },
        { name: t.about.hero.kicker, path: r.about },
        { name: q.kicker, path: r.quality },
      ]),
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(jsonLd) }} />
      <SiteHeader t={t} />
      <main id="main" className={styles.main} aria-labelledby="doc-title">
        <DocHeader
          back={{ href: r.about, label: t.about.hero.kicker }}
          kicker={q.kicker}
          title={q.title}
          lead={q.lead}
        />

        <div className={`container grid ${styles.bodyGrid}`}>
          <aside className={styles.aside}>
            <nav className={styles.toc} aria-labelledby="toc-title">
              <p className={`label ${styles.tocTitle}`} id="toc-title">
                {q.contents}
              </p>
              <ol>
                {toc.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`}>{s.title}</a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <div className={styles.prose}>
            {q.sections.map((s) => (
              <section key={s.id} aria-labelledby={s.id}>
                <h2 id={s.id}>{s.title}</h2>
                <p>{s.text}</p>
                {'items' in s && s.items && (
                  <ul>
                    {s.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
                {'note' in s && s.note && <p className={styles.placeholder}>{s.note}</p>}
              </section>
            ))}

            <section aria-labelledby={q.reports.id}>
              <h2 id={q.reports.id}>{q.reports.title}</h2>
              <p>{q.reports.text}</p>
              <ul className={styles.reports}>
                {q.reports.items.map((r, i) => (
                  <li key={i}>
                    <span className={styles.reportYear}>{r.year}</span>
                    <span>{r.label}</span>
                    <span className={styles.placeholder}>{r.status}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby={q.credentials.id}>
              <h2 id={q.credentials.id}>{q.credentials.title}</h2>
              <dl className={styles.registry}>
                {t.trust.credentials.map((c) => (
                  <div key={c.label}>
                    <dt>{c.label}</dt>
                    <dd>{c.value}</dd>
                  </div>
                ))}
              </dl>
            </section>

            <footer className={styles.closing}>
              <Link className="link-arrow" href={t.cta.href}>
                <span>{q.cta}</span>
                <ArrowIcon />
              </Link>
            </footer>
          </div>
        </div>
      </main>
      <Footer t={t} />
    </>
  );
}
