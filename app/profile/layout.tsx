'use client';

import * as Common from '@/styles/Common';
import { usePathname, useRouter, useParams } from 'next/navigation';
import { BackArrowBtn, AddBtn } from '@/src/assets/icons';

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? '';
  const router   = useRouter();
  const { id }   = useParams() as { id?: string };

  const isUserPage   = pathname === '/profile/user';
  const isPubRoot    = pathname === '/profile/publisher';
  const isPubDet     = !!id && pathname === `/profile/publisher/${id}`;
  const isSignup     = pathname.endsWith('/signup');

  // Add 버튼은 publisher root 또는 detail에서만
  const showAddButton = (isPubRoot || isPubDet) && !isSignup;
  const handleAdd = () => {
    if (id) router.push(`/profile/publisher/${id}/signup`);
  };

  // 탭 렌더링 순서
  // 1) User 페이지: User → Publisher  
  // 2) Publisher 루트/Detail: Publisher → User  
  // 3) Signup: Publisher 만
  const renderTabs = () => {
    // 3) Signup 에서는 Publisher 탭만
    if (isSignup) {
      return (
        <Common.Tab active onClick={() => router.push('/profile/publisher')}>
          Publisher
        </Common.Tab>
      );
    }

    // 1) User 페이지
    if (isUserPage) {
      return (
        <>
          <Common.Tab active onClick={() => router.push('/profile/user')}>
            User
          </Common.Tab>
          <Common.Tab onClick={() => router.push('/profile/publisher')}>
            Publisher
          </Common.Tab>
        </>
      );
    }

    // 2) Publisher 루트 또는 Detail
    return (
      <>
        <Common.Tab active onClick={() => router.push('/profile/publisher')}>
          Publisher
        </Common.Tab>
        <Common.Tab onClick={() => router.push('/profile/user')}>
          User
        </Common.Tab>
      </>
    );
  };

  return (
    <>
      <Common.Header style={{ justifyContent: 'space-between', alignItems: 'center', marginTop : '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Common.IconButton onClick={() => router.back()} style={{margin : '0 5px'}}>
            <BackArrowBtn />
          </Common.IconButton>
          <Common.TabWrapper>
            {renderTabs()}
          </Common.TabWrapper>
        </div>

        {showAddButton && (
          <Common.IconButton onClick={handleAdd} style={{margin : '0 5px'}}>
            <AddBtn />
          </Common.IconButton>
        )}
      </Common.Header>
      {children}
    </>
  );
}
