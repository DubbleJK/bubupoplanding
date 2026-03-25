const PLACEHOLDER_KAKAO = 'https://pf.kakao.com/_xxxxx';
const PLACEHOLDER_PHONE_DISPLAY = '010-0000-0000';

/** 카카오 채널/플러스친구 URL (미설정 시 플레이스홀더) */
export function getPublicKakaoUrl(): string {
  const v = process.env.NEXT_PUBLIC_KAKAO_URL?.trim();
  return v && v.length > 0 ? v : PLACEHOLDER_KAKAO;
}

export function isKakaoUrlPlaceholder(url: string): boolean {
  return (
    !url ||
    url === PLACEHOLDER_KAKAO ||
    url.includes('_xxxxx') ||
    url === 'https://pf.kakao.com/'
  );
}

/** 화면에 보이는 전화번호 문자열 */
export function getPublicPhoneDisplay(): string {
  const v = process.env.NEXT_PUBLIC_PHONE?.trim();
  return v && v.length > 0 ? v : PLACEHOLDER_PHONE_DISPLAY;
}

export function isPhonePlaceholder(display: string): boolean {
  const digits = display.replace(/\D/g, '');
  return digits === '01000000000' || digits.length < 8;
}

/** tel: 링크용 (하이픈 제거) */
export function getTelHref(): string {
  const digits = getPublicPhoneDisplay().replace(/\D/g, '');
  return `tel:${digits}`;
}
