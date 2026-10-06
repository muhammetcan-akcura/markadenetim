import type { Metadata } from 'next';
import Link from 'next/link';
import { DocHeader } from '@/components/DocHeader';
import { DocList } from '@/components/DocList';
import { Footer } from '@/components/Footer';
import { SiteHeader } from '@/components/SiteHeader';
import type { Dictionary } from '@/content/tr';
import { getContent } from '@/lib/content';
import { routes } from '@/lib/routes';
import { siteUrl } from '@/lib/site';
import { breadcrumbJsonLd, jsonLdString, pageMetadata } from '@/lib/seo';
import styles from '@/components/Doc.module.css';

export function sectorsIndexMetadata(t: Dictionary): Metadata {
  return pageMetadata({ title: t.sectorsPage.metaTitle, description: t.sectorsPage.intro, path: routes[t.locale].sectors });
}

/*
  Sektörler. Belge sayfalarının mimarisini paylaşır (koyu bant + kartlar), ek olarak bir
  "sektör × hizmet" matrisi: denetim raporu disiplininde tek tablo, satırlar sektör, sütunlar hizmet.
  İşaret = ilgili hizmet (altın kare; ikon değil). Hücreler ilgili hizmet sayfasına bağlanır.
  Dar ekranda tablo yatay kayar, sektör sütunu yapışkan kalır.
*/
export function SectorsIndexView({ t }: { t: Dictionary }) {
  const p = t.sectorsPage;
  const r = routes[t.locale];
  const { sectors, services } = getContent(t.locale);
  const m = p.matrix;

  const jsonLd = {
    '@graph': [
      {
        '@type': 'CollectionPage',
        url: `${siteUrl}${r.sectors}`,
        name: p.metaTitle,
        description: p.intro,
        inLanguage: t.locale,
        isPartOf: { '@id': `${siteUrl}/#website` },
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: sectors.map((s, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            url: `${siteUrl}${r.sector(s.slug)}`,
            name: s.title,
          })),
        },
      },
      breadcrumbJsonLd([
        { name: t.a11y.breadcrumbHome, path: r.home },
        { name: p.title, path: r.sectors },
      ]),
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(jsonLd) }} />
      <SiteHeader t={t} />
      <main id="main" className={styles.main} aria-labelledby="doc-title">
        <DocHeader kicker={p.kicker} title={p.title} lead={p.intro} />

        <div className={`container ${styles.listSection}`}>
          <DocList
            readLabel={p.read}
            items={sectors.map((s) => ({
              href: r.sector(s.slug),
              num: `${p.num} ${s.num}`,
              aside: `${s.services.length} ${p.servicesCount}`,
              title: s.title,
              text: s.summary,
              image: s.image,
            }))}
          />
        </div>

        {/* Sektör × hizmet matrisi */}
        <section className={styles.matrix} aria-labelledby="matrix-title">
          <div className="container">
            <div className={styles.matrixHead}>
              <p className={`label ${styles.matrixLabel}`}>{m.label}</p>
              <h2 className={styles.matrixTitle} id="matrix-title">
                {m.title}
              </h2>
              <p className={styles.matrixText}>{m.text}</p>
            </div>
            <p className={styles.scrollHint}>{m.scrollHint}</p>
            {/* Kaydırılabilir bölge klavyeyle de odaklanabilir (tabIndex) */}
            <div className={styles.tableWrap} role="region" aria-labelledby="matrix-title" tabIndex={0}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th scope="col">{m.sector}</th>
                    {services.map((sv) => (
                      <th scope="col" key={sv.slug}>
                        <Link href={r.service(sv.slug)}>{sv.short}</Link>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sectors.map((s) => (
                    <tr key={s.slug}>
                      <th scope="row">
                        <Link href={r.sector(s.slug)}>
                          <span className={styles.rowNumSmall} aria-hidden="true">
                            {s.num}
                          </span>
                          {s.title}
                        </Link>
                      </th>
                      {services.map((sv) => (
                        <td key={sv.slug}>
                          {s.services.includes(sv.slug) ? (
                            <Link href={r.service(sv.slug)} className={styles.mark}>
                              <span className="sr-only">
                                {m.related}: {sv.title}
                              </span>
                            </Link>
                          ) : (
                            <span className={styles.noMark} aria-hidden="true" />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
      <Footer t={t} />
    </>
  );
}
