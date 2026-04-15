/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /** 응답에서 X-Powered-By 제거 */
  poweredByHeader: false,
  /** 프로덕션 빌드에서 console.* 제거(디버그 정보 유출·번들 약간 감소) */
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error', 'warn'] } : false,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    remotePatterns: [
      { protocol: 'https', hostname: 'blogfiles.pstatic.net', pathname: '/**' },
      { protocol: 'https', hostname: 'postfiles.pstatic.net', pathname: '/**' },
      { protocol: 'https', hostname: 'dthumb-phinf.pstatic.net', pathname: '/**' },
      { protocol: 'https', hostname: 'mblogthumb-phinf.pstatic.net', pathname: '/**' },
      { protocol: 'https', hostname: 'cafeptthumb-phinf.pstatic.net', pathname: '/**' },
      { protocol: 'https', hostname: 'shop-phinf.pstatic.net', pathname: '/**' },
      { protocol: 'https', hostname: 'blogthumb.pstatic.net', pathname: '/**' },
      { protocol: 'https', hostname: 'ssl.pstatic.net', pathname: '/**' },
    ],
  },
  experimental: {
    optimizePackageImports: ['embla-carousel-react', 'embla-carousel-autoplay'],
  },
  async headers() {
    /** 카카오 roughmap 제거 후: 서드파티 스크립트는 self + Next 필수만 허용 */
    const isProd = process.env.NODE_ENV === 'production';
    const csp = [
      "default-src 'self'",
      isProd
        ? "script-src 'self' 'unsafe-inline'"
        : "script-src 'self' 'unsafe-eval' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https: blob:",
      "font-src 'self' data:",
      "connect-src 'self'",
      "frame-src 'self' https://www.google.com https://*.google.com https://maps.google.com https://map.naver.com https://*.naver.com https://*.naver.net https://*.pstatic.net https://map.kakao.com https://*.kakao.com https://*.daum.net https://*.daumcdn.net",
      "worker-src 'self' blob:",
      "object-src 'none'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      'upgrade-insecure-requests',
    ].join('; ');

    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
          { key: 'Cross-Origin-Resource-Policy', value: 'same-origin' },
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'Content-Security-Policy', value: csp },
        ],
      },
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|gif|ico|woff|woff2|ttf)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
