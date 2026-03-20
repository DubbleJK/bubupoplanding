import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'BUBUPOP logo';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

function arrayBufferToBase64(buffer: ArrayBuffer): string {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]!);
  }
  return btoa(binary);
}

export default async function TwitterImage() {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '') ||
    'https://bubupoplanding.vercel.app';

  const logoW = 520;
  const logoH = 520;

  try {
    const res = await fetch(`${base}/images/kakao-share-logo.png`);
    if (res.ok) {
      const buf = await res.arrayBuffer();
      const logoSrc = `data:image/png;base64,${arrayBufferToBase64(buf)}`;
      return new ImageResponse(
        (
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#FFFDF8',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- @vercel/og */}
            <img
              alt=""
              src={logoSrc}
              width={logoW}
              height={logoH}
              style={{ objectFit: 'contain' }}
            />
          </div>
        ),
        { ...size }
      );
    }
  } catch {
    // fallback below
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#FFFDF8',
          color: '#2A1818',
        }}
      >
        <div style={{ fontSize: 80, fontWeight: 800 }}>BUBUPOP</div>
        <div
          style={{
            fontSize: 32,
            fontWeight: 700,
            marginTop: 14,
            letterSpacing: 4,
          }}
        >
          DESIGN &amp; PRINT
        </div>
      </div>
    ),
    { ...size }
  );
}
