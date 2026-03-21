# 부부피오피 랜딩페이지

Next.js (App Router) + Tailwind CSS 기반 모바일 최적화 랜딩페이지입니다.

## 실행 방법

```bash
# 의존성 설치
npm install

# 환경 변수 설정 (.env.example을 참고해 .env.local 생성)
# NEXT_PUBLIC_KAKAO_URL=카카오톡 채널/플러스친구 URL
# NEXT_PUBLIC_PHONE=전화번호 (선택)

# 개발 서버 실행
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 으로 접속하세요.

## 빌드 및 배포

```bash
npm run build
npm start
```

**Vercel**에 올릴 때는 로컬 `.env`가 자동으로 가지 않습니다. 푸터·지도·전화가 비어 있으면 대시보드 **Settings → Environment Variables**에 값을 넣고 다시 배포하세요. 자세한 목록은 [`docs/Vercel-환경변수-설정.md`](docs/Vercel-환경변수-설정.md) 참고. **자기 도메인 연결**은 [`docs/Vercel-커스텀-도메인.md`](docs/Vercel-커스텀-도메인.md) 참고.

## 페이지 구조

- `/` - 메인 (히어로, 품목 선택, 강점, 추천 패키지, 주문 방법, 후기, FAQ)
- `/client-designs` - 결제 완료 고객 전용 추가 시안 (월간 비밀번호, `CLIENT_DESIGNS_MASTER_SECRET`). 시안 **이미지는** `public/client-design-assets/` 에 파일로 넣고 배포 (예: `POSTER_A.webp`). 하단 「관리자용 페이지」는 마스터 PIN·시안 미리보기(쿠키 4시간).
- `/client-designs/admin?token=...` - 토큰으로 월간 비밀번호만 확인 (`CLIENT_DESIGNS_ADMIN_TOKEN`)
- `/sticker` - 스티커
- `/tshirt` - 단체티
- `/dtf` - DTF출력
- `/banner` - 배너
- `/card` - 명함
- `/goods` - 굿즈 (키링·배지 등)
- `/keyring` → `/goods` 로 리다이렉트 (구 URL 호환)
- `/another` - 각종 인쇄물

## 보안

- 카카오톡 링크·전화번호는 환경 변수 사용 (`NEXT_PUBLIC_KAKAO_URL`, `NEXT_PUBLIC_PHONE`)
- 외부 링크에는 `rel="noopener noreferrer"` 적용
- next.config.js에서 보안 헤더 설정 (X-Frame-Options, CSP 등)
- `app/robots.ts`: `/client-designs`, `/api/` 크롤링 비허용
- 네이버 블로그 RSS 썸네일 URL은 `*.pstatic.net` 등 허용 호스트만 사용 (`lib/naver-blog-thumb-url.ts`)
