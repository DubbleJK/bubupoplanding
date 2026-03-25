import HeroCarousel from '@/components/landing/HeroCarousel';
import { getPublicKakaoUrl, getPublicPhoneDisplay, getTelHref } from '@/lib/contact';

export default function HeroSection() {
  const kakaoUrl = getPublicKakaoUrl();
  const phoneLabel = getPublicPhoneDisplay();
  const telHref = getTelHref();
  return (
    <section className="relative overflow-hidden border-b border-gray-200 bg-white px-4 pb-12 pt-8 sm:pt-12">
      <div className="mx-auto max-w-4xl">
        <HeroCarousel
          slides={[
            {
              key: 'hero-1',
              imageSrc: '/images/hero.jpg',
              imageAlt: '부부피오피 작업 현장 및 제작 결과물',
              badgeText: '당일 제작 · 소량 가능',
              titleLines: {
                top: '급하게 인쇄 필요하신가요?',
                highlight: '급한 불은 저희가 꺼드립니다.',
              },
              subtitle: '긴급 인쇄 · 당일 출고 · 전화/카톡 실시간 상담',
            },
            {
              key: 'hero-2',
              imageSrc: '/images/hero-2.jpg',
              imageAlt: '부부피오피 소량 주문 빠른 제작',
              badgeText: '소량도 빠르게',
              titleLines: {
                top: '“딱 필요한 만큼만, 부담 없이”',
                highlight: '소량 주문도 빠르게 제작합니다',
              },
              subtitle: '소량 주문 · 1장부터 제작 · 예상 비용 바로 안내',
            },
            {
              key: 'hero-3',
              imageSrc: '/images/hero-3.jpg',
              imageAlt: '부부피오피 원스톱 제작 서비스',
              badgeText: '원스톱 제작',
              titleLines: {
                top: '“이건 여기, 저건 저기…”',
                highlight: '이제 한 곳에서 전부 해결하세요',
              },
              subtitle: '스티커·티셔츠·배너까지 · 한 번에 원스톱 진행',
            },
          ]}
        />

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <a
            href={kakaoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[52px] flex-1 items-center justify-center rounded-2xl bg-[#FEE500] px-3 py-4 text-[15px] font-bold leading-tight text-[#191919] transition hover:opacity-90 sm:text-base"
            aria-label="카카오톡으로 무료 견적 문의하기"
          >
            카카오톡 · 무료 견적
          </a>
          <a
            href={telHref}
            className="flex min-h-[52px] flex-1 items-center justify-center rounded-2xl border-2 border-gray-900 bg-white px-3 py-4 text-[15px] font-bold leading-tight text-gray-900 transition hover:bg-gray-50 sm:text-base"
            aria-label={`전화로 문의하기 ${phoneLabel}`}
          >
            전화 · 빠른 상담
          </a>
        </div>
      </div>
    </section>
  );
}
