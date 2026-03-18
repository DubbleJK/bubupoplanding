import ServicePageLayout from '@/components/service-detail/ServicePageLayout';

const FAQ = [
  {
    q: '굿즈도 당일 제작이 가능한가요?',
    a: '품목·수량·재질에 따라 다릅니다. 급하신 건은 카카오톡으로 원하시는 굿즈 종류와 매수를 알려주시면 당일 가능 여부를 바로 안내해 드립니다.',
  },
  {
    q: '이미지·캐릭터만 있어도 제작이 되나요?',
    a: '가능합니다. AI·JPG·PNG 등으로 보내주시면 되고, 제작에 맞는 해상도인지 확인해 드립니다.',
  },
  {
    q: '소량·샘플만 먼저 가능한가요?',
    a: '네. 소량부터 대량까지 문의 가능합니다. 키링·배지 등 품목에 맞춰 견적을 안내해 드립니다.',
  },
  {
    q: '대량도 당일 출고가 되나요?',
    a: '네 가능합니다. 품목·재질·수량에 따라 출고 가능 여부가 달라지니 빠르게 문의 주시면 답변 드리겠습니다.',
  },
];

const PACKAGES = [
  { title: '굿즈 소량', desc: '당일 제작 가능', tag: '인기' as const },
  { title: '굿즈 기본', desc: '다양한 형태', tag: null },
  { title: '맞춤 굿즈', desc: '문의 후 견적', tag: null },
];

export const metadata = {
  title: '굿즈 제작 | 부부피오피',
  description:
    '키링, 배지 등 굿즈 소량·당일 제작. 부부피오피가 빠르게 만들어 드립니다.',
};

export default function GoodsPage() {
  return (
    <ServicePageLayout
      title="굿즈"
      subtitle="굿즈"
      description="키링, 배지 등 다양한 굿즈. 당일 제작 가능한 품목이에요."
      packages={PACKAGES}
      faqTitle="굿즈 제작 FAQ"
      faqItems={FAQ}
      portfolioItems={[
        { title: '아크릴 키링' },
        { title: '원형 배지' },
        { title: '기타 소량 굿즈' },
      ]}
    />
  );
}
