'use client';

import SearchBar from '@/src/components/SearchBar';
import { useRouter } from 'next/navigation';
import { FiSliders, FiMenu, FiHome, FiSearch, FiBookOpen, FiUser, FiChevronLeft  } from 'react-icons/fi';
import * as Common from '@/styles/Common';

const mockData = [
  {
    img: '/image_1.png',
    title: '빈티지 단추 모음',
    author: '@mag.daily',
  },
  {
    img: '/image_2.png',
    title: '진주 목걸이는 진짜 유명한 꿀템임',
    author: '@mag.daily',
  },
];

// ✅ Suggested for you 데이터 (가로 슬라이드용)
const suggestedData = [
  {
    img: '/image_9.png',
    title: '지리는 여가생활',
    author: '@yeoga',
  },
  {
    img: '/image_9.png',
    title: '지리는 여가생활활',
    author: '@yeoga',
  },
  {
    img: '/image_9.png',
    title: '지리는 여가생활',
    author: '@yeoga',
  },
  // 필요 시 더 추가 가능
];

const mockData_2 = [
  {
    img: '/image_3.png',
    title: '중저가 주얼리 이거 사세요',
    author: '@mag.daily',
  },
  {
    img: '/image_4.png',
    title: '요즘 넥타이 누가 안사?',
    author: '@mag.daily',
  },
  {
    img: '/image_5.png',
    title: '버버리 정도는 다들 갖고 있잖아',
    author: '@mag.daily',
  },
  {
    img: '/image_6.png',
    title: "What's In My Bag",
    author: '@mag.daily',
  },
];

export default function SearchPage() {

  const router = useRouter(); // ✅ 라우터 훅 사용

  return (
    <>

      <Common.Centered>
        <Common.Header>
          <Common.IconButton><FiChevronLeft /></Common.IconButton>  
        </Common.Header>      
      </Common.Centered>

      <SearchBar />

      <Common.Centered>
        <Common.ButtonRow>
          <Common.CategoryButton active>패션</Common.CategoryButton>
          <Common.CategoryButton>인터뷰</Common.CategoryButton>
          <Common.CategoryButton>맛집</Common.CategoryButton>
        </Common.ButtonRow>
      </Common.Centered>

      <Common.Wrapper>
        <Common.Grid>
          {mockData.map((item, idx) => (
            <Common.Card key={idx}>
              <Common.Image src={item.img} alt={item.title} />
              <Common.Overlay>
                <Common.Title>{item.title}</Common.Title>
                <Common.Author>{item.author}</Common.Author>
              </Common.Overlay>
            </Common.Card>
          ))}
        </Common.Grid>

        {/* ✅ Suggested for you 섹션 */}
        <Common.Centered>
          <Common.SuggestedWrapper>
            <Common.SectionTitle>Suggested for you</Common.SectionTitle>
            <Common.HorizontalScroll>
              {suggestedData.map((item, idx) => (
                <Common.SuggestedSearchCard key={idx}>
                  <Common.SuggestedSearchImage src={item.img} />
                  <Common.SuggestedSearchInfo>
                    <Common.SuggestedSearchTitle>{item.title}</Common.SuggestedSearchTitle>
                    <Common.SuggestedSearchHandle>{item.author}</Common.SuggestedSearchHandle>
                  </Common.SuggestedSearchInfo>
                  <Common.SuggestedSearchFollowButton>Follow</Common.SuggestedSearchFollowButton>
                </Common.SuggestedSearchCard>
              ))}
            </Common.HorizontalScroll>
          </Common.SuggestedWrapper>
        </Common.Centered>

        <Common.Grid>
          {mockData_2.map((item, idx) => (
            <Common.Card key={idx}>
              <Common.Image src={item.img} alt={item.title} />
              <Common.Overlay>
                <Common.Title>{item.title}</Common.Title>
                <Common.Author>{item.author}</Common.Author>
              </Common.Overlay>
            </Common.Card>
          ))}
        </Common.Grid>

      </Common.Wrapper>


      <Common.Centered>
        <Common.BottomNav>
          <Common.NavIcon onClick={() => router.push('/main')}>
            <FiHome />
          </Common.NavIcon>
          <Common.NavIcon onClick={() => router.push('/search')}>
            <FiSearch />
          </Common.NavIcon>
          <Common.NavIcon onClick={() => router.push('/sb')}>
            <FiBookOpen />
          </Common.NavIcon>
          <Common.NavIcon onClick={() => router.push('/profile')}>
            <FiUser />
          </Common.NavIcon>
        </Common.BottomNav>
      </Common.Centered>

    </>
  );
}
