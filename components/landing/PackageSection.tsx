'use client';

const KAKAO_URL =
  process.env.NEXT_PUBLIC_KAKAO_URL || 'https://pf.kakao.com/_xxxxx';

export type PackageSectionItem = {
  title: string;
  desc: string;
  tag?: string | null;
  /** 없으면 가격 줄 미표시 (서비스 하위 페이지용) */
  price?: string;
};

const HOME_PACKAGES: PackageSectionItem[] = [
  {
    title: '당일 출고 스티커',
    price: '18,000원~',
    desc: '사이즈: 5–7cm(한 변 기준) / 재질: 아트지·모조지 / 수량: 100매',
    tag: '인기',
  },
  {
    title: '당일 배너 출력',
    price: '22,000원~',
    desc: '사이즈: 가로 600 × 세로 1800mm / 재질: 실내용 패트 / 수량: 1매',
    tag: null,
  },
  {
    title: '소량 티셔츠 제작',
    price: '9,900원~',
    desc: '사이즈: 성인 기본 사이즈 / 재질: 면 또는 기능성 원단 / 수량: 1장',
    tag: null,
  },
];

type Props = {
  /** 넘기면 메인용 대신 해당 목록(스티커/배너 등 서브 페이지) */
  packages?: PackageSectionItem[];
};

export default function PackageSection({ packages }: Props) {
  const list = packages ?? HOME_PACKAGES;
  const isHome = packages == null;

  return (
    <section className="section section-muted">
      <div className="container">
        <h2 className="section-title">추천 패키지</h2>
        <p className="section-desc">
          {isHome ? (
            <>
              자주 찾는 구성의 참고 금액(~)입니다. 정확한 견적은 카톡 문의 시 사양에 맞춰
              안내드립니다.
            </>
          ) : (
            <>
              인쇄 크기, 수량에 따라 견적이 확정되며, 대량 주문 시 추가 할인이 됩니다.
            </>
          )}
        </p>
        <div className="mt-6 flex flex-col gap-3">
          {list.map(({ title, price, desc, tag }) => (
            <div
              key={title}
              className="flex flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-start gap-3">
                {tag ? (
                  <span className="rounded-lg bg-primary px-2.5 py-0.5 text-xs font-bold text-white">
                    {tag}
                  </span>
                ) : null}
                <div className="min-w-0 flex-1">
                  <h3 className="flex flex-wrap items-baseline gap-x-4 gap-y-1 font-bold text-gray-900">
                    <span>{title}</span>
                    {price ? (
                      <span className="whitespace-nowrap text-lg font-black tracking-tight text-primary">
                        {price}
                      </span>
                    ) : null}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">{desc}</p>
                </div>
              </div>
              <a
                href={KAKAO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 shrink-0 rounded-2xl bg-primary px-6 py-3 text-center font-bold text-white transition hover:bg-primary-hover sm:mt-0"
              >
                카톡으로 문의하기
              </a>
            </div>
          ))}
        </div>
        <p
          className={`mt-5 text-center text-xs leading-relaxed text-gray-500 ${
            isHome ? '' : 'max-w-2xl mx-auto'
          }`}
        >
          {isHome ? (
            <>
              <span className="block">
                VAT·배송비는 별도이며, 용지·재질·인쇄 상황에 따라 가격이 달라질 수 있습니다.
              </span>
              <span className="mt-1 block">정확한 금액은 카톡 문의 시 안내드립니다.</span>
            </>
          ) : (
            <>
              <span className="block">
                VAT·배송비 별도 · 사양·수량에 따라 견적이 달라질 수 있습니다.
              </span>
              <span className="mt-1 block">정확한 금액은 카톡 문의 시 안내드립니다.</span>
            </>
          )}
        </p>
      </div>
    </section>
  );
}
