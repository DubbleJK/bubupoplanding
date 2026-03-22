import ServicePageLayout from '@/components/service-detail/ServicePageLayout';

const ELECTION_FEATURES = [
  { title: '당일 제작 가능', desc: '급하신 분들도 당일 제작으로 맞춰드립니다.' },
  {
    title: '소량 주문 가능',
    desc: '소량부터 대량까지, 부담 없이 문의하세요.',
  },
  {
    title: '10년 제작 경험',
    desc: '오랜시간 회장, 부회장, 반장을 만들어 온 경험으로 제작해드립니다.',
  },
  {
    title: '다양한 소품 및 아이디어',
    desc: '학교에 맞게, 학생에 맞게, 다양한 아이디어를 공유합니다.',
  },
];

const FAQ = [
  {
    q: '선거용품도 당일 제작이 가능한가요?',
    a: '품목·수량·규격에 따라 다릅니다. 급하신 건은 카카오톡으로 필요한 품목과 일정을 알려주시면 당일 가능 여부를 바로 안내해 드립니다.',
  },
  {
    q: '규격·문구 가이드에 맞춰 제작할 수 있나요?',
    a: '가능합니다. 관련 규정·가이드가 있으시면 함께 보내주시면 맞춰 진행해 드립니다.',
  },
  {
    q: '소량만 필요한데 문의해도 될까요?',
    a: '네. 소량부터 대량까지 문의 가능합니다. 품목별로 견적과 일정을 안내해 드립니다.',
  },
  {
    q: '대량도 당일 출고가 되나요?',
    a: '네 가능합니다. 품목·수량에 따라 출고 가능 여부가 달라지니 빠르게 문의 주시면 답변 드리겠습니다.',
  },
];

const PACKAGES = [
  { title: '선거용품 소량', desc: '당일 제작 가능', tag: '인기' as const },
  { title: '선거용품 기본', desc: '문의 후 견적', tag: null },
  { title: '맞춤 선거용품', desc: '원하시는 품목 문의', tag: null },
];

export const metadata = {
  title: '선거용품 제작 | 부부피오피',
  description: '선거용품 소량·당일 제작. 부부피오피에 문의해 주세요.',
};

export default function ElectionPage() {
  return (
    <ServicePageLayout
      title="선거용품"
      subtitle="선거용품"
      heroTitleAccent
      description={
        <>
          <div className="space-y-2 sm:space-y-2.5">
            <p className="text-lg font-extrabold leading-tight tracking-tight text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.65)] sm:text-xl sm:leading-snug md:text-[1.5rem] md:leading-snug">
              “선거 준비, 어디 맡기실지 고민되시나요?”
            </p>
            <p className="text-lg font-extrabold leading-tight tracking-tight text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.65)] sm:text-xl sm:leading-snug md:text-[1.5rem] md:leading-snug">
              “회장·부회장을 만들어온 선택, 지금도 이어지고 있습니다”
            </p>
            <p className="pt-0.5 text-base font-extrabold leading-snug text-orange-400 [filter:drop-shadow(0_1px_2px_rgba(0,0,0,0.85))] sm:text-lg sm:pt-1">
              지금 문의하면 바로 제작 진행됩니다
            </p>
          </div>
          <div className="mt-4 border-t border-white/30 pt-4 text-white sm:mt-5 sm:pt-4">
            <p className="text-base font-normal leading-relaxed text-white/95 sm:text-lg">
              전국 제작 · 퀵 발송 대응
            </p>
            <p className="mt-1.5 text-base font-normal leading-relaxed text-white/90 sm:mt-2 sm:text-lg">
              다양한 선거용품 빠르게 당일 제작
            </p>
          </div>
        </>
      }
      heroVideo={{ src: '/election-hero-video.mp4' }}
      featureItems={ELECTION_FEATURES}
      packages={PACKAGES}
      faqTitle="선거용품 FAQ"
      faqItems={FAQ}
      showClientDesignsCta
      portfolioGroups={[
        { groupTitle: '포스터 시안', items: [{ title: '선거 현수막' }] },
        { groupTitle: '피켓 시안', items: [{ title: '선거 배너' }] },
        { groupTitle: '용품 시안', items: [{ title: '명함·전단 세트' }] },
      ]}
    />
  );
}
