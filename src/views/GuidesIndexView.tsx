import type { Metadata } from 'next';
import { DocHeader } from '@/components/DocHeader';
import { DocFinder, type FinderItem } from '@/components/DocFinder';
import { DocList } from '@/components/DocList';
import { Footer } from '@/components/Footer';
import { Pagination } from '@/components/Pagination';
import { SiteHeader } from '@/components/SiteHeader';
import type { Guide } from '@/content/guides';
import { blocksMinutes, blocksText } from '@/content/insights';
import type { Dictionary } from '@/content/tr';
import { getContent } from '@/lib/content';
import { routes } from '@/lib/routes';
import { pageHref, pageItems } from '@/lib/paginate';
import { siteUrl } from '@/lib/site';
import { breadcrumbJsonLd, jsonLdString, pageMetadata } from '@/lib/seo';
import styles from '@/components/Doc.module.css';


/** Sayfa başlığı: 1. sayfada yalın, sonrakilerde "— Sayfa n" eki */
export function guidesMetadata(t: Dictionary, page: number): Metadata {
  const p = t.guidesPage;
  const r = routes[t.locale];
  const suffix = page > 1 ? ` — ${t.pagination.titleSuffix} ${page}` : '';
  return pageMetadata({ title: `${p.metaTitle}${suffix}`, description: p.intro, path: pageHref(r.guides, page, r.pageSegment) });
}

const toItem = (g: Guide, prefix: string, minutes: string, href: string) => ({
  href,
  num: `${prefix} ${g.num}`,
  aside: `${blocksMinutes(g.body)} ${minutes}`,
  title: g.title,
  text: g.summary,
  image: g.image,
});

/* Rehber dizini (sayfalı): fotoğraflı kartlar; künyede numara ve okuma süresi. */
export function GuidesIndexView({ t, page }: { t: Dictionary; page: number }) {
  const r = routes[t.locale];
  const guides = getContent(t.locale).guides;
  const p = t.guidesPage;
  const items = pageItems(guides, page);
  const topics = [...new Set(guides.map((g) => g.topic))];
  const finderItems: FinderItem[] = guides.map((g) => ({
    ...toItem(g, p.num, t.insights.minutes, r.guide(g.slug)),
    topic: g.topic,
    search: `${g.title} ${g.summary} ${blocksText(g.body)}`,
  }));

  const jsonLd = {
    '@graph': [
      {
        '@type': 'CollectionPage',
        url: `${siteUrl}${pageHref(r.guides, page, r.pageSegment)}`,
        name: p.metaTitle,
        description: p.intro,
        inLanguage: t.locale,
        isPartOf: { '@id': `${siteUrl}/#website` },
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: items.map((g, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            url: `${siteUrl}${r.guide(g.slug)}`,
            name: g.title,
          })),
        },
      },
      breadcrumbJsonLd([
        { name: t.a11y.breadcrumbHome, path: r.home },
        { name: p.title, path: r.guides },
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
          {/* Filtre boşken sunucunun sayfalı listesi; arama/konu seçilince tüm rehberler taranır */}
          <DocFinder t={t} items={finderItems} topics={topics} readLabel={p.read}>
            <DocList readLabel={p.read} items={items.map((g) => toItem(g, p.num, t.insights.minutes, r.guide(g.slug)))} />
            <Pagination t={t} base={r.guides} page={page} total={guides.length} />
          </DocFinder>
        </div>
      </main>
      <Footer t={t} />
    </>
  );
}
