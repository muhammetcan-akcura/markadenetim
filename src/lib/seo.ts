import type { Metadata } from 'next';
import { exactCounterpart } from '@/lib/alternates';
import { localeFromPath, locales, ogLocale, publishedLocales, type Locale } from '@/lib/i18n';
import { brandName, siteUrl } from '@/lib/site';

// Sayfa metadata'sı için tek kaynak. Next, openGraph/twitter nesnelerini segmentler arasında
// sığ birleştirir: alt sayfa openGraph vermezse ana sayfanın og:url/og:title değerini miras alır
// ve paylaşımda yanlış sayfa görünür. Bu yüzden her sayfa bu yardımcıyla tam set üretir.

/** Varsayılan paylaşım görseli: 1200×630, navy zemin + wordmark (scripts/og-image.mjs) */
export const defaultOgImage = { url: '/img/og-image.jpg', width: 1200, height: 630, alt: brandName };

type PageSeo = {
  /** Şablona girecek başlık; " | MarkaDenetim" son eki layout'taki şablondan gelir */
  title: string;
  description: string;
  /** Kök göreli yol, örn. "/hizmetler/denetim" */
  path: string;
  image?: string;
  imageAlt?: string;
  type?: 'website' | 'article' | 'profile';
  /** Yalnızca makale: ISO tarih */
  publishedTime?: string;
  noindex?: boolean;
};

export function pageMetadata({
  title,
  description,
  path,
  image,
  imageAlt,
  type = 'website',
  publishedTime,
  noindex,
}: PageSeo): Metadata {
  const images = image ? [{ url: image, alt: imageAlt ?? title }] : [defaultOgImage];
  const ogTitle = `${title} | ${brandName}`;
  return {
    title,
    description,
    alternates: { canonical: path, ...languageAlternates(path) },
    openGraph: {
      type,
      locale: ogLocale[localeFromPath(path)],
      siteName: brandName,
      title: ogTitle,
      description,
      url: path,
      images,
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: { card: 'summary_large_image', title: ogTitle, description, images: images.map((i) => i.url) },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}

/**
 * hreflang: yalnızca yayındaki dillerde birebir karşılığı olan sayfalar için yazılır.
 * Karşılığı olmayan sayfa (ör. yalnızca Türkçe sirküler) hreflang almaz; x-default Türkçe sürümdür.
 */
export function languageAlternates(path: string): { languages?: Record<string, string> } {
  const own = localeFromPath(path);
  const languages: Partial<Record<Locale | 'x-default', string>> = {};
  for (const l of locales) {
    if (!publishedLocales.includes(l)) continue;
    const p = l === own ? path : exactCounterpart(path, l);
    if (p) languages[l] = p;
  }
  if (Object.keys(languages).length < 2) return {};
  languages['x-default'] = languages.tr;
  return { languages: languages as Record<string, string> };
}

const TR_MONTHS = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
const EN_MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

/** "28 Eylül 2026" ya da "28 September 2026" → "2026-09-28". Biçim tanınmazsa undefined (JSON-LD'ye yanlış tarih yazılmaz). */
export function trDateToIso(date: string): string | undefined {
  const m = date.trim().match(/^(\d{1,2})\s+(\S+)\s+(\d{4})$/);
  if (!m) return undefined;
  const month = TR_MONTHS.includes(m[2]) ? TR_MONTHS.indexOf(m[2]) : EN_MONTHS.indexOf(m[2]);
  if (month === -1) return undefined;
  return `${m[3]}-${String(month + 1).padStart(2, '0')}-${m[1].padStart(2, '0')}`;
}

/** BreadcrumbList JSON-LD: arama sonucunda URL yerine yol gösterilir */
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}

/** <script type="application/ld+json"> içeriği; "<" kaçışı betik enjeksiyonunu önler */
export function jsonLdString(data: object) {
  return JSON.stringify({ '@context': 'https://schema.org', ...data }).replace(/</g, '\\u003c');
}
