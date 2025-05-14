// src/components/SearchBar.tsx
'use client';

import React, { useState, FormEvent, FocusEvent} from 'react';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

// ────────────────────────────────────────────────────────────
// 1️⃣ SearchWrapper: SVG 제거, 직사각형 박스 스타일로 변경
// ────────────────────────────────────────────────────────────
const SearchWrapper = styled.form`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  max-width: 390px;
  height: 40px;
  padding: 0 10px;
  background-color: #232323;       /* 짙은 회색 배경 */
  box-sizing: border-box;
`;

const SearchButton = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchInput = styled.input`
  flex: 1;
  height: 100%;
  border: none;
  background: transparent;
  font-size: 16px;
  color: #fff;
  outline: none;
  line-height: 20px;
  padding-bottom: 4px;

  &::placeholder {
    color: #3B3B3B;               /* placeholder 색 */
    font-size: 14px;           /* placeholder 크기 */
    font-weight: 400;
  }
`;

export default function SearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?query=${encodeURIComponent(query)}`);
    }
  };

  const handleFocus = () => {    // 실제 URL 경로로 푸시!
     router.push('/search/whilesearching');
  };
    

  return (
    <SearchWrapper onSubmit={handleSubmit}>
      <SearchButton type="submit">
        <img src="/assets/search-icon.svg" alt="검색" width={24} height={24} />
      </SearchButton>
      <SearchInput
        onFocus={handleFocus}
        type="text"
        value={query}
        placeholder="Search contents"
        onChange={e => setQuery(e.target.value)}
      />
    </SearchWrapper>
  );
}






