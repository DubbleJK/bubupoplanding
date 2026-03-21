import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { allDesignSlotIds } from '@/lib/client-designs-slots';
import { getDiskPathForSlot } from '@/lib/client-designs-storage';

export const dynamic = 'force-dynamic';

export async function GET() {
  const cookieStore = cookies();
  const hasClient = cookieStore.get('client_designs_access')?.value === '1';
  const hasAdmin = cookieStore.get('client_designs_admin_access')?.value === '1';
  if (!hasClient && !hasAdmin) {
    return NextResponse.json({ ok: false, error: 'unauthorized' }, { status: 401 });
  }

  const slots: Record<string, string> = {};
  for (const slot of allDesignSlotIds()) {
    const disk = await getDiskPathForSlot(slot);
    if (disk) {
      slots[slot] = `/api/client-designs/image?slot=${encodeURIComponent(slot)}`;
    }
  }

  return NextResponse.json(
    { ok: true, slots },
    {
      headers: {
        'Cache-Control': 'private, no-store',
      },
    }
  );
}
