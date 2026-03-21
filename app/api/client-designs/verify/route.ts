import { NextResponse } from 'next/server';
import { verifyMonthlyPasswordWithGrace } from '@/lib/client-designs-monthly';

const COOKIE_NAME = 'client_designs_access';
const COOKIE_VALUE = '1';

export async function POST(request: Request) {
  let body: { code?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  const code = body.code?.trim();
  if (!code) {
    return NextResponse.json({ ok: false, error: 'empty' }, { status: 400 });
  }

  const secret = process.env.CLIENT_DESIGNS_MASTER_SECRET?.trim();
  if (!secret) {
    return NextResponse.json(
      { ok: false, error: 'not_configured' },
      { status: 503 }
    );
  }

  if (!verifyMonthlyPasswordWithGrace(code, secret)) {
    return NextResponse.json({ ok: false, error: 'invalid' }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE_NAME, COOKIE_VALUE, {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 14,
    secure: process.env.NODE_ENV === 'production',
  });
  return res;
}
