import {
  computeMonthlyPassword,
  getCredentialPeriodLabel,
  getSeoulYMD,
} from '@/lib/client-designs-monthly';

export const metadata = {
  title: '시안 페이지 비밀번호 (관리자) | 부부피오피',
  robots: { index: false, follow: false },
};

export const dynamic = 'force-dynamic';

type Props = { searchParams: Record<string, string | string[] | undefined> };

export default function ClientDesignsAdminPage({ searchParams }: Props) {
  const raw = searchParams.token;
  const token = Array.isArray(raw) ? raw[0] : raw;
  const adminToken = process.env.CLIENT_DESIGNS_ADMIN_TOKEN?.trim();
  const secret = process.env.CLIENT_DESIGNS_MASTER_SECRET?.trim();

  if (!adminToken || token !== adminToken) {
    return (
      <main className="min-h-screen bg-gray-100 px-4 py-16 text-center">
        <p className="text-gray-600">이 페이지는 관리자만 접근할 수 있습니다.</p>
      </main>
    );
  }

  if (!secret) {
    return (
      <main className="min-h-screen bg-amber-50 px-4 py-10">
        <div className="mx-auto max-w-lg rounded-2xl border-2 border-amber-200 bg-white p-6">
          <p className="font-bold text-amber-900">설정 필요</p>
          <p className="mt-2 text-sm text-gray-700">
            서버 환경 변수 <code className="rounded bg-gray-100 px-1">CLIENT_DESIGNS_MASTER_SECRET</code>
            을 설정한 뒤 다시 열어주세요.
          </p>
        </div>
      </main>
    );
  }

  const period = getCredentialPeriodLabel();
  const password = computeMonthlyPassword(secret, period);
  const { y, m, day } = getSeoulYMD();

  return (
    <main className="min-h-screen bg-slate-900 px-4 py-10 text-white">
      <div className="mx-auto max-w-lg">
        <h1 className="text-xl font-extrabold sm:text-2xl">추가 시안 페이지 · 월간 비밀번호</h1>
        <p className="mt-2 text-sm text-slate-300">
          서울 기준 매월 <strong className="text-white">10일</strong>에 새 비밀번호가 적용됩니다.
          (10~12일에는 전월 비밀번호도 잠시 사용 가능합니다.)
        </p>

        <div className="mt-8 rounded-2xl border-2 border-slate-600 bg-slate-800 p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            현재 적용 구간
          </p>
          <p className="mt-1 text-2xl font-black text-white">{period}</p>
          <p className="mt-1 text-xs text-slate-400">
            오늘(서울): {y}년 {m}월 {day}일
          </p>
        </div>

        <div className="mt-4 rounded-2xl border-2 border-orange-500/60 bg-slate-800 p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-orange-300">
            이번 달 고객 안내용 비밀번호
          </p>
          <p
            className="mt-3 select-all font-mono text-3xl font-black tracking-[0.25em] text-orange-400 sm:text-4xl"
            translate="no"
          >
            {password}
          </p>
          <p className="mt-2 text-xs text-slate-500">고객 안내: 숫자 4자리</p>
          <p className="mt-4 text-xs leading-relaxed text-slate-400">
            결제 완료 고객에게만 안내하세요. 이 주소·토큰 URL은 내부용으로만 공유하세요.
          </p>
        </div>

        <ul className="mt-8 space-y-2 text-sm text-slate-300">
          <li>· 비밀번호는 코드 수정 없이 <strong className="text-white">자동</strong>으로 바뀝니다.</li>
          <li>· 바뀌는 날: 매월 10일 0시(서울)</li>
          <li>· 상담원은 이 페이지에서만 비밀번호를 확인하면 됩니다.</li>
        </ul>
      </div>
    </main>
  );
}
