import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import SiteFooter from '@/components/layout/SiteFooter';
import CtaFooter from '@/components/layout/CtaFooter';

export const metadata: Metadata = {
  title: '부부피오피 | 급한 인쇄·굿즈 당일 제작',
  description:
    '급한 인쇄·굿즈 당일 제작. 스티커·UV스티커·단체티·DTF·배너·명함·굿즈·선거용품. 소량 가능, 카톡·전화로 빠른 견적. 부부피오피.',
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
