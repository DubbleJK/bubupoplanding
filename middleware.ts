import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

/**
 * API 응답 공통 보안 헤더.
 * 고객 시안 API는 리퍼러를 더 엄격히 제한합니다.
 */
export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  if (!pathname.startsWith('/api/')) {
    return NextResponse.next();
  }

  const res = NextResponse.next();
  res.headers.set('X-Content-Type-Options', 'nosniff');
  res.headers.set('X-Robots-Tag', 'noindex, nofollow');
  res.headers.set('Cross-Origin-Resource-Policy', 'same-origin');
  res.headers.set('Cross-Origin-Opener-Policy', 'same-origin');

  if (pathname.startsWith('/api/client-designs')) {
    res.headers.set('Referrer-Policy', 'no-referrer');
    // 고객 시안 관련 API는 캐시 금지
    res.headers.set('Cache-Control', 'no-store, max-age=0');
  } else {
    res.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    // 나머지 API도 짧은 캐시 방지로 최신 응답 우선
    res.headers.set('Cache-Control', 'no-cache, no-store, max-age=0, must-revalidate');
  }

  return res;
}

export const config = {
  matcher: ['/api/:path*'],
};
