import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import SiteFooter from '@/components/layout/SiteFooter';
import CtaFooter from '@/components/layout/CtaFooter';

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || 'https://bubupoplanding.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: '부부피오피',
    template: '%s | 부부피오피',
  },
  description:
    '급한 인쇄·굿즈 당일 제작. 스티커·UV스티커·단체티·DTF·배너·명함·굿즈·선거용품. 소량 가능, 카톡·전화로 빠른 견적. 부부피오피.',
  applicationName: '부부피오피',
  openGraph: {
    title: '부부피오피',
    description:
      '급한 인쇄·굿즈 당일 제작. 소량 가능, 카톡·전화로 빠른 견적 안내.',
    type: 'website',
    locale: 'ko_KR',
    siteName: '부부피오피',
    // og:image는 app/opengraph-image.tsx 가 PNG로 자동 생성 (카카오톡은 SVG 미지원)
  },
  twitter: {
    card: 'summary_large_image',
    title: '부부피오피',
    description: '급한 인쇄·굿즈 당일 제작, 소량 가능',
    // twitter:image는 app/twitter-image.tsx 가 동일 규격 PNG로 생성
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen has-fixed-cta">
        <Header />
        <main className="min-h-screen">{children}</main>
        <SiteFooter />
        <CtaFooter />
      </body>
    </html>
  );
}
