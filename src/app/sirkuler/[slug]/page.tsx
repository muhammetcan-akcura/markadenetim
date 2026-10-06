import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowIcon } from '@/components/ArrowIcon';
import { DocHeader } from '@/components/DocHeader';
import { Footer } from '@/components/Footer';
import { ProseBlocks } from '@/components/ProseBlocks';
import { SiteHeader } from '@/components/SiteHeader';
import { circulars, getCircular } from '@/content/circulars';
import type { ArticleBlock } from '@/content/insights';
import { teamMembers } from '@/content/team';
import { tr } from '@/content/tr';
import { siteUrl } from '@/lib/site';
import { breadcrumbJsonLd, jsonLdString, pageMetadata, trDateToIso } from '@/lib/seo';
import styles from '@/components/Doc.module.css';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return circulars.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const c = getCircular(slug);
  if (!c) return {};
  return pageMetadata({
    title: `Sirküler ${c.no}: ${c.title}`,
    description: c.summary,
    path: `/sirkuler/${c.slug}`,
    type: 'article',
    publishedTime: trDateToIso(c.date),
    // Örnekler arama motoruna girmez
    noindex: c.sample,
  });
}

/*
  Tek sirküler: künyede numara, tarih ve konu; gövde okuma kolonunda; sonunda imza bloğu.
  İmza, sirküleri yayımlayan meslek mensubunun profiline bağlanır (kişisel sorumluluk vurgusu).
*/
export default async function CircularPage({ params }: Params) {
  const t = tr;
  const p = t.circularsPage;
  const { slug } = await params;
  const c = getCircular(slug);
  if (!c) notFound();

  const signer = teamMembers.find((m) => m.slug === c.signedBy);
  const headings = c.body.filter((b): b is Extract<ArticleBlock, { type: 'h2' }> => b.type === 'h2');
  const published = trDateToIso(c.date);

  const jsonLd = {
    '@graph': [
      {
        '@type': 'Article',
        headline: c.title,
        description: c.summary,
        inLanguage: 'tr',
        articleSection: c.topic,
        ...(published ? { datePublished: published } : {}),
        mainEntityOfPage: `${siteUrl}/sirkuler/${c.slug}`,
        ...(signer ? { author: { '@type': 'Person', name: signer.name, jobTitle: signer.titles[0] } } : {}),
        publisher: { '@id': `${siteUrl}/#organization` },
      },
      breadcrumbJsonLd([
        { name: 'Ana sayfa', path: '/' },
        { name: p.title, path: '/sirkuler' },
        { name: c.title, path: `/sirkuler/${c.slug}` },
      ]),
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(jsonLd) }} />
      <SiteHeader t={t} />
      <main id="main" className={styles.main}>
        <article aria-labelledby="doc-title">
          {/* Künye paneli bandın sağında: numara, tarih, konu ve yayımlayan (resmî yazı anteti gibi) */}
          <DocHeader
            back={{ href: '/sirkuler', label: p.back }}
            kicker={p.kicker}
            title={c.title}
            side={
              <div className={styles.plaque}>
                <p className={`label ${styles.plaqueLabel}`}>{p.title}</p>
                <p className={styles.plaqueNo}>{c.no}</p>
                <dl>
                  <div>
                    <dt>{p.date}</dt>
                    <dd>{published ? <time dateTime={published}>{c.date}</time> : c.date}</dd>
                  </div>
                  <div>
                    <dt>{p.topic}</dt>
                    <dd>{c.topic}</dd>
                  </div>
                  {signer && (
                    <div>
                      <dt>{p.publisher}</dt>
                      <dd>
                        {signer.name}
                        <span className={styles.plaqueSub}>{signer.titles[0]}</span>
                      </dd>
                    </div>
                  )}
                </dl>
              </div>
            }
          >
            {c.sample && <p className={`label ${styles.notice}`}>{p.sample}</p>}
          </DocHeader>

          <div className={`container grid ${styles.bodyGrid}`}>
            <aside className={styles.aside}>
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
              <ProseBlocks blocks={c.body} />

              {signer && (
                <div className={styles.signature}>
                  <p className={`label ${styles.signatureLabel}`}>{p.signature}</p>
                  <p className={styles.signatureName}>{signer.name}</p>
                  <p className={styles.signatureTitles}>{signer.titles.join(' · ')}</p>
                  <Link href={`/ekip/${signer.slug}`} className={`link-arrow link-arrow--plain ${styles.signatureLink}`}>
                    <span>{p.profile}</span>
                    <ArrowIcon />
                  </Link>
                </div>
              )}

              <footer className={styles.closing}>
                <p className={styles.disclaimer}>{p.disclaimer}</p>
                <Link className="link-arrow" href={t.cta.href}>
                  <span>{p.cta}</span>
                  <ArrowIcon />
                </Link>
              </footer>
            </div>
          </div>
        </article>
      </main>
      <Footer t={t} />
    </>
  );
}
