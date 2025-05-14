'use client';

import styled from 'styled-components';
import * as Common from '@/styles/Common';
import { FiSliders, FiMenu, FiHome, FiSearch, FiBookOpen, FiUser, FiChevronLeft, FiPlus  } from 'react-icons/fi';
import { usePathname, useRouter } from 'next/navigation';
import { BackArrowBtn ,AddBtn} from '@/src/assets/icons';


export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? '';
  const router = useRouter();

  const isUser = pathname.includes('/user');
  const isPublisher = pathname.includes('/publisher');

  return (
    <>
        <Common.Header style={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Common.IconButton><BackArrowBtn/></Common.IconButton>  
                <Common.TabWrapper>
                    <Common.Tab active={isUser} onClick={() => router.push('/profile/user')}>User</Common.Tab>
                    <Common.Tab active={isPublisher} onClick={() => router.push('/profile/publisher')}>Publisher</Common.Tab>
                </Common.TabWrapper>
              </div>
            <Common.AddIconButton ><AddBtn/></Common.AddIconButton> 
        </Common.Header>      

      {children}

    </>
  );
}