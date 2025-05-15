// src/components/BookmarkMenu.tsx
'use client';

import React, { useState, useRef, useEffect } from 'react';
import * as Common from '@/styles/Common';

interface BookmarkMenuProps {
  folders: string[];
  initialFolder?: string | null;
  onChange?: (folder: string | null) => void;
}

export default function BookmarkMenu({
  folders,
  initialFolder = null,
  onChange,
}: BookmarkMenuProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [selectedFolder, setSelectedFolder] = useState<string | null>(initialFolder);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // 바깥 클릭 시 메뉴 닫기
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpenIdx(null);
      }
    };
    window.addEventListener('mousedown', handleClickOutside);
    return () => window.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    // 이미 선택된 상태면 해제, 아니면 메뉴 토글
    if (selectedFolder) {
      setSelectedFolder(null);
      onChange?.(null);
      setOpenIdx(null);
    } else {
      setOpenIdx(0);
    }
  };

  const handleSelect = (folder: string) => {
    setSelectedFolder(folder);
    onChange?.(folder);
    setOpenIdx(null);
  };

  return (
    <Common.BookmarkWrapper ref={wrapperRef}>
      {selectedFolder && (
        <Common.BookmarkLabel>{selectedFolder}</Common.BookmarkLabel>
      )}

      <Common.BookmarkButton onClick={handleButtonClick}>
        <img
          src={selectedFolder ? '/bookmark_on.png' : '/bookmark_off.png'}
          alt="bookmark"
          width={20}
          height={20}
        />
      </Common.BookmarkButton>

      {openIdx !== null && (
        <>
          <Common.BookmarkOverlay />
          <Common.FolderMenu>
            {folders.map((f, i) => (
              <Common.FolderItem
                key={f}
                selected={f === selectedFolder}
                onClick={() => handleSelect(f)}
              >
                {f}
              </Common.FolderItem>
            ))}
          </Common.FolderMenu>
        </>
      )}
    </Common.BookmarkWrapper>
  );
}
