'use client';

import * as Common from '@/styles/Common';
import BookmarkMenu from '@/src/components/BookmarkMenu';
import React, { useState } from 'react';


const mockData = [
    { id: '1', img: '/image_1.png', title: '빈티지 단추 모음', author: '@mag.daily' },
    { id: '2', img: '/image_2.png', title: '진주 목걸이는 진짜 유명한 꿀템임', author: '@mag.daily' },
    { id: '3', img: '/image_3.png', title: '중저가 주얼리 이거 사세요', author: '@mag.daily' },
    { id: '4', img: '/image_4.png', title: '요즘 넥타이 누가 안사?', author: '@mag.daily' },
    { id: '5', img: '/image_5.png', title: '버버리 정도는 다들 갖고 있잖아', author: '@mag.daily' },
    { id: '6', img: '/image_6.png', title: "What's In My Bag", author: '@mag.daily' },
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
    const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  
    // 1) 어떤 카드에 메뉴가 열렸는지, 2) 각 카드별로 선택된 폴더
    const [openMenuIdx, setOpenMenuIdx] = useState<number | null>(null);
    const [selectedFolders, setSelectedFolders] = useState<Record<string, string | null>>({});
  
    // 폴더 선택 시
    const handleFolderChange = (cardId: string, folder: string | null) => {
      setSelectedFolders(prev => ({ ...prev, [cardId]: folder }));
      setOpenMenuIdx(null);
    };

    const [isFollowing, setIsFollowing] = useState(false);

    const toggleFollow = () => {
        setIsFollowing(prev => !prev);
    };

  
    return (
      <Common.PublisherPageWrapper>
        {/* Publisher Header */}
        <Common.PublisherItem>
          <Common.PublisherInfo>
            <Common.PublisherAvatar src={publisher.avatar} alt={publisher.id} />
            <Common.PublisherTextGroup >
              <Common.MyDescription style={{ marginTop: 25, marginLeft: 11 }}>
                {publisher.description}
              </Common.MyDescription>
              <Common.PublisherStatsRow>
                <Common.FollowLabel>팔로워</Common.FollowLabel>
                <Common.Value>{publisher.followers.toLocaleString()}</Common.Value>
                <Common.FollowLabel>팔로잉</Common.FollowLabel>
                <Common.Value>{publisher.following.toLocaleString()}</Common.Value>
              </Common.PublisherStatsRow>
              <Common.FollowButton
              active={isFollowing}
              onClick={toggleFollow}
              style={{paddingLeft : '10px'}}
            >
              {isFollowing ? 'Following' : 'Follow'}
            </Common.FollowButton>
            </Common.PublisherTextGroup>
          </Common.PublisherInfo>
        </Common.PublisherItem>
  
        {/* 게시물 개수 */}
        <Common.PublisherStatsRow style={{ marginTop: -10 }}>
        <Common.FollowLabel>게시물</Common.FollowLabel>
        <Common.Value>{publisher.posts.toLocaleString()}</Common.Value>
      </Common.PublisherStatsRow>

      {/* 그리드 */}
      <Common.Grid3>
        {mockData.map(item => (
          <Common.MyCard key={item.id} style={{ position: 'relative' }}>
            {/* 카드 이미지 */}
            <Common.Image src={item.img} alt={item.title} />

            {/* 제목 오버레이 */}
            <Common.Overlay>
              <Common.Title>{item.title}</Common.Title>
            </Common.Overlay>

            {/* 우측 상단에 BookmarkMenu */}
            <div style={{ position: 'absolute', top: 8, right: 8 }}>
              <BookmarkMenu
                folders={['y2k', '느좋레시피']}//여기 폴더수정하면나옴
                initialFolder={selectedFolders[item.id] ?? null}
                onChange={folder => handleFolderChange(item.id, folder)}
              />
            </div>
          </Common.MyCard>
        ))}
      </Common.Grid3>
    </Common.PublisherPageWrapper>
  );
}
