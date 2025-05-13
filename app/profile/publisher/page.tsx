'use client';

import React from 'react';
import * as Common from '@/styles/Common';
import { FiSettings } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

const mockPublishers = [
  {
    id: '@daily.magazine',
    avatar: '/jordy.png',
    followers: 100,
    following: 1356,
    posts: 23,
  },
  {
    id: '@artnews',
    avatar: '/jordy.png',
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
          <Common.PublisherInfo onClick={() => goToDetail(publisher.id.replace('@', ''))} style={{ cursor: 'pointer' }}>
            <Common.PublisherAvatar src={publisher.avatar} alt={publisher.id} />
            <Common.PublisherTextGroup>
              <Common.PublisherId>{publisher.id}</Common.PublisherId>
              <Common.PublisherStats>
                <span>팔로워 {publisher.followers}</span>
                <span>팔로잉 {publisher.following}</span>
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
    </Common.PublisherPageWrapper>
  );

}
