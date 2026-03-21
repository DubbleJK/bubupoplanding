import type {
  ServicePortfolioGroup,
  ServicePortfolioItem,
} from '@/components/service-detail/DraftShowcaseSection';

/** 기존 평면 목록을 A/B/C 타입으로 균등 분배(라운드로빈) */
export function splitPortfolioToABC(
  items: ServicePortfolioItem[]
): ServicePortfolioGroup[] {
  if (items.length === 0) return [];
  const a: ServicePortfolioItem[] = [];
  const b: ServicePortfolioItem[] = [];
  const c: ServicePortfolioItem[] = [];
  items.forEach((it, i) => {
    if (i % 3 === 0) a.push(it);
    else if (i % 3 === 1) b.push(it);
    else c.push(it);
  });
  return [
    { groupTitle: 'A타입', items: a },
    { groupTitle: 'B타입', items: b },
    { groupTitle: 'C타입', items: c },
  ];
}
