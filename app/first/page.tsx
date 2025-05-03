'use client';

import styled from 'styled-components';
import { FiSliders, FiMenu, FiHome, FiSearch, FiBookOpen, FiUser } from 'react-icons/fi';

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



export default function Page() {
  return (
    <>
    <Centered>
      <Header>
        <IconButton><FiSliders /></IconButton>
        <IconButton><FiMenu /></IconButton>
      </Header>      
    </Centered>

    <Centered>
      <ButtonRow>
        <CategoryButton active>패션</CategoryButton>
        <CategoryButton>인터뷰</CategoryButton>
        <CategoryButton>맛집</CategoryButton>
      </ButtonRow>
    </Centered>

      {/* 기존 콘텐츠는 절대 건들지 않음 */}
      <Wrapper>
        <Grid>
          {mockData.map((item, idx) => (
            <Card key={idx}>
              <Image src={item.img} alt={item.title} />
              <Overlay>
                <Title>{item.title}</Title>
                <Author>{item.author}</Author>
              </Overlay>
            </Card>
          ))}
        </Grid>
      </Wrapper>
  
      {/* 고정 하단 메뉴 */}
      <Centered>
        <BottomNav>
          <NavIcon><FiHome /></NavIcon>
          <NavIcon><FiSearch /></NavIcon>
          <NavIcon><FiBookOpen /></NavIcon>
          <NavIcon><FiUser /></NavIcon>
        </BottomNav>
      </Centered>

    </>
  );
}

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background-color: black;
  width: 33.3333%;
`;


const IconButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  padding: 4px;
  cursor: pointer;
`;

const Wrapper = styled.main`
  min-height: 100vh;
  background-color: black;
  color: white;
  padding: 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 33.3333%;
  margin: 0 auto;
`;

const Card = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: transparent;
  color: white;
  padding: 0.5rem;
`;

const Title = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
`;

const Author = styled.div`
  font-size: 0.75rem;
  color: #ccc;
`;

const Centered = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const CategoryBar = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin: 12px 0;
  width: 33.3333%;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 8px;
  width: 33.3333%;
  margin-top: 8px;
  margin-bottom: 16px; /* ✅ 이 부분 추가 */
  margin-left: 24px;
`;

const CategoryButton = styled.button<{ active?: boolean }>`
  padding: 6px 14px;
  border: 1px solid white;
  background-color: ${({ active }) => (active ? 'white' : 'transparent')};
  color: ${({ active }) => (active ? 'black' : 'white')};
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
`;

const BottomNav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 50%;                 /* 화면의 가운데 */
  transform: translateX(-50%); /* 자기 너비의 절반만큼 왼쪽으로 이동 */
  width: 33.3333%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 12px 0;
  z-index: 999;
`;

const NavIcon = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 28px;
  cursor: pointer;
`;