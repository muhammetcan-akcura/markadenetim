import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowIcon } from '@/components/ArrowIcon';
import { DocHeader } from '@/components/DocHeader';
import { EndMark } from '@/components/EndMark';
import { Footer } from '@/components/Footer';
import { PrintMasthead, PrintSource } from '@/components/Print';
import { ProseBlocks } from '@/components/ProseBlocks';
import { SiteHeader } from '@/components/SiteHeader';
import { blocksMinutes, type ArticleBlock } from '@/content/insights';
import type { Dictionary } from '@/content/tr';
import { getContent } from '@/lib/content';
import { routes } from '@/lib/routes';
import { legalName, siteUrl } from '@/lib/site';
import { breadcrumbJsonLd, jsonLdString, pageMetadata } from '@/lib/seo';
import styles from '@/components/Doc.module.css';

export function guideStaticParams(t: Dictionary) {
  return getContent(t.locale).guides.map((g) => ({ slug: g.slug }));
}

export function guideMetadata(t: Dictionary, slug: string): Metadata {
  const g = getContent(t.locale).getGuide(slug);
  if (!g) return {};
  return pageMetadata({ title: g.title, description: g.summary, path: routes[t.locale].guide(g.slug), type: 'article' });
}

/*
  Tek rehber: künyede okuma süresi ve ilgili hizmet, altında içindekiler; gövde okuma kolonunda.
  Sonunda genel bilgilendirme notu ve görüşme daveti (rehber danışmanlık yerine geçmez).
*/
export function GuideView({ t, slug }: { t: Dictionary; slug: string }) {
  const r = routes[t.locale];
  const { getGuide, getService } = getContent(t.locale);
  const p = t.guidesPage;
  const g = getGuide(slug);
  if (!g) notFound();

  const service = getService(g.service);
  const headings = g.body.filter((b): b is Extract<ArticleBlock, { type: 'h2' }> => b.type === 'h2');

  const jsonLd = {
    '@graph': [
      {
        '@type': 'Article',
        headline: g.title,
        description: g.summary,
        inLanguage: t.locale,
        mainEntityOfPage: `${siteUrl}${r.guide(g.slug)}`,
        author: { '@type': 'Organization', name: legalName, url: `${siteUrl}${r.home}` },
        publisher: { '@id': `${siteUrl}/#organization` },
      },
      breadcrumbJsonLd([
        { name: t.a11y.breadcrumbHome, path: r.home },
        { name: p.title, path: r.guides },
        { name: g.title, path: r.guide(g.slug) },
      ]),
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(jsonLd) }} />
      <SiteHeader t={t} />
      <main id="main" className={styles.main} data-print="doc">
        <article aria-labelledby="doc-title">
          <PrintMasthead />
          <DocHeader
            back={{ href: r.guides, label: p.back }}
            kicker={`${p.title} · ${g.num}`}
            title={g.title}
            lead={g.summary}
            side={
              <div className={styles.sideMedia}>
                <Image src={g.image} alt="" fill preload sizes="(min-width: 1100px) 38vw, 100vw" />
              </div>
            }
          />

          <div className={`container grid ${styles.bodyGrid}`}>
            <aside className={styles.aside}>
              <dl className={styles.facts}>
                <div>
                  <dt className="sr-only">{t.insights.article.readingLabel}</dt>
                  <dd>
                    {blocksMinutes(g.body)} {t.insights.minutes}
                  </dd>
                </div>
                {service && (
                  <div>
                    <dt className="label">{p.service}</dt>
                    <dd>
                      <Link href={r.service(service.slug)}>{service.title}</Link>
                    </dd>
                  </div>
                )}
              </dl>
              {headings.length > 1 && (
                <nav className={styles.toc} aria-labelledby="toc-title">
                  <p className={`label ${styles.tocTitle}`} id="toc-title">
                    {p.contents}
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
              <ProseBlocks blocks={g.body} />
              <EndMark />
              <footer className={styles.closing}>
                <p className={styles.disclaimer}>{p.disclaimer}</p>
                <Link className="link-arrow" href={t.cta.href}>
                  <span>{p.cta}</span>
                  <ArrowIcon />
                </Link>
              </footer>
              <PrintSource t={t} path={r.guide(g.slug)} />
            </div>
          </div>
        </article>
      </main>
      <Footer t={t} />
    </>
  );
}
