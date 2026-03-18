'use client';

import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';

const REVIEWS = [
  {
    text: '급했는데 정말 빠르게 진행됐어요. 오전에 문의했는데 당일에 나왔어요.',
    tag: '당일 제작',
    name: '김**',
    rating: 5,
    date: '2025.02',
  },
  {
    text: '소량만 필요했는데도 친절하게 해주셔서 좋았어요. 다음에도 여기로 할게요.',
    tag: '소량 주문',
    name: '이**',
    rating: 5,
    date: '2025.01',
  },
  {
    text: '디자인 파일 없이 이미지만 보냈는데 깔끔하게 나왔습니다. 추천합니다.',
    tag: '디자인 상담',
    name: '박**',
    rating: 5,
    date: '2024.12',
  },
  {
    text: '시안 수정도 빠르게 해주셔서 일정 맞추기 편했습니다.',
    tag: '시안 수정',
    name: '정**',
    rating: 5,
    date: '2024.11',
  },
  {
    text: '처음 주문이라 걱정됐는데, 진행 과정을 계속 알려주셔서 안심됐어요.',
    tag: '친절 안내',
    name: '최**',
    rating: 5,
    date: '2025.03',
  },
  {
    text: '색감이 모니터에서 보던 것과 거의 똑같이 나와서 만족합니다.',
    tag: '인쇄 품질',
    name: '윤**',
    rating: 5,
    date: '2025.04',
  },
  {
    text: '선거용 현수막 급하게 부탁드렸는데 일정 맞춰 주셔서 고마웠어요.',
    tag: '선거용품',
    name: '한**',
    rating: 5,
    date: '2026.02',
  },
  {
    text: '티셔츠 원단이 생각보다 좋아서 다음 행사 때도 이용하려고 합니다.',
    tag: '티셔츠 제작',
    name: '오**',
    rating: 5,
    date: '2026.01',
  },
  {
    text: '명함 디자인을 같이 잡아주셔서 브랜딩 느낌이 통일됐어요.',
    tag: '명함 디자인',
    name: '신**',
    rating: 5,
    date: '2025.12',
  },
  {
    text: '스티커 코팅 마감이 깔끔해서 재주문 의사 있어요.',
    tag: '스티커',
    name: '서**',
    rating: 5,
    date: '2026.03',
  },
  {
    text: '소량 주문인데도 일정 조율 잘 해주셔서 일정 맞추기 수월했습니다.',
    tag: '소량 제작',
    name: '하**',
    rating: 5,
    date: '2025.06',
  },
  {
    text: '전화로 문의드렸는데 응대가 빨라서 바로 결정했어요.',
    tag: '상담 응대',
    name: '문**',
    rating: 5,
    date: '2026.04',
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`별점 ${count}점`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={i < count ? 'text-amber-400' : 'text-gray-200'}
          aria-hidden
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function ReviewSection() {
  const autoplay = Autoplay({ delay: 4500, stopOnInteraction: false });
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [autoplay]);

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="flex flex-wrap items-end gap-2">
          <h2 className="section-title">고객 리뷰</h2>
          <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-bold text-primary">
            ★ 5.0
          </span>
        </div>
        <p className="section-desc">실제 주문·이용 후 남겨주신 리뷰입니다.</p>

        <div className="relative -mx-4 mt-8">
          <div ref={emblaRef} className="overflow-hidden px-4 pb-2">
            <div className="flex">
              {REVIEWS.map(({ text, tag, name, rating, date }, i) => (
                <article
                  key={`${name}-${date}-${tag}-${i}`}
                  className="mr-4 flex min-w-0 flex-[0_0_92%] flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:flex-[0_0_32%]"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gray-100 text-sm font-bold text-gray-600"
                      aria-hidden
                    >
                      {name.slice(0, 1)}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-bold text-gray-900">{name}</span>
                        <span className="text-xs text-gray-400">{date}</span>
                      </div>
                      <Stars count={rating} />
                    </div>
                  </div>

                  <p className="mt-4 text-[15px] leading-relaxed text-gray-800">
                    {text}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-gray-100 pt-4">
                    <span className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                      {tag}
                    </span>
                    <span className="text-xs text-gray-400">구매 확인</span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center sm:hidden">
            <span className="ml-3 select-none text-2xl font-bold text-gray-400">
              ‹
            </span>
          </div>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center sm:hidden">
            <span className="mr-3 select-none text-2xl font-bold text-gray-400">
              ›
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
