'use client';

import React, { useState } from 'react';
import { WUploadBtn } from '@/src/assets/icons';
import * as Common from '@/styles/Common';

export default function CopyPathButton() {
  const [showToast, setShowToast] = useState(false);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    // 1) 상위 onClick 전파 차단
    e.stopPropagation();

    // 2) 상대 경로 복사
    try {
      const { pathname, search, hash } = window.location;
      const relative = `${pathname}${search}${hash}`;
      await navigator.clipboard.writeText(relative);

      // 3) 토스트 보여주기
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
        <Common.ScrapToast style={{fontSize : '14px', padding: '30px 40px'}}>
          복사완료! 
        </Common.ScrapToast>
      )}
    </>
  );
}
