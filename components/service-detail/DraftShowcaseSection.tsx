import Link from 'next/link';
import PortfolioItemsCarousel from './PortfolioItemsCarousel';

export type ServicePortfolioItem = {
  title: string;
  description?: string;
  imageSrc?: string;
};

export type ServicePortfolioGroup = {
  groupTitle: string;
  items: ServicePortfolioItem[];
};

type Props = {
  groups: ServicePortfolioGroup[];
  /** true일 때만 /client-designs 안내 버튼 표시 (선거용품 페이지 전용) */
  showClientDesignsCta?: boolean;
};

export default function DraftShowcaseSection({
  groups,
  showClientDesignsCta = false,
}: Props) {
  return (
    <section className="border-t border-gray-200 bg-gray-50 px-4 py-12 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="section-title">시안 모음</h2>
        <p className="section-desc mx-auto max-w-2xl">
          {showClientDesignsCta ? (
            <>
              다양한 제작 사례와 시안을 참고하실 수 있습니다. 결제가 완료된 고객님은
              아래 버튼으로 추가 시안을 확인하실 수 있습니다.
            </>
          ) : (
            <>다양한 제작 사례와 시안을 참고하실 수 있습니다.</>
          )}
        </p>

        <div className="mt-8 flex flex-col gap-10">
          {groups.map((group, gi) => (
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
              />
            </div>
          ))}
        </div>

        {showClientDesignsCta ? (
          <div className="mt-10 flex flex-col items-center gap-3">
            <Link
              href="/client-designs"
              className="inline-flex min-h-[3.25rem] w-full max-w-md items-center justify-center rounded-2xl bg-primary px-6 py-3 text-center text-base font-extrabold text-white shadow-sm transition hover:bg-primary-hover sm:w-auto sm:px-10"
            >
              결제 완료 고객 전용 · 추가 시안 보기
            </Link>
            <p className="max-w-md text-center text-xs leading-relaxed text-gray-500">
              결제 확인 후 상담원이 안내하는{' '}
              <strong className="text-gray-700">월간 비밀번호(숫자 4자리)</strong>로 입장합니다.
              비밀번호는 매월 10일(서울)에 자동 갱신됩니다.
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
