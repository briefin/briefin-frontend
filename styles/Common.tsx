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
<<<<<<< Updated upstream
=======

// 공통 Wrapper
export const BottomBar = styled.div<{ variant?: 'dark' | 'light' }>`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%; /* ✅ vw 사용 시 overflow 생길 수 있음 */
  z-index: 99;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px 24px 16px; /* ✅ 하단 padding 더 넉넉하게 */
  box-sizing: border-box;

  background-color: ${({ variant }) =>
    variant === 'light' ? 'rgba(100, 100, 100, 0.3)' : 'black'};
  backdrop-filter: ${({ variant }) =>
    variant === 'light' ? 'blur(6px)' : 'none'};
`;

// 왼쪽 사용자 영역
export const ProfileTag = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

// 버튼
export const HandleBadge = styled.div`
  background-color: #333;
  color: #ccc;
  font-size: 13px;
  padding: 6px 12px;
  border-radius: 20px;
`;

// 아이콘 그룹
export const ActionIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 20px;
  color: white;
  cursor: pointer;
`;

export const Description = styled.div`
  padding: 16px;
  color: white;
  font-size: 14px;
  line-height: 1.5;
  background-color: black;
`;

export const IndicatorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 16px 0;
  background-color: black;
`;

export const IndicatorDot = styled.button<{ active?: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background-color: ${({ active }) => (active ? '#888' : 'white')};
  cursor: pointer;
`;

export const ImageViewer = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
`;

export const ViewerImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  aspect-ratio: 1 / 1;
`;

export const PostImageSmall = styled.img`
  width: 200px;
  height: auto;
  object-fit: cover;
  display: block;
  margin: 16px 0 8px 16px; /* 상단 여백 + 좌측 정렬 */
`;

export const HorizontalBlock = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;
`;

export const SquareImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  flex-shrink: 0;
  border-radius: 4px;
`;

export const SummaryText = styled.div`
  color: white;
  font-size: 14px;
  line-height: 1.5;
  flex: 1;
`;

export const LongText = styled.div`
  color: white;
  font-size: 14px;
  line-height: 1.8;
  padding: 0 16px 32px 16px;
`;

export const BackgroundImage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background-image: url('/image_1.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: brightness(0.5) blur(2px); /* 어두워지고 약간 흐릿함 */
  opacity: 0.7; /* 투명도 */
  transform: scale(1.2); /* 확대 */
`;

export const BookmarkOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); /* ✅ 반투명 검정 배경 */
  z-index: 999; /* ✅ 하단바 위 */
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const BookmarkSelectBox = styled.div`
  width: 100%;
  max-width: 480px;
  background-color: #333;
  padding: 16px;
  border-radius: 12px 12px 0 0;
  color: white;
  z-index: 1000;

  /* ✅ 하단바 높이만큼 띄우기 */
  margin-bottom: 64px;
`;

export const BookmarkItem = styled.div`
  padding: 10px 12px;
  border-radius: 8px;
  background-color: #444;
  margin-bottom: 8px;
  font-size: 14px;
`;

export const ScrapToast = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: black;
  color: white;
  padding: 24px 32px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: bold;
  z-index: 1001;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const ScrapImage = styled.img`
  width: 48px;
  height: 48px;
  margin-bottom: 12px;
`;

export const ProfilePageWrapper = styled.div`
  padding: 0 16px;
  background-color: black;
  color: white;
`;

export const ProfileHeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
`;

export const ProfileTab = styled.div`
  font-size: 16px;
  font-weight: bold;

  span {
    color: #888;
    font-weight: normal;
    margin-left: 6px;
  }
`;

export const ProfileImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

export const UserInfoText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Username = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

export const Stats = styled.div`
  font-size: 14px;
  color: #ccc;
  margin-top: 4px;
`;

export const ProfileInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;  /* ✅ 아이콘은 우측 정렬 */
  align-items: center;
  margin-bottom: 24px;
`;

export const ProfileDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const CategorySection = styled.div`
  margin-bottom: 32px;
`;

export const CategoryTitle = styled.div`
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 12px;
`;

export const WordCloud = styled.div`
  position: relative;
  width: 100%;
  height: 120px;
`;

export const WordItem = styled.div<{ size?: number; x: number; y: number; bold?: boolean }>`
  position: absolute;
  top: ${({ y }) => y}px;
  left: ${({ x }) => x}px;
  font-size: ${({ size }) => size || 14}px;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  color: #ccc;
`;

export const PublisherScroll = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding-bottom: 8px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const PublisherCard = styled.div`
  flex: 0 0 auto;
  width: 120px;
  background-color: #1a1a1a;
  border-radius: 8px;
  overflow: hidden;
`;

export const PublisherImage = styled.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
`;

export const PublisherInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1; /* ✅ 우측 공간 확보 */
  min-width: 0; /* ✅ 자식이 줄바꿈 안 되도록 */
`;

export const PublisherTitle = styled.div`
  font-size: 13px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PublisherHandle = styled.div`
  font-size: 12px;
  color: #aaa;
  margin-top: 4px;
`;
export const Grid3 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);  /* ✅ 3열 */
  gap: 12px;
  padding: 0 16px;
  margin: 0 auto;
  max-width: 100%;
`;

export const PublisherPageWrapper = styled.div`
  background-color: black;
  color: white;
  padding: 24px 16px;
  min-height: 100vh;
`;

export const PublisherItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const PublisherAvatar = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
`;

export const PublisherTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1; /* ✅ 남은 공간 꽉 채우기 */
  min-width: 0;
`;

export const PublisherId = styled.div`
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 4px;
`;

export const PublisherStats = styled.div`
  display: flex;
  gap: 12px;
  font-size: 13px;
  color: #aaa;
  white-space: nowrap; /* ✅ 줄바꿈 방지 */
`;
>>>>>>> Stashed changes
