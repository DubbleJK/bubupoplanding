'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const MENU_LINKS = [
  { href: '/', label: '홈' },
  { href: '/sticker', label: '스티커' },
  { href: '/tshirt', label: '단체티' },
  { href: '/dtf', label: 'DTF출력' },
  { href: '/uv-sticker', label: 'UV 스티커' },
  { href: '/banner', label: '배너' },
  { href: '/card', label: '명함' },
  { href: '/goods', label: '굿즈' },
  { href: '/election', label: '선거용품' },
  { href: '/another', label: '기타' },
  { href: '/location', label: '오시는 길' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-[100] w-full border-b-2 border-gray-200 bg-white">
      <div className="relative z-[110] mx-auto flex h-14 max-w-4xl items-center justify-between bg-white px-4 sm:h-16 sm:px-6">
        {/* 우측 메뉴 버튼과 너비를 맞춰 로고가 화면 정중앙에 오도록 */}
        <div className="h-11 w-11 shrink-0" aria-hidden />

        <Link
          href="/"
          className="absolute left-1/2 top-1/2 z-[111] flex min-h-[44px] -translate-x-1/2 -translate-y-1/2 items-center justify-center"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/logo.png"
            alt="부부피오피"
            width={560}
            height={160}
            className="h-10 w-auto max-w-[min(200px,calc(100vw-7rem))] sm:h-14 sm:max-w-[min(280px,calc(100vw-8rem))]"
            priority
          />
        </Link>

        <button
          type="button"
          className="relative z-[111] flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-gray-800 hover:bg-gray-100 active:bg-gray-200"
          aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={open}
          aria-controls="main-mobile-nav"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">메뉴</span>
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <>
          <button
            type="button"
            tabIndex={-1}
            aria-hidden
            className="fixed inset-x-0 bottom-0 top-14 z-[105] bg-black/40 sm:top-16"
            onClick={() => setOpen(false)}
          />
          <nav
            id="main-mobile-nav"
            className="fixed left-0 right-0 top-14 z-[108] max-h-[min(75dvh,calc(100dvh-3.5rem))] overflow-y-auto overscroll-contain border-b border-gray-200 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.12)] sm:top-16 sm:max-h-[min(70dvh,calc(100dvh-4rem))]"
            aria-label="메인 메뉴"
          >
            <div className="mx-auto max-w-4xl px-4 py-2 sm:px-6 sm:py-3">
              <ul className="flex flex-col divide-y divide-gray-100">
                {MENU_LINKS.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="block py-2.5 text-sm font-bold leading-tight text-gray-900 transition hover:bg-primary-light hover:text-primary active:bg-orange-50 sm:min-h-[44px] sm:py-3 sm:text-base sm:leading-normal"
                      onClick={() => setOpen(false)}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </>
      ) : null}
    </header>
  );
}
