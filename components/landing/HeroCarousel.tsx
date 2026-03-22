'use client';

import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';

type Slide = {
  key: string;
  imageSrc: string;
  imageAlt: string;
  badgeText: string;
  titleLines: { top: string; highlight: string };
  subtitle: string;
};

type Props = {
  slides: Slide[];
};

export default function HeroCarousel({ slides }: Props) {
  const autoplay = Autoplay({ delay: 4500, stopOnInteraction: false });
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay]);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-900">
      <div className="relative" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {slides.map((s, i) => (
            <div key={s.key} className="min-w-0 flex-[0_0_100%]">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={s.imageSrc}
                  alt={s.imageAlt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 896px) 100vw, 896px"
                  priority={i === 0}
                  quality={82}
                  fetchPriority={i === 0 ? 'high' : 'low'}
                />

                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/25 to-transparent sm:from-black/75 sm:via-black/40"
                  aria-hidden
                />

                <div className="absolute inset-0 flex flex-col justify-end p-4 pb-3 sm:p-8 sm:pb-8">
                  <div className="inline-flex w-fit max-w-[95%] items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] font-bold text-white backdrop-blur sm:gap-2 sm:px-3 sm:py-1 sm:text-xs">
                    <span
                      className="inline-flex h-2 w-2 rounded-full bg-primary"
                      aria-hidden
                    />
                    {s.badgeText}
                  </div>

                  {i === 0 ? (
                    <h1 className="mt-2 max-w-[98%] text-[1.485rem] font-black leading-[1.15] tracking-tight text-white text-pretty drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)] sm:mt-4 sm:max-w-none sm:text-3xl sm:leading-[1.1] md:text-4xl lg:text-5xl">
                      <span className="block">{s.titleLines.top}</span>
                      <span className="mt-1 block text-primary drop-shadow-[0_1px_10px_rgba(0,0,0,0.65)] sm:mt-2 sm:drop-shadow-[0_2px_14px_rgba(0,0,0,0.75)]">
                        {s.titleLines.highlight}
                      </span>
                    </h1>
                  ) : (
                    <h2 className="mt-2 max-w-[98%] text-[1.485rem] font-black leading-[1.15] tracking-tight text-white text-pretty drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)] sm:mt-4 sm:max-w-none sm:text-3xl sm:leading-[1.1] md:text-4xl lg:text-5xl">
                      <span className="block">{s.titleLines.top}</span>
                      <span className="mt-1 block text-primary drop-shadow-[0_1px_10px_rgba(0,0,0,0.65)] sm:mt-2 sm:drop-shadow-[0_2px_14px_rgba(0,0,0,0.75)]">
                        {s.titleLines.highlight}
                      </span>
                    </h2>
                  )}

                  <p
                    className="mt-2 max-w-[98%] text-sm font-bold leading-snug text-amber-100 text-pretty [text-shadow:0_0_10px_rgba(0,0,0,0.85),0_1px_3px_rgba(0,0,0,0.95)] sm:mt-3 sm:max-w-none sm:text-base sm:font-semibold sm:text-white sm:[text-shadow:0_1px_8px_rgba(0,0,0,0.45)]"
                  >
                    {s.subtitle}
                  </p>
                </div>

                <button
                  type="button"
                  className="absolute inset-y-0 left-0 w-1/3 cursor-pointer"
                  aria-label="이전 슬라이드"
                  onClick={() => emblaApi?.scrollPrev()}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 w-1/3 cursor-pointer"
                  aria-label="다음 슬라이드"
                  onClick={() => emblaApi?.scrollNext()}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
        <span className="ml-3 select-none text-2xl font-bold text-white/70 drop-shadow">
          ‹
        </span>
      </div>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
        <span className="mr-3 select-none text-2xl font-bold text-white/70 drop-shadow">
          ›
        </span>
      </div>
    </div>
  );
}

