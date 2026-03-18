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

**Vercel**에 올릴 때는 로컬 `.env`가 자동으로 가지 않습니다. 푸터·지도·전화가 비어 있으면 대시보드 **Settings → Environment Variables**에 값을 넣고 다시 배포하세요. 자세한 목록은 [`docs/Vercel-환경변수-설정.md`](docs/Vercel-환경변수-설정.md) 참고.

## 페이지 구조

- `/` - 메인 (히어로, 품목 선택, 강점, 추천 패키지, 주문 방법, 제작 사례, 후기, FAQ)
- `/sticker` - 스티커
- `/tshirt` - 단체티
- `/dtf` - DTF출력
- `/banner` - 배너
- `/card` - 명함
- `/goods` - 굿즈 (키링·배지 등)
- `/keyring` → `/goods` 로 리다이렉트 (구 URL 호환)
- `/another` - 기타

## 보안

- 카카오톡 링크·전화번호는 환경 변수 사용 (`NEXT_PUBLIC_KAKAO_URL`, `NEXT_PUBLIC_PHONE`)
- 외부 링크에는 `rel="noopener noreferrer"` 적용
- next.config.js에서 보안 헤더 설정 (X-Frame-Options, CSP 등)
