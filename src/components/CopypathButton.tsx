'use client';

import React, { useState } from 'react';
import { WUploadBtn } from '@/src/assets/icons';
import * as Common from '@/styles/Common';

export default function CopyPagePathButton() {
  const [showToast, setShowToast] = useState(false);

  const handleClick = async () => {
    try {
      const { pathname, search, hash } = window.location;
      const relative = `${pathname}${search}${hash}`;
      await navigator.clipboard.writeText(relative);

      // 토스트 표시
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    } catch (err) {
      console.error('주소 복사 실패', err);
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        style={{
          background: 'transparent',
          border: 'none',
          padding: 0,
          cursor: 'pointer',
        }}
      >
        <WUploadBtn />
      </button>

      {showToast && (
        <Common.ScrapToast style={{fontSize : '14px', padding:'40px', marginTop : '20px',}}>
          복사완료!
        </Common.ScrapToast>
      )}
    </>
  );
}
