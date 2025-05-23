// styles/Common.ts

'use client';

import styled from 'styled-components';

export const FOLLOW_WIDTH = '100px';

/* ✅ 재사용 가능한 중앙 컨테이너 */
const CenteredContainer = `
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
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

export const AddIconButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  padding: 4px;
  cursor: pointer;
  margin-right: auto;
`;

export const Wrapper = styled.main`
  background-color: black;
  color: white;
  padding: 0;
  width: 100%;
  margin-top: 20px;
  width : 100%
  height: 100%
  overflow-x: hidden;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 10px;
  margin-left: 30px;
  ${CenteredContainer}
`;

export const Card = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
`;

export const MyCard = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1.3;
  overflow: visible;
`;

export const LikeCard = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1.4;
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
  font-size: 18px;
  font-weight: 600;
  line-height: 130%;
`;

export const Author = styled.div`
  font-size: 10px;
  color: #FFFFFF;
  font-weight: 400;
  line-height: 22px;
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
  margin-bottom: 20px;
  margin-left: 24px;
  ${CenteredContainer}
`;

export const CategoryButton = styled.button<{ active?: boolean }>`
  height: 35px;
  background-color: ${({ active }) => (active ? 'white' : '#232323')};
  color: ${({ active }) => (active ? 'black' : 'white')};
  font-size: 16px;
  border-radius: 0;
  cursor: pointer;
  margin-bottom: 20px;
  flex-wrap: nowrap;
  padding-top: 10px;
  row-gap: 2px; 
  
  
`;

export const ContentWrapper = styled.div`
  width: 100%;
  margin: 0;         /* 화면 가로 중앙 정렬 */
      
  box-sizing: border-box; /* 패딩 포함해서 계산 */
  display: flex;
  flex-direction: column;
  gap: 4px;              /* 자식들 사이 간격 */
  margin-bottom: -20px;
  
`;

export const BottomNav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 50%;
  height : 50px;
  transform: translateX(-50%);
  background: Black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 12px 0;
  width: 100%;
  max-width: 480px;
  z-index: 100;
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
  padding: 20px; // 🔥 사방 여백 모두 포함!
  box-sizing: border-box;
  overflow-x: hidden;
  ${CenteredContainer}
`;

export const SuggestedPublisherWrapper = styled.div`
  margin-top: 32px;
  box-sizing: border-box;
  overflow-x: hidden;
  ${CenteredContainer}
`;

export const SectionTitle = styled.h2`
  color: #E7E7E7;
  font-size: 18px;
  margin-top : 15px;
  margin-bottom: 7px;
  padding-left: 8px;
  font-weight: 500;
`;

export const HorizontalScroll = styled.div`
  display: flex;
  gap: 20px; // ✅ 카드 간 간격 피그마와 동일하게
  overflow-x: auto;
  overflow-y: visible;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SuggestedCard = styled.div`
  flex: 0 0 auto;
  width: 220px;
  color: white;
  overflow: visible;
  padding-bottom: 12px; 
  position: relative;
  padding: 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;


export const SuggestedImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  aspect-ratio: 1 / 1;
  object-fit: cover;
`;

export const SuggestedTextWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 12px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent); 
  color: white;
`;


export const SuggestedInfo = styled.div`
  padding: 8px;
`;
//덮어씌우는 layout - home의 suggestion에서 사용
export const SuggestedOverlay = styled.div` 
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 12px;
  background: linear-gradient(to top, rgba(0,0,0,0.6), transparent 60%);
  color: white;
`;

export const BriefinLogo = styled.div`
  height: auto;
  width: 80px;
  height: 80px;
  margin-bottom: 20px;
`;

export const BriefinTitle = styled.h1`
  font-family: 'neurimboGothicRegular', sans-serif;
  width: 160px;
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
  width: 140px;
  background-color: #000;
  border: 1px solid #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 0 1px;
  box-sizing: border-box; // ✅ 꼭 필요!
  flex-shrink: 0;
  margin-top: 10px;
`;



export const SuggestedSearchImage = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  height: auto;
  object-fit: cover;
