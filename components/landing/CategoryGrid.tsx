import Link from 'next/link';

const CATEGORIES = [
  { href: '/sticker', label: '스티커', emoji: '🏷️' },
  { href: '/tshirt', label: '단체티', emoji: '👕' },
  { href: '/dtf', label: 'DTF출력', emoji: '🖨️' },
  { href: '/uv-sticker', label: 'UV 스티커', emoji: '💡' },
  { href: '/banner', label: '배너', emoji: '📜' },
  { href: '/card', label: '명함', emoji: '📇' },
  { href: '/goods', label: '굿즈', emoji: '🎁' },
  { href: '/election', label: '선거용품', emoji: '🗳️' },
  { href: '/another', label: '각종 인쇄물', emoji: '✨' },
];

export default function CategoryGrid() {
  return (
    <section className="section section-primary">
      <div className="container">
        <h2 className="section-title">빠른 품목 선택</h2>
        <p className="section-desc max-w-2xl">
          필요한 품목만 골라 상세 페이지로 이동하세요. 모바일에서도 한 손으로 선택하기 쉽게
          배치했습니다.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {CATEGORIES.map(({ href, label, emoji }) => (
            <Link
              key={href}
              href={href}
              className="flex min-h-[3.5rem] items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white px-3 py-4 text-[15px] font-bold leading-tight text-gray-900 shadow-sm transition hover:border-primary hover:bg-primary hover:text-white active:scale-[0.98] sm:min-h-[3.25rem] sm:text-base"
            >
              <span aria-hidden>{emoji}</span>
              {label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
