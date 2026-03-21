import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import {
  getDiskPathForSlot,
  mimeFromFilename,
} from '@/lib/client-designs-storage';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const slot = (req.nextUrl.searchParams.get('slot') ?? '').trim().toUpperCase();
  const cookieStore = cookies();
  const hasClient = cookieStore.get('client_designs_access')?.value === '1';
  const hasAdmin = cookieStore.get('client_designs_admin_access')?.value === '1';
  if (!hasClient && !hasAdmin) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  const disk = await getDiskPathForSlot(slot);
  if (!disk) {
    return new NextResponse('Not found', { status: 404 });
  }

  const buf = await fs.readFile(disk);
  return new NextResponse(buf, {
    headers: {
      'Content-Type': mimeFromFilename(disk),
      'Cache-Control': 'private, no-store',
      'X-Content-Type-Options': 'nosniff',
    },
  });
}
