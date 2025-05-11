'use client';

import styled from 'styled-components';
import * as Common from '@/styles/Common';
import { FiSliders, FiMenu, FiHome, FiSearch, FiBookOpen, FiUser, FiChevronLeft, FiPlus  } from 'react-icons/fi';
import { usePathname, useRouter } from 'next/navigation';

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? '';
  const router = useRouter();

  const isUser = pathname.includes('/user');
  const isPublisher = pathname.includes('/publisher');

  return (
    <>
      <Common.Centered>
        <Common.Header>
            <Common.IconButton><FiChevronLeft /></Common.IconButton>  
                <Common.TabWrapper>
                    <Common.Tab $active={isUser} onClick={() => router.push('/profile/user')}>User</Common.Tab>
                    <Common.Tab $active={isPublisher} onClick={() => router.push('/profile/publisher')}>Publisher</Common.Tab>
                </Common.TabWrapper>
            <Common.IconButton><FiPlus /></Common.IconButton> 
        </Common.Header>      
      </Common.Centered>

      {children}

    </>
  );
}