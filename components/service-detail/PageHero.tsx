import type { ReactNode } from 'react';
import Image from 'next/image';

export type PageHeroImage = {
  src: string;
  alt: string;
};

/** public 기준 경로, 예: /sticker-hero-video.mp4 */
export type PageHeroVideo = {
  src: string;
};

type PageHeroProps = {
  title: string;
  subtitle: string;
  description?: string | ReactNode;
  heroImage?: PageHeroImage;
  /** 있으면 배경을 무음 자동재생 영상으로 (heroImage는 poster·접근성용) */
  heroVideo?: PageHeroVideo;
  /** true면 메인 타이틀을 주황(브랜드) + 한 단계 작은 크기로 */
  heroTitleAccent?: boolean;
};

/**
 * 품목 상단 히어로: 대표 이미지(또는 다크 플레이스홀더) + 어두운 그라데이션 + 타이틀 강조
 */
export default function PageHero({
  title,
  subtitle,
  description,
  heroImage,
  heroVideo,
  heroTitleAccent = false,
}: PageHeroProps) {
  const poster = heroImage?.src;
  const videoLabel = heroImage?.alt ?? '제작 현장 영상';
  const showSubtitle =
    Boolean(subtitle?.trim()) && subtitle.trim() !== title.trim();

  return (
    <section className="border-b border-gray-200 bg-white px-4 pb-10 pt-5 sm:px-6 sm:pb-12 sm:pt-7">
      <div className="mx-auto max-w-4xl">
        <div
          className="relative w-full min-h-[min(52vh,380px)] overflow-hidden rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.35)] ring-1 ring-black/10 sm:min-h-[min(48vh,480px)]"
        >
          {/* 배경: 영상 > 이미지 > 다크 플레이스홀더 */}
          <div className="absolute inset-0 bg-neutral-950">
            {heroVideo ? (
              <video
                className="absolute inset-0 h-full w-full object-cover object-center"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={poster}
                aria-label={videoLabel}
              >
                <source src={heroVideo.src} type="video/mp4" />
              </video>
            ) : heroImage ? (
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 896px) 100vw, 896px"
                priority
                quality={82}
                fetchPriority="high"
              />
            ) : (
              <div
                className="h-full w-full bg-gradient-to-br from-slate-800 via-slate-900 to-neutral-950"
                aria-hidden
              />
            )}
          </div>

          {/* 어두운 그라데이션: 하단 글자용 + 상단 살짝 딤 */}
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/[0.92] via-black/50 to-black/20 sm:via-black/45"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-2/5 bg-gradient-to-b from-black/45 to-transparent"
            aria-hidden
          />

          {/* 타이틀 영역 */}
          <div className="relative flex min-h-[min(52vh,380px)] flex-col justify-end p-6 sm:min-h-[min(48vh,480px)] sm:p-9 sm:pb-11">
            {showSubtitle ? (
              <p className="mb-2 text-sm font-bold tracking-wide text-orange-400 drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)] sm:mb-2.5 sm:text-base">
                {subtitle}
              </p>
            ) : null}
            <h1
              className={
                heroTitleAccent
                  ? 'text-2xl font-extrabold leading-[1.12] tracking-tight text-orange-400 [text-shadow:0_2px_16px_rgba(0,0,0,0.75),0_1px_3px_rgba(0,0,0,0.9)] sm:text-[1.875rem] sm:leading-[1.1] md:text-3xl'
                  : 'text-3xl font-extrabold leading-[1.12] tracking-tight text-white [text-shadow:0_2px_20px_rgba(0,0,0,0.65),0_1px_4px_rgba(0,0,0,0.9)] sm:text-[2.25rem] sm:leading-[1.1] md:text-4xl'
              }
            >
              {title}
            </h1>
            {description != null && description !== '' ? (
              <div className="mt-3.5 max-w-2xl drop-shadow-[0_1px_10px_rgba(0,0,0,0.75)] sm:mt-4">
                {typeof description === 'string' ? (
                  <p className="text-[15px] font-medium leading-relaxed text-white/95 sm:text-lg sm:leading-relaxed">
                    {description}
                  </p>
                ) : (
                  description
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
