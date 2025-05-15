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
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false); // ✅ 오버레이 상태
  const wrapperRef = useRef<HTMLDivElement>(null);

  // 바깥 클릭 시 메뉴 닫기 + 오버레이 닫기
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpenIdx(null);
        setShowOverlay(false); // ✅ 오버레이도 닫기
      }
    };
    window.addEventListener('mousedown', handleClickOutside);
    return () => window.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (selectedFolder) {
      setSelectedFolder(null);
      onChange?.(null);
    } else {
      setOpenIdx(0);
      setShowOverlay(true); // ✅ 오버레이 켜기
    }
  };

  const handleSelect = (folder: string) => {
    setSelectedFolder(folder);
    onChange?.(folder);
    setIsToastVisible(true);
    setOpenIdx(null); // ✅ 메뉴만 닫기

    setTimeout(() => {
      setIsToastVisible(false);
      setShowOverlay(false); // ✅ 오버레이 닫기
    }, 2000);
  };

  return (
    <>
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

        {showOverlay && <Common.BookmarkOverlay />} {/* ✅ 오버레이 조건 */}

        {openIdx !== null && (
          <Common.FolderMenu>
            {folders.map((f) => (
              <Common.FolderItem
                key={f}
                selected={f === selectedFolder}
                onClick={() => handleSelect(f)}
              >
                {f}
              </Common.FolderItem>
            ))}
          </Common.FolderMenu>
        )}
      </Common.BookmarkWrapper>

      {/* ✅ 북마크 완료 토스트 */}
      {isToastVisible && (
        <Common.ScrapToast>
          <Common.ScrapImage src="/briefin_logo.png" alt="스크랩 완료" />
          스크랩 완료!
        </Common.ScrapToast>
      )}
    </>
  );
}
