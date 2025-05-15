'use client';

import SearchBar from '@/src/components/SearchBar';
import { useRouter } from 'next/navigation';
import { FiPlus, FiSliders, FiMenu, FiHome, FiSearch, FiBookOpen, FiUser, FiChevronLeft, FiShare } from 'react-icons/fi';
import * as Common from '@/styles/Common';
import { UploadBtn, BackArrowBtn, AddBtn} from '@/src/assets/icons';

const bookmarkedPhotos = [
  { id: 'a', url: '/girl.png' },
  { id: 'b', url: '/girl1.png' },
  { id: 'c', url: '/girl2.png' },
  { id: 'd', url: '/girl3.png' },
];

function sampleThree<T>(arr: T[]): T[] {
  const copy = [...arr];
  const result: T[] = [];
  for (let i = 0; i < 3 && copy.length; i++) {
    const idx = Math.floor(Math.random() * copy.length);
    result.push(copy.splice(idx, 1)[0]);
  }
  return result;
}



const mockData_sb = [
    {
      img: '/girl.png',
      title: 'y2k',
    },
    {
      img: '/girl.png',
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