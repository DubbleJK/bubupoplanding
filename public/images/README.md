# 이미지 폴더

원하는 위치에 사용할 이미지를 이 폴더에 넣어 주세요.

## 스티커·단체티 히어로 동영상

- 스티커: `public/sticker-hero-video.mp4` → `/sticker-hero-video.mp4`
- 단체티: `public/tshirt-hero-video.mp4` → `/tshirt-hero-video.mp4`
- 단체티 **포스터**(로딩 전 이미지): `public/images/tshirt-hero.png` 권장 (없어도 영상 재생은 됩니다)

## 사용 방법

- 이미지 파일을 `public/images/` 안에 저장합니다.
- 예: `public/images/hero.jpg` → 웹에서는 **`/images/hero.jpg`** 로 사용합니다.

## Next.js에서 사용 예시

```tsx
import Image from 'next/image';

<Image
  src="/images/파일명.jpg"
  alt="설명"
  width={800}
  height={600}
/>
```

일반 img 태그를 쓸 때:

```tsx
<img src="/images/파일명.jpg" alt="설명" />
```

## 추천 위치별 파일명 (참고)

| 위치         | 추천 파일명 예시   |
|--------------|--------------------|
| 메인 히어로   | hero.jpg           |
| 제작 사례    | portfolio-1.jpg 등 |
| 서비스별 대표 | sticker.jpg, tshirt.jpg 등 |
