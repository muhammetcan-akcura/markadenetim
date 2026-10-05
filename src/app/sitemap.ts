import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/site';
import { trDateToIso } from '@/lib/seo';
import { teamMembers } from '@/content/team';
import { articles } from '@/content/insights';
import { services } from '@/content/services';

// Ana sayfa + hizmetler + ekip profilleri + yazılar + yasal metinler. Yeni sayfa eklendiğinde buraya da eklenir.
// lastModified yalnızca bilinen tarihlerde verilir (yazılar); uydurma tarih yazılmaz.
// images: Google görsel sitemap'i — görseller sayfayla ilişkilendirilir.
type Route = { path: string; priority: number; lastModified?: string; images?: string[] };

export default function sitemap(): MetadataRoute.Sitemap {
  const newest = articles.map((a) => trDateToIso(a.date)).filter(Boolean).sort().at(-1);
  const routes: Route[] = [
    { path: '', priority: 1, lastModified: newest },
    ...services.map((s) => ({ path: `/hizmetler/${s.slug}`, priority: 0.9, images: [s.image] })),
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
  ];
  return routes.map(({ path, priority, lastModified, images }) => ({
    url: `${siteUrl}${path}`,
    ...(lastModified ? { lastModified } : {}),
    changeFrequency: 'monthly',
    priority,
    ...(images ? { images: images.map((src) => `${siteUrl}${src}`) } : {}),
  }));
}
