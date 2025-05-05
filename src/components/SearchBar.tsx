'use client';

import styled from 'styled-components';
import * as Common from '@/styles/Common';
import { FiChevronLeft, FiSearch } from 'react-icons/fi';

export default function SearchBar() {
  return (
    <Common.SearchBarWrapper>
      <Common.SearchInputContainer>
        <FiSearch size={16} />
        <Common.Input type="text" placeholder="Search contents" />
      </Common.SearchInputContainer>
    </Common.SearchBarWrapper>

  );
}
