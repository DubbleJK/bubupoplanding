/** 고객·관리자 시안 업로드 슬롯 (전부 대문자) */
export const DESIGN_SLOT_PREFIXES = ['POSTER', 'PIKET', 'SUPPLIES'] as const;
export type DesignSlotPrefix = (typeof DESIGN_SLOT_PREFIXES)[number];

/** A~F 변형 (필요 시 배열만 늘리면 됨) */
export const DESIGN_SLOT_SUFFIXES = ['A', 'B', 'C', 'D', 'E', 'F'] as const;

const SLOT_RE = /^(POSTER|PIKET|SUPPLIES)_[A-Z0-9]{1,12}$/;

export function isValidDesignSlot(slot: string): boolean {
  return SLOT_RE.test(slot);
}

export function normalizeDesignSlot(raw: string): string {
  return raw.trim().toUpperCase().replace(/\s+/g, '_');
}

/** 고정 슬롯 목록(파일 존재 여부는 서버에서 확인) */
export function allDesignSlotIds(): string[] {
  const out: string[] = [];
  for (const p of DESIGN_SLOT_PREFIXES) {
    for (const s of DESIGN_SLOT_SUFFIXES) {
      out.push(`${p}_${s}`);
    }
  }
  return out;
}

const LABEL_KO: Record<DesignSlotPrefix, string> = {
  POSTER: '포스터',
  PIKET: '피켓',
  SUPPLIES: '용품',
};

export function prefixLabelKo(prefix: DesignSlotPrefix): string {
  return LABEL_KO[prefix];
}
