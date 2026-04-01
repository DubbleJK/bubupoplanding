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
};

function PortfolioCard({
  item,
  sizes,
  slotPlaceholder,
}: {
  item: PortfolioCarouselItem;
  sizes: string;
  slotPlaceholder: string;
}) {
  return (
    <article className="overflow-hidden rounded-xl border border-gray-100 bg-gray-50">
      <div className="relative aspect-[4/3] w-full bg-gray-100">
        {item.imageSrc ? (
          <Image
            src={item.imageSrc}
            alt={item.title}
            fill
            className="object-cover object-center"
            sizes={sizes}
            quality={78}
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
}: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: items.length > 1,
    align: 'start',
  });

  if (items.length === 0) {
    return (
      <p className="mt-3 text-sm text-gray-500">{emptyMessage}</p>
    );
  }

  return (
    <>
      <div className="relative -mx-4 mt-4 sm:mx-0 sm:hidden">
        <div ref={emblaRef} className="overflow-hidden px-4 pb-2">
          <div className="flex touch-pan-y">
            {items.map((item, i) => (
              <div
                key={`${groupKey}-swipe-${i}`}
                className="mr-4 min-w-0 flex-[0_0_92%] shrink-0"
              >
                <PortfolioCard
                  item={item}
                  sizes="(max-width: 640px) 92vw, 400px"
                  slotPlaceholder={slotPlaceholder}
                />
              </div>
            ))}
          </div>
        </div>
        {items.length > 1 ? (
          <>
            <button
              type="button"
              className="absolute inset-y-0 left-0 w-1/5"
              aria-label="이전 시안"
              onClick={() => emblaApi?.scrollPrev()}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 w-1/5"
              aria-label="다음 시안"
              onClick={() => emblaApi?.scrollNext()}
            />
          </>
        ) : null}
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center sm:hidden">
          <span className="ml-3 select-none text-2xl font-bold text-gray-400" aria-hidden>
            ‹
          </span>
        </div>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center sm:hidden">
          <span className="mr-3 select-none text-2xl font-bold text-gray-400" aria-hidden>
            ›
          </span>
        </div>
      </div>

      <div className="mt-4 hidden gap-3 sm:grid sm:grid-cols-2">
        {items.map((item, i) => (
          <PortfolioCard
            key={`${groupKey}-grid-${i}`}
            item={item}
            sizes="(max-width: 896px) 100vw, 400px"
            slotPlaceholder={slotPlaceholder}
          />
        ))}
      </div>
    </>
  );
}
