'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { BackArrowBtn } from '@/src/assets/icons';
import { FiChevronDown } from 'react-icons/fi';
import * as Common from '@/styles/Common';

const mockData_sb = [
  { title: 'y2k',      images: ['/girl.png','/girl1.png','/girl2.png','/girl3.png'] },
  { title: 'fashion', images: ['/girl1.png','/girl2.png','/girl3.png','/girl.png'] },
];

export default function ScrapbookCategoryPage() {
  const { title } = useParams() as { title: string };
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);

  const data = mockData_sb.find(d => d.title === title);
  const images = data?.images ?? [];

  return (
    <Common.PublisherPageWrapper>
      <Common.Header style={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Common.IconButton onClick={() => router.back()}>
          <BackArrowBtn />
        </Common.IconButton>
        <Common.HeaderTitle>{title}</Common.HeaderTitle>
        <Common.IconButton onClick={() => setCollapsed(c => !c)}>
          <FiChevronDown style={{ transform: collapsed ? 'rotate(180deg)' : 'none' }} />
        </Common.IconButton>
      </Common.Header>

      {!collapsed && (
        <Common.Grid3>
          {images.map((src, i) => (
            <Common.MyCard key={i}>
              <Common.Image src={src} alt="" />
            </Common.MyCard>
          ))}
        </Common.Grid3>
      )}
    </Common.PublisherPageWrapper>
  );
}
