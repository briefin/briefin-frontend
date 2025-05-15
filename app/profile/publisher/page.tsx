'use client';

import React from 'react';
import * as Common from '@/styles/Common';
import { useRouter } from 'next/navigation';
import { AddBtn, SettingBtn } from '@/src/assets/icons';

const mockPublishers = [
  {
    id: '@daily.magazine',
    avatar: '/girl.png',
    followers: 100,
    following: 1356,
    posts: 23,
  },
  {
    id: '@artnews',
    avatar: '/girl.png',
    followers: 100,
    following: 1356,
    posts: 6,
  },
];

export default function PublisherPage() {
  const router = useRouter();
  const goToDetail = (id: string) => {
    router.push(`/profile/publisher/${id}`);
  };

  return (
    <Common.PublisherPageWrapper>
      {mockPublishers.map((publisher, idx) => (
        <Common.PublisherItem key={idx}>
          {/* 왼쪽: 아바타 + 텍스트 그룹 */}
          <Common.PublisherInfo onClick={() => goToDetail(publisher.id.replace('@', ''))}>
            <Common.PublisherAvatar src={publisher.avatar} alt={publisher.id} />
            <Common.PublisherTextGroup>
              {/* 1) 최상단: 아이디 */}
              <Common.PublisherId>{publisher.id}</Common.PublisherId>

              {/* 2) 두번째 줄: 팔로워 · 팔로잉 */}
              <Common.PublisherStatsRow>
                <Common.FollowLabel>팔로워</Common.FollowLabel>
                <Common.Value>{publisher.followers.toLocaleString()}</Common.Value>
                <Common.FollowLabel>팔로잉</Common.FollowLabel>
                <Common.Value>{publisher.following.toLocaleString()}</Common.Value>
              </Common.PublisherStatsRow>

              {/* 3) 세번째 줄: 게시물 */}
              <Common.PublisherStatsRow>
                <Common.FollowLabel>게시물</Common.FollowLabel>
                <Common.Value>{publisher.posts.toLocaleString()}</Common.Value>
              </Common.PublisherStatsRow>
            </Common.PublisherTextGroup>
          </Common.PublisherInfo>

          {/* 오른쪽: 설정 버튼 */}
          <Common.SettingIconButton onClick={() => {/* 설정 로직 */}}>
            <SettingBtn />
          </Common.SettingIconButton>
        </Common.PublisherItem>
      ))}
    </Common.PublisherPageWrapper>
  );
}



