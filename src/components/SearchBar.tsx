// src/components/SearchBar.tsx
'use client';

import React, { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

// 🔧 리팩토링된 flex 기반 SearchBar 스타일
const SearchWrapper = styled.form`
  display: flex;
  align-items: center; // 🔥 세로 정렬
  gap: 10px;
  padding: 10px 14px;
  width: 100%;
  max-width: 390px;
  height: 44px;
  margin: 0 auto;
  background: url('/assets/search-bg.svg') no-repeat center center;
  background-size: 100% 100%;
  border-radius: 12px;
  box-sizing: border-box;
`;

const SearchInput = styled.input`
  flex: 1;
  height: 100%;
  border: none;
  background: transparent;
  font-size: 16px;
  line-height: 20px;      // 🔧 글자가 너무 위로 붙지 않게
  padding-top: 21px;       // 🔧 살짝 아래로 내려오게
  color: white;
  outline: none;
`;

const SearchButton = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  align-self: center;  
  position: relative;
  left: 4px;  
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
          height={24}
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





