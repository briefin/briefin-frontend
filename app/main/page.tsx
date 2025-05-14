'use client';

import * as Common from '@/styles/Common';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FiSliders, FiMenu, FiHome, FiSearch, FiBookOpen, FiUser, FiChevronLeft, FiBookmark   } from 'react-icons/fi';
import Image from 'next/image'; 
import { BackArrowBtn,FilterBtn } from '@/src/assets/icons';


const mockData = [
  {
    img: '/image_1.png',
    title: '빈티지 단추 모음',
    author: '@mag.daily',
  },
  {
    img: '/image_2.png',
    title: '진주 목걸이는 진짜 유명한 꿀템임',
    author: '@mag.daily',
  },
  {
    img: '/image_3.png',
    title: '중저가 주얼리 이거 사세요',
    author: '@mag.daily',
  },
  {
    img: '/image_4.png',
    title: '요즘 넥타이 누가 안사?',
    author: '@mag.daily',
  },
  {
    img: '/image_5.png',
    title: '버버리 정도는 다들 갖고 있잖아',
    author: '@mag.daily',
  },
  {
    img: '/image_6.png',
    title: "What's In My Bag",
    author: '@mag.daily',
  },
];

// ✅ Suggested for you 데이터 (가로 슬라이드용)
const suggestedData = [
  {
    img: '/image_7.png',
    title: '느충 중년 언니',
    author: '@mag.daily',
  },
  {
    img: '/image_8.png',
    title: '빨간맛',
    author: '@mag.daily',
  },
  {
    img: '/image_7.png',
    title: '느충 중년 언니',
    author: '@mag.daily',
  },
  {
    img: '/image_8.png',
    title: '빨간맛',
    author: '@mag.daily',
  },
  {
    img: '/image_7.png',
    title: '느충 중년 언니',
    author: '@mag.daily',
  },
  {
    img: '/image_8.png',
    title: '빨간맛',
    author: '@mag.daily',
  },
  // 필요 시 더 추가 가능
];

export default function Page() {

  const router = useRouter(); // ✅ 라우터 훅 사용

  const [mockBookmarks, setMockBookmarks] = useState<boolean[]>(new Array(mockData.length).fill(false));
  const [suggestedDataBookmarks, setSuggestedDataBookmarks] = useState<boolean[]>(new Array(suggestedData.length).fill(false));

  const toggleMockBookmarks = (index: number) => {
    setMockBookmarks(prev =>
      prev.map((b, i) => (i === index ? !b : b))
    );
  };

  const toggleSuggestedDataBookmarks = (index: number) => {
    setSuggestedDataBookmarks(prev =>
      prev.map((b, i) => (i === index ? !b : b))
    );
  };

  return (
    <>
      <Common.Centered>
        <Common.Header>
          <Common.IconButton><BackArrowBtn /></Common.IconButton>  
        </Common.Header>      
      </Common.Centered>

      <Common.Centered>
        <Common.ButtonRow>
          <Common.CategoryButton active>패션</Common.CategoryButton>
          <Common.CategoryButton>인터뷰</Common.CategoryButton>
          <Common.CategoryButton>맛집</Common.CategoryButton>
        </Common.ButtonRow>
      </Common.Centered>

      <Common.Wrapper>
        <Common.Grid>
          {mockData.map((item, idx) => (
            <Common.Card key={idx}>
              <Common.Image src={item.img} alt={item.title} />
              <Common.BookmarkWrapper>
                {mockBookmarks[idx] && (
                  <Common.BookmarkLabel>y2k</Common.BookmarkLabel>
                )}
                <Common.BookmarkButton onClick={() => toggleMockBookmarks(idx)}>
                  <img
                    src={mockBookmarks[idx] ? '/bookmark_on.png' : '/bookmark_off.png'}
                    alt="bookmark"
                    width={20}
                    height={20}
                  />
                </Common.BookmarkButton>
              </Common.BookmarkWrapper>
              <Common.Overlay>
                <Common.Title>{item.title}</Common.Title>
                <Common.Author>{item.author}</Common.Author>
              </Common.Overlay>
            </Common.Card>
          ))}
        </Common.Grid>

        {/* ✅ Suggested for you 섹션 */}
{/* ✅ Suggested for you 섹션 */}
        <Common.Centered>
          <Common.SuggestedWrapper>
            <Common.SectionTitle>Suggested for you</Common.SectionTitle>
            <Common.HorizontalScroll>
              {suggestedData.map((item, idx) => (
                <Common.SuggestedCard key={idx}>
                  <Common.SuggestedImage src={item.img} alt={item.title} />
          {/* 오버레이 텍스트 */}
                  <Common.SuggestedOverlay>
                    <Common.Title>{item.title}</Common.Title>
                    <Common.Author>{item.author}</Common.Author>
                  </Common.SuggestedOverlay>

          {/* 북마크 */}
                  <Common.BookmarkWrapper>
                      {suggestedDataBookmarks[idx] && (
                       <Common.BookmarkLabel>y2k</Common.BookmarkLabel>
                  )}
                    <Common.BookmarkButton onClick={() => toggleSuggestedDataBookmarks(idx)}>
                      <img
                        src={suggestedDataBookmarks[idx] ? '/bookmark_on.png' : '/bookmark_off.png'}
                        alt="bookmark"
                        width={20}
                        height={20}
                      />
                    </Common.BookmarkButton>
                  </Common.BookmarkWrapper>
                </Common.SuggestedCard>
              ))}
            </Common.HorizontalScroll>
          </Common.SuggestedWrapper>
        </Common.Centered>
      </Common.Wrapper>

    </>
  );
}
