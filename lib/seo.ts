import type { Metadata } from 'next';
import { getSiteUrl } from '@/lib/site-url';

const DEFAULT_KEYWORDS = [
  '부부피오피',
  'BUBUPOP',
  '인쇄',
  '굿즈',
  '당일 제작',
  '소량 인쇄',
  '스티커 제작',
  'DTF',
  '단체티',
];

/**
 * 서비스·정적 페이지용 메타데이터 (canonical·OG·키워드).
 * 루트 layout의 title.template(`%s | 부부피오피`)에 맞춰 title은 접미사 없이 짧게 전달합니다.
 */
export function buildPageMetadata(input: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  robots?: Metadata['robots'];
}): Metadata {
  const base = getSiteUrl().replace(/\/$/, '');
  const canonicalPath = input.path.startsWith('/') ? input.path : `/${input.path}`;
  const url = `${base}${canonicalPath}`;
  const keywords = [...DEFAULT_KEYWORDS, ...(input.keywords ?? [])];

  return {
    title: input.title,
    description: input.description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      locale: 'ko_KR',
      url,
      title: input.title,
      description: input.description,
      siteName: '부부피오피',
    },
    twitter: {
      card: 'summary_large_image',
      title: input.title,
      description: input.description,
    },
    ...(input.robots != null ? { robots: input.robots } : {}),
  };
}
