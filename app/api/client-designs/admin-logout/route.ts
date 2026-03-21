import { NextResponse } from 'next/server';

const ADMIN_COOKIE = 'client_designs_admin_access';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const base = `${url.protocol}//${url.host}`;
  const res = NextResponse.redirect(new URL('/client-designs', base));
  res.cookies.set(ADMIN_COOKIE, '', {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 0,
    secure: process.env.NODE_ENV === 'production',
  });
  return res;
}
