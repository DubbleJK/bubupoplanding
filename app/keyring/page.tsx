import { redirect } from 'next/navigation';

/** 키링은 굿즈 페이지와 통일 — 예전 URL은 굿즈로 연결 */
export default function KeyringPage() {
  redirect('/goods');
}
