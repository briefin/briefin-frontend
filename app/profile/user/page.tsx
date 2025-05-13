'use client';

import React, { useState } from 'react';
import { FiChevronLeft, FiSettings } from 'react-icons/fi';
import * as Common from '@/styles/Common';

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
      <>

        <Common.Wrapper>
          <Common.ProfileInfoRow>
            <Common.UserId>@hihihi</Common.UserId>
            <Common.FollowerStats>
              <Common.StatLabel>팔로우</Common.StatLabel>
              <Common.StatNumber>100</Common.StatNumber>
              <Common.StatLabel>팔로잉</Common.StatLabel>
              <Common.StatNumber>12</Common.StatNumber>
            </Common.FollowerStats>
          </Common.ProfileInfoRow>
        

          <Common.CardsWrapper>
            {consumerTypes.map((type, idx) => (
              <Common.AnimalCard key={idx}>
                <Common.TopLabel>내 소비유형</Common.TopLabel>
                <Common.AnimalImage src={type.img} alt={type.title} />
                <Common.CardTitle>{type.title}</Common.CardTitle>
                <Common.CardSubtitle>{type.subtitle}</Common.CardSubtitle>
              </Common.AnimalCard>
            ))}
          </Common.CardsWrapper>
        </Common.Wrapper>
      </>
  );
}

