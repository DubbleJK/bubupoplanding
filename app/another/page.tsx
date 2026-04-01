import type { Metadata } from 'next';
import ServicePageLayout from '@/components/service-detail/ServicePageLayout';
import { getPublicKakaoUrl } from '@/lib/contact';
import { buildPageMetadata } from '@/lib/seo';

const FAQ = [
  {
    q: '원하는 품목도 당일 제작이 가능한가요?',
    a: '품목에 따라 다릅니다. 급하신 건은 카카오톡으로 어떤 인쇄물·굿즈가 필요한지 알려주시면 당일 가능 여부를 바로 안내해 드립니다.',
  },
  {
    q: '레퍼런스 사진·설명만 있어도 되나요?',
    a: '가능합니다. 사진·스케치·유사 예시가 있으면 상담 후 제작 방향을 잡아 드립니다.',
  },
  {
    q: '소량만 문의해도 될까요?',
    a: '네. 소량부터 대량까지 편하게 문의해 주세요. 품목에 맞춰 견적을 안내해 드립니다.',
  },
  {
    q: '대량도 당일 출고가 되나요?',
    a: '네 가능합니다. 품목·수량·재질에 따라 출고 가능 여부가 달라지니 빠르게 문의 주시면 답변 드리겠습니다.',
  },
];

export const metadata: Metadata = buildPageMetadata({
  title: '각종 인쇄물 제작',
  description:
    '각종 인쇄물·홍보물 소량·당일 제작. 한 곳에서 용도에 맞게 제작. 부부피오피에 문의해 주세요.',
  path: '/another',
  keywords: ['인쇄물', '홍보물', '소량 인쇄'],
});

export default function AnotherPage() {
  return (
    <ServicePageLayout
      title="각종 인쇄물"
      subtitle="각종 인쇄물"
      heroTitleAccent
      description={
        <>
          <div className="space-y-2 sm:space-y-2.5">
            <p className="text-lg font-extrabold leading-tight tracking-tight text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.65)] sm:text-xl sm:leading-snug md:text-[1.5rem] md:leading-snug">
              “인쇄물, 어디 맡겨야 할지 고민되시나요?”
            </p>
            <p className="text-lg font-extrabold leading-tight tracking-tight text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.65)] sm:text-xl sm:leading-snug md:text-[1.5rem] md:leading-snug">
              “여기 하나면 전부 제작됩니다”
            </p>
            <p className="pt-0.5 text-base font-extrabold leading-snug text-orange-400 [filter:drop-shadow(0_1px_2px_rgba(0,0,0,0.85))] sm:text-lg sm:pt-1">
              지금 문의하면 바로 제작 진행됩니다
            </p>
          </div>
          <div className="mt-4 border-t border-white/30 pt-4 text-white sm:mt-5 sm:pt-4">
            <p className="text-base font-normal leading-relaxed text-white/95 sm:text-lg">
              각종 인쇄물 · 홍보물 제작 가능
            </p>
            <p className="mt-1.5 text-base font-normal leading-relaxed text-white/90 sm:mt-2 sm:text-lg">
              용도에 맞게 한 번에 제작해드립니다
            </p>
          </div>
        </>
      }
      hidePackages
      portfolioVariant="printMisc"
      afterPackages={
        <section className="section section-muted pt-0">
          <div className="container">
            <div className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm sm:p-8">
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                <span className="block">여러 인쇄물, 따로 맡길 필요 없습니다</span>
                <span className="mt-1 block">한 번에 제작하고 한 번에 관리하세요</span>
              </h2>
              <p className="mt-3 text-base leading-relaxed text-gray-700 sm:text-lg">
                <span className="block">품목별로 업체를 나눌 필요 없이</span>
                <span className="mt-1 block">
                  필요한 인쇄물을 한 곳에서 효율적으로 진행해드립니다
                </span>
              </p>
              <a
                href={getPublicKakaoUrl()}
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
      faqTitle="각종 인쇄물 제작 FAQ"
      faqItems={FAQ}
      portfolioGroups={[
        {
          groupTitle: '',
          items: [
            { title: '맞춤 굿즈 세트' },
            { title: '소량 기념 굿즈' },
            { title: '각종 인쇄물' },
          ],
        },
      ]}
    />
  );
}
