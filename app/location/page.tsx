import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/layout/PageHeader';
import LocationMapEmbed from '@/components/location/LocationMapEmbed';
import { getPublicKakaoUrl, getPublicPhoneDisplay, getTelHref } from '@/lib/contact';
import { buildPageMetadata } from '@/lib/seo';

const ADDRESS = process.env.NEXT_PUBLIC_BUSINESS_ADDRESS?.trim() || '';
const MAP_URL = process.env.NEXT_PUBLIC_MAP_URL?.trim() || '';

const ADDRESS_FIRST_LINE = ADDRESS.split('\n')[0]?.trim() ?? '';
const NAVER_MAP_URL =
  process.env.NEXT_PUBLIC_NAVER_MAP_URL?.trim() ||
  (ADDRESS_FIRST_LINE.length > 0
    ? `https://map.naver.com/v5/search/${encodeURIComponent(ADDRESS_FIRST_LINE)}`
    : '');

export const metadata: Metadata = buildPageMetadata({
  title: '오시는 길 · 위치 안내',
  description:
    '부부피오피 위치·방문·픽업 안내. 방문 전 카카오톡·전화 문의를 권장합니다.',
  path: '/location',
  keywords: ['부부피오피', '오시는 길', '픽업', '인쇄소 위치'],
});

/** 섹션 라벨: 한글·주황 통일 */
const sectionLabel = 'text-sm font-bold text-primary';
/** 본문: 모바일·데스크 모두 최소 16px 기준 */
const body = 'text-base leading-relaxed text-gray-800';
const bodyMuted = 'text-base leading-relaxed text-gray-600 sm:text-[15px] sm:leading-relaxed';
const noteSm = 'text-sm leading-relaxed text-primary';

