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
  subheading = '속도·품질·맞춤까지 한 번에 챙깁니다.',
}: Props) {
  return (
    <section className="section bg-white">
      <div className="container">
        <h2 className="section-title">부부피오피 강점</h2>
        <p className="section-desc">{subheading}</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {items.map(({ title, desc }, i) => (
            <div
              key={`${title}-${i}`}
              className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-lg font-bold text-white"
                aria-hidden
              >
                ✓
              </span>
              <div>
                <h3 className="font-bold text-gray-900">{title}</h3>
                <p className="mt-1 text-sm text-gray-600">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
