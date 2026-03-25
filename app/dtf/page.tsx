import type { Metadata } from 'next';
import ServicePageLayout from '@/components/service-detail/ServicePageLayout';
import type { FeatureSectionItem } from '@/components/landing/FeatureSection';
import { buildPageMetadata } from '@/lib/seo';

const DTF_FEATURES: FeatureSectionItem[] = [
  {
    title: '선명한 고해상도 출력',
    desc: '작은 글씨와 디테일까지 깨짐 없이 또렷하게 표현됩니다.',
  },
  {
    title: '다양한 원단 완벽 대응',
    desc: '면, 폴리, 혼방까지 어떤 소재든 깔끔하게 전사됩니다.',
  },
  {
    title: '소량부터 대량까지 제작 가능',
    desc: '30cm부터 부담 없이 제작 가능합니다.',
  },
  {
    title: '빠른 제작 & 당일 출력 가능',
    desc: '급한 주문도 걱정 없이 빠르게 제작해드립니다.',
  },
];

const FAQ = [
  {
    q: 'DTF 출력도 당일 제작이 가능한가요?',
    a: '파일 유무, 디자인 작업 진행에 따라 다릅니다. 급하신 건은 카카오톡으로 이미지, 디자인 파일 등을 보내주시면 당일 가능 여부를 바로 안내해 드립니다.',
  },
  {
    q: 'AI 이미지·PNG만 있어도 되나요?',
    a: '가능합니다. JPG·PNG·PDF 등으로 보내주시면 되고, 전사에 맞는 해상도인지 확인해 드립니다.',
  },
  {
    q: '소량·샘플만 먼저 가능한가요?',
    a: '네. 소량부터 대량까지 문의 가능합니다. 샘플 후 본 제작도 상담해 드립니다.',
  },
  {
    q: '대량도 당일 출고가 되나요?',
    a: '네 가능합니다. 원단·사이즈·수량에 따라 출고 가능 여부가 달라지니 빠르게 문의 주시면 답변 드리겠습니다.',
  },
];

const PACKAGES = [
  {
    title: 'DTF샘플 패키지',
    price: '6,000원',
    desc: '사이즈: 30×85cm / 수량: 1매',
    tag: '인기' as const,
  },
  {
    title: 'DTF 기본 패키지',
    price: '14,000원~',
    desc: '사이즈: 폭 85cm / 1m당 금액',
    tag: null,
  },
];

export const metadata: Metadata = buildPageMetadata({
  title: 'DTF 출력',
  description: 'DTF 전사 인쇄 소량·당일 제작. 부부피오피가 빠르게 만들어 드립니다.',
  path: '/dtf',
  keywords: ['DTF', '전사 인쇄', '티셔츠 전사'],
});

export default function DtfPage() {
  return (
    <ServicePageLayout
      title="DTF 출력"
      subtitle="DTF 출력"
      featureItems={DTF_FEATURES}
      heroTitleAccent
      description={
        <>
          <div className="space-y-2 sm:space-y-2.5">
            <p className="text-lg font-extrabold leading-tight tracking-tight text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.65)] sm:text-xl sm:leading-snug md:text-[1.5rem] md:leading-snug">
              “퀄리티는 중요하고, 시간은 없으신가요?”
            </p>
            <p className="text-lg font-extrabold leading-tight tracking-tight text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.65)] sm:text-xl sm:leading-snug md:text-[1.5rem] md:leading-snug">
              “출력 문제부터 커스텀 제작까지, 한 번에 해결합니다”
            </p>
            <p className="pt-0.5 text-base font-extrabold leading-snug text-orange-400 [filter:drop-shadow(0_1px_2px_rgba(0,0,0,0.85))] sm:text-lg sm:pt-1">
              지금 문의하면 바로 출력 진행됩니다.
            </p>
          </div>
          <div className="mt-4 border-t border-white/30 pt-4 text-white sm:mt-5 sm:pt-4">
            <p className="text-base font-normal leading-relaxed text-white/95 sm:text-lg">
              소량부터 대량까지 모두 대응
            </p>
            <p className="mt-1.5 text-base font-normal leading-relaxed text-white/90 sm:mt-2 sm:text-lg">
              고품질 DTF 출력 · 의류 제작 한 번에 진행
            </p>
          </div>
        </>
      }
      heroVideo={{ src: '/dtf-hero-video.mp4' }}
      packages={PACKAGES}
      afterPackages={
        <section className="section pt-0">
          <div className="container flex justify-center">
            <a
              href="/dtf-guide"
              className="inline-flex min-h-[3.4rem] items-center justify-center rounded-2xl bg-primary px-10 py-3.5 text-sm font-extrabold tracking-tight text-white shadow-[0_8px_24px_rgba(0,0,0,0.16)] ring-2 ring-primary/15 transition hover:bg-primary-hover sm:min-h-[3.7rem] sm:px-14 sm:text-base"
            >
              <span className="mr-1 text-lg leading-none sm:text-xl" aria-hidden>
                📁
              </span>
              DTF 파일 제작 가이드 보기
            </a>
          </div>
        </section>
      }
      faqTitle="DTF 출력 FAQ"
      faqItems={FAQ}
      portfolioGroups={[
        {
          groupTitle: '',
          items: [
            {
              title: '다양한 소재',
              imageSrc: '/images/portfolio-dtf-다양한-소재.png',
            },
            {
              title: '90cm대용량 폭',
              imageSrc: '/images/portfolio-dtf-90cm-대용량-폭.png',
            },
            {
              title: '정확한 핀',
              imageSrc: '/images/portfolio-dtf-정확한-핀.png',
            },
          ],
        },
      ]}
    />
  );
}
