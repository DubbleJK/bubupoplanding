import type { ReactNode } from 'react';
import FaqSection, { type FaqItem } from '@/components/landing/FaqSection';
import FeatureSection, {
  type FeatureSectionItem,
} from '@/components/landing/FeatureSection';
import PackageSection from '@/components/landing/PackageSection';
import ProcessSection from '@/components/landing/ProcessSection';
import CtaBlock from './CtaBlock';
import PageHero, { type PageHeroImage, type PageHeroVideo } from './PageHero';
import DraftShowcaseSection, {
  type ServicePortfolioGroup,
  type ServicePortfolioItem,
} from './DraftShowcaseSection';
import { splitPortfolioToABC } from '@/lib/splitPortfolioToABC';

export type ServicePackage = {
  title: string;
  desc: string | ReactNode;
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
  /** 있으면 A/B/C 시안 구성을 직접 지정 (없으면 portfolioItems를 자동 분배) */
  portfolioGroups?: ServicePortfolioGroup[];
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
  /** 추천 패키지 카드 바로 아래 안내 문구 */
  packagesBelowNote?: string;
  /** true면 추천 패키지 섹션 숨김 */
  hidePackages?: boolean;
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
  portfolioGroups,
  heroImage,
  heroVideo,
  heroTitleAccent,
  faqItems,
  faqTitle,
  featureItems,
  featureSubheading,
  packagesBelowNote,
  hidePackages = false,
}: ServicePageLayoutProps) {
  const draftGroups =
    portfolioGroups ??
    (portfolioItems.length > 0 ? splitPortfolioToABC(portfolioItems) : []);

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
      {draftGroups.length > 0 ? (
        <DraftShowcaseSection groups={draftGroups} />
      ) : null}
      {!hidePackages ? (
        <PackageSection
          packages={packages}
          noteBelowPackages={packagesBelowNote}
        />
      ) : null}
      {afterPackages}
      <ProcessSection />
      {faqItems != null && faqItems.length > 0 ? (
        <FaqSection items={faqItems} title={faqTitle ?? '자주 묻는 질문'} />
      ) : null}
      <CtaBlock />
    </>
  );
}
