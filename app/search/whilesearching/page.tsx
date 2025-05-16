'use client';

import React, { useState, useEffect } from 'react';
import * as Common from '@/styles/Common';
import { RecentItems } from '@/src/components/Recentitems';

export default function WhileSearchingPage() {
  // 1) 초기 상태는 항상 빈 배열
  const [recents, setRecents] = useState<string[]>([]);

  useEffect(() => {
    // 로드 함수: localStorage에서 불러오기
    const loadRecents = () => {
      try {
        const saved = JSON.parse(localStorage.getItem('searchHistory') || '[]') as string[];
        setRecents(saved);
      } catch {
        setRecents([]);
      }
    };

    // 첫 마운트 때 한 번 불러오기
    loadRecents();

    // 이벤트 리스너: SearchBar에서 날린 이벤트로도 갱신
    const handleRecentChanged = () => {
      loadRecents();
    };
    window.addEventListener('recentChanged', handleRecentChanged);

    return () => {
      window.removeEventListener('recentChanged', handleRecentChanged);
    };
  }, []);

  // 삭제 함수: state + storage + 이벤트
  const removeRecent = (item: string) => {
    const next = recents.filter(x => x !== item);
    setRecents(next);
    localStorage.setItem('searchHistory', JSON.stringify(next));
    window.dispatchEvent(new Event('recentChanged'));
  };

  return (
    <Common.ContentWrapper style={{ paddingLeft: '25px' }}>
      <Common.SectionTitle style={{ marginTop: '30px' }}>Recents</Common.SectionTitle>
      <div style={{ marginTop: '-10px' }}>
        <RecentItems recents={recents} onRemove={removeRecent} />
      </div>
    </Common.ContentWrapper>
  );
}
