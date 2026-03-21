import type { MetadataRoute } from 'next';

const base =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '') ||
  'https://bubupoplanding.vercel.app';

/** 공개 랜딩만 포함 (고객 전용·API 제외) */
const PATHS = [
  '/',
  '/sticker',
  '/uv-sticker',
  '/tshirt',
  '/dtf',
  '/dtf-guide',
  '/banner',
  '/card',
  '/goods',
  '/election',
  '/another',
  '/location',
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return PATHS.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : 0.75,
  }));
}
