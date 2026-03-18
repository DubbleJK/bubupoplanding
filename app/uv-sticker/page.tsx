import ServicePageLayout from '@/components/service-detail/ServicePageLayout';

const FAQ = [
  {
    q: 'UV 스티커도 당일 제작이 가능한가요?',
    a: '규격·수량·재질에 따라 다릅니다. 급하신 건은 카카오톡으로 사이즈·매수·부착 위치를 알려주시면 당일 가능 여부를 바로 안내해 드립니다.',
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
  { title: 'UV 스티커 소량', desc: '당일 제작 가능', tag: '인기' as const },
  { title: '유리창용 UV', desc: '규격 맞춤', tag: null },
  { title: '맞춤 UV 스티커', desc: '문의 후 견적', tag: null },
];

export const metadata = {
  title: 'UV 스티커 제작 | 부부피오피',
  description:
    'UV 인쇄 스티커 소량·당일 제작. 유리·아크릴 등에 강한 내구성. 부부피오피.',
};

export default function UvStickerPage() {
  return (
    <ServicePageLayout
      title="UV 스티커"
      subtitle="UV 스티커"
      description="유광·무광 등 UV 인쇄 스티커. 소량부터 맞춤 규격까지 문의해 주세요."
      packages={PACKAGES}
      faqTitle="UV 스티커 제작 FAQ"
      faqItems={FAQ}
      portfolioItems={[
        { title: '매장 유리창 UV' },
        { title: '아크릴 표지 UV' },
        { title: '소량 프로모 스티커' },
      ]}
    />
  );
}
