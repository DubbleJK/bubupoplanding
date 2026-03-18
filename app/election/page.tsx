import ServicePageLayout from '@/components/service-detail/ServicePageLayout';

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
      description="선거 관련 인쇄물·굿즈가 필요하시면 편하게 문의해 주세요."
      packages={PACKAGES}
      faqTitle="선거용품 FAQ"
      faqItems={FAQ}
      portfolioItems={[
        { title: '선거 현수막' },
        { title: '선거 배너' },
        { title: '명함·전단 세트' },
      ]}
    />
  );
}
