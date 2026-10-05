import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  return {
    // Netlify Forms tanım dosyası taranacak bir sayfa değil
    rules: { userAgent: '*', allow: '/', disallow: '/__forms.html' },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
