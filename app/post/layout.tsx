'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { FiChevronLeft, FiHeart, FiBookmark, FiShare2 } from 'react-icons/fi';
import * as Common from '@/styles/Common';
import { BackArrowBtn,UploadBtn,LIkeBtn } from '@/src/assets/icons';

export default function PostLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLong = pathname.includes('/post/long');
  const readLabel = isLong ? '긴글읽기' : '짧은글읽기';
  const barVariant = isLong ? 'light' : 'dark';

  const [isBookmarkOpen, setIsBookmarkOpen] = useState(false);
  const [isScrapToastVisible, setIsScrapToastVisible] = useState(false);

  const handleScrap = (folder: string) => {
    // 선택창 닫기
    setIsBookmarkOpen(false);

    // 스크랩 완료 표시
    setIsScrapToastVisible(true);

    // 3초 후 닫기
    setTimeout(() => {
      setIsScrapToastVisible(false);
    }, 3000);
  };

  return (
    <>
      {/* ✅ 상단 + 콘텐츠 */}
      <div>
        <Common.HeaderContainer>
          <Common.BackButton>
            <BackArrowBtn />
          </Common.BackButton>
          <Common.HeaderTitle>빈티지 단추 모음</Common.HeaderTitle>
        </Common.HeaderContainer>

        <Common.TagRow>
          <Common.TagBadge>패션</Common.TagBadge>
          <Common.TagBadge>트렌드</Common.TagBadge>
        </Common.TagRow>

        {children}
      </div>

      {/* ✅ 북마크 선택창 */}
      {isBookmarkOpen && (
        <Common.BookmarkOverlay onClick={() => setIsBookmarkOpen(false)}>
          <Common.BookmarkSelectBox onClick={(e) => e.stopPropagation()}>
            <Common.BookmarkItem onClick={() => handleScrap('y2k')}>y2k</Common.BookmarkItem>
            <Common.BookmarkItem onClick={() => handleScrap('느긋레시피')}>느긋레시피</Common.BookmarkItem>
          </Common.BookmarkSelectBox>
        </Common.BookmarkOverlay>
      )}

      {/* ✅ 스크랩 완료 알림 */}
      {isScrapToastVisible && (
        <Common.ScrapToast>
          <Common.ScrapImage src="/briefin_logo.png" alt="스크랩 완료" />
          스크랩 완료!
        </Common.ScrapToast>
      )}

      {/* ✅ 하단바 */}
      <Common.BottomBar variant={barVariant}>
        <Common.ProfileTag>
          <Common.HandleBadge>@mag.daily</Common.HandleBadge>
          <Common.HandleBadge>{readLabel}</Common.HandleBadge>
        </Common.ProfileTag>
        <Common.ActionIcons>
          <LIkeBtn />
       </Common.ActionIcons>
       <Common.ActionIcons>
          <FiBookmark onClick={() => setIsBookmarkOpen(true)} />
        </Common.ActionIcons>
        <Common.ActionIcons>
          <UploadBtn />
        </Common.ActionIcons>
      </Common.BottomBar>
    </>
  );
}
