import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArticleIndex } from '@/components/ArticleIndex';
import { Footer } from '@/components/Footer';
import { SiteHeader } from '@/components/SiteHeader';
import { readingMinutes } from '@/content/insights';
import type { Dictionary } from '@/content/tr';
import { getContent } from '@/lib/content';
import { routes } from '@/lib/routes';
import { siteUrl } from '@/lib/site';
import { breadcrumbJsonLd, jsonLdString, pageMetadata } from '@/lib/seo';
import styles from '@/app/guncel/Guncel.module.css';

export function insightsIndexMetadata(t: Dictionary): Metadata {
  return pageMetadata({ title: t.insights.page.metaTitle, description: t.insights.page.intro, path: routes[t.locale].insights });
}

/*
  Yazı listesi. Blog ızgarası yok: koyu bant üstünde dev başlık, banttan açık zemine taşan
  tek manşet, altında çizgili fihrist. Profil sayfalarındaki koyu/açık geçişle aynı dil.
*/
export function InsightsIndexView({ t }: { t: Dictionary }) {
  const r = routes[t.locale];
  const articles = getContent(t.locale).articles;
  // Yazı listesi: arama motoruna sayfanın bir yazı koleksiyonu olduğunu söyler
  const jsonLd = {
  '@graph': [
    {
      '@type': 'CollectionPage',
      name: t.insights.page.metaTitle,
      description: t.insights.page.intro,
      url: `${siteUrl}${r.insights}`,
      inLanguage: t.locale,
      isPartOf: { '@id': `${siteUrl}/#website` },
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: articles.map((a, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          url: `${siteUrl}${r.article(a.slug)}`,
          name: a.title,
        })),
      },
    },
    breadcrumbJsonLd([
      { name: t.a11y.breadcrumbHome, path: r.home },
      { name: t.insights.page.title, path: r.insights },
    ]),
  ],
  };

  const [featured, ...rest] = articles;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(jsonLd) }} />
      <SiteHeader t={t} />
      <main id="main">
        <header className={styles.intro}>
          <div className={`container grid ${styles.introGrid}`}>
            <h1 className={`t-display ${styles.title}`}>{t.insights.page.title}</h1>
            <div className={styles.lede}>
              <p>{t.insights.page.intro}</p>
              {t.insights.sample ? <p className={`label ${styles.sample}`}>{t.insights.sample}</p> : null}
            </div>
          </div>
        </header>

        <section className={styles.featured} aria-labelledby="featured-title">
          <div className={`container grid ${styles.featuredGrid}`}>
            <div className={styles.media}>
              <div className={styles.mediaInner}>
                <Image
                  src={featured.image}
                  alt=""
                  fill
                  preload
                  sizes="(min-width: 1100px) 55vw, 100vw"
                  quality={70}
                />
              </div>
            </div>
            <div className={styles.featuredText}>
              <p className={`label ${styles.kicker}`}>
                {t.insights.page.featured} · {featured.category}
              </p>
              <h2 className={styles.featuredTitle} id="featured-title">
                <Link href={r.article(featured.slug)} className={styles.link}>
                  {featured.title}
                </Link>
              </h2>
              <p className={styles.excerpt}>{featured.excerpt}</p>
              <p className={styles.meta}>
                <span>{featured.date}</span>
                <span>
                  {readingMinutes(featured)} {t.insights.minutes}
                </span>
              </p>
            </div>
          </div>
        </section>

        <section className={styles.index} aria-labelledby="index-title">
          <div className="container">
            <h2 className={`label ${styles.indexTitle}`} id="index-title">
              {t.insights.page.index}
            </h2>
            <ArticleIndex t={t} items={rest} />
          </div>
        </section>
      </main>
      <Footer t={t} />
    </>
  );
}
