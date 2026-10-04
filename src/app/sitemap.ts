import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/site';

// Tek sayfa + yasal metinler. Yeni sayfa eklendiğinde buraya da eklenir.
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: '', priority: 1 },
    { path: '/kvkk', priority: 0.3 },
    { path: '/gizlilik', priority: 0.3 },
    { path: '/cerez', priority: 0.3 },
  ];
  return routes.map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: 'monthly',
    priority,
  }));
}
