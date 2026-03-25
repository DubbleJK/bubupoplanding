'use client';

import {
  getPublicKakaoUrl,
  getPublicPhoneDisplay,
  getTelHref,
} from '@/lib/contact';

export default function CtaFooter() {
  const kakaoUrl = getPublicKakaoUrl();
  const phoneLabel = getPublicPhoneDisplay();
  const telHref = getTelHref();

  return (
    <footer
      className="fixed bottom-0 left-0 right-0 z-40 border-t-2 border-gray-200 bg-white px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))] pt-3 shadow-[0_-8px_30px_rgba(0,0,0,0.06)]"
      role="contentinfo"
      aria-label="빠른 문의"
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-2">
        <div className="flex gap-2 sm:gap-3">
          <a
            href={kakaoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center rounded-2xl bg-[#FEE500] py-3.5 text-[15px] font-bold leading-tight text-[#191919] transition hover:opacity-90 sm:py-4 sm:text-base"
            aria-label="카카오톡으로 무료 견적 문의하기"
          >
            카카오톡 · 무료 견적
          </a>
          <a
            href={telHref}
            className="flex min-h-[48px] flex-1 items-center justify-center rounded-2xl border-2 border-gray-900 bg-white px-2 py-3 text-[15px] font-bold leading-tight text-gray-900 transition hover:bg-gray-50 sm:py-3.5 sm:text-base"
            aria-label={`전화로 문의하기 ${phoneLabel}`}
          >
            전화 · 빠른 상담
          </a>
        </div>
        <p className="text-center text-[11px] leading-snug text-gray-500 sm:text-xs">
          사양·수량만 알려주시면 <strong className="font-semibold text-gray-700">당일 가능 여부</strong>와
          견적을 바로 안내합니다.
        </p>
      </div>
    </footer>
  );
}
