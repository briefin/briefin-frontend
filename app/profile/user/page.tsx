'use client';

import React, { useState } from 'react';
import { FiChevronLeft, FiSettings } from 'react-icons/fi';
import * as Common from '@/styles/Common';
import { SettingBtn } from '@/src/assets/icons';

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

export default function UserProfilePage() {

  const [mockBookmarks, setMockBookmarks] = useState<boolean[]>(new Array(mockData.length).fill(false));

  const toggleMockBookmarks = (index: number) => {
    setMockBookmarks(prev =>
      prev.map((b, i) => (i === index ? !b : b))
    );
  };

  return (
    <Common.ProfilePageWrapper style={{marginLeft : '-5px',}}>
      {/* ✅ 프로필 정보 */}
      <Common.ProfileInfoWrapper>
        <Common.ProfileDetails>
          <Common.UserInfoText>
            <Common.Username>@hihihi</Common.Username>
            <Common.PublisherStatsRow>
              <Common.FollowLabel>팔로잉</Common.FollowLabel>
              <Common.Value>12</Common.Value>
              <Common.FollowLabel>하트수</Common.FollowLabel>
              <Common.Value>6</Common.Value>
             </Common.PublisherStatsRow>
          </Common.UserInfoText>
        </Common.ProfileDetails>

        <Common.SettingIconButton>
          <SettingBtn />
        </Common.SettingIconButton>
      </Common.ProfileInfoWrapper>

      <Common.CategoryTitle>유저 키워드</Common.CategoryTitle>

      {/* ✅ 선호 카테고리리 섹션 */} 
      <Common.CategorySection>
        <Common.CategoryTitle>선호 카테고리</Common.CategoryTitle>
        <Common.WordCloud>
          <Common.WordItem x={0} y={0}>타이포</Common.WordItem>
          <Common.WordItem x={80} y={20} size={16}>문학</Common.WordItem>
          <Common.WordItem x={150} y={0} size={13}>시집</Common.WordItem>
          <Common.WordItem x={30} y={50} size={12}>사운드 큐레이션</Common.WordItem>
          <Common.WordItem x={140} y={60} size={16} bold>시네마토크</Common.WordItem>
        </Common.WordCloud>
      </Common.CategorySection>


      {/* ✅ 선호 퍼블리셔 섹션 */}
      <Common.Centered>
        <Common.SuggestedPublisherWrapper>
          <Common.CategoryTitle>선호 퍼블리셔</Common.CategoryTitle>
          <Common.HorizontalScroll>
            {suggestedData.map((item, idx) => (
              <Common.SuggestedSearchCard key={idx}>
                <Common.SuggestedSearchImage src={item.img} />
                <Common.SuggestedSearchInfo>
                  <Common.SuggestedSearchTitle>{item.title}</Common.SuggestedSearchTitle>
                  <Common.SuggestedSearchHandle>{item.author}</Common.SuggestedSearchHandle>
                </Common.SuggestedSearchInfo>
              </Common.SuggestedSearchCard>
            ))}
          </Common.HorizontalScroll>
        </Common.SuggestedPublisherWrapper>
      </Common.Centered>

      {/* ✅ 하트한 게시물 섹션 */}
      <Common.CategoryTitle>하트한 게시물</Common.CategoryTitle>
      <Common.Grid3>
        {mockData.map((item, idx) => (
          <Common.LikeCard key={idx}>
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
          </Common.LikeCard>
        ))}
      </Common.Grid3>

    </Common.ProfilePageWrapper>
  );
}
