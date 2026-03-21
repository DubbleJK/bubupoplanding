'use client';

import { useState } from 'react';
import ClientDesignsSlotManager from '@/components/client-designs/ClientDesignsSlotManager';

export default function ClientDesignsAdminReveal() {
  const [open, setOpen] = useState(false);
  const [masterPin, setMasterPin] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{ period: string; customerPassword: string } | null>(
    null
  );

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setResult(null);
    setLoading(true);
    try {
      const res = await fetch('/api/client-designs/reveal-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ masterPin }),
      });
      const data = (await res.json()) as {
        ok?: boolean;
        period?: string;
        customerPassword?: string;
        error?: string;
      };

      if (res.ok && data.ok && data.customerPassword && data.period) {
        setResult({ period: data.period, customerPassword: data.customerPassword });
        setMasterPin('');
        return;
      }

      if (data.error === 'admin_pin_not_configured') {
        setError(
          '관리자 마스터 PIN이 서버에 설정되지 않았습니다. 배포 환경에 CLIENT_DESIGNS_ADMIN_PIN 을 설정해 주세요.'
        );
      } else if (data.error === 'not_configured') {
        setError('서버에 CLIENT_DESIGNS_MASTER_SECRET 이 설정되지 않았습니다.');
      } else if (res.status === 401) {
        setError('마스터 비밀번호가 올바르지 않습니다.');
      } else {
        setError('확인에 실패했습니다. 잠시 후 다시 시도해 주세요.');
      }
    } catch {
      setError('네트워크 오류입니다.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mb-8 rounded-2xl border border-dashed border-gray-300 bg-white/80 p-4 sm:p-5">
      {!open ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="w-full rounded-xl border-2 border-gray-200 bg-gray-50 py-3 text-sm font-bold text-gray-700 transition hover:border-primary hover:bg-white hover:text-primary"
        >
          관리자용 페이지
        </button>
      ) : (
        <div>
          <div className="flex items-center justify-between gap-2">
            <p className="text-sm font-bold text-gray-800">관리자용 페이지</p>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                setError(null);
                setResult(null);
                setMasterPin('');
              }}
              className="text-xs font-semibold text-gray-500 underline"
            >
              닫기
            </button>
          </div>
          <p className="mt-1 text-xs text-gray-500">
            마스터 비밀번호 입력 후, 이번 구간 고객 안내용 4자리 숫자가 표시됩니다.
          </p>
          <form onSubmit={onSubmit} className="mt-3 space-y-3">
            <input
              type="password"
              inputMode="numeric"
              autoComplete="off"
              maxLength={8}
              value={masterPin}
              onChange={(e) => setMasterPin(e.target.value)}
              className="w-full rounded-xl border-2 border-gray-200 px-4 py-2.5 text-base outline-none focus:border-primary"
              placeholder="마스터 비밀번호"
            />
            <button
              type="submit"
              disabled={loading || !masterPin.trim()}
              className="w-full rounded-xl bg-gray-800 py-2.5 text-sm font-bold text-white hover:bg-gray-900 disabled:opacity-50"
            >
              {loading ? '확인 중…' : '고객 비밀번호 보기'}
            </button>
          </form>
          {error ? (
            <p className="mt-2 text-sm font-medium text-red-600" role="alert">
              {error}
            </p>
          ) : null}
          {result ? (
            <>
              <div className="mt-4 rounded-xl border-2 border-primary/30 bg-primary/5 p-4">
                <p className="text-xs font-semibold text-gray-600">적용 구간 {result.period}</p>
                <p className="mt-2 text-xs text-gray-500">고객에게 안내할 비밀번호 (숫자 4자리)</p>
                <p
                  className="mt-1 select-all font-mono text-3xl font-black tracking-[0.2em] text-primary"
                  translate="no"
                >
                  {result.customerPassword}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-gray-600">
                  마스터 비밀번호 확인이 완료되어{' '}
                  <strong className="text-gray-800">4시간 동안</strong> 아래에서 등록된 시안을
                  미리 볼 수 있습니다. (이미지 추가·변경은{' '}
                  <code className="rounded bg-white/80 px-1 text-[11px]">
                    public/client-design-assets/
                  </code>{' '}
                  에 넣고 배포)
                </p>
              </div>
              <div className="mt-6 border-t border-gray-200 pt-6">
                <p className="mb-3 text-sm font-extrabold text-gray-900">관리자 · 시안 미리보기</p>
                <ClientDesignsSlotManager showAdminLinks />
              </div>
            </>
          ) : null}
        </div>
      )}
    </div>
  );
}
