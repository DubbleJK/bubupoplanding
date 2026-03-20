import Link from 'next/link';
import PageHeader from '@/components/layout/PageHeader';
import Image from 'next/image';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'DTF 파일 제작 가이드 | 부부피오피',
  description:
    'DTF 출력용 파일 제작 가이드. 아트보드, 해상도, 색상, 최소 굵기, 파일 전달 방식까지 실무 기준으로 안내합니다.',
};

type AppSetting = {
  tool: string;
  icon: ReactNode;
  settings: string;
};

const appSettings: AppSetting[] = [
  {
    tool: '일러스트',
    icon: (
      <span
        className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-[#ff9a00] text-white"
        aria-hidden
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
          <path d="M4 3h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zm8.8 13.7l.9 2.3h2.2L12.4 8h-1.8L7.1 19h2.1l.9-2.3h2.7zm-.6-1.8h-1.6l.8-2.5.8 2.5zM17.2 10a1 1 0 100-2 1 1 0 000 2z" />
        </svg>
      </span>
    ),
    settings: '대지 850×1000mm\n컬러 모드 CMYK, 래스터 효과 300dpi',
  },
  {
    tool: '포토샵',
    icon: (
      <span
        className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-[#001e36] text-[#31a8ff]"
        aria-hidden
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
          <path d="M4 3h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zm5.2 6.2H7.3V19h1.9v-3.2h1.1c2 0 3.4-1.1 3.4-3.3 0-2.2-1.4-3.3-3.5-3.3zm.9 4.9h-.9V11h.9c1.1 0 1.7.5 1.7 1.5s-.6 1.6-1.7 1.6zm5.6 5c1.7 0 2.8-.9 2.8-2.3 0-1.2-.7-1.8-2.2-2.3-.9-.3-1.2-.5-1.2-.9 0-.4.3-.7.9-.7.7 0 1.2.2 1.8.6l.9-1.4c-.7-.5-1.6-.8-2.7-.8-1.6 0-2.7.9-2.7 2.2 0 1.1.8 1.8 2.2 2.2.9.3 1.2.5 1.2.9 0 .5-.4.8-1.1.8-.8 0-1.6-.3-2.2-.8l-.9 1.4c.8.7 1.9 1.1 3.2 1.1z" />
        </svg>
      </span>
    ),
    settings: '캔버스 크기 850×1000mm\n300dpi, CMYK색상, 배경 투명',
  },
  {
    tool: '기타',
    icon: (
      <span
        className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-gray-700 text-white"
        aria-hidden
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
          <path d="M19.4 13a7.8 7.8 0 000-2l1.8-1.4a.5.5 0 00.1-.6l-1.7-3a.5.5 0 00-.6-.2l-2.1.8a7.4 7.4 0 00-1.7-1L14.9 3a.5.5 0 00-.5-.4h-3.4a.5.5 0 00-.5.4l-.3 2.6a7.4 7.4 0 00-1.7 1l-2.1-.8a.5.5 0 00-.6.2l-1.7 3a.5.5 0 00.1.6L6 11a7.8 7.8 0 000 2l-1.8 1.4a.5.5 0 00-.1.6l1.7 3a.5.5 0 00.6.2l2.1-.8a7.4 7.4 0 001.7 1l.3 2.6a.5.5 0 00.5.4h3.4a.5.5 0 00.5-.4l.3-2.6a7.4 7.4 0 001.7-1l2.1.8a.5.5 0 00.6-.2l1.7-3a.5.5 0 00-.1-.6L19.4 13zM12 15.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7z" />
        </svg>
      </span>
    ),
    settings: '출력 크기 850×1000mm,\n설정 후 PNG(배경 투명)로 저장',
  },
];

const checklist = [
  '아트보드 크기: 가로 85cm × 세로 100cm',
  '해상도: 300dpi 이상',
  '색상: CMYK 설정',
  '최소 굵기: 2mm 이상 권장',
  '텍스트: 아웃라인 처리(또는 폰트 포함)',
  '배경: 필요한 부분만 투명 처리',
  '2m 이상 동일 디자인: 1m 기준 파일 1개만 전달',
  '2m 이상 서로 다른 디자인: 파일 분리해서 전달',
];

export default function DtfGuidePage() {
  return (
    <>
      <PageHeader
        subtitle="DTF 파일 가이드"
        title="DTF 파일 제작 가이드"
        description={
          <p>
            작업자가 바로 따라 할 수 있도록 <strong>파일 설정값 + 배치 규칙 + 전달 방식</strong>만
            간단하게 정리했습니다.
          </p>
        }
      />

      <section className="section bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-4 shadow-sm sm:p-6">
            <h2 className="text-xl font-extrabold text-gray-900 sm:text-2xl">
              1) 배치 작업
              <span className="block">사이즈 (85cm × 100cm)</span>
            </h2>

            <div className="mt-4 rounded-2xl bg-white p-4 sm:p-6">
              <div className="mx-auto max-w-[560px]">
                <p className="text-center text-lg font-extrabold text-primary sm:text-xl">85cm</p>
                <div className="relative mx-auto mt-2 aspect-[85/100] w-full border-4 border-primary">
                  {/* 상단 가로 로고 영역(겹침 방지를 위해 높이 제한) */}
                  <div className="grid h-[72%] grid-cols-4 gap-2 p-3 sm:gap-3 sm:p-4">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div
                        key={`h-${i}`}
                        className="relative overflow-hidden rounded-md border border-gray-300 bg-white/90"
                      >
                        <Image
                          src="/images/dtf-guide-logo-clean.png"
                          alt="로고 배치 예시"
                          fill
                          className="object-contain p-1"
                          sizes="120px"
                        />
                      </div>
                    ))}
                  </div>

                  {/* 하단 세로 로고 영역(별도 레인으로 분리) */}
                  <div className="absolute inset-x-3 bottom-3 grid h-[22%] grid-cols-5 gap-2 sm:inset-x-4 sm:bottom-4 sm:gap-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div
                        key={`v-${i}`}
                        className="relative overflow-hidden rounded-md border border-gray-300 bg-white/90"
                      >
                        <Image
                          src="/images/dtf-guide-logo-clean.png"
                          alt="세로 로고 배치 예시"
                          fill
                          className="object-contain p-1 [transform:rotate(-90deg)]"
                          sizes="80px"
                        />
                      </div>
                    ))}
                  </div>

                  <p className="absolute -right-16 top-1/2 -translate-y-1/2 text-lg font-extrabold text-primary sm:-right-20 sm:text-xl">
                    100cm
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-xl border border-orange-200 bg-orange-50/80 p-4 text-sm leading-relaxed text-gray-800 sm:text-base">
                <p className="font-bold text-gray-900">배치 규칙</p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>가로 85cm × 세로 100cm 안에 이미지 배치</li>
                  <li>재단선이 필요하면 동일 이미지를 간격 두고 배치</li>
                  <li>2m 이상 동일 이미지는 1m 기준 파일 1개만 전달</li>
                  <li>서로 다른 이미지는 파일을 분리해 전달</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-7 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-xl font-extrabold text-gray-900 sm:text-2xl">2) 파일 설정값</h2>
            {/* 모바일: 스와이프 없는 카드형 (아이콘/텍스트 줄바꿈) */}
            <div className="mt-4 grid gap-2 sm:hidden">
              {appSettings.map((row) => (
                <article
                  key={`m-${row.tool}`}
                  className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3"
                >
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center">
                      {row.icon}
                    </span>
                    <span className="text-base font-extrabold text-gray-900">{row.tool}</span>
                  </div>
                  <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-gray-700">
                    {row.settings}
                  </p>
                </article>
              ))}
            </div>

            {/* 태블릿/PC: 표 유지 */}
            <div className="mt-4 hidden overflow-x-auto rounded-xl border border-gray-200 sm:block">
              <table className="w-full border-collapse text-left text-sm sm:text-base">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border-b border-gray-200 px-4 py-3 font-extrabold text-gray-900">작업 툴</th>
                    <th className="border-b border-gray-200 px-4 py-3 font-extrabold text-gray-900">권장 설정</th>
                  </tr>
                </thead>
                <tbody>
                  {appSettings.map((row) => (
                    <tr key={row.tool} className="border-b border-gray-100 last:border-0">
                      <td className="px-4 py-3 font-bold text-gray-900">
                        <div className="flex min-w-[150px] items-center gap-2 whitespace-nowrap">
                          <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center">
                            {row.icon}
                          </span>
                          <span className="whitespace-nowrap">{row.tool}</span>
                        </div>
                      </td>
                      <td className="whitespace-pre-line px-4 py-3 text-gray-700">{row.settings}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-7 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-xl font-extrabold text-gray-900 sm:text-2xl">3) 최종 체크리스트</h2>
            <div className="mt-4 space-y-2">
              {checklist.map((item, index) => (
                <label
                  key={item}
                  htmlFor={`dtf-check-${index}`}
                  className="flex cursor-pointer items-start gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-semibold text-gray-800 sm:text-base"
                >
                  <input
                    id={`dtf-check-${index}`}
                    type="checkbox"
                    className="mt-0.5 h-5 w-5 shrink-0 accent-primary"
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>

            <div className="mt-5 rounded-xl border border-sky-200 bg-sky-50/80 px-4 py-4 text-sm leading-relaxed text-gray-800 sm:px-5 sm:text-base">
              <p className="font-extrabold text-gray-900">파일 전달 안내</p>
              <p className="mt-1.5">
                최종 체크된 파일은 이메일{' '}
                <a
                  href="mailto:beautyfont@naver.com"
                  className="font-bold text-sky-700 underline underline-offset-2"
                >
                  beautyfont@naver.com
                </a>
                {' '}또는{' '}
                <span className="font-bold text-[#3B1E1E] underline underline-offset-2">
                  카카오톡
                </span>
                으로 보내 주세요.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/dtf"
              className="inline-flex flex-1 items-center justify-center rounded-2xl border border-gray-300 bg-white px-5 py-3 text-sm font-bold text-gray-900 transition hover:bg-gray-50"
            >
              DTF 페이지로 돌아가기
            </Link>
            <a
              href={process.env.NEXT_PUBLIC_KAKAO_URL || 'https://pf.kakao.com/_xxxxx'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center rounded-2xl bg-[#FEE500] px-5 py-3 text-sm font-bold text-[#191919] transition hover:opacity-90"
            >
              카톡으로 파일 문의하기
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
