import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/site';
import { languageAlternates, trDateToIso } from '@/lib/seo';
import { teamMembers } from '@/content/team';
import { articles } from '@/content/insights';
import { services } from '@/content/services';
import { circulars } from '@/content/circulars';
import { guides } from '@/content/guides';
import { sectors } from '@/content/sectors';
import { extraPageParams } from '@/lib/paginate';
import { guidesEn } from '@/content/en/guides';
import { articlesEn } from '@/content/en/insights';
import { sectorsEn } from '@/content/en/sectors';
import { servicesEn } from '@/content/en/services';
import { teamMembersEn } from '@/content/en/team';

// Ana sayfa + hizmetler + ekip profilleri + yazılar + yasal metinler. Yeni sayfa eklendiğinde buraya da eklenir.
// lastModified yalnızca bilinen tarihlerde verilir (yazılar); uydurma tarih yazılmaz.
// images: Google görsel sitemap'i — görseller sayfayla ilişkilendirilir.
type Route = { path: string; priority: number; lastModified?: string; images?: string[] };

export default function sitemap(): MetadataRoute.Sitemap {
  const newest = articles.map((a) => trDateToIso(a.date)).filter(Boolean).sort().at(-1);
  const routes: Route[] = [
    { path: '', priority: 1, lastModified: newest },
    { path: '/hizmetler', priority: 0.9 },
    ...services.map((s) => ({ path: `/hizmetler/${s.slug}`, priority: 0.9, images: [s.image] })),
    { path: '/sektorler', priority: 0.8 },
    ...sectors.map((x) => ({ path: `/sektorler/${x.slug}`, priority: 0.7, images: [x.image] })),
    { path: '/hakkimizda', priority: 0.8 },
    // Başkanın mesajı onaylanana kadar noindex; sitemap'e eklenmez
    { path: '/kalite-ve-bagimsizlik', priority: 0.6 },
    { path: '/vergi-takvimi', priority: 0.7 },
    { path: '/rehber', priority: 0.7 },
    ...extraPageParams(guides.length).map(({ page }) => ({ path: `/rehber/sayfa/${page}`, priority: 0.4 })),
    ...guides.map((g) => ({ path: `/rehber/${g.slug}`, priority: 0.7 })),
    { path: '/sirkuler', priority: 0.6 },
    ...extraPageParams(circulars.length).map(({ page }) => ({ path: `/sirkuler/sayfa/${page}`, priority: 0.4 })),
    // Örnek sirkülerler noindex; yalnızca gerçek olanlar listelenir
    ...circulars
      .filter((c) => !c.sample)
      .map((c) => ({ path: `/sirkuler/${c.slug}`, priority: 0.5, lastModified: trDateToIso(c.date) })),
    { path: '/iletisim', priority: 0.8 },
    { path: '/guncel', priority: 0.7, lastModified: newest },
    ...articles.map((a) => ({
      path: `/guncel/${a.slug}`,
      priority: 0.6,
      lastModified: trDateToIso(a.date),
      images: [a.image],
    })),
    ...teamMembers.map((m) => ({ path: `/ekip/${m.slug}`, priority: 0.5, images: [m.image] })),
    { path: '/kvkk', priority: 0.2 },
    { path: '/gizlilik', priority: 0.2 },
    { path: '/cerez', priority: 0.2 },
    // İngilizce sayfalar (hreflang karşılıkları withAlternates ile eklenir)
    { path: '/en', priority: 0.9 },
    { path: '/en/about', priority: 0.7 },
    { path: '/en/services', priority: 0.8 },
    ...servicesEn.map((s) => ({ path: `/en/services/${s.slug}`, priority: 0.8, images: [s.image] })),
    { path: '/en/sectors', priority: 0.7 },
    ...sectorsEn.map((x) => ({ path: `/en/sectors/${x.slug}`, priority: 0.6, images: [x.image] })),
    ...teamMembersEn.map((m) => ({ path: `/en/team/${m.slug}`, priority: 0.4, images: [m.image] })),
    { path: '/en/quality-and-independence', priority: 0.5 },
    { path: '/en/insights', priority: 0.6 },
    ...articlesEn.map((a) => ({ path: `/en/insights/${a.slug}`, priority: 0.5, lastModified: trDateToIso(a.date), images: [a.image] })),
    { path: '/en/guides', priority: 0.6 },
    ...guidesEn.map((g) => ({ path: `/en/guides/${g.slug}`, priority: 0.6 })),
    { path: '/en/tax-calendar', priority: 0.6 },
    { path: '/en/contact', priority: 0.7 },
    { path: '/en/privacy-notice', priority: 0.2 },
    { path: '/en/privacy', priority: 0.2 },
    { path: '/en/cookies', priority: 0.2 },
  ];
  return routes.map(({ path, priority, lastModified, images }) => ({
    url: `${siteUrl}${path}`,
    ...(lastModified ? { lastModified } : {}),
    changeFrequency: 'monthly',
    priority,
    ...(images ? { images: images.map((src) => `${siteUrl}${src}`) } : {}),
    // Diğer dildeki birebir karşılık (varsa); Google hreflang'i sitemap'ten de okur
    ...withAlternates(path),
  }));
}

function withAlternates(path: string) {
  const { languages } = languageAlternates(path || '/');
  if (!languages) return {};
  return {
    alternates: {
      languages: Object.fromEntries(Object.entries(languages).map(([l, p]) => [l, `${siteUrl}${p === '/' ? '' : p}`])),
    },
  };
}
