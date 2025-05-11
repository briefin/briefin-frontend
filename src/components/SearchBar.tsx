// src/components/SearchBar.tsx
'use client';

import React, { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

// ① public/assets/search-icon.svg 에 SVG 파일을 넣었다고 가정

const SearchWrapper = styled.form`
  position: relative;
  width: 100%;
  max-width: 400px;
  height: 48px;
  margin: 0 auto;
  background: url('/assets/search-bg.svg') no-repeat center center;
  background-size: contain;
`;

const SearchInput = styled.input`
  position: absolute;
  top: 0;
  left: 48px;
  right: 16px;
  height: 100%;
  border: none;
  background: transparent;
  font-size: 16px;
  outline: none;
`;

const SearchButton = styled.button`
  position: absolute;
  top: 54%;
  /* ③ 버튼을 맨 왼쪽에 배치 */
  left: 16px;
  transform: translateY(-50%);
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
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

  return (
    <SearchWrapper onSubmit={handleSubmit}>
      <SearchButton type="submit">
        <img
          src="/assets/search-icon.svg"
          alt="검색"
          width={24}
          height={25}
        />
      </SearchButton>
      <SearchInput
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
    </SearchWrapper>
  );
}



