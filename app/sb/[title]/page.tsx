'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { BackArrowBtn } from '@/src/assets/icons';
import { FiChevronDown } from 'react-icons/fi';
import * as Common from '@/styles/Common';

const mockData_sb = [
  { title: 'y2k',      images: ['/girl.png','/girl1.png','/girl2.png','/girl3.png'] },
  { title: '느좋레시피', images: ['/girl1.png','/girl2.png','/girl3.png','/girl.png'] },
];

export default function ScrapbookCategoryPage() {
  // 👉 제네릭 제거하고 as 타입 단언문 사용
  const params = useParams() as { title: string };
  const { title } = params;
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);

  // title로 데이터 찾아오기
  const data = mockData_sb.find(d => d.title === title);
  const images = data?.images ?? [];

  return (
    <Common.PublisherPageWrapper>
      {/* 헤더 */}
      <Common.Header
        style={{ justifyContent: 'space-between', alignItems: 'center' }}
      >
        <Common.IconButton onClick={() => router.back()} style={{ margin: '0 5px' }}>
          <BackArrowBtn />
        </Common.IconButton>

        <Common.HeaderTitle>{title}</Common.HeaderTitle>

        <Common.IconButton
          onClick={() => setCollapsed(c => !c)}
          style={{ margin: '0 5px' }}
        >
          <FiChevronDown
            size={24}
            style={{ transform: collapsed ? 'rotate(180deg)' : 'none' }}
          />
        </Common.IconButton>
      </Common.Header>

      {/* 사진 그리드 */}
      {!collapsed && (
        <Common.Grid3>
          {images.map((src, i) => (
            <Common.MyCard key={i} style={{ position: 'relative' }}>
              <Common.Image src={src} alt="" />
            </Common.MyCard>
          ))}
        </Common.Grid3>
      )}
    </Common.PublisherPageWrapper>
  );
}
