'use client';

import SearchBar from '@/src/components/SearchBar';
import { useRouter } from 'next/navigation';
import { FiPlus, FiSliders, FiMenu, FiHome, FiSearch, FiBookOpen, FiUser, FiChevronLeft, FiShare } from 'react-icons/fi';
import * as Common from '@/styles/Common';
import { UploadBtn, BackArrowBtn, AddBtn} from '@/src/assets/icons';


const mockData_sb = [
    {
      img: '/jordy.png',
      title: 'y2k',
    },
    {
      img: '/jordy.png',
      title: '느좋레시피',
    },
];

export default function SearchPage() {

  const router = useRouter(); // ✅ 라우터 훅 사용

  return (
    <>

    <Common.Centered>
        <Common.Header>
            <Common.IconButton style={{marginTop : '10px', marginBottom : '10px'}}><BackArrowBtn /></Common.IconButton>  
            <Common.IconButton style={{marginTop : '10px'}}><AddBtn /></Common.IconButton>  
        </Common.Header>      
    </Common.Centered>

    <Common.Centered>    
        <SearchBar />
    </Common.Centered>


    <Common.Centered>
      <Common.Wrapper>
        <Common.Grid>
                {mockData_sb.map((item, idx) => (
                <Common.SbCard key={idx}>
                    <Common.SbImage src={item.img} alt={item.title} />
                    <Common.SbTextWrapper>
                    <Common.SbTitle>{item.title}</Common.SbTitle>
                    <Common.IconButton><UploadBtn/></Common.IconButton>
                    </Common.SbTextWrapper>
                </Common.SbCard>
                ))}
        </Common.Grid>
      </Common.Wrapper>
    </Common.Centered>

    </>
  );
}