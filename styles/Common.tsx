// styles/Common.ts

'use client';

import styled from 'styled-components';

/* ✅ 재사용 가능한 중앙 컨테이너 */
const CenteredContainer = `
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background-color: black;
  ${CenteredContainer}
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
  ${CenteredContainer}
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
  margin-top: 8px;
  margin-bottom: 16px;
  margin-left: 24px;
  ${CenteredContainer}
`;

export const CategoryButton = styled.button<{ active?: boolean }>`
  height: 35px;
  padding: 6px 14px;
  border: 1px solid grey;
  background-color: ${({ active }) => (active ? 'white' : 'transparent')};
  color: ${({ active }) => (active ? 'black' : 'white')};
  font-size: 14px;
  border-radius: 0;
  cursor: pointer;
`;

export const BottomNav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 12px 0;
  z-index: 999;
  width: 100%;
  max-width: 480px;
`;

export const NavIcon = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 28px;
  cursor: pointer;
`;

export const SuggestedWrapper = styled.div`
  margin-top: 32px;
  overflow-x: hidden;
  ${CenteredContainer}
`;

export const SectionTitle = styled.h2`
  color: white;
  font-size: 16px;
  margin-bottom: 12px;
`;

export const HorizontalScroll = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding-bottom: 8px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SuggestedCard = styled.div`
  flex: 0 0 auto;
  width: 160px;
  border-radius: 8px;
  overflow: hidden;
  background: #1a1a1a;
  color: white;
  position: relative;
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
  margin-bottom: 8px;
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
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: black;
`;

export const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;
  ${CenteredContainer}
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  margin-right: 12px;
  cursor: pointer;
`;

export const SearchInputContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  background-color: #1a1a1a;
  border-radius: 0;
  padding: 8px 10px;
  color: white;
`;

export const Input = styled.input`
  background: transparent;
  border: none;
  outline: none;
  color: white;
  font-size: 14px;
  margin-left: 8px;
  flex: 1;

  &::placeholder {
    color: #888;
  }
`;

export const SuggestedSearchCard = styled.div`
  width: 120px;
  background-color: #000;
  border: 1px solid #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
`;

export const SuggestedSearchImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const SuggestedSearchInfo = styled.div`
  text-align: center;
  margin-top: 8px;
`;

export const SuggestedSearchTitle = styled.div`
  font-size: 14px;
  font-weight: normal;
  margin-bottom: 2px;
`;

export const SuggestedSearchHandle = styled.div`
  font-size: 12px;
  color: #ccc;
`;

export const SuggestedSearchFollowButton = styled.button`
  margin-top: 8px;
  width: 100%;
  padding: 6px 0;
  font-size: 13px;
  background-color: #1a1a1a;
  color: white;
  border: none;
  cursor: pointer;
`;

export const SbCard = styled.div`
  width: 160px;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const SbImage = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
`;

export const SbTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 4px;
`;

export const SbTitle = styled.div`
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ProfileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background-color: black;
  color: white;
  ${CenteredContainer}
`;

export const TabWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const Tab = styled.div<{ active?: boolean }>`
  font-size: 14px;
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  color: ${({ active }) => (active ? 'white' : '#888')};
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
`;

export const ProfileInfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  ${CenteredContainer}
`;

export const UserId = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: white;
`;

export const FollowerStats = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const StatLabel = styled.div`
  font-size: 13px;
  color: #888;
`;

export const StatNumber = styled.div`
  font-size: 14px;
  color: white;
  font-weight: normal;
`;

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  padding: 24px;
  ${CenteredContainer}
`;

export const AnimalCard = styled.div`
  background-color: black;
  padding: 16px;
  text-align: center;
  border-radius: 8px;
`;

export const TopLabel = styled.div`
  font-size: 13px;
  color: white;
  margin-bottom: 8px;
`;

export const AnimalImage = styled.img`
  width: 60px;
  height: 60px;
  margin: 12px auto;
`;

export const CardTitle = styled.div`
  color: white;
  font-weight: bold;
  font-size: 16px;
  margin-top: 8px;
`;

export const CardSubtitle = styled.div`
  color: #bbb;
  font-size: 13px;
  margin-top: 4px;
`;

export const BookmarkButton = styled.button`
  position: static;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  z-index: 10;
`;

export const BookmarkWrapper = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  z-index: 10;
`;

export const BookmarkLabel = styled.div`
  font-size: 12px;
  color: white;
  font-weight: bold;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(6px);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

export const HeaderTitle = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: white;
  margin: 0;
`;

export const TagRow = styled.div`
  display: flex;
  gap: 8px;
  padding: 8px 16px;
`;

export const TagBadge = styled.div`
  background-color: #1a1a1a;
  color: white;
  font-size: 13px;
  padding: 6px 12px;
  border-radius: 20px;
  white-space: nowrap;
`;
