# Vercel 배포 시 환경 변수 설정

로컬의 `.env`는 Git에 올리지 않습니다. **Vercel 대시보드**에만 넣어야 배포 사이트에 반영됩니다.

## 설정 위치

1. [Vercel](https://vercel.com) → 프로젝트 선택  
2. **Settings** → **Environment Variables**  
3. 아래 이름·값 입력 후 **Save**  
4. **Deployments**에서 최신 배포 **⋯ → Redeploy** (또는 새로 `git push`)

`NEXT_PUBLIC_` 로 시작하는 값만 **브라우저(푸터·지도·문의 버튼)**에 쓰입니다.

---

## 푸터(상호·주소·전화 등)가 안 나올 때

| 변수명 | 설명 | 예시 |
|--------|------|------|
| `NEXT_PUBLIC_PHONE` | 전화번호 | `010-1234-5678` |
| `NEXT_PUBLIC_BUSINESS_REG_NO` | 사업자등록번호 | `000-00-00000` |
| `NEXT_PUBLIC_BUSINESS_ADDRESS` | 주소(여러 줄 가능) | `서울시 ○○구 …` |
| `NEXT_PUBLIC_REPRESENTATIVE_NAME` | 대표자명 | `홍길동` |
| `NEXT_PUBLIC_KAKAO_URL` | 카카오톡 채널 URL | `https://pf.kakao.com/...` |

비우면 푸터에 `—` 또는 기본 플레이스홀더가 나올 수 있습니다.

---

## 오시는 길 페이지 지도가 안 나올 때

아래 **하나만** 있어도 지도 iframe이 뜹니다.

1. **`NEXT_PUBLIC_BUSINESS_ADDRESS`**  
   첫 줄에 도로명 주소 → 구글 지도 embed로 자동 표시  
2. **`NEXT_PUBLIC_MAP_LAT`** + **`NEXT_PUBLIC_MAP_LNG`**  
   위도·경도 (숫자만)  
3. **`NEXT_PUBLIC_MAP_EMBED_URL`**  
   카카오·구글·네이버 **지도 퍼가기 iframe 주소** (https만)

추가(선택):

- `NEXT_PUBLIC_MAP_URL` — 카카오/네이버 지도 앱에서 열기 링크  
- `NEXT_PUBLIC_NAVER_MAP_URL` — 비우면 주소로 네이버 지도 검색 링크 자동 생성

---

## 로컬에서 쓰는 `.env`

프로젝트 루트에 `.env.local` 파일을 만들고, `.env.example` 내용을 복사한 뒤 실제 값으로 바꾸면 됩니다.  
이 파일은 **절대 Git에 커밋하지 마세요.**
