// src/app/post/[...]/layout.tsx 또는 PostLayout.tsx
'use client';

import React, { ReactNode, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import * as Common from '@/styles/Common';
import { BackArrowBtn, WUploadBtn, LikeBtn, LikedBtn } from '@/src/assets/icons';
import CopyPathButton from '@/src/components/CopypathButton';

export default function PostLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname() || '';
  const router = useRouter();

  // 1) /post/new 경로라면 레이아웃 없이 children만
  if (pathname === '/post/new') {
    return <>{children}</>;
  }

  // 2) 그 외 포스트 상세 페이지에는 기존 레이아웃 적용
  const isLong = pathname.includes('/post/long');
  const [isLiked, setIsLiked] = useState(false);
  const toggleLike = () => setIsLiked(l => !l);
  const togglePath = isLong ? '/post/short' : '/post/long';
  const toggleLabel = isLong ? '짧은글읽기' : '긴글읽기';
  const [isBookmarkOpen, setIsBookmarkOpen] = useState(false);
  const [isScrapToastVisible, setIsScrapToastVisible] = useState(false);
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);
  const publisherId = 'mag.daily';

  const handleScrap = (folder: string | null) => {
    setSelectedFolder(folder);
    setIsBookmarkOpen(false);
    if (folder) {
      setIsScrapToastVisible(true);
      setTimeout(() => setIsScrapToastVisible(false), 3000);
    }
  };

  return (
    <>
      {/* 상단 헤더 */}
      <Common.PostHeaderContainer $transparent={isLong}>
        <Common.BackButton onClick={() => router.back()}>
          <BackArrowBtn />
        </Common.BackButton>
        <Common.HeaderTitle>빈티지 단추 모음</Common.HeaderTitle>
      </Common.PostHeaderContainer>

      {/* 태그 */}
      <Common.TagRow style={{ marginTop: '60px' }}>
        <Common.TagBadge>패션</Common.TagBadge>
        <Common.TagBadge>트렌드</Common.TagBadge>
      </Common.TagRow>

      {/* 본문 */}
      <div style={{ paddingTop: isLong ? '-10px' : 0 }}>{children}</div>

      {/* 북마크 선택창 */}
      {isBookmarkOpen && (
        <Common.BookmarkOverlay onClick={() => setIsBookmarkOpen(false)}>
          <Common.BookmarkSelectBox onClick={e => e.stopPropagation()}>
            <Common.BookmarkItem onClick={() => handleScrap('y2k')}>y2k</Common.BookmarkItem>
            <Common.BookmarkItem onClick={() => handleScrap('느좋레시피')}>
              느좋레시피
            </Common.BookmarkItem>
          </Common.BookmarkSelectBox>
        </Common.BookmarkOverlay>
      )}

      {/* 스크랩 완료 토스트 */}
      {isScrapToastVisible && (
        <Common.ScrapToast>
          <Common.ScrapImage src="/briefin_logo.png" alt="스크랩 완료" />
          스크랩 완료!
        </Common.ScrapToast>
      )}

      {/* 하단 바 */}
      <Common.PostBottomBar variant={isLong ? 'light' : 'dark'}>
        <Common.ProfileTag>
          <Common.HandleBadge
            onClick={() => router.push(`/profile/otherpublisher/${publisherId}`)}
            style={{ cursor: 'pointer' }}
          >
            @{publisherId}
          </Common.HandleBadge>
          <Common.HandleBadge
            onClick={() => router.push(togglePath)}
            style={{ cursor: 'pointer' }}
          >
            {toggleLabel}
          </Common.HandleBadge>
        </Common.ProfileTag>

        <Common.ActionIcons onClick={toggleLike}>
          {isLiked ? (
            <LikedBtn width={24} height={24} />
          ) : (
            <LikeBtn width={24} height={24} />
          )}
        </Common.ActionIcons>

        <Common.ActionIcons>
          <img
            src={selectedFolder ? '/bookmark_on.png' : '/bookmark_off.png'}
            alt="bookmark"
            width={24}
            height={24}
            style={{ cursor: 'pointer' }}
            onClick={() => {
              if (selectedFolder) handleScrap(null);
              else setIsBookmarkOpen(true);
            }}
          />
        </Common.ActionIcons>

        <CopyPathButton />
      </Common.PostBottomBar>
    </>
  );
}
