import BlogLatestGrid from '@/components/landing/BlogLatestGrid';
import CategoryGrid from '@/components/landing/CategoryGrid';
import FaqSection from '@/components/landing/FaqSection';
import FeatureSection from '@/components/landing/FeatureSection';
import HeroSection from '@/components/landing/HeroSection';
import PackageSection from '@/components/landing/PackageSection';
import ProcessSection from '@/components/landing/ProcessSection';
import ReviewSection from '@/components/landing/ReviewSection';
import { getNaverBlogPosts } from '@/lib/naver-blog';

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
