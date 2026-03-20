import ServicePageLayout from '@/components/service-detail/ServicePageLayout';

const FAQ = [
  {
    q: '배너·현수막도 당일 제작이 가능한가요?',
    a: '규격·수량·재질에 따라 다릅니다. 급하신 건은 카카오톡으로 가로·세로 크기·용도를 알려주시면 당일 가능 여부를 바로 안내해 드립니다.',
  },
  {
    q: '디자인 파일은 어떤 형식으로내면 되나요?',
    a: 'AI·PDF·JPG·PNG 등 여러 형식 가능합니다. 고해상도일수록 출력 품질에 유리합니다.',
  },
  {
    q: '소량·짧은 행사용도 문의해도 될까요?',
    a: '네. 소량부터 대량까지 제작이 가능하며 언제든 문의 가능합니다.',
  },
  {
    q: '대량도 당일 출고가 되나요?',
    a: '네 가능합니다. 규격·수량·재질에 따라 출고 가능 여부가 달라지니 빠르게 문의 주시면 답변 드리겠습니다.',
  },
];

const PACKAGES = [
  {
    title: '당일 배너 출력',
    price: '22,000원~',
    desc: '사이즈: 600×1800 / 재질: 패트 / 수량: 1매',
    tag: '인기' as const,
  },
  {
    title: '내부 배너 거치대',
    price: '15,000원~',
    desc: '출력물 사이즈: 600×1800 / 수량: 1개',
    tag: null,
  },
  {
    title: '외부 배너 거치대(물통)',
    price: '25,000원~',
    desc: '출력물 사이즈: 600×1800 / 수량: 1개',
    tag: null,
  },
];

export const metadata = {
  title: '배너 제작 | 부부피오피',
  description: '배너, 현수막 당일·소량 제작. 부부피오피가 빠르게 만들어 드립니다.',
};

export default function BannerPage() {
  return (
    <ServicePageLayout
      title="배너"
      subtitle="배너"
      heroTitleAccent
      description={
        <>
          <div className="space-y-2 sm:space-y-2.5">
            <p className="text-lg font-extrabold leading-tight tracking-tight text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.65)] sm:text-xl sm:leading-snug md:text-[1.5rem] md:leading-snug">
              “오늘 써야 하는 배너, 아직 없으신가요?”
            </p>
            <p className="text-lg font-extrabold leading-tight tracking-tight text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.65)] sm:text-xl sm:leading-snug md:text-[1.5rem] md:leading-snug">
              “지금 바로 제작 가능합니다”
            </p>
            <p className="pt-0.5 text-base font-extrabold leading-snug text-orange-400 [filter:drop-shadow(0_1px_2px_rgba(0,0,0,0.85))] sm:text-lg sm:pt-1">
              문의 즉시 출력 진행
            </p>
          </div>
          <div className="mt-4 border-t border-white/30 pt-4 text-white sm:mt-5 sm:pt-4">
            <p className="text-base font-normal leading-relaxed text-white/95 sm:text-lg">
              빠른 제작 / 선명한 출력 / 일정 맞춤 대응
            </p>
          </div>
        </>
      }
      heroVideo={{ src: '/banner-hero-video.mp4' }}
      packages={PACKAGES}
      faqTitle="배너·현수막 FAQ"
      faqItems={FAQ}
      portfolioItems={[
        {
          title: '카페 배너',
          imageSrc: '/images/portfolio-banner-cafe.png',
        },
        {
          title: '행사 배너',
          imageSrc: '/images/portfolio-banner-event.png',
        },
        {
          title: '정육점 배너',
          imageSrc: '/images/portfolio-banner-butcher.png',
        },
        {
          title: '상가 배너',
          imageSrc: '/images/portfolio-banner-store.png',
        },
        {
          title: '대량 배너',
          imageSrc: '/images/portfolio-banner-bulk.png',
        },
      ]}
    />
  );
}
