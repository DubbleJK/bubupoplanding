# Vercel에 자기 도메인 연결하기

배포가 끝난 뒤 `*.vercel.app` 대신 **직접 가진 도메인**(예: `www.회사.com`)을 쓰려면 아래 순서로 진행하면 됩니다.

## 1. Vercel에서 도메인 추가

1. [Vercel 대시보드](https://vercel.com) → 해당 프로젝트 선택  
2. **Settings** → **Domains**  
3. 도메인 입력 후 **Add**  
   - 루트만 쓰려면: `example.com`  
   - www만 쓰려면: `www.example.com`  
   - 둘 다 쓰려면 둘 다 추가한 뒤, 하나를 다른 쪽으로 **Redirect** 설정 권장

## 2. 도메인 업체(DNS)에서 레코드 설정

Vercel이 안내하는 값을 그대로 넣습니다.

- **A 레코드** (apex `example.com` 연결 시): Vercel이 제시하는 IP(또는 “Vercel DNS” 사용 안내)  
- **CNAME** (`www` → `cname.vercel-dns.com` 등): 화면에 표시된 대상

DNS 반영은 몇 분~최대 48시간까지 걸릴 수 있습니다.

## 3. 환경 변수에 실제 URL 넣기

도메인이 연결되면 프로젝트 **Settings → Environment Variables**에 다음을 추가(또는 수정)합니다.

| 이름 | 예시 값 |
|------|---------|
| `NEXT_PUBLIC_SITE_URL` | `https://www.example.com` |

- **끝에 `/` 없이** 넣는 것을 권장합니다.  
- 적용 후 **Deployments → … → Redeploy** 로 한 번 다시 배포하면, `sitemap.xml`, `robots.txt`, OG 메타데이터 기준 URL이 새 도메인으로 맞춰집니다.

## 4. 확인

- 브라우저에서 새 도메인으로 메인·서브페이지가 열리는지  
- [https://www.example.com/sitemap.xml](https://www.example.com/sitemap.xml) 에 URL이 새 도메인인지  
- 카카오톡 등에 링크 공유 시 미리보기가 이상 없는지  

---

문제가 있으면 Vercel **Domains** 화면의 DNS 안내와 “Invalid Configuration” 메시지를 확인하세요.
