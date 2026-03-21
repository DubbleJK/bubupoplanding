'use client';

const KAKAO_URL =
  process.env.NEXT_PUBLIC_KAKAO_URL || 'https://pf.kakao.com/_xxxxx';
const PHONE = process.env.NEXT_PUBLIC_PHONE || '010-0000-0000';

export default function CtaFooter() {
  return (
    <footer
      className="fixed bottom-0 left-0 right-0 z-40 border-t-2 border-gray-200 bg-white px-4 py-3"
      role="contentinfo"
      aria-label="빠른 문의"
    >
      <div className="mx-auto flex max-w-4xl gap-3">
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
          className="flex flex-1 items-center justify-center rounded-2xl border-2 border-gray-900 bg-white py-4 text-base font-bold text-gray-900 transition hover:bg-gray-50"
        >
          전화로 문의하기
        </a>
      </div>
    </footer>
  );
}
