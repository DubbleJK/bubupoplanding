import ServicePageLayout from '@/components/service-detail/ServicePageLayout';

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
  { title: '명함 기본', desc: '소량·당일 제작', tag: '인기' as const },
  { title: '명함 고급', desc: '용지 업그레이드', tag: null },
  { title: '맞춤 명함', desc: '디자인 포함', tag: null },
];

export const metadata = {
  title: '명함 제작 | 부부피오피',
  description: '명함 소량·당일 제작. 부부피오피가 빠르게 만들어 드립니다.',
};

export default function CardPage() {
  return (
    <ServicePageLayout
      title="명함"
      subtitle="명함"
      description="소량 명함부터 당일 제작까지. 디자인이 없어도 이미지만 있으면 제작 가능해요."
      packages={PACKAGES}
      faqTitle="명함 제작 FAQ"
      faqItems={FAQ}
      portfolioItems={[
        { title: '기본 명함' },
        { title: '로고 포인트 명함' },
        { title: '두꺼운 용지 명함' },
      ]}
    />
  );
}
