const STEPS = [
  { num: 1, title: '상담 요청', desc: '카카오톡 또는 전화로 문의해 주세요.' },
  { num: 2, title: '내용 확인', desc: '요청 내용과 수량을 확인합니다.' },
  { num: 3, title: '시안 전달 및 확인', desc: '디자인 시안을 보내드리고 최종 확인합니다.' },
  { num: 4, title: '제작 및 출고', desc: '제작 후 배송해 드립니다.' },
];

export default function ProcessSection() {
  return (
    <section className="section bg-white">
      <div className="container">
        <h2 className="section-title">주문 방법</h2>
        <p className="section-desc max-w-2xl">
          카톡·전화로 요청만 주시면, 확인부터 출고까지 단계별로 안내해 드립니다.
        </p>

        {/* 모바일: 번호 + 카드 한 줄, 단계 사이 연결선 */}
        <ol
          className="mt-8 list-none space-y-0 pl-0 sm:hidden"
          aria-label="주문 진행 단계"
        >
          {STEPS.map(({ num, title, desc }, i) => (
            <li key={num} className="relative flex gap-3">
              <div className="flex w-[3.25rem] shrink-0 flex-col items-center">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-extrabold text-white shadow-[0_4px_14px_rgba(234,88,12,0.35)] ring-4 ring-orange-100"
                  aria-hidden
                >
                  {num}
                </span>
                {i < STEPS.length - 1 ? (
                  <span
                    className="mt-2 mb-2 block w-0.5 flex-1 min-h-[1.25rem] rounded-full bg-gradient-to-b from-primary/45 to-primary/15"
                    aria-hidden
                  />
                ) : null}
              </div>
              <div
                className={`min-w-0 flex-1 ${i < STEPS.length - 1 ? 'pb-6' : 'pb-0'}`}
              >
                <div className="rounded-2xl border border-gray-200/90 bg-white py-4 pl-4 pr-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)] sm:pl-5 sm:pr-5">
                  <p className="text-[0.8125rem] font-bold uppercase tracking-[0.12em] text-primary">
                    Step {num}
                  </p>
                  <h3 className="mt-2 text-[1.125rem] font-bold leading-snug tracking-tight text-gray-900">
                    {title}
                  </h3>
                  <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-gray-600">
                    {desc}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        {/* 태블릿·데스크톱: 가로 플로우 */}
        <div className="mt-8 hidden sm:block">
          <ol
            className="m-0 flex list-none flex-col gap-6 pl-0 lg:flex-row lg:items-stretch lg:gap-2 lg:gap-y-0"
            aria-label="주문 진행 단계"
          >
            {STEPS.map(({ num, title, desc }, i) => (
              <li key={num} className="contents lg:contents">
                <div className="flex flex-1 flex-col rounded-2xl border border-gray-200/90 bg-white p-5 text-left shadow-[0_2px_12px_rgba(0,0,0,0.04)] lg:min-h-[11rem] lg:p-5">
                  <div className="flex items-start gap-3 lg:flex-col lg:items-center lg:text-center">
                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-base font-extrabold text-white shadow-[0_4px_12px_rgba(234,88,12,0.3)] ring-4 ring-orange-100/80 lg:mx-auto"
                      aria-hidden
                    >
                      {num}
                    </span>
                    <div className="min-w-0 flex-1 lg:w-full">
                      <p className="text-[0.75rem] font-bold uppercase tracking-[0.14em] text-primary lg:text-center">
                        Step {num}
                      </p>
                      <h3 className="mt-1.5 text-lg font-bold leading-snug text-gray-900 lg:text-center lg:text-[1.0625rem] xl:text-lg">
                        {title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-gray-600 lg:text-center lg:text-[0.9375rem]">
                        {desc}
                      </p>
                    </div>
                  </div>
                </div>
                {i < STEPS.length - 1 ? (
                  <div
                    className="hidden shrink-0 items-center justify-center self-center px-1 lg:flex"
                    aria-hidden
                  >
                    <svg
                      className="h-7 w-7 text-primary/70"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
