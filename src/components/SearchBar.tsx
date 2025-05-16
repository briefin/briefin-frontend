'use client';

import React, { useState, FormEvent, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import styled from 'styled-components';

const SearchWrapper = styled.form`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  max-width: 390px;
  height: 40px;
  padding: 0 10px;
  background-color: #232323;
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
    color: #3B3B3B;
    font-size: 16px;
    font-weight: 400;
  }
`;

export default function SearchBar() {
  const router = useRouter();
  const pathname = usePathname();

  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  // 포커스 시 항상 whilesearching 페이지로
  const handleFocus = () => {
    if (!pathname?.includes('/search/whilesearching')) {
      router.push('/search/whilesearching');
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const term = query.trim();
    if (!term) return;

    // 1) localStorage에 기록 (최대 10개, 중복 제거)
    try {
      const prev = JSON.parse(localStorage.getItem('searchHistory') || '[]') as string[];
      const next = [term, ...prev.filter(x => x !== term)].slice(0, 10);
      localStorage.setItem('searchHistory', JSON.stringify(next));

      // 2) recents 갱신 알림 이벤트 발송
      window.dispatchEvent(new Event('recentChanged'));
    } catch {
      /* ignore */
    }

    // 3) 입력 초기화 + blur
    setQuery('');
    inputRef.current?.blur();

    // 4) whilesearching 페이지라면 머무르고, 아니면 결과 페이지로 이동
    if (!pathname?.includes('/search/whilesearching')) {
      router.push(`/search?query=${encodeURIComponent(term)}`);
    }
  };

  return (
    <SearchWrapper onSubmit={handleSubmit}>
      <SearchButton type="submit">
        <img src="/assets/search-icon.svg" alt="검색" width={24} height={24} />
      </SearchButton>
      <SearchInput
        ref={inputRef}
        type="text"
        value={query}
        placeholder="Search contents"
        onChange={e => setQuery(e.target.value)}
        onFocus={handleFocus}
      />
    </SearchWrapper>
  );
}
