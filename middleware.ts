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

  if (pathname.startsWith('/api/client-designs')) {
    res.headers.set('Referrer-Policy', 'no-referrer');
  } else {
    res.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  }

  return res;
}

export const config = {
  matcher: ['/api/:path*'],
};
