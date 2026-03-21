import { createHmac, timingSafeEqual } from 'crypto';

/** 서울 기준 연·월·일 */
export function getSeoulYMD(d = new Date()): { y: number; m: number; day: number } {
  const fmt = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Seoul',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  const parts = fmt.formatToParts(d);
  const y = Number(parts.find((x) => x.type === 'year')!.value);
  const m = Number(parts.find((x) => x.type === 'month')!.value);
  const day = Number(parts.find((x) => x.type === 'day')!.value);
  return { y, m, day };
}

function prevMonth(y: number, m: number): { y: number; m: number } {
  if (m <= 1) return { y: y - 1, m: 12 };
  return { y, m: m - 1 };
}

/**
 * 매월 10일(서울)부터 새 구간.
 * - 10일~말일: 해당 월(YYYY-MM)
 * - 1~9일: 직전 월(YYYY-MM)
 */
export function getCredentialPeriodLabel(now = new Date()): string {
  const { y, m, day } = getSeoulYMD(now);
  if (day >= 10) {
    return `${y}-${String(m).padStart(2, '0')}`;
  }
  const p = prevMonth(y, m);
  return `${p.y}-${String(p.m).padStart(2, '0')}`;
}

/** 직전 구간 라벨 (교차 기간용) */
export function getPreviousCredentialPeriodLabel(now = new Date()): string {
  const current = getCredentialPeriodLabel(now);
  const [ys, ms] = current.split('-');
  const y = Number(ys);
  const m = Number(ms);
  const p = prevMonth(y, m);
  return `${p.y}-${String(p.m).padStart(2, '0')}`;
}

/**
 * 고객에게 안내하는 월간 비밀번호 — 항상 숫자 4자리 (0000~9999)
 */
export function computeMonthlyPassword(masterSecret: string, period: string): string {
  const h = createHmac('sha256', masterSecret);
  h.update(`bubupop-client-designs:${period}`);
  const buf = h.digest();
  const n = buf.readUInt32BE(0) % 10000;
  return String(n).padStart(4, '0');
}

function normalizeCustomerPin(input: string): string | null {
  const d = input.replace(/\D/g, '');
  if (d.length === 0) return null;
  const core = d.length > 4 ? d.slice(-4) : d.padStart(4, '0');
  return core;
}

function timingSafeStringEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a, 'utf8');
  const bufB = Buffer.from(b, 'utf8');
  if (bufA.length !== bufB.length) return false;
  return timingSafeEqual(bufA, bufB);
}

/** 현재 구간 비밀번호만 검증 (고객 입력 4자리) */
export function verifyMonthlyPassword(
  input: string,
  masterSecret: string,
  now = new Date()
): boolean {
  const period = getCredentialPeriodLabel(now);
  const expected = computeMonthlyPassword(masterSecret, period);
  const got = normalizeCustomerPin(input);
  if (got == null || !/^\d{4}$/.test(got)) return false;
  return timingSafeStringEqual(got, expected);
}

/**
 * 매월 10~12일(서울): 직전 구간 비밀번호도 허용
 */
export function verifyMonthlyPasswordWithGrace(
  input: string,
  masterSecret: string,
  now = new Date()
): boolean {
  if (verifyMonthlyPassword(input, masterSecret, now)) return true;
  const { day } = getSeoulYMD(now);
  if (day < 10 || day > 12) return false;
  const prevPeriod = getPreviousCredentialPeriodLabel(now);
  const prevExpected = computeMonthlyPassword(masterSecret, prevPeriod);
  const got = normalizeCustomerPin(input);
  if (got == null || !/^\d{4}$/.test(got)) return false;
  return timingSafeStringEqual(got, prevExpected);
}
