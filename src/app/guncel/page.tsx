import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArticleIndex } from '@/components/ArticleIndex';
import { Footer } from '@/components/Footer';
import { SiteHeader } from '@/components/SiteHeader';
import { articles, readingMinutes } from '@/content/insights';
import { tr } from '@/content/tr';
import styles from './Guncel.module.css';

export const metadata: Metadata = {
  title: tr.insights.page.metaTitle,
  description: tr.insights.page.intro,
  alternates: { canonical: '/guncel' },
};

/*
  Yazı listesi. Blog ızgarası yok: koyu bant üstünde dev başlık, banttan açık zemine taşan
  tek manşet, altında çizgili fihrist. Profil sayfalarındaki koyu/açık geçişle aynı dil.
*/
export default function InsightsPage() {
  const t = tr;
  const [featured, ...rest] = articles;

  return (
    <>
      <a className="skip-link" href="#main">
        {t.a11y.skip}
      </a>
      <SiteHeader t={t} />
      <main id="main">
        <header className={styles.intro}>
          <div className={`container grid ${styles.introGrid}`}>
            <h1 className={`t-display ${styles.title}`}>{t.insights.page.title}</h1>
            <div className={styles.lede}>
              <p>{t.insights.page.intro}</p>
              <p className={`label ${styles.sample}`}>{t.insights.sample}</p>
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
                <Link href={`/guncel/${featured.slug}`} className={styles.link}>
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
