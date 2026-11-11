'use client';

import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';

export type PortfolioCarouselItem = {
  title: string;
  description?: string;
  imageSrc?: string;
};

type Props = {
  items: PortfolioCarouselItem[];
  /** 그룹별 안정적인 키 (예: groupTitle + index) */
  groupKey: string;
  /** 이미지 없을 때 슬롯 안내 문구 */
  slotPlaceholder?: string;
  /** items가 비었을 때 안내 문구 */
  emptyMessage?: string;
  /** 포스터처럼 세로 원본 전체를 보여줄 때 */
  frame?: 'landscape' | 'poster';
};

function PortfolioCard({
  item,
  sizes,
  slotPlaceholder,
  frame,
}: {
  item: PortfolioCarouselItem;
  sizes: string;
  slotPlaceholder: string;
  frame: 'landscape' | 'poster';
}) {
  const poster = frame === 'poster';
  return (
    <article className="overflow-hidden rounded-xl border border-gray-100 bg-gray-50">
      <div
        className={`relative w-full bg-white ${poster ? 'aspect-[5/7]' : 'aspect-[4/3] bg-gray-100'}`}
      >
        {item.imageSrc ? (
          <Image
            src={item.imageSrc}
            alt={item.title}
            fill
            draggable={false}
            className={
              poster
                ? 'pointer-events-none select-none object-contain object-center'
                : 'object-cover object-center'
            }
            sizes={sizes}
            quality={poster ? 72 : 78}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center px-2 text-center text-sm leading-snug text-gray-400">
            {slotPlaceholder}
          </div>
        )}
      </div>
      <p className="px-3 py-2 text-center text-sm font-semibold text-gray-800">{item.title}</p>
    </article>
  );
}

const DEFAULT_SLOT = '이미지 준비 중';
const DEFAULT_EMPTY = '제작 사례를 준비 중입니다.';

export default function PortfolioItemsCarousel({
  items,
  groupKey,
  slotPlaceholder = DEFAULT_SLOT,
  emptyMessage = DEFAULT_EMPTY,
  frame = 'landscape',
}: Props) {
  const poster = frame === 'poster';
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: items.length > 1,
    align: 'start',
    containScroll: poster ? false : 'trimSnaps',
  });

  if (items.length === 0) {
    return (
      <p className="mt-3 text-sm text-gray-500">{emptyMessage}</p>
    );
  }

  const slideClass = poster
    ? 'mr-3 min-w-0 shrink-0 flex-[0_0_78%] sm:flex-[0_0_46%] md:flex-[0_0_32%]'
    : 'mr-4 min-w-0 flex-[0_0_92%] shrink-0';

  return (
    <>
      <div className={`relative -mx-4 mt-4 sm:mx-0 ${poster ? '' : 'sm:hidden'}`}>
        <div ref={emblaRef} className="overflow-hidden px-4 pb-2 sm:px-0">
          <div className="flex touch-pan-y">
            {items.map((item, i) => (
              <div key={`${groupKey}-swipe-${i}`} className={slideClass}>
                <PortfolioCard
                  item={item}
                  sizes={poster ? '(max-width: 640px) 78vw, 320px' : '(max-width: 640px) 92vw, 400px'}
                  slotPlaceholder={slotPlaceholder}
                  frame={frame}
                />
              </div>
            ))}
          </div>
        </div>
        {items.length > 1 ? (
          <>
            <button
              type="button"
              className="absolute inset-y-0 left-0 w-10"
              aria-label="이전 시안"
              onClick={() => emblaApi?.scrollPrev()}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 w-10"
              aria-label="다음 시안"
              onClick={() => emblaApi?.scrollNext()}
            />
          </>
        ) : null}
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
          <span className="ml-1 select-none text-2xl font-bold text-gray-400" aria-hidden>
            ‹
          </span>
        </div>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
          <span className="mr-1 select-none text-2xl font-bold text-gray-400" aria-hidden>
            ›
          </span>
        </div>
      </div>

      {poster ? null : (
        <div className="mt-4 hidden gap-3 sm:grid sm:grid-cols-2">
          {items.map((item, i) => (
            <PortfolioCard
              key={`${groupKey}-grid-${i}`}
              item={item}
              sizes="(max-width: 896px) 100vw, 400px"
              slotPlaceholder={slotPlaceholder}
              frame={frame}
            />
          ))}
        </div>
      )}
    </>
  );
}
