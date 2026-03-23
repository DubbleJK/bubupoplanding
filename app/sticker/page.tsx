import ServicePageLayout from '@/components/service-detail/ServicePageLayout';

const STICKER_FAQ = [
  {
    q: '스티커도 당일 제작이 가능한가요?',
    a: '품목·수량·재질에 따라 다릅니다. 급하신 건은 카카오톡으로 사이즈·매수·용도만 알려주시면 당일 가능 여부와 출고 시간을 바로 안내해 드립니다.',
  },
  {
    q: '스티커 재질은 어떤 게 있나요?',
    a: (
      <>
        <div>
          <p className="font-bold text-gray-900">당일 제작으로 많이 쓰는 재질</p>
          <p className="mt-1 leading-relaxed">
            무코팅 아트지, 모조지, 유포지, 투명 데드롱, 솔벤 시트 등
          </p>
        </div>
        <div>
          <p className="font-bold text-gray-900">1,000매 이상 대량 제작</p>
          <p className="mt-1 leading-relaxed">
            원하시는 재질로 맞춤 제작이 가능합니다.
          </p>
        </div>
        <div>
          <p className="font-bold text-gray-900">재질별 특징</p>
          <ul className="mt-2 list-disc space-y-2 pl-5 leading-relaxed">
            <li>
              <strong className="font-bold text-gray-900">아트지</strong>
              {' — '}
              표면이 매끈하고 인쇄 색감이 또렷합니다. 라벨·성분표·실내용 스티커에
              널리 쓰입니다.
            </li>
            <li>
              <strong className="font-bold text-gray-900">모조지</strong>
              {' — '}
              종이 질감이 살아 고급스러운 인상을 줄 수 있어 명함형·브랜딩용에 잘
              어울립니다.
            </li>
            <li>
              <strong className="font-bold text-gray-900">유포지</strong>
              {' — '}
              방수·내구성이 좋아 냉장·냉동 라벨이나 습기·물기가 있는 환경에
              적합합니다.
            </li>
            <li>
              <strong className="font-bold text-gray-900">솔벤 시트 스티커</strong>
              {' — '}
              내후성·내수성이 뛰어나 실외 부착·차량·간판 등 장기 노출이 필요한
              용도에 자주 선택됩니다.
            </li>
          </ul>
        </div>
        <p className="leading-relaxed">
          <strong className="font-bold text-gray-900">맞춤 추천</strong>
          {' — '}
          용도와 부착 면을 알려주시면 재질을 추천해 드립니다.
        </p>
      </>
    ),
  },
  {
    q: '디자인 파일이 없거나 AI 이미지만 있는데도 되나요?',
    a: '가능합니다. JPG·PNG·PDF 등으로 보내주시면 되고, 해상도만 인쇄에 맞게 있으면 됩니다. 시안 정리가 필요하면 문의 시 말씀해 주세요.',
  },
  {
    q: '소량만 필요한데 문의해도 될까요?',
    a: '네. 소량부터 대량까지 모두 문의 가능합니다. 수량에 맞춰 재질·규격을 추천하고 견적을 안내해 드립니다.',
  },
  {
    q: '대량도 당일 출고가 되나요?',
    a: '네 가능합니다. 용지 재질, 스티커 사이즈에 따라 출고 가능 여부가 결정되니 빠르게 문의 주시면 답변 드리겠습니다.',
  },
];

const PACKAGES = [
  {
    title: '당일 출고 스티커',
    price: '18,000원~',
    desc: '사이즈: 5–7cm(한 변 기준) / 재질: 아트지·모조지 / 수량: 100매',
    tag: '인기' as const,
  },
  {
    title: '성분표·라벨 스티커',
    price: '22,000원~',
    desc: '사이즈: 가변(문의) / 재질: 아트지·모조지 / 수량: 100매 기준 참고',
    tag: null,
  },
  {
    title: '방수 유포지 스티커',
    price: '32,000원~',
    desc: '사이즈: 문의 / 재질: 유포지 / 수량: 100매 기준 참고 · 냉장·습기 환경에 적합',
    tag: null,
  },
];

export const metadata = {
  title: '스티커 제작 | 부부피오피',
  description:
    '급한 스티커 당일 제작. 아트지·유포지 등 용도 맞춤. 납품 전·당일 출고 문의 환영. 부부피오피.',
};

export default function StickerPage() {
  return (
    <ServicePageLayout
      title="스티커"
      subtitle="스티커"
      heroTitleAccent
      description={
        <>
          <div className="space-y-2 sm:space-y-2.5">
            <p className="text-lg font-extrabold leading-tight tracking-tight text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.65)] sm:text-xl sm:leading-snug md:text-[1.5rem] md:leading-snug">
              “납품 전인데 스티커 없으신가요?”
            </p>
            <p className="text-lg font-extrabold leading-tight tracking-tight text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.65)] sm:text-xl sm:leading-snug md:text-[1.5rem] md:leading-snug">
              “오늘 보내야 하는데 아직 준비 안되셨나요?”
            </p>
            <p className="pt-0.5 text-base font-extrabold leading-snug text-orange-400 [filter:drop-shadow(0_1px_2px_rgba(0,0,0,0.85))] sm:text-lg sm:pt-1">
              지금 문의하면 바로 제작 들어갑니다
            </p>
          </div>
          <div className="mt-4 border-t border-white/30 pt-4 text-white sm:mt-5 sm:pt-4">
            <p className="text-base font-normal leading-relaxed text-white/95 sm:text-lg">
              아트지부터 방수 유포지까지
            </p>
            <p className="mt-1.5 text-base font-normal leading-relaxed text-white/90 sm:mt-2 sm:text-lg">
              용도에 맞게 바로 제작 가능합니다
            </p>
          </div>
        </>
      }
      heroVideo={{ src: '/sticker-hero-video.mp4' }}
      heroImage={{
        src: '/images/sticker-hero.png',
        alt: '맞춤 라벨·성분표 스티커를 장비로 재단·출력하는 제작 현장',
      }}
      packages={PACKAGES}
      faqTitle="스티커 제작 FAQ"
      faqItems={STICKER_FAQ}
      portfolioGroups={[
        {
          groupTitle: '',
          items: [
            {
              title: '동호회 스티커',
              imageSrc: '/images/portfolio-club-sticker.png',
            },
            {
              title: '성분표 스티커',
              imageSrc: '/images/portfolio-seongbun-sticker.png',
            },
            {
              title: '다꾸 스티커',
              imageSrc: '/images/portfolio-dakku-sticker.png',
            },
            {
              title: '조공스티커',
              imageSrc: '/images/portfolio-jogong-sticker.png',
            },
            {
              title: '라벨 스티커',
              imageSrc: '/images/portfolio-label-sticker.png',
            },
            {
              title: '행사 스티커',
              imageSrc: '/images/portfolio-event-sticker.png',
            },
            {
              title: '수출입원산지스티커',
              imageSrc: '/images/portfolio-origin-sticker.png',
            },
            {
              title: '테이블시트 스티커',
              imageSrc: '/images/portfolio-table-sheet-sticker.png',
            },
          ],
        },
      ]}
    />
  );
}
