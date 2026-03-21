/**
 * RSS description에서 추출한 썸네일 URL — 임의 도메인 <img> 로드(XSS·트래킹 완화)를 막기 위해 허용 목록만 통과.
 */

const EXACT_HOSTS = new Set([
  'blogfiles.pstatic.net',
  'postfiles.pstatic.net',
  'dthumb-phinf.pstatic.net',
  'mblogthumb-phinf.pstatic.net',
  'cafeptthumb-phinf.pstatic.net',
  'shop-phinf.pstatic.net',
  'blogthumb.pstatic.net',
  'ssl.pstatic.net',
]);

export function isTrustedNaverBlogThumbUrl(url: string): boolean {
  try {
    const u = new URL(url);
    if (u.protocol !== 'https:') return false;
    const h = u.hostname.toLowerCase();
    if (EXACT_HOSTS.has(h)) return true;
    if (h.endsWith('.pstatic.net')) return true;
    return false;
  } catch {
    return false;
  }
}

/** next/image remotePatterns에 등록된 호스트(최적화 이미지용) */
export const NAVER_IMAGE_HOSTS_FOR_NEXT_IMAGE = EXACT_HOSTS;