`;

export const SuggestedSearchInfo = styled.div`
  text-align: center;
  margin-top: 12px;        // 🔥 이미지와 텍스트 사이
  margin-bottom: 11px;     // 🔥 텍스트와 버튼 사이
  cursor: pointer;
`;

export const SuggestedSearchTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 2px;
  color: #E7E7E7;
`;

export const SuggestedSearchHandle = styled.div`
  font-size: 16px;
  color: #848484;
  margin-bottom: 2px;
  font-weight: 400;
`;

export const SuggestedSearchFollowButton = styled.img`
  width: 100%;
  height: auto;
  display: block;
  cursor: pointer;
  margin-top: 12px;
  cursor: pointer;
  margin-bottom: 20px;
`;


const SearchFollowBtn = styled.img`
  width: 100%;
  height: auto;
  cursor: pointer;
  margin-top: 8px;
`;

export const SbCard = styled.div`
  width: 195px;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  padding-left: 5px;
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
  font-size: 20px;
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
  font-size: 13px;
  color: white;
  font-weight: ;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(6px);
  position: sticky;
  top: 0;
  margin-tiop: 10px;
  z-index: 1000;
`;

export const HeaderTitle = styled.h1`
  font-size: 20px;
  font-weight: 500;
  color: white;
  margin: 0;
  background: transparent;
  padding-left: 5px;
`;

export const TagRow = styled.div`
  display: flex;
  gap: 8px;
  padding: 8px 16px;
`;

export const TagBadge = styled.div`
  background-color: #232323;
  color: #B6B6B6;
  font-size: 17px;
  font-weight: 400;
  padding: 6px 12px;
  white-space: nowrap;
  margin-bottom: 10px;
`;

// 공통 Wrapper
export const BottomBar = styled.div`
  padding: 16px;
  background: transparent;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 56px;     /* 하단 내비(높이 예: 56px) 위에 딱 붙이기 */
  padding: 16px;
  background: #000;
  box-shadow: 0 -2px 8px rgba(0,0,0,0.5);
  `;

// 왼쪽 사용자 영역
export const ProfileTag = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

// 버튼
export const HandleBadge = styled.div`
  background-color: #232323;
  color: #E7E7E7;
  font-size: 16.5px;
  padding: 6px 12px;
  border-radius: 20px;
  size: 
`;

// 아이콘 그룹
export const ActionIcons = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  gap: 16px;
  font-size: 20px;
  color: white;
  cursor: pointer;
`;

export const Description = styled.div`
  padding: 16px;
  color: white;
  font-size: 18px;
  line-height: 130%;
  background-color: black;
  font-weight: 400;
`;

export const IndicatorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 4px 0;
  background-color: black;
  font-size: 0;
`;

export const IndicatorDot = styled.button<{ active?: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  padding: 0;
  border: none;
  background-color: ${({ active }) => (active ? 'white' : '#888')};
  cursor: pointer;
  appearance: none;
  box-sizing: border-box;
  display: inline-block;
`;

export const ImageViewer = styled.div`
  width: 100%;
  max-width: 480px;
  height : 550px;
  margin: 0 ;
  
`;

export const ViewerImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  aspect-ratio: 1 / 1.25;
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
  padding: 10px;
`;

export const SquareImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  flex-shrink: 0;
`;

export const SummaryText = styled.div`
  color: white;
  font-size: 18px;
  line-height: 130%;
  font-weight: 400;
  flex: 1;
`;

export const LongText = styled.div`
  color: white;
  font-size: 18px;
  line-height: 130%;
  padding: 0 16px 32px 16px;
  font-weight : 300;
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
  filter: brightness(0.75) blur(2px); /* 어두워지고 약간 흐릿함 */
  opacity: 0.7; /* 투명도 */
  transform: scale(1.05); /* 확대 */
`;

export const BookmarkOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); /* ✅ 반투명 검정 배경 */
  z-index: 1000; /* ✅ 하단바 위 */
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const BookmarkSelectBox = styled.div`
  width: 90%;
  max-width: 480px;
  background-color: #3B3B3B;
  padding: 10px;
  border-radius: 10px;
  color: white;
  padding-bottom : 5px;
  z-index: 1000;
  /* ✅ 하단바 높이만큼 띄우기 */
  margin-bottom: 90px;
`;

export const BookmarkItem = styled.div`
  padding: 10px 12px;
  border-radius: 8px;
  background-color: #3B3B3B;
  margin-bottom: 8px;
  font-size: 14px;
`;

export const ScrapToast = styled.div`
  position: fixed;
  top: 43%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #232323;
  color: white;
  padding: 60px 32px;
  font-size: 20px;
  font-weight: 600;
  z-index: 1002;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const ScrapImage = styled.img`
  width: 48px;
  height: 48px;
  margin-bottom: 12px;
  font-weight: 600;
  font-size: 22px;
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
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;

export const UserInfoText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Username = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-bottom : 15px;
  margin-left: 10px;
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
  font-size: 18px;
  font-weight: 400;
  margin-left: 10px;
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
  margin: 0 ;
  max-width: 100%;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  box-sizing: border-box
`;

export const FormHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 24px;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 500;
  margin-top: 16px;
  display: block;
`;

export const InputField = styled.input`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.10);
  border: none;
  padding: 13px;
  margin-top: 6px;
  color: white;
  font-size: 14px;

  &::placeholder {
    color: #848484;
    font-size: 16px;
    font-weight:400;
  }
