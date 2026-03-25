import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import CategoryGrid from '@/components/landing/CategoryGrid';
import FaqSection from '@/components/landing/FaqSection';
import FeatureSection from '@/components/landing/FeatureSection';
import HeroSection from '@/components/landing/HeroSection';
import PackageSection from '@/components/landing/PackageSection';
import ProcessSection from '@/components/landing/ProcessSection';
import ReviewSection from '@/components/landing/ReviewSection';
import { getNaverBlogPosts } from '@/lib/naver-blog';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: '급한 인쇄·굿즈 당일 제작',
  description:
    '스티커·UV·단체티·DTF·배너·명함·굿즈·선거용품까지. 소량 가능, 당일 제작 문의. 카카오톡·전화로 빠른 견적 — 부부피오피.',
  path: '/',
  keywords: ['부부피오피', '당일 인쇄', '급한 인쇄', '인쇄 견적'],
});

/** Embla 등 클라이언트 번들 분리 + SSR로 블로그 링크는 초기 HTML에 유지(검색·SNS) */
const BlogLatestGrid = dynamic(
  () => import('@/components/landing/BlogLatestGrid'),
  {
    ssr: true,
    loading: () => (
      <section className="section section-muted" aria-busy="true" aria-label="블로그 섹션 로딩">
        <div className="container">
          <div className="h-6 w-48 animate-pulse rounded bg-gray-200" />
          <div className="mt-2 h-4 w-full max-w-md animate-pulse rounded bg-gray-200" />
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="aspect-[4/3] animate-pulse rounded-2xl bg-gray-200"
              />
            ))}
          </div>
        </div>
      </section>
    ),
  }
);

export default async function HomePage() {
  const blogPosts = await getNaverBlogPosts(6);

  return (
    <>
      <HeroSection />
      <FeatureSection />
      <PackageSection />
      <ProcessSection />
      <CategoryGrid />
      <ReviewSection />
      <FaqSection />
      <BlogLatestGrid
        posts={blogPosts}
        heading="작업 스냅 & 블로그"
        subheading="방금 나온 현장·출고 소식과 노하우 글까지."
      />
    </>
  );
}
