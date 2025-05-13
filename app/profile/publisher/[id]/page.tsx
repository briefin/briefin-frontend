'use client';

import React from 'react';
import * as Common from '@/styles/Common';
import { FiSettings } from 'react-icons/fi';

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

const mockPublishers = [
  {
    id: '@daily.magazine',
    avatar: '/jordy.png',
    followers: 100,
    following: 1356,
    posts: 23,
  },
];

export default function PublisherDetailPage() {
  return (
    <Common.PublisherPageWrapper>
      {mockPublishers.map((publisher, idx) => (
        <Common.PublisherItem key={idx}>
          <Common.PublisherInfo>
            <Common.PublisherAvatar src={publisher.avatar} alt={publisher.id} />
            <Common.PublisherTextGroup>
              <Common.PublisherId>{publisher.id}</Common.PublisherId>
                <Common.PublisherStats>
                  <span>느좋소식을 전하는 아트뉴스입니당</span>
                </Common.PublisherStats>
                <Common.PublisherStats>
                  <span>게시물 {publisher.posts}</span>
                </Common.PublisherStats>
            </Common.PublisherTextGroup>
          </Common.PublisherInfo>
          <Common.IconButton>
            <FiSettings />
          </Common.IconButton>
        </Common.PublisherItem>
      ))}

      <Common.CategoryTitle>게시물 {mockPublishers[0].posts}</Common.CategoryTitle>
      <Common.Grid3>
        {mockData.map((item, idx) => (
          <Common.Card key={idx}>
            <Common.Image src={item.img} alt={item.title} />
            <Common.Overlay>
              <Common.Title>{item.title}</Common.Title>
              <Common.Author>{item.author}</Common.Author>
            </Common.Overlay>
          </Common.Card>
        ))}
      </Common.Grid3>

    </Common.PublisherPageWrapper>
  );
}
