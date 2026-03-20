import type { ReactNode } from 'react';
import FaqSection, { type FaqItem } from '@/components/landing/FaqSection';
import FeatureSection, {
  type FeatureSectionItem,
} from '@/components/landing/FeatureSection';
import PackageSection from '@/components/landing/PackageSection';
import ProcessSection from '@/components/landing/ProcessSection';
import CtaBlock from './CtaBlock';
import PageHero, { type PageHeroImage, type PageHeroVideo } from './PageHero';
import ServicePortfolioSection, {
  type ServicePortfolioItem,
} from './ServicePortfolioSection';

export type ServicePackage = {
  title: string;
  desc: string;
  tag?: string | null;
  price?: string;
};

type ServicePageLayoutProps = {
  title: string;
  subtitle: string;
  description?: string | ReactNode;
  children?: ReactNode;
  afterPackages?: ReactNode;
  packages?: ServicePackage[];
  portfolioItems?: ServicePortfolioItem[];
  /** 영상·이미지 히어로 (영상 시 poster로 첫 화면) */
  heroImage?: PageHeroImage;
  heroVideo?: PageHeroVideo;
  heroTitleAccent?: boolean;
  /** 있으면 주문 방법 다음·문의 직전에 FAQ 표시 */
  faqItems?: FaqItem[];
  faqTitle?: string;
  /** 없으면 기본 강점 4칸 */
  featureItems?: FeatureSectionItem[];
  featureSubheading?: string;
};

const DEFAULT_PACKAGES: ServicePackage[] = [
  { title: '소량 패키지', desc: '당일 제작 가능', tag: '인기' },
  { title: '기본 패키지', desc: '디자인 포함', tag: null },
  { title: '맞춤 패키지', desc: '문의 후 견적', tag: null },
];

export default function ServicePageLayout({
  title,
  subtitle,
  description,
  children,
  afterPackages,
  packages = DEFAULT_PACKAGES,
  portfolioItems = [],
  heroImage,
  heroVideo,
  heroTitleAccent,
  faqItems,
  faqTitle,
  featureItems,
  featureSubheading,
}: ServicePageLayoutProps) {
  return (
    <>
      <PageHero
        title={title}
        subtitle={subtitle}
        description={description}
        heroImage={heroImage}
        heroVideo={heroVideo}
        heroTitleAccent={heroTitleAccent}
      />
      <FeatureSection
        items={featureItems}
        subheading={featureSubheading}
      />
      {children}
      {portfolioItems.length > 0 && (
        <ServicePortfolioSection items={portfolioItems} />
      )}
      <PackageSection packages={packages} />
      {afterPackages}
      <ProcessSection />
      {faqItems != null && faqItems.length > 0 ? (
        <FaqSection items={faqItems} title={faqTitle ?? '자주 묻는 질문'} />
      ) : null}
      <CtaBlock />
    </>
  );
}
