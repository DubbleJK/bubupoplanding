'use client';

import { useCallback, useEffect, useState } from 'react';
import {
  DESIGN_SLOT_PREFIXES,
  DESIGN_SLOT_SUFFIXES,
  prefixLabelKo,
  type DesignSlotPrefix,
} from '@/lib/client-designs-slots';

type Props = {
  /** 관리자 마스터 PIN 확인 후 — 열람 세션 종료 링크 */
  showAdminLinks?: boolean;
};

export default function ClientDesignsSlotManager({ showAdminLinks = false }: Props) {
  const [slots, setSlots] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/client-designs/manifest', { credentials: 'include' });
      const data = (await res.json()) as { ok?: boolean; slots?: Record<string, string> };
      if (res.ok && data.slots) setSlots(data.slots);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  function groupSlots(prefix: DesignSlotPrefix) {
    return DESIGN_SLOT_SUFFIXES.map((s) => `${prefix}_${s}`);
  }

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-sm font-extrabold text-gray-900">등록된 시안</h3>
          <button
            type="button"
            onClick={() => refresh()}
            className="text-xs font-semibold text-primary underline"
          >
            새로고침
          </button>
        </div>
        <p className="mt-2 text-xs leading-relaxed text-gray-600">
          이미지는 저장소의{' '}
          <code className="rounded bg-gray-100 px-1 font-mono text-[11px]">
            public/client-design-assets/
          </code>{' '}
          폴더에 넣고 배포해 주세요. (예: <span className="font-mono">POSTER_A.webp</span>)
        </p>
        {loading ? (
          <p className="mt-3 text-sm text-gray-500">불러오는 중…</p>
        ) : (
          <div className="mt-4 space-y-8">
            {DESIGN_SLOT_PREFIXES.map((prefix) => (
              <div key={prefix}>
                <h4 className="text-xs font-bold uppercase tracking-wide text-gray-500">
                  {prefix} · {prefixLabelKo(prefix)}
                </h4>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {groupSlots(prefix).map((slot) => {
                    const url = slots[slot];
                    return (
                      <div
                        key={slot}
                        className="overflow-hidden rounded-xl border-2 border-gray-100 bg-gray-50"
                      >
                        <div className="relative aspect-[4/3] w-full bg-gray-100">
                          {url ? (
                            // eslint-disable-next-line @next/next/no-img-element -- 동적 API URL
                            <img
                              src={url}
                              alt={slot}
                              className="h-full w-full object-contain object-center"
                            />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center px-2 text-center text-xs text-gray-400">
                              {slot}
                              <br />
                              미등록
                            </div>
                          )}
                        </div>
                        <p className="border-t border-gray-100 bg-white px-2 py-2 text-center font-mono text-xs font-bold text-gray-800">
                          {slot}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {showAdminLinks ? (
        <p className="text-center text-xs text-gray-500">
          <a href="/api/client-designs/admin-logout" className="font-semibold underline">
            관리자 열람 세션 종료
          </a>
        </p>
      ) : null}
    </div>
  );
}
