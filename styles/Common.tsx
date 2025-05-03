// styles/Common.ts

import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background-color: black;
  width: 33.3333%;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  padding: 4px;
  cursor: pointer;
`;

export const Wrapper = styled.main`
  min-height: 100vh;
  background-color: black;
  color: white;
  padding: 0;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 33.3333%;
  margin: 0 auto;
`;

export const Card = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: transparent;
  color: white;
  padding: 0.5rem;
`;

export const Title = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
`;

export const Author = styled.div`
  font-size: 0.75rem;
  color: #ccc;
`;

export const Centered = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 8px;
  width: 33.3333%;
  margin-top: 8px;
  margin-bottom: 16px;
  margin-left: 24px;
`;

export const CategoryButton = styled.button<{ active?: boolean }>`
  height: 35px;
  padding: 6px 14px;
  border: 1px solid grey;
  background-color: ${({ active }) => (active ? 'white' : 'transparent')};
  color: ${({ active }) => (active ? 'black' : 'white')};
  font-size: 14px;
  border-radius: 0px;
  cursor: pointer;
`;

export const BottomNav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 33.3333%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 12px 0;
  z-index: 999;
`;

export const NavIcon = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 28px;
  cursor: pointer;
`;

/* ✅ 추가: Suggested 섹션 관련 스타일 */
export const SuggestedWrapper = styled.div`
  margin-top: 32px;
  width: 33.3333%;   /* ✅ 고정 너비 */
  overflow-x: hidden; /* ✅ 가로 스크롤러는 자식에게만 적용 */
`;

export const SectionTitle = styled.h2`
  color: white;
  font-size: 16px;
  margin-bottom: 12px;
`;

export const HorizontalScroll = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;     /* ✅ 가로 스크롤 */
  padding-bottom: 8px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SuggestedCard = styled.div`
  flex: 0 0 auto;
  width: 160px;        /* ✅ 카드 크기 유지 */
  border-radius: 8px;
  overflow: hidden;
  background: #1a1a1a;
  color: white;
`;

export const SuggestedImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const SuggestedInfo = styled.div`
  padding: 8px;
`;

export const BriefinLogo = styled.div`
  height: auto;
  margin-bottom: 8px; /* ✅ 아래 텍스트와 간격 확보 */
`;

export const BriefinTitle = styled.h1`
  font-family: 'neurimboGothicRegular', sans-serif;
  width: 189px;
  height: 83px;
  font-size: 50px;
  font-weight: normal;
  text-align: center;
  margin: 0;
  color: white;
`;

export const FullCentered = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center; /* 수평 정렬 */
  align-items: center;     /* 수직 정렬 */
  flex-direction: column;  /* 아래로 정렬되게 */
  background-color: black; /* 배경색 필요 시 */
`;