import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowIcon } from '@/components/ArrowIcon';
import { ArticleIndex } from '@/components/ArticleIndex';
import { EndMark } from '@/components/EndMark';
import { Footer } from '@/components/Footer';
import { PrintMasthead, PrintSource } from '@/components/Print';
import { ProseBlocks } from '@/components/ProseBlocks';
import { SiteHeader } from '@/components/SiteHeader';
import { readingMinutes, type ArticleBlock } from '@/content/insights';
import type { Dictionary } from '@/content/tr';
import { getContent } from '@/lib/content';
import { routes } from '@/lib/routes';
import { legalName, siteUrl } from '@/lib/site';
import { breadcrumbJsonLd, jsonLdString, pageMetadata, trDateToIso } from '@/lib/seo';
import styles from '@/app/guncel/[slug]/Article.module.css';

export function articleStaticParams(t: Dictionary) {
  return getContent(t.locale).articles.map((a) => ({ slug: a.slug }));
}

export function articleMetadata(t: Dictionary, slug: string): Metadata {
  const article = getContent(t.locale).getArticle(slug);
  if (!article) return {};
  return pageMetadata({
    title: article.title,
    description: article.excerpt,
    path: routes[t.locale].article(article.slug),
    image: article.image,
    type: 'article',
    publishedTime: trDateToIso(article.date),
  });
}

/*
  Yazı sayfası. Koyu bantta başlık ve özet; görsel banttan açık zemine taşar. Gövde asimetrik:
  solda yapışkan künye + içindekiler, sağda 62ch okuma kolonu. Süs yok; okuma rahatlığı önce.
*/
export function ArticleView({ t, slug }: { t: Dictionary; slug: string }) {
  const r = routes[t.locale];
  const { articles, getArticle } = getContent(t.locale);
  const article = getArticle(slug);
  if (!article) notFound();

  const minutes = `${readingMinutes(article)} ${t.insights.minutes}`;
  const headings = article.body.filter((b): b is Extract<ArticleBlock, { type: 'h2' }> => b.type === 'h2');
  const others = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  // Tarih metinden çevrilir; biçim tanınmazsa datePublished hiç yazılmaz
  const published = trDateToIso(article.date);
  const jsonLd = {
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline: article.title,
        description: article.excerpt,
        image: `${siteUrl}${article.image}`,
        inLanguage: t.locale,
        articleSection: article.category,
        ...(published ? { datePublished: published, dateModified: published } : {}),
        mainEntityOfPage: `${siteUrl}${r.article(article.slug)}`,
        author: { '@type': 'Organization', name: legalName, url: `${siteUrl}${r.home}` },
        publisher: { '@id': `${siteUrl}/#organization` },
      },
      breadcrumbJsonLd([
        { name: t.a11y.breadcrumbHome, path: r.home },
        { name: t.insights.page.title, path: r.insights },
        { name: article.title, path: r.article(article.slug) },
      ]),
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(jsonLd) }} />
      <SiteHeader t={t} />
      <main id="main" className={styles.main} data-print="doc">
        <article aria-labelledby="article-title">
          <PrintMasthead />
          <header className={styles.intro}>
            <div className={`container grid ${styles.introGrid}`}>
              <Link href={r.insights} className={`link-arrow link-arrow--plain ${styles.back}`}>
                <ArrowIcon className={`link-arrow__icon ${styles.backIcon}`} />
                <span>{t.insights.article.back}</span>
              </Link>
              <div className={styles.heading}>
                <p className={`label ${styles.category}`}>{article.category}</p>
                <h1 className={styles.title} id="article-title">
                  {article.title}
                </h1>
                <p className={styles.excerpt}>{article.excerpt}</p>
              </div>
            </div>
          </header>

          <div className="container">
            <figure className={styles.media}>
              <Image
                src={article.image}
                alt=""
                fill
                preload
                sizes="(min-width: 1440px) 1280px, 100vw"
                quality={70}
              />
            </figure>
          </div>

          <div className={`container grid ${styles.bodyGrid}`}>
            <aside className={styles.aside}>
              <dl className={styles.facts}>
                <div>
                  <dt className="sr-only">{t.insights.article.dateLabel}</dt>
                  <dd>{published ? <time dateTime={published}>{article.date}</time> : article.date}</dd>
                </div>
                <div>
                  <dt className="sr-only">{t.insights.article.readingLabel}</dt>
                  <dd>{minutes}</dd>
                </div>
                {t.insights.sample ? (
                  <div>
                    <dt className="sr-only">{t.insights.article.statusLabel}</dt>
                    <dd>{t.insights.sample}</dd>
                  </div>
                ) : null}
              </dl>
              {headings.length > 1 && (
                <nav className={styles.toc} aria-labelledby="toc-title">
                  <p className={`label ${styles.tocTitle}`} id="toc-title">
                    {t.insights.article.contents}
                  </p>
                  <ol>
                    {headings.map((h) => (
                      <li key={h.id}>
                        <a href={`#${h.id}`}>{h.text}</a>
                      </li>
                    ))}
                  </ol>
                </nav>
              )}
            </aside>

            <div className={styles.prose}>
              <ProseBlocks blocks={article.body} />
              <EndMark />

              <footer className={styles.closing}>
                <p className={styles.disclaimer}>{t.insights.article.disclaimer}</p>
                <Link className="link-arrow" href={t.insights.article.cta.href}>
                  <span>{t.insights.article.cta.label}</span>
                  <ArrowIcon />
                </Link>
              </footer>
              <PrintSource t={t} path={r.article(article.slug)} />
            </div>
          </div>
        </article>

        <section className={styles.more} aria-labelledby="more-title">
          <div className="container">
            <h2 className={`label ${styles.moreTitle}`} id="more-title">
              {t.insights.article.more}
            </h2>
            <ArticleIndex t={t} items={others} />
          </div>
        </section>
      </main>
      <Footer t={t} />
    </>
  );
}
