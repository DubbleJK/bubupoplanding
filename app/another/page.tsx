import ServicePageLayout from '@/components/service-detail/ServicePageLayout';

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

const PACKAGES = [
  { title: '기타 소량', desc: '당일 제작 가능', tag: '인기' as const },
  { title: '기타 기본', desc: '문의 후 견적', tag: null },
  { title: '맞춤 제작', desc: '원하시는 형태 문의', tag: null },
];

export const metadata = {
  title: '기타 굿즈 제작 | 부부피오피',
  description: '다양한 굿즈·인쇄물 소량·당일 제작. 부부피오피에 문의해 주세요.',
};

export default function AnotherPage() {
  return (
    <ServicePageLayout
      title="기타"
      subtitle="기타"
      description="스티커, 티셔츠, 명함 외 원하시는 굿즈나 인쇄물이 있으시면 편하게 문의해 주세요."
      packages={PACKAGES}
      faqTitle="기타 제작 FAQ"
      faqItems={FAQ}
      portfolioItems={[
        { title: '맞춤 굿즈 세트' },
        { title: '소량 기념 굿즈' },
        { title: '기타 인쇄물' },
      ]}
    />
  );
}
