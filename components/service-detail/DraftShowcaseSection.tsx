import Image from 'next/image';
import Link from 'next/link';

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
};

export default function DraftShowcaseSection({ groups }: Props) {
  return (
    <section className="border-t border-gray-200 bg-gray-50 px-4 py-12 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="section-title">시안 모음</h2>
        <p className="section-desc mx-auto max-w-2xl">
          다양한 제작 사례와 시안을 참고하실 수 있습니다. 결제가 완료된 고객님은
          아래 버튼으로 추가 시안을 확인하실 수 있습니다.
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
              {group.items.length === 0 ? (
                <p className="mt-3 text-sm text-gray-500">
                  공개 시안 준비 중입니다.
                </p>
              ) : (
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {group.items.map((item, i) => (
                    <article
                      key={`${group.groupTitle}-${item.title}-${i}`}
                      className="overflow-hidden rounded-xl border border-gray-100 bg-gray-50"
                    >
                      <div className="relative aspect-[4/3] w-full bg-gray-100">
                        {item.imageSrc ? (
                          <Image
                            src={item.imageSrc}
                            alt={item.title}
                            fill
                            className="object-cover object-center"
                            sizes="(max-width: 896px) 100vw, 400px"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center text-sm text-gray-400">
                            이미지 준비 중
                          </div>
                        )}
                      </div>
                      <p className="px-3 py-2 text-center text-sm font-semibold text-gray-800">
                        {item.title}
                      </p>
                    </article>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

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
      </div>
    </section>
  );
}
