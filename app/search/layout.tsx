// app/search/layout.tsx
'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import SearchBar from '@/src/components/SearchBar';
import CategoryBar from '@/src/components/CategoryBar';
import * as Common from '@/styles/Common';
import { BackArrowBtn } from '@/src/assets/icons';

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const isWhile = usePathname() === '/search/whilesearching';

  return (
    <>
      {/* 헤더: 항상 뒤로가기 버튼만 보여 줌 */}
      <Common.Centered>
        <Common.Header>
          <Common.IconButton onClick={() => router.back()} style={{marginTop : '10px'}}>
            <BackArrowBtn />
          </Common.IconButton>
        </Common.Header>
      </Common.Centered>

      {/* 검색창 + 카테고리 */}
      <Common.ContentWrapper>
        <Common.Centered style={{marginBottom :'10px'}}>
          <SearchBar />
        </Common.Centered>
        {!isWhile && (
          <Common.Centered style={{marginLeft : '20px',}} >
            <CategoryBar />
          </Common.Centered>
        )}
      </Common.ContentWrapper>

      {/* 페이지별 고유 콘텐츠 */}
      <Common.Wrapper>
        {children}
      </Common.Wrapper>
    </>
  );
}
