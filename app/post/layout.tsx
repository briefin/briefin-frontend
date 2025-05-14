'use client';

import React, { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { FiBookmark } from 'react-icons/fi';
import * as Common from '@/styles/Common';
import { BackArrowBtn, WUploadBtn, LIkeBtn } from '@/src/assets/icons';

export default function PostLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? '';
  const router = useRouter();

  // 현재 경로에 따라 short/long 판별
  const isLong = pathname.includes('/post/long');

  // 이동할 상대 페이지와 라벨 설정
  const togglePath = isLong ? '/post/short' : '/post/long';
  const toggleLabel = isLong ? '짧은글읽기' : '긴글읽기';

  const [isBookmarkOpen, setIsBookmarkOpen] = useState(false);
  const [isScrapToastVisible, setIsScrapToastVisible] = useState(false);

  const handleScrap = (folder: string) => {
    setIsBookmarkOpen(false);
    setIsScrapToastVisible(true);
    setTimeout(() => setIsScrapToastVisible(false), 3000);
  };

  return (
    <>
      {/* 상단 헤더 */}
      <Common.PostHeaderContainer transparent={isLong}>
        <Common.BackButton onClick={() => router.back()}>
          <BackArrowBtn />
        </Common.BackButton>
        <Common.HeaderTitle >빈티지 단추 모음</Common.HeaderTitle>
      </Common.PostHeaderContainer>

      {/* 태그 행 */}
      <Common.TagRow style={{marginTop : '60px'}}>
        <Common.TagBadge>패션</Common.TagBadge>
        <Common.TagBadge>트렌드</Common.TagBadge>
      </Common.TagRow>

      {/* 본문 */}
      <div style={{ paddingTop: isLong ? '-10px' : 0 }}>
        {children}
      </div>

      {/* 북마크 선택창 */}
      {isBookmarkOpen && (
        <Common.BookmarkOverlay onClick={() => setIsBookmarkOpen(false)}>
          <Common.BookmarkSelectBox onClick={e => e.stopPropagation()}>
            <Common.BookmarkItem onClick={() => handleScrap('y2k')}>y2k</Common.BookmarkItem>
            <Common.BookmarkItem onClick={() => handleScrap('느좋레시피')}>느좋레시피</Common.BookmarkItem>
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
          {/* 퍼블리셔 아이디(항상 고정) */}
          <Common.HandleBadge>@mag.daily</Common.HandleBadge>

          {/* 짧/긴 글 읽기 배지: 클릭 시 togglePath로 네비게이트 */}
          <Common.HandleBadge
            onClick={() => router.push(togglePath)}
            style={{ cursor: 'pointer' }}
          >
            {toggleLabel}
          </Common.HandleBadge>
        </Common.ProfileTag>

        <Common.ActionIcons>
          <LIkeBtn />
        </Common.ActionIcons>
        <Common.ActionIcons>
          <FiBookmark onClick={() => setIsBookmarkOpen(true)} />
        </Common.ActionIcons>
        <Common.ActionIcons>
          <WUploadBtn/>
        </Common.ActionIcons>
      </Common.PostBottomBar>
    </>
  );
}