`;

export const PasswordInput = styled.input`
  background: transparent;
  border: none;
  outline: none;
  color: white;
  flex: 1;
  font-size: 14px;
  height: 23px; 
  padding-bottom: 3px;

  &::placeholder {
    color: #777;
    font-size: 16px;
    font-weight: 400;
    
  }
`;

export const SmallText = styled.span`
  font-size: 12px;
  color: #848484;
  font-weight: 400;
  padding-top: 5px;
  margin-left: auto;  /* 이 한 줄로 오른쪽 끝으로 밀어줘 */
`;

export const LabelRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const EyeButton = styled.button`
  background: none;
  border: none;
  color: #ccc;
  font-size: 18px;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  margin-top: 40px;
  width: 100%;
  padding: 14px;
  background-color: white;
  color: black;
  font-weight: 600;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

export const PasswordInputRow = styled.div<{ isError?: boolean }>`
  display: flex;
  align-items: center;
  background-color: #1a1a1a;
  padding: 4px;
  margin-top: 6px;
  border: 2px ${({ isError }) => (isError ? '1px solid #7fff00' : 'none')};  /* 연두색 */
`;

export const WarningText = styled.div`
  color: #7fff00;
  font-size: 14px;
  text-align: right;
  margin-top: 1px;
  right: 12px;
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  overflow: hidden;
  padding: 48px 24px;
  background-color: black;
  color: white;
  justify-content: space-between;
`;


export const Logo = styled.img`
  width: 48px;
  font-family: 'neurimboGothicRegular'
  height: 48px;
  margin-bottom: 16px;
`;

export const LogoText = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: white;
  margin-bottom: 40px;
`;

export const KakaoButton = styled.button`
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  background: black;
  padding: 10px;
  width: 105%;
