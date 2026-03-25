/**
 * OG·sitemap·canonical 등에 사용하는 공개 사이트 베이스 URL (트레일링 슬래시 없음)
 */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, '');
  if (fromEnv) return fromEnv;
  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) return `https://${vercel.replace(/^https?:\/\//, '')}`;
  return 'https://bubupoplanding.vercel.app';
}
