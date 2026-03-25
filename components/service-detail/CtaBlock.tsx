import { getPublicKakaoUrl, getPublicPhoneDisplay, getTelHref } from '@/lib/contact';

export default function CtaBlock() {
  const kakaoUrl = getPublicKakaoUrl();
  const phoneLabel = getPublicPhoneDisplay();
  const telHref = getTelHref();

  return (
    <section className="border-t border-gray-200 bg-gray-50 px-4 py-12 sm:py-16">
      <div className="mx-auto max-w-4xl rounded-2xl border-2 border-gray-200 bg-white p-6 sm:p-8">
        <h2 className="section-title">지금 문의하면, 당일 가능 여부부터 바로 안내</h2>
        <p className="mt-3 text-[15px] leading-relaxed text-gray-600 text-pretty sm:text-base">
          사양·수량·희망 일정만 알려주시면{' '}
          <strong className="font-bold text-gray-800">당일 제작 가능 여부와 견적</strong>을
          빠르게 안내해 드립니다. 카카오톡·전화 모두 동일하게 접수됩니다.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <a
            href={kakaoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center rounded-2xl bg-[#FEE500] py-4 text-base font-bold text-[#191919] transition hover:opacity-90 sm:min-h-[3.25rem]"
            aria-label="카카오톡으로 무료 견적 문의하기"
          >
            카카오톡 · 무료 견적
          </a>
          <a
            href={telHref}
            className="flex flex-1 items-center justify-center rounded-2xl border-2 border-gray-900 bg-white py-4 text-base font-bold text-gray-900 transition hover:bg-gray-50 sm:min-h-[3.25rem]"
            aria-label={`전화로 문의하기 ${phoneLabel}`}
          >
            전화 · 빠른 상담 ({phoneLabel})
          </a>
        </div>
      </div>
    </section>
  );
}
