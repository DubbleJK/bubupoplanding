'use client';

import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

export type ServicePortfolioItem = {
  title: string;
  /** 사용하지 않음(하위 호환). 서브 멘트는 표시하지 않습니다. */
  description?: string;
  imageSrc?: string;
};

type Props = {
  items: ServicePortfolioItem[];
};

const AUTOPLAY_MS = 4500;

export default function ServicePortfolioSection({ items }: Props) {
  const canLoop = items.length > 1;
  const autoplay = Autoplay({
    delay: AUTOPLAY_MS,
    stopOnInteraction: false,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: canLoop, align: 'start', duration: 20 },
    canLoop ? [autoplay] : []
  );

  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="border-t border-gray-200 bg-gray-50 px-4 py-12 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="section-title">제작 사례</h2>

        <div className="relative mt-6 overflow-hidden rounded-2xl border-2 border-gray-200 bg-white shadow-sm">
          <div className="relative" ref={emblaRef}>
            <div className="flex touch-pan-y">
              {items.map((item, i) => (
                <div
                  key={`${item.title}-${i}`}
                  className="min-w-0 flex-[0_0_100%]"
                >
                  <div className="flex flex-col items-center px-4 pb-5 pt-5 sm:px-8 sm:pb-6 sm:pt-6">
                    <article className="flex w-full max-w-2xl flex-col">
                      {/* 스와이프·화살표는 사진 영역에만 (제목과 겹치지 않음) */}
                      <div className="relative w-full overflow-hidden rounded-xl bg-gray-100 shadow-inner">
                        <div className="relative aspect-[4/3] w-full">
                          {item.imageSrc ? (
                            <Image
                              src={item.imageSrc}
                              alt={item.title}
                              fill
                              className="object-cover object-center"
                              sizes="(max-width: 896px) 100vw, 672px"
                              priority={i === 0}
                            />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center text-sm text-gray-400">
                              이미지 준비 중
                            </div>
                          )}

                          {canLoop ? (
                            <>
                              <button
                                type="button"
                                className="absolute inset-y-0 left-0 z-10 w-1/3 cursor-pointer min-h-[44px]"
                                aria-label="이전 사례"
                                onClick={() => emblaApi?.scrollPrev()}
                              />
                              <button
                                type="button"
                                className="absolute inset-y-0 right-0 z-10 w-1/3 cursor-pointer min-h-[44px]"
                                aria-label="다음 사례"
                                onClick={() => emblaApi?.scrollNext()}
                              />
                              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                                <span className="ml-2 rounded-full bg-black/25 px-1.5 py-0.5 text-xl font-bold text-white backdrop-blur-sm sm:ml-3">
                                  ‹
                                </span>
                              </div>
                              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                                <span className="mr-2 rounded-full bg-black/25 px-1.5 py-0.5 text-xl font-bold text-white backdrop-blur-sm sm:mr-3">
                                  ›
                                </span>
                              </div>
                            </>
                          ) : null}
                        </div>
                      </div>
                      <h3 className="mt-4 text-center text-lg font-bold leading-snug text-gray-900 sm:mt-5 sm:text-xl">
                        {item.title}
                      </h3>
                    </article>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {canLoop ? (
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`h-2.5 min-h-[10px] w-2.5 min-w-[10px] shrink-0 rounded-full transition-colors ${
                  i === selected ? 'bg-primary' : 'bg-gray-300'
                }`}
                aria-label={`제작 사례 ${i + 1}번 보기`}
                aria-current={i === selected ? 'true' : undefined}
                onClick={() => emblaApi?.scrollTo(i)}
              />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
