import PortfolioItemsCarousel from './PortfolioItemsCarousel';

export type ServicePortfolioItem = {
  title: string;
  description?: string;
  imageSrc?: string;
};

export type ServicePortfolioGroup = {
  groupTitle: string;
  items: ServicePortfolioItem[];
  /** true면 시안이 준비될 때까지 화면에서 제외 */
  hidden?: boolean;
};

export type PortfolioShowVariant = 'default' | 'printMisc';

type Props = {
  groups: ServicePortfolioGroup[];
  /** true일 때만 /client-designs 안내 버튼 표시 (선거용품 페이지 전용) */
  showClientDesignsCta?: boolean;
  /** 각종 인쇄물 등: 슬롯·빈 목록 문구를 제작 사례용으로 통일 */
  portfolioVariant?: PortfolioShowVariant;
  /** poster면 세로 시안 전체를 낮은 해상도로 표시 */
  frame?: 'landscape' | 'poster';
};

const DRAFT_SLOT = '2026년 신규 시안 준비중';
const DRAFT_EMPTY = '2026년 신규 시안 준비 중입니다.';
const PRINT_SLOT = '작업 사진 업로드 준비중';
const PRINT_EMPTY = '작업 사진 업로드 준비 중입니다.';

export default function DraftShowcaseSection({
  groups,
  showClientDesignsCta = false,
  portfolioVariant = 'default',
  frame = 'landscape',
}: Props) {
  const visibleGroups = groups.filter((group) => !group.hidden);
  if (visibleGroups.length === 0) return null;
  const heading = showClientDesignsCta ? '시안 모음' : '제작 사례';

  const slotPlaceholder = showClientDesignsCta
    ? DRAFT_SLOT
    : portfolioVariant === 'printMisc'
      ? PRINT_SLOT
      : undefined;
  const emptyMessage = showClientDesignsCta
    ? DRAFT_EMPTY
    : portfolioVariant === 'printMisc'
      ? PRINT_EMPTY
      : undefined;

  return (
    <section className="border-t border-gray-200 bg-gray-50 px-4 py-12 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="section-title">{heading}</h2>
        {showClientDesignsCta ? (
          <div className="mt-2 max-w-2xl space-y-2.5 text-left text-pretty">
            <p className="text-[15px] leading-relaxed text-gray-600 sm:text-base">
              포스터·피켓·용품 등{' '}
              <strong className="font-semibold text-gray-700">공개 시안 방향</strong>을 참고하실 수
              있습니다.
            </p>
            <div className="rounded-2xl border-2 border-primary bg-primary-light px-4 py-3.5 shadow-sm sm:px-5 sm:py-4">
              <p className="text-base font-extrabold leading-snug text-gray-900 sm:text-lg">
                모든 시안은 색상, 문구 수정이 가능합니다.
              </p>
              <p className="mt-1.5 text-base font-extrabold leading-snug text-primary sm:text-lg">
                자세한 문의는 카톡 또는 전화로 문의 주세요!
              </p>
            </div>
          </div>
        ) : (
          <div className="mt-2 max-w-2xl space-y-2.5 text-left text-pretty">
            <p className="text-[15px] leading-relaxed text-gray-600 sm:text-base">
              실제 진행했던{' '}
              <strong className="font-semibold text-gray-700">작업 사진</strong>을 모았습니다.
            </p>
            <p className="text-[15px] leading-relaxed text-gray-600 sm:text-base">
              비슷한 구성이 필요하시면 카톡으로 레퍼런스를 보내 주시면 됩니다.
            </p>
          </div>
        )}

        <div className="mt-8 flex flex-col gap-10">
          {visibleGroups.map((group, gi) => (
            <div
              key={`${group.groupTitle || 'group'}-${gi}`}
              className="rounded-2xl border-2 border-gray-200 bg-white p-4 shadow-sm sm:p-6"
            >
              {group.groupTitle.trim() ? (
                <h3 className="text-lg font-extrabold text-gray-900 sm:text-xl">
                  {group.groupTitle}
                </h3>
              ) : null}
              <PortfolioItemsCarousel
                items={group.items}
                groupKey={`${group.groupTitle || 'group'}-${gi}`}
                slotPlaceholder={slotPlaceholder}
                emptyMessage={emptyMessage}
                frame={frame}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
