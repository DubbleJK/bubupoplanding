import type { MetadataRoute } from 'next';
import { getSiteUrl } from '@/lib/site-url';

const base = getSiteUrl().replace(/\/$/, '');

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/client-designs', '/api/'],
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
