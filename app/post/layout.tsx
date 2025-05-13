'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { FiChevronLeft, FiHeart, FiBookmark, FiShare2 } from 'react-icons/fi';
import * as Common from '@/styles/Common';

export default function PostLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLong = pathname.includes('/post/long');
  const readLabel = isLong ? '긴글읽기' : '짧은글읽기';

  return (
    <div>
      {/* 상단 헤더 */}
      <Common.HeaderContainer>
        <Common.BackButton>
          <FiChevronLeft />
        </Common.BackButton>
        <Common.HeaderTitle>빈티지 단추 모음</Common.HeaderTitle>
      </Common.HeaderContainer>

      {/* 태그 */}
      <Common.TagRow>
        <Common.TagBadge>패션</Common.TagBadge>
        <Common.TagBadge>트렌드</Common.TagBadge>
      </Common.TagRow>

      {/* 콘텐츠 */}
      {children}

      {/* 하단 바 */}
      <Common.BottomBar>
        <Common.ProfileTag>
          <Common.HandleBadge>@mag.daily</Common.HandleBadge>
          <Common.HandleBadge>{readLabel}</Common.HandleBadge>
        </Common.ProfileTag>
        <Common.ActionIcons>
          <FiHeart />
          <FiBookmark />
          <FiShare2 />
        </Common.ActionIcons>
      </Common.BottomBar>
    </div>
  );
}
