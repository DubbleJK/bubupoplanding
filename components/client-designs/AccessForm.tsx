'use client';

import { useState } from 'react';

export default function AccessForm() {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);
    setLoading(true);
    try {
      const res = await fetch('/api/client-designs/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };

      if (res.ok && data.ok) {
        window.location.reload();
        return;
      }

      if (data.error === 'not_configured') {
        setMessage('서버 설정이 완료되지 않았습니다. 관리자에게 문의해 주세요.');
      } else if (res.status === 401) {
        setMessage('비밀번호가 올바르지 않습니다. 상담원에게 월간 비밀번호를 다시 확인해 주세요.');
      } else {
        setMessage('확인 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.');
      }
    } catch {
      setMessage('네트워크 오류입니다. 잠시 후 다시 시도해 주세요.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm sm:p-8">
      <p className="text-sm leading-relaxed text-gray-600">
        결제(입금) 확인 후 상담원이 안내해 드리는{' '}
        <strong className="text-gray-900">월간 비밀번호(숫자 4자리)</strong>를 입력해
        주세요. (매월 10일 서울 기준으로 갱신됩니다.)
      </p>
      <form onSubmit={onSubmit} className="mt-5 space-y-4">
        <label className="block text-sm font-bold text-gray-800" htmlFor="access-code">
          비밀번호
        </label>
        <input
          id="access-code"
          type="text"
          autoComplete="off"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-base outline-none transition focus:border-primary"
          placeholder="안내 받은 비밀번호 입력"
        />
        {message ? (
          <p className="text-sm font-medium text-red-600" role="alert">
            {message}
          </p>
        ) : null}
        <button
          type="submit"
          disabled={loading || code.replace(/\D/g, '').length !== 4}
          className="w-full rounded-2xl bg-primary py-3.5 text-base font-extrabold text-white transition hover:bg-primary-hover disabled:opacity-50"
        >
          {loading ? '확인 중…' : '확인하고 시안 보기'}
        </button>
      </form>
    </div>
  );
}