`;

export const LoginInput = styled.input<{ isError?: boolean }>`
  width: 100%;
  padding: 12px;
  margin-bottom: 12px;
  background-color: rgba(255, 255, 255, 0.10);
  padding: 0 16px;
  height: 48px; 
  color: white;
  border: ${({ isError }) => (isError ? '1px solid #86FF0D' : 'none')};
  font-size: 14px;

  &::placeholder {
    color: #848484;
    font-size: 16px;
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  background-color: white;
  color: black;
  font-weight: bold;
  padding: 12px;
  font-size: 15px;
  border: none;
  margin-top: 12px;
  cursor: pointer;
`;

export const LoginBottomText = styled.div`
  font-size: 16px;
  color: #E7E7E7;
  margin-top: 16px;
  font-weight: 600;

  a {
    color: white;
    margin-left: 6px;
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const LoginTop = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom : 350px;
`;

export const LoginBottom = styled.div`
  width: 100%;
  padding: 0 24px 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const PublisherStats = styled.span`
  color: #9D9D9D;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;

`;

export const FollowLabel = styled.span`
  color: #888;
  margin-left: 10px;
  font-size: 16px;
`;



export const PublisherPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 16px;
`;

export const PublisherItem = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 16px;
  margin-left: -10px;
  width: 100%;
`;

export const PublisherInfo = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  cursor: pointer;
  width: 100%;
`;

export const PublisherAvatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-left: 2px;
 
`;

export const PublisherTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
`;

export const PublisherId = styled.span`
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  margin-left: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const PublisherStatsGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  margin-left: 32px; /* 아바타와 통계 사이 간격 */
`;

export const PublisherStatsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;


export const Value = styled.span`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
`;


export const SettingIconButton = styled.button`
  background: none;
  border: none;
  color: white;
  margin-top: 35px;
  cursor: pointer;
`;
export const MyDescription = styled.p`
  color: #9D9D9D;         /* 연한 회색 */
  font-size: 14px;
  margin: 4px 0;
  font-weight: 400;
  margin-left: 10px;       /* 위아래 간격 */
`;


export const FolderMenu = styled.div`
  position: absolute;
  top: 20px;
  right: 0;
  background: #3B3B3B;
  width: 170px;
  border-radius: 10px;
  z-index: 1001;
  flex-direction: row; 
`;

export const FolderItem = styled.div<{selected?: boolean}>`
  padding: 6px 12px;
  color: ${({ selected }) => (selected ? '#86FF0D' : '#fff')};
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background: #3B3B3B;
  }
`;


export const PostHeaderContainer = styled.div<{ $transparent?: boolean }>`
  display: flex;
  align-items: center;
  padding: 25px 12px;
  height: 30px;
  /* transparent prop 처리 */
  background-color: transparent;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: ${({ $transparent }) => ($transparent ? 10 : 'auto')};
`;

export const PostBottomBar = styled.div<{ variant: 'dark' | 'light'}>`
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  padding: 12px 14px;
  border-radius: 20px;
  /* transparent prop 처리 */
  background-color: ${({ variant }) =>
    variant === 'dark' ? '#3B3B3B' : 'rgba(35, 35, 35, 0.3)'};
  backdrop-filter: ${({ variant }) =>
   variant === 'dark' ? 'none' : 'blur(2px)'};
  -webkit-backdrop-filter: ${({ variant }) =>
   variant === 'dark' ? 'none' : 'blur(2px)'};

 /* 배경이 블러 될 때 모서리 밖으로 번지는 걸 방지 */
  background-clip: padding-box;

  position: fixed;
  bottom: 0;
  left: 0;
  width: 90%;
  margin-bottom: 20px;
  margin-left: 10px;
  margin-right: 20px;
`;

/* ───────────────────────────────────────── Upload ───────────────────────────────────────── */
export const UploadWrapper = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  margin: 16px 0;
`;

export const UploadInput = styled.input.attrs({ type: 'file' })`
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  overflow: hidden;
  color: #6C6C6C;
`;

export const UploadLabel = styled.label`
  /* 클릭 가능한 원형 버튼 */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  background-color: #CECECE;
  border-radius: 50%;
  cursor: pointer;
  font-size: 14px;
  color: #ccc;
  transition: background-color 0.2s;

  &:hover {
    background-color: #555;
  }
  &::placeholder {
    color: #black;
    font-size: 18px;
  }
  

  /* 업로드된 뒤에 체크 아이콘 등 변경이 필요하면
     <UploadLabel uploaded> 형태로 props를 받을 수도 있습니다. */
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 12px 16px;
  font-size: 17px;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.10);
  border: none;
  outline: none;
  box-sizing: border-box;
  overflow: hidden;

  &::placeholder {
    color: #848484;
    font-size: 18px;
  }

  &:focus {
    border-color: #666;
  }
`;

export const SmallInputWrapper = styled.div`
  max-width: 100%;      
  margin-bottom: 16px;
  font-size :18px;
  background: rgba(255, 255, 255, 0.10);
`;

export const InitialButtonRow = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;     /* 한 줄에 모두 표시 */
  margin-bottom: 24px;
  row-gap: 0px;
`;

export const UploadRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 16px 0;
`;

export const FollowButton = styled.button<{ active?: boolean }>`
  width: 95%;
  margin-left: 10px;
  margin-top: 5px;
  padding: 8px;
  background-color: ${({ active }) => (active ? '#232323' : '#3B3B3B')};
  color: white;
  border: none;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s ease;
`;
