import Link from 'next/link';

const BRAND = 'BUBUPOP';

export default function SiteFooter() {
  const regNo = process.env.NEXT_PUBLIC_BUSINESS_REG_NO?.trim();
  const address = process.env.NEXT_PUBLIC_BUSINESS_ADDRESS?.trim();
  const representative = process.env.NEXT_PUBLIC_REPRESENTATIVE_NAME?.trim();
  const phone = process.env.NEXT_PUBLIC_PHONE?.trim();

  /** 눈에 보이는 한 최소에 가깝게 (11px~12px) */
  const finePrint = 'text-[11px] leading-relaxed text-gray-600 sm:text-xs';

  return (
    <footer
      className="border-t border-gray-200 bg-gray-100 px-4 py-10 pb-28 sm:pb-32"
      aria-label="사이트 하단 정보"
    >
      <div className="container mx-auto max-w-4xl">
        {/* 상호 ~ 전화번호: 좌측 정렬 */}
        <div className="text-left text-gray-600">
          <p className="text-lg font-bold tracking-tight text-gray-900 sm:text-xl">
            {BRAND}
          </p>

          <dl className={`mt-3 space-y-1.5 ${finePrint}`}>
            {representative ? (
              <div className="flex flex-wrap items-baseline gap-x-1.5">
                <dt className="shrink-0 font-medium text-gray-500">Rep.</dt>
                <dd className="break-all">{representative}</dd>
              </div>
            ) : null}
            <div className="flex flex-wrap items-baseline gap-x-1.5">
              <dt className="shrink-0 font-medium text-gray-500">BRN</dt>
              <dd className="break-all">{regNo || '—'}</dd>
            </div>
            <div className="flex flex-col gap-0.5 sm:flex-row sm:gap-x-1.5">
              <dt className="shrink-0 font-medium text-gray-500">Addr.</dt>
              <dd className="min-w-0 max-w-full break-words">{address || '—'}</dd>
            </div>
          </dl>

          <div className={`mt-4 flex flex-wrap gap-x-4 gap-y-2 ${finePrint}`}>
            <Link
              href="/location"
              className="font-semibold text-primary underline-offset-2 hover:underline"
            >
              오시는 길
            </Link>
            {phone ? (
              <a
                href={`tel:${phone.replace(/-/g, '')}`}
                className="font-semibold text-gray-800 tabular-nums underline-offset-2 hover:underline"
              >
                <span className="text-gray-500">T.</span> {phone}
              </a>
            ) : null}
          </div>
        </div>

        {/* 저작권: 우측 정렬 */}
        <p
          className={`mt-8 w-full text-right text-gray-400 ${finePrint}`}
        >
          © {new Date().getFullYear()} {BRAND}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
