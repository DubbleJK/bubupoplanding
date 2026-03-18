'use client';

import { useState, type ReactNode } from 'react';

export type FaqItem = { q: string; a: string | ReactNode };

const FAQ_ITEMS: FaqItem[] = [
  {
    q: '당일 제작 가능한가요?',
    a: '네. 품목과 수량에 따라 당일 제작이 가능합니다. 오전 문의 시 당일 제작 가능 여부를 안내해 드립니다.',
  },
  {
    q: '최소 수량은?',
    a: '품목마다 다르지만, 스티커·명함 등은 소량(1장~)부터 가능한 경우가 많습니다. 카카오톡으로 문의해 주세요.',
  },
  {
    q: 'GPT로 만든 이미지밖에 없는데 가능한가요?',
    a: '가능합니다. 해상도와 용도만 맞다면 AI로 만든 이미지도 제작 가능합니다.',
  },
  {
    q: '디자인 없어도 되나요?',
    a: '네. 이미지만 있으시면 됩니다. 디자인이 필요하시면 간단한 편집 상담도 해드립니다.',
  },
  {
    q: '배송 기간은?',
    a: '제작 완료 후 1~2일 이내 발송합니다. 지역에 따라 1~3일 정도 소요됩니다.',
  },
];

type FaqSectionProps = {
  /** 없으면 메인용 기본 FAQ 전체 */
  items?: FaqItem[];
  title?: string;
};

export default function FaqSection({
  items = FAQ_ITEMS,
  title = '자주 묻는 질문',
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section bg-white">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <div className="mt-6 space-y-2">
          {items.map(({ q, a }, i) => (
            <div
              key={q}
              className="overflow-hidden rounded-2xl border-2 border-gray-200 bg-white"
            >
              <button
                type="button"
                className="flex w-full items-center justify-between px-5 py-4 text-left font-bold text-gray-900"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span>{q}</span>
                <span
                  className={`shrink-0 text-lg text-orange-400 transition-transform drop-shadow-sm ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                  aria-hidden
                >
                  ▼
                </span>
              </button>
              <div
                className={`grid transition-[grid-template-rows] duration-200 ${
                  openIndex === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-gray-100 px-5 pb-4 pt-2 text-sm text-gray-600">
                    {typeof a === 'string' ? (
                      <p>{a}</p>
                    ) : (
                      <div className="space-y-3">{a}</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
