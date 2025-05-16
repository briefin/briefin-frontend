'use client';

import SearchBar from '@/src/components/SearchBar';
import { useRouter } from 'next/navigation';
import * as Common from '@/styles/Common';
import { UploadBtn, BackArrowBtn, AddBtn} from '@/src/assets/icons';
import CopyPathButton from '@/src/components/CopypathButton';

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
    title: 'y2k',
    images: ['/girl.png', '/girl1.png', '/girl2.png', '/girl3.png'],
  },
  {
    title: '느좋레시피',
    images: ['/girl1.png', '/girl2.png', '/girl3.png', '/girl.png'],
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
            <Common.SbCard key={idx} onClick={() => router.push(`/sb/${encodeURIComponent(item.title)}`)}>
              {/* 이미지 2x2 그리드 */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', width: '100%', height: '100%' }}>
                {item.images.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`preview-${i}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ))}
              </div>

              {/* 제목 및 아이콘 */}
              <Common.SbTextWrapper>
                <Common.SbTitle>{item.title}</Common.SbTitle>
                <CopyPathButton />
              </Common.SbTextWrapper>
            </Common.SbCard>
          ))}
        </Common.Grid>
      </Common.Wrapper>
    </Common.Centered>

    </>
  );
}