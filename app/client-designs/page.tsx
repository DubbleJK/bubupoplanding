import { cookies } from 'next/headers';
import AccessForm from '@/components/client-designs/AccessForm';
import ClientDesignsAdminReveal from '@/components/client-designs/ClientDesignsAdminReveal';
import SecretGallery from '@/components/client-designs/SecretGallery';

export const metadata = {
  title: '결제 고객 전용 시안 | 부부피오피',
  description: '결제 완료 고객 전용 추가 시안 확인',
  robots: { index: false, follow: false },
};

export default function ClientDesignsPage() {
  const cookieStore = cookies();
  const hasAccess = cookieStore.get('client_designs_access')?.value === '1';

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 pb-28 sm:py-14">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-center text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
          결제 완료 고객 전용 시안
        </h1>
        <p className="mx-auto mt-3 max-w-lg text-center text-sm leading-relaxed text-gray-600">
          공개 랜딩의 A/B/C 시안 외, 결제 완료 고객 전용 추가 시안을 이곳에서
          확인하실 수 있습니다. 비밀번호는 상담원이 안내합니다. (숫자 4자리)
        </p>
        <div className="mt-8">
          {hasAccess ? <SecretGallery /> : <AccessForm />}
        </div>
        <div className="mx-auto mt-12 max-w-2xl border-t border-gray-200 pt-10">
          <ClientDesignsAdminReveal />
        </div>
      </div>
    </main>
  );
}
