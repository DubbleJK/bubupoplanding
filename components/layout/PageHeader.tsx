import type { ReactNode } from 'react';

export type PageHeaderProps = {
  /** 주황색 상단 라벨 (예: 스티커, 오시는 길) */
  subtitle: string;
  /** 메인 제목 */
  title: string;
  /** 회색 설명 — 타이틀·children(대표 이미지 등) 다음에 표시 */
  description?: ReactNode;
  /** max-w-4xl(기본) 외 폭 */
  containerClassName?: string;
  className?: string;
  children?: ReactNode;
};

/**
 * 품목 페이지(PageHero)와 동일한 상단 타이틀 규격.
 * 서비스 상세·오시는 길 등 공통 사용.
 */
export default function PageHeader({
  subtitle,
  title,
  description,
  containerClassName = 'max-w-4xl',
  className = '',
  children,
}: PageHeaderProps) {
  return (
    <section
      className={`border-b border-gray-200 bg-white px-4 py-12 sm:py-16 ${className}`.trim()}
    >
      <div className={`mx-auto ${containerClassName}`}>
        <p className="text-sm font-bold text-primary">{subtitle}</p>
        <h1 className="mt-2 text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
          {title}
        </h1>
        {children}
        {description != null && description !== '' ? (
          <div className="mt-4 text-base leading-relaxed text-gray-600">{description}</div>
        ) : null}
      </div>
    </section>
  );
}
