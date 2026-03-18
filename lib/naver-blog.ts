export type NaverBlogPost = {
  title: string;
  link: string;
  pubDate?: string;
  imageUrl?: string;
};

async function fetchXml(url: string): Promise<string | null> {
  try {
    const res = await fetch(url, {
      next: { revalidate: 300 },
      headers: { Accept: 'application/rss+xml, application/xml, text/xml' },
    });
    if (!res.ok) return null;
    return await res.text();
  } catch {
    return null;
  }
}

function makeFallbackTitles(blogId: string): NaverBlogPost[] {
  const home = `https://blog.naver.com/${encodeURIComponent(blogId)}`;
  return [
    { title: '급한 인쇄, 오늘 출고 가능할까요? (실제 진행 스냅)', link: home },
    { title: '소량 제작도 OK — 문의부터 제작까지 빠른 진행 후기', link: home },
    { title: '스티커·배너·티셔츠 작업 사례 모아보기 (최근 작업)', link: home },
  ];
}

function decodeXmlText(s: string): string {
  return s
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();
}

function extractFromItem(block: string, tag: string): string | undefined {
  const cdata = new RegExp(
    `<${tag}[^>]*>\\s*<!\\[CDATA\\[([\\s\\S]*?)\\]\\]>\\s*</${tag}>`,
    'i'
  );
  const plain = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, 'i');
  const m = block.match(cdata) || block.match(plain);
  if (!m) return undefined;
  return decodeXmlText(m[1].replace(/<!\[CDATA\[|\]\]>/g, '').trim());
}

function parseRssItems(xml: string, maxCount: number): NaverBlogPost[] {
  const items: NaverBlogPost[] = [];
  const parts = xml.split('<item>');

  for (let i = 1; i < parts.length && items.length < maxCount; i++) {
    const block = parts[i].split('</item>')[0];
    const title = extractFromItem(block, 'title') || '제목 없음';
    const link = extractFromItem(block, 'link') || '';
    const pubDate = extractFromItem(block, 'pubDate');
    const description = extractFromItem(block, 'description') || '';
    const imageUrl = (() => {
      // description 안의 첫 이미지 src만 추출 (HTML 전체 렌더링 X)
      // 예: <img src="https://blogthumb.pstatic.net/...jpg" />
      const m = description.match(/<img[^>]+src=["']([^"']+)["']/i);
      if (!m) return undefined;
      const url = m[1].trim();
      // 기본적인 안전 필터: http/https만 허용
      if (!/^https?:\/\//i.test(url)) return undefined;
      return url;
    })();

    if (link) items.push({ title, link, pubDate, imageUrl });
  }

  return items;
}

/** 네이버 블로그 RSS에서 최신 글 가져오기. NAVER_BLOG_ID(또는 NEXT_PUBLIC_NAVER_BLOG_ID) 필요. */
export async function getNaverBlogPosts(maxCount = 3): Promise<NaverBlogPost[]> {
  // 서버 전용 변수(NAVER_BLOG_ID)를 권장하지만, 초보자 실수를 줄이기 위해
  // NEXT_PUBLIC_NAVER_BLOG_ID도 허용합니다.
  const blogId =
    process.env.NAVER_BLOG_ID || process.env.NEXT_PUBLIC_NAVER_BLOG_ID;
  if (!blogId || blogId.trim() === '') {
    return [];
  }
  const id = blogId.trim();

  // 네이버 공지에서 https://rss.blog.naver.com 을 권장하지만,
  // 실제로는 https://blog.rss.naver.com 이 더 잘 동작하는 케이스가 있어 2개를 순차 시도합니다.
  const urls = [
    `https://rss.blog.naver.com/${encodeURIComponent(id)}.xml`,
    `https://blog.rss.naver.com/${encodeURIComponent(id)}.xml`,
  ];

  for (const url of urls) {
    const xml = await fetchXml(url);
    if (!xml) continue;
    const items = parseRssItems(xml, maxCount);
    if (items.length > 0) return items;
  }

  // 둘 다 실패/비어있으면, 최소한 UI가 비지 않도록 대체 타이틀 제공
  return makeFallbackTitles(id).slice(0, maxCount);
}
