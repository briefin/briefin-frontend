'use client';

import SearchBar from '@/src/components/SearchBar';
import CategoryBar from '@/src/components/CategoryBar';
import BookmarkMenu from '@/src/components/BookmarkMenu';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import * as Common from '@/styles/Common';
import { 
  BackArrowBtn, 
  SearchFollowBtn, 
  FollowedIcon 
} from '@/src/assets/icons';


const mockData = [
  { img: '/image_1.png', title: '빈티지 단추 모음', author: '@mag.daily' },
  { img: '/image_2.png', title: '진주 목걸이는 진짜 유명한 꿀템임', author: '@mag.daily' },
];

const suggestedData = [
  { img: '/image_9.png', title: '지리는여가생활', author: '@yeoga' },
  { img: '/image_9.png', title: '빨간맛',        author: '@mag.daily' },
  { img: '/image_9.png', title: '느충 중년 언니', author: '@mag.daily' },
];

const mockData_2 = [
  { img: '/image_3.png', title: '중저가 주얼리 이거 사세요',   author: '@mag.daily' },
  { img: '/image_4.png', title: '요즘 넥타이 누가 안사?',       author: '@mag.daily' },
  { img: '/image_5.png', title: '버버리 정도는 다들 갖고 있잖아', author: '@mag.daily' },
  { img: '/image_6.png', title: "What's In My Bag",            author: '@mag.daily' },
];

export default function SearchPage() {
  const router = useRouter();
  const [suggestFollows, setSuggestFollows] = useState<boolean[]>(
    new Array(suggestedData.length).fill(false)
  );

  const toggleSuggestFollow = (index: number) => {
    setSuggestFollows(prev =>
      prev.map((v, i) => (i === index ? !v : v))
    );
  };

  useEffect(() => {
    console.log('📐 뷰포트 스케일:', window.visualViewport?.scale);
  }, []);

  return (
    <>
      <Common.Wrapper>
        {/* 첫 번째 그리드: 클릭 시 /post/short */}
        <Common.Grid>
          {mockData.map((item, idx) => (
            <Common.Card key={idx} style={{ position: 'relative' }}>
              <Common.Image
                src={item.img}
                alt={item.title}
                onClick={() => router.push('/post/short')}
                style={{ cursor: 'pointer' }}
              />
              <BookmarkMenu folders={['y2k', '느좋레시피', '취향저격']} />
              <Common.Overlay>
                <Common.Title>{item.title}</Common.Title>
                <Common.Author>{item.author}</Common.Author>
              </Common.Overlay>
            </Common.Card>
          ))}
        </Common.Grid>

        {/* Suggested for you */}
        <Common.Centered>
          <Common.SuggestedWrapper>
            <Common.SectionTitle>Suggested for you</Common.SectionTitle>
            <Common.HorizontalScroll>
              {suggestedData.map((item, idx) => {
                const id = item.author.startsWith('@')
                  ? item.author.slice(1)
                  : item.author;
                return (
                  <Common.SuggestedSearchCard key={idx}>
                    <Common.SuggestedSearchImage
                      src={item.img}
                      alt={item.title}
                      onClick={() => router.push(`/profile/otherpublisher/${id}`)}
                      style={{ cursor: 'pointer' }}
                    />

                    {/* 제목 및 핸들 */}
                    <Common.SuggestedSearchInfo>
                      <Common.SuggestedSearchTitle>
                        {item.title}
                      </Common.SuggestedSearchTitle>
                      <Common.SuggestedSearchHandle>
                        {item.author}
                      </Common.SuggestedSearchHandle>

                      {/* 팔로우 버튼: 핸들 바로 아래 */}
                      <Common.IconButton
                        onClick={() => toggleSuggestFollow(idx)}
                        style={{
                          marginTop: 8,
                          padding: 4,
                          marginBottom: '-20px',
                          
                        }}
                      >
                        {suggestFollows[idx]
                          ? <FollowedIcon width={100} height={40} />
                          : <SearchFollowBtn width={100} height={40} />}
                      </Common.IconButton>
                    </Common.SuggestedSearchInfo>
                  </Common.SuggestedSearchCard>
                );
              })}
            </Common.HorizontalScroll>
          </Common.SuggestedWrapper>
        </Common.Centered>

        {/* 세 번째 그리드: 클릭 시 /post/short */}
        <Common.Grid>
          {mockData_2.map((item, idx) => (
            <Common.Card key={idx} style={{ position: 'relative' }}>
              <Common.Image
                src={item.img}
                alt={item.title}
                onClick={() => router.push('/post/short')}
                style={{ cursor: 'pointer' }}
              />
              <BookmarkMenu folders={['y2k', '느좋레시피', '취향저격']} />
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
