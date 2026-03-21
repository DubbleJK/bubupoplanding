'use client';

import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import type { NaverBlogPost } from '@/lib/naver-blog';
import {
  isTrustedNaverBlogThumbUrl,
  NAVER_IMAGE_HOSTS_FOR_NEXT_IMAGE,
} from '@/lib/naver-blog-thumb-url';

function useNextImageOptimization(url: string): boolean {
  try {
    return NAVER_IMAGE_HOSTS_FOR_NEXT_IMAGE.has(new URL(url).hostname.toLowerCase());
  } catch {
    return false;
  }
}

function formatDate(pubDate?: string): string {
  if (!pubDate) return '';
  try {
    return new Date(pubDate).toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch {
    return '';
  }
}

function BlogThumb({
  post,
  sizes,
}: {
  post: NaverBlogPost;
  sizes: string;
}) {
  const alt = post.title ? `${post.title} 썸네일` : '블로그 글 이미지';

  return (
    <div className="mb-3 overflow-hidden rounded-xl border border-gray-200 bg-gray-100">
      <div className="relative aspect-[4/3] w-full">
        {post.imageUrl && useNextImageOptimization(post.imageUrl) ? (
          <Image
            src={post.imageUrl}
            alt={alt}
            fill
            className="object-cover"
            sizes={sizes}
            loading="lazy"
            quality={75}
            referrerPolicy="no-referrer"
          />
        ) : post.imageUrl && isTrustedNaverBlogThumbUrl(post.imageUrl) ? (
          // eslint-disable-next-line @next/next/no-img-element -- *.pstatic.net 등 허용 호스트
          <img
            src={post.imageUrl}
            alt={alt}
            className="h-full w-full object-cover"
            decoding="async"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-xs text-gray-400">
            대표 이미지
          </div>
        )}
      </div>
    </div>
  );
}

function BlogCardText({ post }: { post: NaverBlogPost }) {
  return (
    <>
      <span className="line-clamp-2 font-bold text-gray-900">{post.title}</span>
      {post.pubDate ? (
        <span className="mt-2 text-xs text-gray-500">{formatDate(post.pubDate)}</span>
      ) : null}
      <span className="mt-2 text-sm font-medium text-primary">블로그에서 보기 →</span>
    </>
  );
}

const EMPTY_STATE = (
  <p className="w-full rounded-2xl border-2 border-dashed border-gray-200 bg-white p-8 text-center text-gray-500">
    블로그 연동 후 최신 글이 여기에 표시됩니다.
    <br />
    <span className="mt-2 block text-sm">.env에 NAVER_BLOG_ID를 설정해 주세요.</span>
  </p>
);

type Props = {
  posts: NaverBlogPost[];
  heading: string;
  subheading: string;
};

export default function BlogLatestGrid({ posts, heading, subheading }: Props) {
  const hasPosts = posts.length > 0;
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  return (
    <section className="section section-muted">
      <div className="container">
        <h2 className="section-title">{heading}</h2>
        <p className="section-desc">{subheading}</p>

        <div className="relative -mx-4 mt-6 sm:hidden">
          <div ref={emblaRef} className="overflow-hidden px-4 pb-2">
            <div className="flex">
              {hasPosts
                ? posts.map((post, i) => (
                    <a
                      key={`${post.link}-${i}`}
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mr-4 flex min-w-0 flex-[0_0_92%] flex-col rounded-2xl border-2 border-gray-200 bg-white p-5 transition hover:border-primary hover:shadow-md"
                    >
                      <BlogThumb post={post} sizes="(max-width: 640px) 92vw, 280px" />
                      <BlogCardText post={post} />
                    </a>
                  ))
                : EMPTY_STATE}
            </div>
          </div>
          {hasPosts ? (
            <>
              <button
                type="button"
                className="absolute inset-y-0 left-0 w-1/5"
                aria-label="이전 포스팅"
                onClick={() => emblaApi?.scrollPrev()}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 w-1/5"
                aria-label="다음 포스팅"
                onClick={() => emblaApi?.scrollNext()}
              />
            </>
          ) : null}
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center sm:hidden">
            <span className="ml-3 select-none text-2xl font-bold text-gray-400" aria-hidden>
              ‹
            </span>
          </div>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center sm:hidden">
            <span className="mr-3 select-none text-2xl font-bold text-gray-400" aria-hidden>
              ›
            </span>
          </div>
        </div>

        <div className="mt-6 hidden gap-4 sm:grid sm:grid-cols-3">
          {hasPosts ? (
            posts.map((post, i) => (
              <a
                key={`${post.link}-${i}`}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col rounded-2xl border-2 border-gray-200 bg-white p-5 transition hover:border-primary hover:shadow-md"
              >
                <BlogThumb post={post} sizes="(max-width: 1024px) 45vw, 280px" />
                <BlogCardText post={post} />
              </a>
            ))
          ) : (
            <div className="col-span-full">{EMPTY_STATE}</div>
          )}
        </div>
      </div>
    </section>
  );
}
