'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import * as Common from '@/styles/Common';
import { FiSliders, FiMenu, FiHome, FiSearch, FiBookOpen, FiUser, FiChevronLeft, FiBookmark } from 'react-icons/fi';
import { BackArrowBtn } from '@/src/assets/icons';
import CategoryBar from '@/src/components/CategoryBar';
import BookmarkMenu from '@/src/components/BookmarkMenu';

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
];

export default function Page() {
  const router = useRouter();

  const [mockBookmarks, setMockBookmarks] = useState<boolean[]>(
    new Array(mockData.length).fill(false)
  );
  const [suggestedDataBookmarks, setSuggestedDataBookmarks] = useState<boolean[]>(
    new Array(suggestedData.length).fill(false)
  );

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
      {/* 헤더 */}
      <Common.Centered>
        <Common.Header>
          <Common.IconButton style={{ marginTop: '10px', marginBottom: '10px' }}>
            <BackArrowBtn />
          </Common.IconButton>
        </Common.Header>
      </Common.Centered>

      {/* 카테고리 바 */}
      <Common.Centered>
        <Common.ButtonRow>
          <CategoryBar style={{ marginLeft: '20px' }} />
        </Common.ButtonRow>
      </Common.Centered>

      {/* 메인 컨텐츠 */}
      <Common.Wrapper style={{ marginTop: '10px' }}>
        {/* 카드 그리드 */}
        <Common.Grid>
          {mockData.map((item, idx) => (
            <Common.Card key={idx} style={{ position: 'relative' }}>
              {/* 이미지 클릭 시 /post/short로 이동 */}
              <Common.Image
                src={item.img}
                alt={item.title}
                onClick={() => router.push('/post/short')}
                style={{ cursor: 'pointer' }}
              />

              {/* 북마크 메뉴 */}
              <div style={{ position: 'absolute', top: 8, right: 8, zIndex: 2 }}>
                <BookmarkMenu
                  folders={['y2k', '느좋레시피', '취향저격']}
                  initialFolder={null}
                  onChange={() => {}}
                />
              </div>

              {/* 오버레이 텍스트 */}
              <Common.Overlay>
                <Common.Title>{item.title}</Common.Title>
                <Common.Author>{item.author}</Common.Author>
              </Common.Overlay>
            </Common.Card>
          ))}
        </Common.Grid>

        {/* Suggested for you 섹션 */}
        <Common.Centered>
          <Common.SuggestedWrapper style={{ marginTop: '-5px' }}>
            <Common.SectionTitle>Suggested for you</Common.SectionTitle>
            <Common.HorizontalScroll>
              {suggestedData.map((item, idx) => (
                <Common.SuggestedCard key={idx} style={{ position: 'relative' }}>
                  {/* 클릭 시 /post/short 이동 */}
                  <Common.SuggestedImage
                    src={item.img}
                    alt={item.title}
                    onClick={() => router.push('/post/short')}
                    style={{ cursor: 'pointer' }}
                  />

                  {/* 오버레이 텍스트 */}
                  <Common.SuggestedOverlay>
                    <Common.Title>{item.title}</Common.Title>
                    <Common.Author>{item.author}</Common.Author>
                  </Common.SuggestedOverlay>

                  {/* 북마크 메뉴 */}
                  <div style={{ position: 'absolute', top: 8, right: 8, zIndex: 2 }}>
                    <BookmarkMenu
                      folders={['y2k', '느좋레시피', '취향저격']}
                      initialFolder={null}
                      onChange={() => {}}
                    />
                  </div>
                </Common.SuggestedCard>
              ))}
            </Common.HorizontalScroll>
          </Common.SuggestedWrapper>
        </Common.Centered>
      </Common.Wrapper>
    </>
  );
}
