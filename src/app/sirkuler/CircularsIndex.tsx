import type { Metadata } from 'next';
import { DocHeader } from '@/components/DocHeader';
import { DocFinder, type FinderItem } from '@/components/DocFinder';
import { DocList } from '@/components/DocList';
import { Footer } from '@/components/Footer';
import { Pagination } from '@/components/Pagination';
import { SiteHeader } from '@/components/SiteHeader';
import { circulars, type Circular } from '@/content/circulars';
import { blocksText } from '@/content/insights';
import { tr } from '@/content/tr';
import { pageHref, pageItems } from '@/lib/paginate';
import { siteUrl } from '@/lib/site';
import { breadcrumbJsonLd, jsonLdString, pageMetadata } from '@/lib/seo';
import styles from '@/components/Doc.module.css';

const BASE = '/sirkuler';

/** Sayfa başlığı: 1. sayfada yalın, sonrakilerde "— Sayfa n" eki (yinelenen başlık olmasın) */
export function circularsMetadata(page: number): Metadata {
  const p = tr.circularsPage;
  const suffix = page > 1 ? ` — ${tr.pagination.titleSuffix} ${page}` : '';
  return pageMetadata({ title: `${p.metaTitle}${suffix}`, description: p.intro, path: pageHref(BASE, page) });
}

const toItem = (c: Circular, title: string) => ({
  href: `${BASE}/${c.slug}`,
  num: `${title} ${c.no}`,
  aside: c.date,
  tag: c.topic,
  title: c.title,
  text: c.summary,
});

/*
  Sirküler arşivi (sayfalı). Kartlar: lacivert antet bandı (numara + tarih), konu etiketi, başlık,
  özet ve "oku" bağlantısı. Büyük denetim ağlarının "sirküler" geleneği: kurumu mevzuatı yorumlayan
  bir otorite olarak gösterir.
*/
export function CircularsIndex({ page }: { page: number }) {
  const t = tr;
  const p = t.circularsPage;
  const items = pageItems(circulars, page);
  const hasSample = circulars.some((c) => c.sample);
  const topics = [...new Set(circulars.map((c) => c.topic))];
  const finderItems: FinderItem[] = circulars.map((c) => ({
    ...toItem(c, p.title),
    topic: c.topic,
    search: `${c.no} ${c.title} ${c.summary} ${blocksText(c.body)}`,
  }));

  const jsonLd = {
    '@graph': [
      {
        '@type': 'CollectionPage',
        url: `${siteUrl}${pageHref(BASE, page)}`,
        name: p.metaTitle,
        description: p.intro,
        inLanguage: 'tr',
        isPartOf: { '@id': `${siteUrl}/#website` },
      },
      breadcrumbJsonLd([
        { name: 'Ana sayfa', path: '/' },
        { name: p.title, path: BASE },
      ]),
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(jsonLd) }} />
      <SiteHeader t={t} />
      <main id="main" className={styles.main} aria-labelledby="doc-title">
        <DocHeader kicker={p.kicker} title={p.title} lead={p.intro}>
          {hasSample && <p className={`label ${styles.notice}`}>{p.sample}</p>}
        </DocHeader>
        <div className={`container ${styles.listSection}`}>
          {/* Filtre boşken sunucunun sayfalı listesi; arama/konu seçilince tüm sirküler taranır */}
          <DocFinder t={t} items={finderItems} topics={topics} readLabel={p.read}>
            <DocList readLabel={p.read} items={items.map((c) => toItem(c, p.title))} />
            <Pagination t={t} base={BASE} page={page} total={circulars.length} />
          </DocFinder>
        </div>
      </main>
      <Footer t={t} />
    </>
  );
}
