import type { Metadata } from 'next';
import ServicePageLayout from '@/components/service-detail/ServicePageLayout';
import { buildPageMetadata } from '@/lib/seo';

const CARD_FEATURES = [
  { title: '당일 제작 가능', desc: '급하신 분들도 당일 제작으로 맞춰드립니다.' },
  {
    title: '소량 주문 가능',
    desc: '소량부터 대량까지, 부담 없이 문의하세요.',
  },
  {
    title: '파일만 있으면 초고속 제작',
    desc: '인쇄까지 바로 이어지면 30분 만에도 제작 가능한 케이스가 많습니다.',
  },
  {
    title: '이미지만 있어도 디자인 OK',
    desc: '로고 복원·간단 레이아웃 수정까지 맞춤으로 도와드립니다.',
  },
];

const FAQ = [
  {
    q: '명함도 당일 제작이 가능한가요?',
    a: '수량·용지·후가공에 따라 다릅니다. 급하신 건은 카카오톡으로 매수·용지 희망 여부를 알려주시면 당일 가능 여부를 바로 안내해 드립니다.',
  },
  {
    q: '디자인 파일이 없어도 되나요?',
    a: '가능합니다. 이미지·문구만 있어도 상담 후 진행할 수 있습니다. 간단 레이아웃이 필요하면 말씀해 주세요.',
  },
  {
    q: '소량만 인쇄해도 될까요?',
    a: '네. 소량부터 대량까지 문의 가능합니다. 수량에 맞춰 견적을 안내해 드립니다.',
  },
  {
    q: '대량도 당일 출고가 되나요?',
    a: '네 가능합니다. 용지·수량에 따라 출고 가능 여부가 달라지니 빠르게 문의 주시면 답변 드리겠습니다.',
  },
];

const PACKAGES = [
  {
    title: '당일명함 100매 제작',
    price: '20,000원~',
    desc: '사이즈: 90×50(mm) · 재질: 수입지',
    tag: '인기' as const,
  },
  {
    title: '당일명함 200매 제작',
    price: '25,000원~',
    desc: '사이즈: 90×50(mm) · 재질: 수입지',
    tag: null,
  },
  {
    title: '영업용 명함 500매 제작',
    price: '15,000원~',
    desc: (
      <>
        사이즈: 90×50(mm) · 재질: 스노우지 ·{' '}
        <strong className="font-bold text-gray-900">제작 기간: 2~3일</strong>
      </>
    ),
    tag: null,
  },
];

export const metadata: Metadata = buildPageMetadata({
  title: '명함 제작',
  description: '명함 소량·당일 제작. 부부피오피가 빠르게 만들어 드립니다.',
  path: '/card',
  keywords: ['명함', '당일 명함', '소량 명함'],
});

export default function CardPage() {
  return (
    <ServicePageLayout
      title="명함"
      subtitle="명함"
      heroTitleAccent
      description={
        <>
          <div className="space-y-2 sm:space-y-2.5">
            <p className="text-lg font-extrabold leading-tight tracking-tight text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.65)] sm:text-xl sm:leading-snug md:text-[1.5rem] md:leading-snug">
              “행사·미팅 앞두고 명함이 급하신가요?”
            </p>
            <p className="text-lg font-extrabold leading-tight tracking-tight text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.65)] sm:text-xl sm:leading-snug md:text-[1.5rem] md:leading-snug">
              “파일만 있으면 당일 인쇄까지 빠르게 이어집니다”
            </p>
            <p className="pt-0.5 text-base font-extrabold leading-snug text-orange-400 [filter:drop-shadow(0_1px_2px_rgba(0,0,0,0.85))] sm:text-lg sm:pt-1">
              지금 문의하면 제작 일정 바로 잡아드립니다
            </p>
          </div>
          <div className="mt-4 border-t border-white/30 pt-4 text-white sm:mt-5 sm:pt-4">
            <p className="text-base font-normal leading-relaxed text-white/95 sm:text-lg">
              표준 90×50(mm) 등 규격 맞춤 인쇄
            </p>
            <p className="mt-1.5 text-base font-normal leading-relaxed text-white/90 sm:mt-2 sm:text-lg">
              로고 복원·문구 수정도 편하게 상담 가능
            </p>
          </div>
        </>
      }
      heroImage={{
        src: '/images/card-hero.png',
        alt: '명함 인쇄·제작',
      }}
      featureItems={CARD_FEATURES}
      packages={PACKAGES}
      faqTitle="명함 제작 FAQ"
      faqItems={FAQ}
      portfolioGroups={[
        {
          groupTitle: '',
          items: [
            {
              title: '상가 명함',
              imageSrc: '/images/portfolio-card-shopping.png',
            },
            {
              title: '학교 명함',
              imageSrc: '/images/portfolio-card-school.png',
            },
            {
              title: '부동산 명함',
              imageSrc: '/images/portfolio-card-realestate.png',
            },
            {
              title: '경호 업체 명함',
              imageSrc: '/images/portfolio-card-security.png',
            },
            {
              title: '병원 명함',
              imageSrc: '/images/portfolio-card-hospital.png',
            },
          ],
        },
      ]}
    />
  );
}
