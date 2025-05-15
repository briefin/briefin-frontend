'use client';

import SearchBar from '@/src/components/SearchBar';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FiSliders, FiMenu, FiHome, FiSearch, FiBookOpen, FiUser, FiChevronLeft  } from 'react-icons/fi';
import * as Common from '@/styles/Common';
import { BackArrowBtn, SearchFollowBtn, FollowedIcon} from '@/src/assets/icons';
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
];

// ✅ Suggested for you 데이터 (가로 슬라이드용)
const suggestedData = [
  {
    img: '/image_9.png',
    title: '지리는여가생활',
    author: '@yeoga',
  },
  {
    img: '/image_9.png',
    title: '지리는여가생활',
    author: '@yeoga',
  },
  {
    img: '/image_9.png',
    title: '지리는여가생활',
    author: '@yeoga',
  },
  // 필요 시 더 추가 가능
];

const mockData_2 = [
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

export default function SearchPage() {

  const router = useRouter(); // ✅ 라우터 훅 사용

  const [mockBookmarks, setMockBookmarks] = useState<boolean[]>(new Array(mockData.length).fill(false));
  const [mockBookmarks_2, setMockBookmarks_2] = useState<boolean[]>(new Array(mockData_2.length).fill(false));
  const [isSearchMode, setIsSearchMode] = useState(false);
  const [suggestFollows, setSuggestFollows] = useState<boolean[]>(
    new Array(suggestedData.length).fill(false)
  );


  const toggleMockBookmarks = (index: number) => {
    setMockBookmarks(prev =>
      prev.map((b, i) => (i === index ? !b : b))
    );
  };

  const toggleMockBookmarks_2 = (index: number) => {
    setMockBookmarks_2(prev =>
      prev.map((b, i) => (i === index ? !b : b))
    );
  };

  const toggleSuggestFollow = (index: number) => {
    setSuggestFollows(prev =>
      prev.map((v, i) => (i === index ? !v : v))
    );
  };


  return (
    <>
      <Common.Wrapper>
        <Common.Grid>
          {mockData.map((item, idx) => (
            <Common.Card key={idx}>
              <Common.Image src={item.img} alt={item.title} />
              <BookmarkMenu
                folders={['y2k', '느좋레시피', '취향저격']} 
              />
              <Common.Overlay>
                <Common.Title>{item.title}</Common.Title>
                <Common.Author>{item.author}</Common.Author>
              </Common.Overlay>
            </Common.Card>
          ))}
        </Common.Grid>

        {/* ✅ Suggested for you 섹션 */}
        <Common.Centered>
          <Common.SuggestedWrapper>
            <Common.SectionTitle>Suggested for you</Common.SectionTitle>
            <Common.HorizontalScroll>
              {suggestedData.map((item, idx) => (
                <Common.SuggestedSearchCard key={idx}>
                  <Common.SuggestedSearchImage src={item.img} />
                  <Common.SuggestedSearchInfo>
                    <Common.SuggestedSearchTitle>{item.title}</Common.SuggestedSearchTitle>
                    <Common.SuggestedSearchHandle>{item.author}</Common.SuggestedSearchHandle>
                  </Common.SuggestedSearchInfo>

                  {/* 팔로우 버튼: 클릭하면 아이콘 토글, 두 번 누르면 원상복구 */}
                  <button
                    onClick={() => toggleSuggestFollow(idx)}
                       style={{
                          background: 'none',
                          border: 'none',
                          padding: 0,
                         cursor: 'pointer'
                    }}
                   >
                  {suggestFollows[idx]     ? <FollowedIcon width={100} height={40} />
                    : <SearchFollowBtn width={100} height={40} />
                   }
                 </button>

                </Common.SuggestedSearchCard>
              ))}
            </Common.HorizontalScroll>
          </Common.SuggestedWrapper>
        </Common.Centered>


        <Common.Grid>
          {mockData_2.map((item, idx) => (
            <Common.Card key={idx}>
              <Common.Image src={item.img} alt={item.title} />
              <BookmarkMenu
                 folders={['y2k', '느좋레시피', '취향저격']}   
               />
              <Common.Overlay>
                <Common.Title>{item.title}</Common.Title>
                <Common.Author>{item.author}</Common.Author>
              </Common.Overlay>
            </Common.Card>
          ))}
        </Common.Grid>
      </Common.Wrapper>

    </>
  );
}
