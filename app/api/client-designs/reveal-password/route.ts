import { NextResponse } from 'next/server';
import {
  computeMonthlyPassword,
  getCredentialPeriodLabel,
} from '@/lib/client-designs-monthly';

function timingSafePinEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let r = 0;
  for (let i = 0; i < a.length; i++) {
    r |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return r === 0;
}

export async function POST(request: Request) {
  let body: { masterPin?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  const configured = process.env.CLIENT_DESIGNS_ADMIN_PIN?.trim();
  if (!configured) {
    return NextResponse.json(
      { ok: false, error: 'admin_pin_not_configured' },
      { status: 503 }
    );
  }

  const submitted = String(body.masterPin ?? '').trim();

  if (!timingSafePinEqual(submitted, configured)) {
    return NextResponse.json({ ok: false, error: 'invalid_master' }, { status: 401 });
  }

  const secret = process.env.CLIENT_DESIGNS_MASTER_SECRET?.trim();
  if (!secret) {
    return NextResponse.json({ ok: false, error: 'not_configured' }, { status: 503 });
  }

  const period = getCredentialPeriodLabel();
  const customerPassword = computeMonthlyPassword(secret, period);

  const res = NextResponse.json({
    ok: true,
    period,
    customerPassword,
  });
  res.cookies.set('client_designs_admin_access', '1', {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 4,
    secure: process.env.NODE_ENV === 'production',
  });
  return res;
}
