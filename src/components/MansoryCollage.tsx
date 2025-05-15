'use client';

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface Photo {
  id: string;
  url: string;
}

// 컨테이너: 6열 고정, 행 높이 100px, gap 4px
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: 100px;
  grid-gap: 4px;
  grid-auto-flow: dense; /* 빈틈 채우기 */
`;

// 각 아이템: colSpan·rowSpan props를 받아 위치 지정
const Item = styled.img<{ col: number; row: number }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  grid-column: span ${({ col }) => col};
  grid-row: span ${({ row }) => row};
`;

export default function MasonryCollage({ photos }: { photos: Photo[] }) {
  // 3장 랜덤 추출
  const [picked, setPicked] = useState<Photo[]>([]);
  // 각 사진의 span 정보
  const [spans, setSpans] = useState<{ col: number; row: number }[]>([]);

  useEffect(() => {
    // 1) 무작위로 3개 샘플
    const sample = photos.sort(() => 0.5 - Math.random()).slice(0, 3);
    setPicked(sample);

    // 2) 예시 패턴: 첫컷 2×2, 둘째 3×1, 셋째 1×2
    setSpans([
      { col: 2, row: 2 },
      { col: 3, row: 1 },
      { col: 1, row: 2 },
    ]);
  }, [photos]);

  return (
    <Container>
      {picked.map((photo, idx) => (
        <Item
          key={photo.id}
          src={photo.url}
          alt=""
          col={spans[idx].col}
          row={spans[idx].row}
        />
      ))}
    </Container>
  );
}
