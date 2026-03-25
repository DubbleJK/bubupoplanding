import type { Metadata } from 'next';
import ServicePageLayout from '@/components/service-detail/ServicePageLayout';
import { buildPageMetadata } from '@/lib/seo';

const UV_FEATURES = [
  { title: '당일 제작 가능', desc: '급하신 분들도 당일 제작으로 맞춰드립니다.' },
  {
    title: '소량 주문 가능',
    desc: '소량부터 대량까지, 부담 없이 문의하세요.',
  },
  {
    title: '일본 브랜드 UV 프린터',
    desc: '색감과 디테일이 또렷한 고품질 인쇄를 제공합니다.',
  },
  {
    title: '검증된 최적 필름 사용',
    desc: '용도별 테스트로 내구성과 접착력을 안정적으로 맞춥니다.',
  },
];

const FAQ = [
  {
    q: 'UV 스티커도 당일 제작이 가능한가요?',
    a: '사이즈와 수량에 따라 차이가 있지만, 대량 건이 아닌 경우 당일 출고를 원칙으로 진행 중입니다. 급하신 건이시라면 카카오톡으로 매수와 사이즈 알려주시면 당일 가능 여부를 바로 안내드리겠습니다.',
  },
  {
    q: '디자인 파일이 없거나 AI 이미지만 있는데도 되나요?',
    a: '가능합니다. JPG·PNG·PDF 등으로 보내주시면 되고, UV 인쇄에 맞는 해상도인지 확인해 드립니다.',
  },
  {
    q: '소량만 필요한데 문의해도 될까요?',
    a: '네. 소량부터 대량까지 모두 문의 가능합니다. 수량에 맞춰 재질·규격을 추천하고 견적을 안내해 드립니다.',
  },
  {
    q: '대량도 당일 출고가 되나요?',
    a: '네 가능합니다. 용지·재질, 스티커 사이즈에 따라 출고 가능 여부가 결정되니 빠르게 문의 주시면 답변 드리겠습니다.',
  },
];

const PACKAGES = [
  {
    title: '미니 A5 사이즈',
    price: '4,900원~',
    desc: '사이즈: 148×210(mm)',
    tag: '인기' as const,
  },
  {
    title: '기본 A4 사이즈',
    price: '7,900원~',
    desc: '사이즈: 297×210(mm)',
    tag: null,
  },
  {
    title: 'A3 사이즈',
    price: '13,900원~',
    desc: '사이즈: 420×297(mm)',
    tag: null,
  },
];

const PACKAGES_BELOW_NOTE =
  '스티커 파일 사이 간격과 전체 외곽 안쪽으로\n사방 5mm 이상의 간격을 포함해 주세요.';

export const metadata: Metadata = buildPageMetadata({
  title: 'UV 스티커 제작',
  description:
    'UV 인쇄 스티커 소량·당일 제작. 유리·아크릴 등에 강한 내구성. 부부피오피.',
  path: '/uv-sticker',
  keywords: ['UV 스티커', '유리창 스티커', '아크릴 인쇄'],
});

export default function UvStickerPage() {
  return (
    <ServicePageLayout
      title="UV 스티커"
      subtitle="UV 스티커"
      heroTitleAccent
      description={
        <>
          <div className="space-y-2 sm:space-y-2.5">
            <p className="text-lg font-extrabold leading-tight tracking-tight text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.65)] sm:text-xl sm:leading-snug md:text-[1.5rem] md:leading-snug">
              “같은 UV라도 결과는 다릅니다”
            </p>
            <p className="text-lg font-extrabold leading-tight tracking-tight text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.65)] sm:text-xl sm:leading-snug md:text-[1.5rem] md:leading-snug">
              “출력 안정성과 디테일에서 차이를 느껴보세요”
            </p>
            <p className="pt-0.5 text-base font-extrabold leading-snug text-orange-400 [filter:drop-shadow(0_1px_2px_rgba(0,0,0,0.85))] sm:text-lg sm:pt-1">
              지금 문의하면 바로 제작 진행됩니다
            </p>
          </div>
          <div className="mt-4 border-t border-white/30 pt-4 text-white sm:mt-5 sm:pt-4">
            <p className="text-base font-normal leading-relaxed text-white/95 sm:text-lg">
              작은 글씨까지 선명한 고해상도 출력
            </p>
            <p className="mt-1.5 text-base font-normal leading-relaxed text-white/90 sm:mt-2 sm:text-lg">
              스크래치에 강하고 오래가는 프리미엄 스티커
            </p>
          </div>
        </>
      }
      heroVideo={{ src: '/uv-sticker-video.mp4' }}
      featureItems={UV_FEATURES}
      packages={PACKAGES}
      packagesBelowNote={PACKAGES_BELOW_NOTE}
      faqTitle="UV 스티커 제작 FAQ"
      faqItems={FAQ}
      portfolioGroups={[
        {
          groupTitle: '',
          items: [
            { title: '매장 유리창 UV' },
            { title: '아크릴 표지 UV' },
            { title: '소량 프로모 스티커' },
          ],
        },
      ]}
    />
  );
}
