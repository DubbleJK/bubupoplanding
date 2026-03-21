import fs from 'fs/promises';
import path from 'path';
import { isValidDesignSlot } from '@/lib/client-designs-slots';

/**
 * 결제 고객 전용 시안 — 웹 업로드 없음.
 * `public/client-design-assets/` 에 `POSTER_A.webp` 처럼 넣고 배포하면 표시됩니다.
 */
export const CLIENT_DESIGN_ASSETS_DIR = path.join(
  process.cwd(),
  'public',
  'client-design-assets'
);

const TRY_EXTS = ['webp', 'jpg', 'jpeg', 'png', 'gif'] as const;

export function mimeFromFilename(filename: string): string {
  const ext = path.extname(filename).slice(1).toLowerCase();
  switch (ext) {
    case 'jpg':
    case 'jpeg':
      return 'image/jpeg';
    case 'png':
      return 'image/png';
    case 'webp':
      return 'image/webp';
    case 'gif':
      return 'image/gif';
    default:
      return 'application/octet-stream';
  }
}

/** 슬롯명과 동일한 파일명(확장자 우선순위)이 있으면 절대 경로 반환 */
export async function getDiskPathForSlot(slot: string): Promise<string | null> {
  if (!isValidDesignSlot(slot)) return null;
  const baseResolved = path.resolve(CLIENT_DESIGN_ASSETS_DIR);
  for (const ext of TRY_EXTS) {
    const full = path.join(CLIENT_DESIGN_ASSETS_DIR, `${slot}.${ext}`);
    const resolved = path.resolve(full);
    if (!resolved.startsWith(baseResolved)) continue;
    try {
      await fs.access(resolved);
      return resolved;
    } catch {
      /* try next ext */
    }
  }
  return null;
}
