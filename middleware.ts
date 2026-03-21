import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

/**
 * 결제 고객 시안 API: JSON 응답에도 MIME 스니핑 완화, 리퍼러 최소화
 */
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/api/client-designs')) {
    const res = NextResponse.next();
    res.headers.set('X-Content-Type-Options', 'nosniff');
    res.headers.set('Referrer-Policy', 'no-referrer');
    return res;
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/api/client-designs/:path*'],
};
