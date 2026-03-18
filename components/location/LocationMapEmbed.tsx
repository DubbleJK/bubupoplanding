/**
 * iframe(구글 embed 또는 카카오·네이버 퍼가기 URL)으로 지도 표시.
 * 페이지 카드와 동일한 gray 톤으로 통일.
 */

function trustedIframeSrc(url: string): boolean {
  try {
    const u = new URL(url);
    if (u.protocol !== 'https:') return false;
    const h = u.hostname.toLowerCase();
    return (
      h === 'www.google.com' ||
      h === 'maps.google.com' ||
      h.endsWith('.google.com') ||
      h === 'map.kakao.com' ||
      h.endsWith('.kakao.com') ||
      h.includes('naver.') ||
      h.endsWith('.daum.net') ||
      h.endsWith('.daumcdn.net')
    );
  } catch {
    return false;
  }
}

function validCoord(s: string): boolean {
  return /^-?\d+(\.\d+)?$/.test(s);
}

export function getLocationMapEmbedSrc(): string | null {
  const custom = process.env.NEXT_PUBLIC_MAP_EMBED_URL?.trim();
  if (custom && trustedIframeSrc(custom)) return custom;

  const lat = process.env.NEXT_PUBLIC_MAP_LAT?.trim();
  const lng = process.env.NEXT_PUBLIC_MAP_LNG?.trim();
  if (lat && lng && validCoord(lat) && validCoord(lng)) {
    return `https://maps.google.com/maps?q=${lat},${lng}&z=17&hl=ko&output=embed`;
  }

  const line =
    process.env.NEXT_PUBLIC_BUSINESS_ADDRESS?.split('\n')[0]?.trim() ?? '';
  if (line.length > 0) {
    return `https://maps.google.com/maps?q=${encodeURIComponent(line)}&z=17&hl=ko&output=embed`;
  }

  return null;
}

type Props = {
  mapUrl?: string;
  naverMapUrl?: string;
};

export default function LocationMapEmbed({ mapUrl, naverMapUrl }: Props) {
  const src = getLocationMapEmbedSrc();

  if (src) {
    return (
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-sm">
        <iframe
          title="위치 지도"
          src={src}
          className="h-[min(420px,72vh)] w-full min-h-[280px] border-0 sm:h-[460px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <div className="border-t border-gray-200 bg-gray-50/90 px-4 py-2.5 sm:py-3">
          <p className="text-center text-sm leading-relaxed text-gray-600">
            위치는 검색·좌표 기준입니다. 앱으로 보시려면 아래 &quot;지도 앱에서 열기&quot;를 이용해 주세요.
          </p>
          {naverMapUrl ? (
            <div className="mt-2 flex justify-end">
              <a
                href={naverMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-green-600 hover:text-green-700 hover:underline"
              >
                네이버 지도로 열기
              </a>
            </div>
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-[280px] flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-6 py-12 text-center">
      <p className="text-base font-medium leading-snug text-gray-700">
        지도를 표시하려면 아래 중 하나를 설정해 주세요.
      </p>
      <ul className="max-w-md list-inside list-disc text-left text-sm leading-relaxed text-gray-600">
        <li>
          <code className="rounded bg-gray-200 px-1">NEXT_PUBLIC_BUSINESS_ADDRESS</code>{' '}
          (도로명 주소 첫 줄) → 구글 지도로 자동 표시
        </li>
        <li>
          <code className="rounded bg-gray-200 px-1">NEXT_PUBLIC_MAP_LAT</code> /{' '}
          <code className="rounded bg-gray-200 px-1">LNG</code> → 좌표 기준
        </li>
        <li>
          카카오·구글 <strong>지도 퍼가기 iframe 주소</strong> →{' '}
          <code className="rounded bg-gray-200 px-1">NEXT_PUBLIC_MAP_EMBED_URL</code>
        </li>
      </ul>
      {mapUrl ? (
        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800"
        >
          카카오·네이버 지도에서 열기
        </a>
      ) : null}
      {naverMapUrl ? (
        <div className="mt-2 flex w-full justify-end pr-1">
          <a
            href={naverMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-green-600 hover:text-green-700 hover:underline"
          >
            네이버 지도로 열기
          </a>
        </div>
      ) : null}
    </div>
  );
}
