import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowIcon } from '@/components/ArrowIcon';
import { ArticleIndex } from '@/components/ArticleIndex';
import { Footer } from '@/components/Footer';
import { SiteHeader } from '@/components/SiteHeader';
import { articles, getArticle, readingMinutes, type ArticleBlock } from '@/content/insights';
import { tr } from '@/content/tr';
import { brandName, legalName, siteUrl } from '@/lib/site';
import styles from './Article.module.css';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: `${article.title} | ${brandName}`,
    description: article.excerpt,
    alternates: { canonical: `/guncel/${article.slug}` },
    openGraph: {
      type: 'article',
      locale: 'tr_TR',
      siteName: brandName,
      title: article.title,
      description: article.excerpt,
      url: `/guncel/${article.slug}`,
      images: [{ url: article.image }],
    },
  };
}

function Block({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case 'h2':
      return <h2 id={block.id}>{block.text}</h2>;
    case 'list':
      return (
        <ul>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case 'quote':
      return (
        <blockquote>
          <p>{block.text}</p>
        </blockquote>
      );
    default:
      return <p>{block.text}</p>;
  }
}

/*
  Yazı sayfası. Koyu bantta başlık ve özet; görsel banttan açık zemine taşar. Gövde asimetrik:
  solda yapışkan künye + içindekiler, sağda 62ch okuma kolonu. Süs yok; okuma rahatlığı önce.
*/
export default async function ArticlePage({ params }: Params) {
  const t = tr;
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const minutes = `${readingMinutes(article)} ${t.insights.minutes}`;
  const headings = article.body.filter((b): b is Extract<ArticleBlock, { type: 'h2' }> => b.type === 'h2');
  const others = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  // [BİLGİ GİRİLECEK] Gerçek tarih girilince datePublished eklenecek
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.excerpt,
    image: `${siteUrl}${article.image}`,
    inLanguage: 'tr',
    mainEntityOfPage: `${siteUrl}/guncel/${article.slug}`,
    author: { '@type': 'Organization', name: legalName, url: `${siteUrl}/` },
    publisher: { '@id': `${siteUrl}/#organization` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <a className="skip-link" href="#main">
        {t.a11y.skip}
      </a>
      <SiteHeader t={t} />
      <main id="main" className={styles.main}>
        <article aria-labelledby="article-title">
          <header className={styles.intro}>
            <div className={`container grid ${styles.introGrid}`}>
              <Link href="/guncel" className={`link-arrow ${styles.back}`}>
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
                  <dt className="sr-only">Tarih</dt>
                  <dd>{article.date}</dd>
                </div>
                <div>
                  <dt className="sr-only">Okuma süresi</dt>
                  <dd>{minutes}</dd>
                </div>
                {t.insights.sample ? (
                  <div>
                    <dt className="sr-only">Durum</dt>
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
              {article.body.map((block, i) => (
                <Block key={i} block={block} />
              ))}

              <footer className={styles.closing}>
                <p className={styles.disclaimer}>{t.insights.article.disclaimer}</p>
                <Link className="link-arrow" href={t.insights.article.cta.href}>
                  <span>{t.insights.article.cta.label}</span>
                  <ArrowIcon />
                </Link>
              </footer>
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
