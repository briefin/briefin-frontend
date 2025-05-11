'use client';

import SearchBar from '@/src/components/SearchBar';
import { useRouter } from 'next/navigation';
import { FiPlus, FiSliders, FiMenu, FiHome, FiSearch, FiBookOpen, FiUser, FiChevronLeft, FiShare } from 'react-icons/fi';
import * as Common from '@/styles/Common';

const mockData_sb = [
    {
      img: '/jordy.png',
      title: 'y2k',
    },
    {
      img: '/jordy.png',
      title: '느중레시피',
    },
];

export default function SearchPage() {

  const router = useRouter(); // ✅ 라우터 훅 사용

  return (
    <>

    <Common.Centered>
        <Common.Header>
            <Common.IconButton><FiChevronLeft /></Common.IconButton>  
            <Common.IconButton><FiPlus /></Common.IconButton>  
        </Common.Header>      
    </Common.Centered>

    <SearchBar />

    <Common.Wrapper>
        <Common.Grid>
                {mockData_sb.map((item, idx) => (
                <Common.SbCard key={idx}>
                    <Common.SbImage src={item.img} alt={item.title} />
                    <Common.SbTextWrapper>
                    <Common.SbTitle>{item.title}</Common.SbTitle>
                    <Common.IconButton><FiShare /></Common.IconButton>
                    </Common.SbTextWrapper>
                </Common.SbCard>
                ))}
        </Common.Grid>
    </Common.Wrapper>

    </>
  );
}