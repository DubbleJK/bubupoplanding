export type FeatureSectionItem = {
  title: string;
  desc: string;
};

const DEFAULT_FEATURES: FeatureSectionItem[] = [
  { title: '당일 제작 가능', desc: '급하신 분들도 당일 제작으로 맞춰드립니다.' },
  {
    title: '소량 주문 가능',
    desc: '소량부터 대량까지, 부담 없이 문의하세요.',
  },
  { title: '10년 제작 경험', desc: '10년 이상 제작 노하우로 빠르고 정확하게 진행합니다.' },
  {
    title: '빠른 소재 선택 & 제작 가능',
    desc: '상황에 맞게 바로 제작 진행해드립니다.',
  },
];

type Props = {
  items?: FeatureSectionItem[];
  /** 없으면 기본 문구 */
  subheading?: string;
};

export default function FeatureSection({
  items = DEFAULT_FEATURES,
  subheading = '당일·소량·경험을 바탕으로, 문의부터 출고까지 빠르게 이어집니다.',
}: Props) {
  return (
    <section className="section bg-white">
      <div className="container">
        <h2 className="section-title">왜 부부피오피인가요</h2>
        <p className="section-desc max-w-2xl">{subheading}</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {items.map(({ title, desc }, i) => (
            <div
              key={`${title}-${i}`}
              className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5"
            >
              <span
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-base font-bold text-white sm:h-10 sm:w-10 sm:text-lg"
                aria-hidden
              >
                ✓
              </span>
              <div className="min-w-0">
                <h3 className="text-[15px] font-bold leading-snug text-gray-900 sm:text-base">
                  {title}
                </h3>
                <p className="mt-1.5 text-[14px] leading-relaxed text-gray-600 text-pretty sm:text-sm">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
