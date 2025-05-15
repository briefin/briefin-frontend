'use client';

import React from 'react';
import * as Common from '@/styles/Common';
import { SettingBtn ,AddBtn} from '@/src/assets/icons';

const mockData = [
  { img: '/image_1.png', title: '빈티지 단추 모음', author: '@mag.daily' },
  { img: '/image_2.png', title: '진주 목걸이는 진짜 유명한 꿀템임', author: '@mag.daily' },
  { img: '/image_3.png', title: '중저가 주얼리 이거 사세요', author: '@mag.daily' },
  { img: '/image_4.png', title: '요즘 넥타이 누가 안사?', author: '@mag.daily' },
  { img: '/image_5.png', title: '버버리 정도는 다들 갖고 있잖아', author: '@mag.daily' },
  { img: '/image_6.png', title: "What's In My Bag", author: '@mag.daily' },
];

const mockPublishers = [
  {
    id: '@daily.magazine',
    avatar: '/girl.png',
    description: '느좋소식을 전하는 아트뉴스입니당',
    followers: 100,
    following: 1356,
    posts: 23,
  },
];

export default function PublisherDetailPage() {
  const publisher = mockPublishers[0];

  return (
    <Common.PublisherPageWrapper>
      {/* Publisher Header */}
      <Common.PublisherItem>
        <Common.PublisherInfo>
          <Common.PublisherAvatar src={publisher.avatar} alt={publisher.id} />
          <Common.PublisherTextGroup>
            {/* 1) 아이디 */}
            <Common.PublisherId>{publisher.id}</Common.PublisherId>

            {/* 2) 설명 */}
            <Common.MyDescription>
              {publisher.description}
            </Common.MyDescription>

            {/* 3) 팔로워 · 팔로잉 */}
            <Common.PublisherStatsRow>
              <Common.FollowLabel>팔로워</Common.FollowLabel>
              <Common.Value>{publisher.followers.toLocaleString()}</Common.Value>
              <Common.FollowLabel>팔로잉</Common.FollowLabel>
              <Common.Value>{publisher.following.toLocaleString()}</Common.Value>
            </Common.PublisherStatsRow>
          </Common.PublisherTextGroup>
        </Common.PublisherInfo>

        {/* 설정 아이콘 */}
        <Common.SettingIconButton>
          <SettingBtn />
        </Common.SettingIconButton>
      </Common.PublisherItem>

      {/* 게시물 리스트 */}
      <Common.PublisherStatsRow>
        <Common.FollowLabel>게시물</Common.FollowLabel>
        <Common.Value>{publisher.posts.toLocaleString()}</Common.Value>
        <Common.AddIconButton>
          <AddBtn />
        </Common.AddIconButton>
      </Common.PublisherStatsRow>
      <Common.Grid3>
        {mockData.map((item, idx) => (
          <Common.MyCard key={idx}>
            <Common.Image src={item.img} alt={item.title} />
            <Common.Overlay>
              <Common.Title>{item.title}</Common.Title>
            </Common.Overlay>
          </Common.MyCard>
        ))}
      </Common.Grid3>
    </Common.PublisherPageWrapper>
  );
}
