const KAKAO_URL =
  process.env.NEXT_PUBLIC_KAKAO_URL || 'https://pf.kakao.com/_xxxxx';
const PHONE = process.env.NEXT_PUBLIC_PHONE || '010-0000-0000';

export default function CtaBlock() {
  return (
    <section className="border-t border-gray-200 bg-gray-50 px-4 py-12 sm:py-16">
      <div className="mx-auto max-w-4xl rounded-2xl border-2 border-gray-200 bg-white p-6 sm:p-8">
        <h2 className="section-title">급한 제작·맞춤 견적, 지금 문의하세요</h2>
        <p className="mt-3 text-[15px] leading-relaxed text-gray-600 text-pretty sm:text-base">
          사양·수량·일정만 알려주시면{' '}
          <strong className="font-bold text-gray-800">당일 가능 여부와 견적</strong>을 바로
          안내해 드립니다. 카카오톡·전화 모두 동일하게 접수됩니다.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <a
            href={KAKAO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center rounded-2xl bg-[#FEE500] py-4 text-base font-bold text-[#191919] transition hover:opacity-90 sm:min-h-[3.25rem]"
          >
            카카오톡으로 문의하기
          </a>
          <a
            href={`tel:${PHONE.replace(/-/g, '')}`}
            className="flex flex-1 items-center justify-center rounded-2xl border-2 border-gray-900 bg-white py-4 text-base font-bold text-gray-900 transition hover:bg-gray-50 sm:min-h-[3.25rem]"
          >
            전화로 문의하기
          </a>
        </div>
      </div>
    </section>
  );
}
