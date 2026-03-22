'use client';

const KAKAO_URL =
  process.env.NEXT_PUBLIC_KAKAO_URL || 'https://pf.kakao.com/_xxxxx';
const PHONE = process.env.NEXT_PUBLIC_PHONE || '010-0000-0000';

export default function CtaFooter() {
  return (
    <footer
      className="fixed bottom-0 left-0 right-0 z-40 border-t-2 border-gray-200 bg-white px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))] pt-3 shadow-[0_-8px_30px_rgba(0,0,0,0.06)]"
      role="contentinfo"
      aria-label="빠른 문의"
    >
      <div className="mx-auto flex max-w-4xl gap-2 sm:gap-3">
        <a
          href={KAKAO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center rounded-2xl bg-[#FEE500] py-4 text-base font-bold text-[#191919] transition hover:opacity-90"
        >
          카카오톡으로 문의하기
        </a>
        <a
          href={`tel:${PHONE.replace(/-/g, '')}`}
          className="flex min-h-[48px] flex-1 items-center justify-center rounded-2xl border-2 border-gray-900 bg-white px-2 py-3.5 text-[15px] font-bold leading-tight text-gray-900 transition hover:bg-gray-50 sm:py-4 sm:text-base"
        >
          전화로 문의하기
        </a>
      </div>
    </footer>
  );
}
