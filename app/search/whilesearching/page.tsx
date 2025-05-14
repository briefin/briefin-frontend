'use client';
import React, { useState } from 'react';
import * as Common from '@/styles/Common';
import { RecentItems } from '@/src/components/Recentitems';

export default function WhileSearchingPage() {
  const [recents, setRecents] = useState(['@mag.daily', '키키', '@hihi', '하츠투하츠']);

  const removeRecent = (item: string) =>
    setRecents((prev) => prev.filter((x) => x !== item));

  return (
    <Common.ContentWrapper style={{paddingLeft : '20px'}}>
      <Common.SectionTitle style={{marginTop : '30px'}}>Recents</Common.SectionTitle>
      <div style={{ marginTop: '-10px' }}>
          <RecentItems recents={recents} onRemove={removeRecent} />
      </div>
    </Common.ContentWrapper>
  );
}
