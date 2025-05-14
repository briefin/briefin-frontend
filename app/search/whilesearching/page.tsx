// app/search/whilesearching/page.tsx
'use client';
import React, { useState } from 'react';
import * as Common from '@/styles/Common';
import { FiX } from 'react-icons/fi';

export default function WhileSearchingPage() {
  const [recents, setRecents] = useState<string[]>(['@mag.daily', '@hihi']);
  const removeRecent = (item: string) =>
    setRecents((prev) => prev.filter((r) => r !== item));

  return (
    <Common.ContentWrapper>
      {/* Recents */}
      {recents.length > 0 && (
        <section>
          <Common.SectionTitle>Recents</Common.SectionTitle>
          <Common.HorizontalScroll style={{ padding: '8px 0' }}>
            {recents.map((item) => (
              <Common.Tab
                key={item}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  marginRight: '8px',
                }}
              >
                {item}
                <FiX
                  style={{ marginLeft: '4px', cursor: 'pointer' }}
                  onClick={() => removeRecent(item)}
                />
              </Common.Tab>
            ))}
          </Common.HorizontalScroll>
        </section>
      )}
      {/* 검색 결과 예시 */}
      <section style={{ marginTop: '24px' }}>
        <Common.SectionTitle>Results</Common.SectionTitle>
        <ul>
          <li>키키</li>
          <li>하츠투하츠</li>
        </ul>
      </section>
    </Common.ContentWrapper>
  );
}
