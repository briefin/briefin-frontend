'use client';

import * as Common from '@/styles/Common';
import { FiSliders, FiMenu, FiHome, FiSearch, FiBookOpen, FiUser, FiChevronLeft  } from 'react-icons/fi';

const mockData = [
  {
    img: '/jordy.png',
    title: '빈티지 단추 모음',
    author: '@mag.daily',
  },
  {
    img: '/jordy.png',
    title: '진주 목걸이는 진짜 유명한 꿀템임',
    author: '@mag.daily',
  },
  {
    img: '/jordy.png',
    title: '중저가 주얼리 이거 사세요',
    author: '@mag.daily',
  },
  {
    img: '/jordy.png',
    title: '요즘 넥타이 누가 안사?',
    author: '@mag.daily',
  },
  {
    img: '/jordy.png',
    title: '버버리 정도는 다들 갖고 있잖아',
    author: '@mag.daily',
  },
  {
    img: '/jordy.png',
    title: "What's In My Bag",
    author: '@mag.daily',
  },
];

// ✅ Suggested for you 데이터 (가로 슬라이드용)
const suggestedData = [
  {
    img: '/jordy.png',
    title: '느충 중년 언니',
    author: '@mag.daily',
  },
  {
    img: '/jordy.png',
    title: '빨간맛',
    author: '@mag.daily',
  },
  {
    img: '/jordy.png',
    title: '느충 중년 언니',
    author: '@mag.daily',
  },
  {
    img: '/jordy.png',
    title: '빨간맛',
    author: '@mag.daily',
  },
  {
    img: '/jordy.png',
    title: '느충 중년 언니',
    author: '@mag.daily',
  },
  {
    img: '/jordy.png',
    title: '빨간맛',
    author: '@mag.daily',
  },
  // 필요 시 더 추가 가능
];

export default function Page() {
  return (
    <>
      <Common.Centered>
        <Common.Header>
          <Common.IconButton><FiChevronLeft /></Common.IconButton>  
          <Common.IconButton><FiMenu /></Common.IconButton>
        </Common.Header>      
      </Common.Centered>

      <Common.Centered>
        <Common.ButtonRow>
          <Common.CategoryButton><Common.IconButton><FiSliders /></Common.IconButton></Common.CategoryButton>
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
                <Common.SuggestedCard key={idx}>
                  <Common.SuggestedImage src={item.img} />
                  <Common.SuggestedInfo>
                    <Common.Title>{item.title}</Common.Title>
                    <Common.Author>{item.author}</Common.Author>
                  </Common.SuggestedInfo>
                </Common.SuggestedCard>
              ))}
            </Common.HorizontalScroll>
          </Common.SuggestedWrapper>
        </Common.Centered>
      </Common.Wrapper>

      <Common.Centered>
        <Common.BottomNav>
          <Common.NavIcon><FiHome /></Common.NavIcon>
          <Common.NavIcon><FiSearch /></Common.NavIcon>
          <Common.NavIcon><FiBookOpen /></Common.NavIcon>
          <Common.NavIcon><FiUser /></Common.NavIcon>
        </Common.BottomNav>
      </Common.Centered>
    </>
  );
}