export default function LocationPage() {
  const hasAddress = ADDRESS.length > 0;

  return (
    <>
      <PageHeader
        subtitle="위치 안내"
        title="오시는 길"
        description={
          <p>
            방문·픽업 전{' '}
            <span className="font-semibold text-gray-800">카카오톡 또는 전화</span>로 먼저 연락
            주시기 바랍니다.
          </p>
        }
      />
      <section className="border-t border-gray-200 bg-white px-4 pb-12 pt-6 text-gray-900 antialiased sm:pb-16 sm:pt-8">
        <div className="mx-auto max-w-3xl">
          {/* 지도: 상단 여백 축소, 도착 안내는 지도 바로 위 */}
          <div>
            <h2 className={sectionLabel}>지도</h2>
            <div className="mt-2 rounded-xl border border-primary/25 bg-orange-50/80 px-4 py-3 sm:flex sm:items-center sm:justify-between sm:gap-4 sm:py-3.5">
              <p className="text-sm leading-snug text-gray-800 sm:text-[15px] sm:leading-relaxed">
                <span className="font-bold text-primary">도착하셨나요?</span>
                <br />
                현대 슈퍼 옆 계단·철문 안내로 바로 이동할 수 있어요.
              </p>
              <a
                href="#mall-entrance"
                className="mt-2.5 inline-flex w-full shrink-0 items-center justify-center rounded-xl bg-primary px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-primary-hover sm:mt-0 sm:w-auto"
              >
                상가 입구 안내 보기 ↓
              </a>
            </div>
            <div className="mt-3">
              <LocationMapEmbed
                mapUrl={MAP_URL || undefined}
                naverMapUrl={NAVER_MAP_URL || undefined}
              />
            </div>
          </div>

          {/* 주소 · 연락 */}
          <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:items-stretch sm:gap-6">
            <div className="flex flex-col rounded-2xl border border-gray-200 bg-gray-50/90 p-5 shadow-sm sm:p-6">
              <h2 className={sectionLabel}>주소</h2>
              {hasAddress ? (
                <p className="mt-3 whitespace-pre-line text-base font-medium leading-relaxed text-gray-900 sm:mt-4">
                  {ADDRESS}
                </p>
              ) : (
                <div className="mt-3 space-y-2 sm:mt-4">
                  <p className={`${bodyMuted} text-gray-600`}>주소는 준비 중입니다.</p>
                  <p className="text-xs leading-normal text-gray-500">
                    <code className="rounded bg-gray-200/90 px-1.5 py-0.5">
                      NEXT_PUBLIC_BUSINESS_ADDRESS
                    </code>
                  </p>
                </div>
              )}
              <div className="mt-5 flex-1 border-t border-gray-200/90 pt-5">
                <div className={`space-y-2.5 ${bodyMuted}`}>
                  <p>아파트 단지 내 잠시 주차 가능합니다.</p>
                  <p>세부적인 안내가 필요 하시면 문의 시 말씀 해주세요.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-2xl border border-gray-200 bg-gray-50/90 p-5 shadow-sm sm:p-6">
              <h2 className={sectionLabel}>연락처</h2>
              <p className="mt-3 sm:mt-4">
                <span className="text-sm font-medium text-gray-500">전화</span>{' '}
                <a
                  className="text-xl font-bold leading-none text-gray-900 underline-offset-2 hover:text-primary sm:text-2xl"
                  href={getTelHref()}
                >
                  {getPublicPhoneDisplay()}
                </a>
              </p>
              <div className="mt-5 flex-1 border-t border-gray-200/90 pt-5">
                <div className={`space-y-2.5 ${bodyMuted}`}>
                  <p>픽업 시간은 일정에 따라 달라 질 수 있습니다.</p>
                  <p>방문 전 미리 꼭 연락 부탁 드리겠습니다.</p>
                </div>
              </div>
            </div>
          </div>

          {/* 상가 입구 — #mall-entrance: 지도 아래 링크 도착 지점 (고정 헤더 여백) */}
          <div
            id="mall-entrance"
            className="mt-10 scroll-mt-24 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm sm:mt-12 sm:scroll-mt-28"
          >
            <div className="border-b border-gray-100 bg-gray-50/80 px-5 py-5 sm:px-8 sm:py-6">
              <div className="border-l-4 border-primary pl-4">
                <p className="text-xs font-bold tracking-wide text-primary">상세 안내</p>
                <h2 className="mt-1 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                  상가 입구
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  현대 슈퍼 옆 계단 · 철문 도착 후 안내
                </p>
              </div>
            </div>

            <div className="space-y-4 px-5 py-6 sm:space-y-4 sm:px-8 sm:py-7">
              <p className={body}>
                빨간 벽돌로 된 상가 건물{' '}
                <strong className="font-bold text-gray-900">1층</strong>에{' '}
                <span className="font-bold text-primary">현대 슈퍼 옆 계단</span>을 이용해 올라오시면
                됩니다.
              </p>
              <p className={body}>
                도착하신 뒤 철문이 잠겨 있을 경우{' '}
                <strong className="font-bold text-gray-900">노크</strong>해 주시거나{' '}
                <strong className="font-bold text-gray-900">전화·카톡</strong>으로 연락 주세요.
              </p>
              <p className={`${noteSm} pt-0.5`}>
                지하 주차장에서 연결된 좁은 계단은 입구가 아닙니다.
              </p>
            </div>

            <div className="grid gap-5 border-t border-gray-200 bg-gray-50/90 p-5 sm:grid-cols-2 sm:gap-6 sm:p-7">
              <figure className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/location-hyundai-super-stairs.png"
                  alt="빨간 벽돌 상가 1층, 현대 슈퍼 옆 계단"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption className="border-t border-gray-200 bg-white px-4 py-3.5 text-center text-base font-semibold leading-snug text-gray-900">
                  현대 슈퍼 옆 계단으로 오세요
                </figcaption>
              </figure>
              <figure className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/location-door-knock.png"
                  alt="도착 후 철문. 잠겨 있으면 노크 또는 전화·카톡"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption className="border-t border-gray-200 bg-white px-4 py-3.5 text-center text-base font-semibold leading-snug text-gray-900">
                  철문이 잠겨 있으면 <span className="text-primary">노크</span> 또는 전화·카톡
                </figcaption>
              </figure>
            </div>
          </div>

          {/* CTA: 전환 2개 + 홈은 보조 링크 */}
          <div className="mt-10 space-y-4 sm:mt-12">
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-3">
              <a
                href={getPublicKakaoUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[3.25rem] flex-1 items-center justify-center rounded-2xl bg-[#FEE500] py-4 text-base font-bold text-[#191919] transition hover:opacity-90"
              >
                카카오톡으로 문의하기
              </a>
              <a
                className="flex min-h-[3.25rem] flex-1 items-center justify-center rounded-2xl border-2 border-gray-900 bg-white py-4 text-base font-bold text-gray-900 transition hover:bg-gray-50"
                href={getTelHref()}
              >
                전화로 문의하기
              </a>
            </div>
            <p className="text-center">
              <Link
                href="/"
                className="text-sm font-semibold text-gray-500 underline-offset-4 transition hover:text-primary hover:underline"
              >
                ← 홈으로
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
