import ServicePageLayout from '@/components/service-detail/ServicePageLayout';

const FAQ = [
  {
    q: 'DTF 출력도 당일 제작이 가능한가요?',
    a: '수량·원단·사이즈에 따라 다릅니다. 급하신 건은 카카오톡으로 이미지·부착할 품목을 알려주시면 당일 가능 여부를 바로 안내해 드립니다.',
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
  { title: 'DTF 소량', desc: '당일 제작 가능', tag: '인기' as const },
  { title: 'DTF 대량', desc: '견적 문의', tag: null },
  { title: '맞춤 DTF', desc: '원단·사이즈 선택', tag: null },
];

export const metadata = {
  title: 'DTF 출력 | 부부피오피',
  description: 'DTF 전사 인쇄 소량·당일 제작. 부부피오피가 빠르게 만들어 드립니다.',
};

export default function DtfPage() {
  return (
    <ServicePageLayout
      title="DTF 출력"
      subtitle="DTF출력"
      description="DTF 전사로 소량부터 다양한 의류·굿즈에 인쇄 가능. 당일 제작도 가능해요."
      packages={PACKAGES}
      faqTitle="DTF 출력 FAQ"
      faqItems={FAQ}
      portfolioItems={[
        { title: '후드티 DTF 전사' },
        { title: '에코백 DTF 전사' },
        { title: '소량 샘플 출력' },
      ]}
    />
  );
}
