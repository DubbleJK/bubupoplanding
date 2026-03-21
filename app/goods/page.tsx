import ServicePageLayout from '@/components/service-detail/ServicePageLayout';

const KAKAO_URL =
  process.env.NEXT_PUBLIC_KAKAO_URL || 'https://pf.kakao.com/_xxxxx';

const GOODS_FEATURES = [
  { title: '당일 제작 가능', desc: '급하신 분들도 당일 제작으로 맞춰드립니다.' },
  {
    title: '소량 주문 가능',
    desc: '소량부터 대량까지, 부담 없이 문의하세요.',
  },
  {
    title: '10년 제작 경험',
    desc: '당일 제작 납품 지연 없는 노하우로 작업해드립니다.',
  },
  {
    title: '다양한 굿즈/답례품/판촉물',
    desc: '키링 · 배지 · 우산 · 볼펜 등 다양한 제품 제작 가능한 원스톱 시스템',
  },
];

const FAQ = [
  {
    q: '굿즈도 당일 제작이 가능한가요?',
    a: '품목·수량·재질에 따라 다릅니다. 급하신 건은 카카오톡으로 원하시는 굿즈 종류와 매수를 알려주시면 당일 가능 여부를 바로 안내해 드립니다.',
  },
  {
    q: '이미지·캐릭터만 있어도 제작이 되나요?',
    a: '가능합니다. AI·JPG·PNG 등으로 보내주시면 되고, 제작에 맞는 해상도인지 확인해 드립니다.',
  },
  {
    q: '소량·샘플만 먼저 가능한가요?',
    a: '네. 소량부터 대량까지 문의 가능합니다. 키링·배지 등 품목에 맞춰 견적을 안내해 드립니다.',
  },
  {
    q: '대량도 당일 출고가 되나요?',
    a: '네 가능합니다. 품목·재질·수량에 따라 출고 가능 여부가 달라지니 빠르게 문의 주시면 답변 드리겠습니다.',
  },
];

export const metadata = {
  title: '굿즈 제작 | 부부피오피',
  description:
    '키링, 배지 등 굿즈 소량·당일 제작. 부부피오피가 빠르게 만들어 드립니다.',
};

export default function GoodsPage() {
  return (
    <ServicePageLayout
      title="굿즈"
      subtitle="굿즈"
      description={
        <>
          <div className="space-y-2 sm:space-y-2.5">
            <p className="text-lg font-extrabold leading-tight tracking-tight text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.65)] sm:text-xl sm:leading-snug md:text-[1.5rem] md:leading-snug">
              “굿즈 제작 때문에 시간 낭비하고 계신가요?”
            </p>
            <p className="text-lg font-extrabold leading-tight tracking-tight text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.65)] sm:text-xl sm:leading-snug md:text-[1.5rem] md:leading-snug">
              “한 번에 맡기고 편하게 운영하세요”
            </p>
            <p className="pt-0.5 text-base font-extrabold leading-snug text-orange-400 [filter:drop-shadow(0_1px_2px_rgba(0,0,0,0.85))] sm:text-lg sm:pt-1">
              지금 문의하면 바로 생산 연결됩니다
            </p>
          </div>
          <div className="mt-4 border-t border-white/30 pt-4 text-white sm:mt-5 sm:pt-4">
            <p className="text-base font-normal leading-relaxed text-white/95 sm:text-lg">
              키링 · 배지 · 우산 · 볼펜 등
            </p>
            <p className="mt-1.5 text-base font-normal leading-relaxed text-white/90 sm:mt-2 sm:text-lg">
              대량 제작 / 일정 맞춤 / 한 번에 생산 가능
            </p>
          </div>
        </>
      }
      heroVideo={{ src: '/goods-hero-video.mp4' }}
      featureItems={GOODS_FEATURES}
      hidePackages
      afterPackages={
        <section className="section section-muted pt-0">
          <div className="container">
            <div className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm sm:p-8">
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                <span className="block">발주 스트레스 없이 원스톱 진행</span>
                <span className="mt-1 block">견적부터 생산 일정까지 한 번에 관리하세요</span>
              </h2>
              <p className="mt-3 text-base leading-relaxed text-gray-700 sm:text-lg">
                <span className="block">품목별 조건을 따로 맞출 필요 없이</span>
                <span className="mt-1 block">원하시는 수량 기준으로 최적 단가와 일정을 제안드립니다.</span>
              </p>
              <a
                href={KAKAO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex min-h-[52px] items-center justify-center rounded-2xl bg-[#FEE500] px-8 py-3 text-base font-extrabold text-[#191919] transition hover:opacity-90 sm:mt-6"
              >
                카카오톡으로 문의하기
              </a>
            </div>
          </div>
        </section>
      }
      faqTitle="굿즈 제작 FAQ"
      faqItems={FAQ}
      portfolioItems={[
        {
          title: '아크릴 키링',
          imageSrc: '/images/portfolio-goods-acrylic-keyring.png',
        },
        {
          title: '볼펜 인쇄',
          imageSrc: '/images/portfolio-goods-pen-print.png',
        },
        {
          title: '냉장고 자석',
          imageSrc: '/images/portfolio-goods-fridge-magnet.png',
        },
      ]}
    />
  );
}
