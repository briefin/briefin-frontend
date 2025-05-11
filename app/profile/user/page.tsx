'use client';

import { usePathname, useRouter } from 'next/navigation';
import { FiPlus, FiSliders, FiMenu, FiHome, FiSearch, FiBookOpen, FiUser, FiChevronLeft, FiShare } from 'react-icons/fi';
import * as Common from '@/styles/Common';

const consumerTypes = [
  {
    img: '/rabbit.png',
    title: '눈밝은 토끼',
    subtitle: '감각적 몰입러',
  },
  {
    img: '/dog.png',
    title: '듬직한 강아지',
    subtitle: '일단 매일 접속함',
  },
  {
    img: '/bear.png',
    title: '디자인곰',
    subtitle: '디자인/패션 감성수집가',
  },
  {
    img: '/parrot.png',
    title: '수다쟁이앵무',
    subtitle: '인터뷰/연예 탐닉자',
  },
];

export default function UserProfilePage() {

  const router = useRouter(); // ✅ 라우터 훅 사용

  return (
      <>

        <Common.Wrapper>
          <Common.ProfileInfoRow>
            <Common.UserId>@hihihi</Common.UserId>
            <Common.FollowerStats>
              <Common.StatLabel>팔로우</Common.StatLabel>
              <Common.StatNumber>100</Common.StatNumber>
              <Common.StatLabel>팔로잉</Common.StatLabel>
              <Common.StatNumber>12</Common.StatNumber>
            </Common.FollowerStats>
          </Common.ProfileInfoRow>
        

          <Common.CardsWrapper>
            {consumerTypes.map((type, idx) => (
              <Common.AnimalCard key={idx}>
                <Common.TopLabel>내 소비유형</Common.TopLabel>
                <Common.AnimalImage src={type.img} alt={type.title} />
                <Common.CardTitle>{type.title}</Common.CardTitle>
                <Common.CardSubtitle>{type.subtitle}</Common.CardSubtitle>
              </Common.AnimalCard>
            ))}
          </Common.CardsWrapper>
        </Common.Wrapper>
      </>
  );
}

