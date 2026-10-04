import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/site';
import { teamMembers } from '@/content/team';

// Ana sayfa + ekip profilleri + yasal metinler. Yeni sayfa eklendiğinde buraya da eklenir.
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: '', priority: 1 },
    { path: '/kvkk', priority: 0.3 },
    { path: '/gizlilik', priority: 0.3 },
    { path: '/cerez', priority: 0.3 },
    ...teamMembers.map((m) => ({ path: `/ekip/${m.slug}`, priority: 0.5 })),
  ];
  return routes.map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: 'monthly',
    priority,
  }));
}
