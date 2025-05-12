// app/post/layout.tsx

'use client'; // styled-components 및 useContext 등 사용 시 필수

import React from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import * as Common from '@/styles/Common';

export default function PostLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {/* 상단 헤더 */}
      <Common.HeaderContainer>
        <Common.BackButton>
          <FiChevronLeft />
        </Common.BackButton>
        <Common.HeaderTitle>빈티지 단추 모음</Common.HeaderTitle>
      </Common.HeaderContainer>

      {/* 태그 뱃지 */}
      <Common.TagRow>
        <Common.TagBadge>패션</Common.TagBadge>
        <Common.TagBadge>트렌드</Common.TagBadge>
      </Common.TagRow>

      {/* 페이지 콘텐츠 */}
      {children}
    </div>
  );
}
