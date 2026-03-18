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
    a: '네. 소량부터 대형·다량까지 문의 가능합니다. 일정에 맞춰 제작 일정을 안내해 드립니다.',
  },
  {
    q: '대량도 당일 출고가 되나요?',
    a: '네 가능합니다. 규격·수량·재질에 따라 출고 가능 여부가 달라지니 빠르게 문의 주시면 답변 드리겠습니다.',
  },
];

const PACKAGES = [
  { title: '배너 기본', desc: '당일 제작 가능', tag: '인기' as const },
  { title: '현수막', desc: '규격 맞춤 제작', tag: null },
  { title: '실사 출력', desc: '고해상도 출력', tag: null },
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
      description="배너, 현수막 등 대형 인쇄물. 규격과 수량에 따라 당일 제작 가능합니다."
      packages={PACKAGES}
      faqTitle="배너·현수막 FAQ"
      faqItems={FAQ}
      portfolioItems={[
        { title: '실내용 롤배너' },
        { title: '야외 현수막' },
        { title: '소량 이벤트 배너' },
      ]}
    />
  );
}
