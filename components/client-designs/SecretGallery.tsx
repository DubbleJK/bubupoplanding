import Link from 'next/link';
import ClientDesignsSlotManager from '@/components/client-designs/ClientDesignsSlotManager';

export default function SecretGallery() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-lg font-extrabold text-gray-900 sm:text-xl">
          추가 시안 (고객 전용)
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-gray-600">
          <strong className="text-gray-800">POSTER</strong>(포스터),{' '}
          <strong className="text-gray-800">PIKET</strong>(피켓),{' '}
          <strong className="text-gray-800">SUPPLIES</strong>(용품) 타입별 시안을 확인할 수 있습니다.
          시안 파일은 운영자가{' '}
          <code className="rounded bg-gray-100 px-1 text-xs">public/client-design-assets/</code> 에
          넣어 배포할 때 반영됩니다.
        </p>
        <div className="mt-6">
          <ClientDesignsSlotManager />
        </div>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
        <a
          href="/api/client-designs/logout"
          className="inline-flex min-h-[3rem] items-center justify-center rounded-2xl border-2 border-gray-900 bg-white px-6 text-center text-sm font-bold text-gray-900 transition hover:bg-gray-50"
        >
          접속 종료 (코드 다시 입력)
        </a>
        <Link
          href="/"
          className="inline-flex min-h-[3rem] items-center justify-center rounded-2xl bg-gray-100 px-6 text-center text-sm font-bold text-gray-800 transition hover:bg-gray-200"
        >
          홈으로
        </Link>
      </div>
    </div>
  );
}
