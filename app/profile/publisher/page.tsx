'use client';

import { usePathname, useRouter } from 'next/navigation';
import { FiPlus, FiSliders, FiMenu, FiHome, FiSearch, FiBookOpen, FiUser, FiChevronLeft, FiShare } from 'react-icons/fi';
import * as Common from '@/styles/Common';

const mockData_sb = [
    {
      img: '/jordy.png',
      title: 'y2k',
    },
    {
      img: '/jordy.png',
      title: '느중레시피',
    },
];

export default function UserProfilePage() {

  const router = useRouter(); // ✅ 라우터 훅 사용

  return (
      <>

      </>
  );
}

