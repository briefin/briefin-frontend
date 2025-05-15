'use client';

import * as Common from '@/styles/Common';
import { usePathname, useRouter, useParams } from 'next/navigation';
import { BackArrowBtn, AddBtn } from '@/src/assets/icons';

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? '';
  const router   = useRouter();
  const { id }   = useParams() as { id?: string };

  // 경로 플래그
  const isUserPage     = pathname === '/profile/user';
  const isPubRoot      = pathname === '/profile/publisher';
  const isPubDet       = !!id && pathname === `/profile/publisher/${id}`;
  const isSignup       = pathname.endsWith('/signup');
  const isOtherPubDet  = !!id && pathname.startsWith('/profile/otherpublisher/');

  // Add 버튼 노출 기준
  const showAddButton = (isPubRoot || isPubDet) && !isSignup;
  const handleAdd = () => {
    if (id) router.push(`/profile/publisher/${id}/signup`);
    else     router.push(`/profile/publisher/signup`);
  };

  // 백 버튼 동작: otherpublisher 디테일이면 /post/short로, 아니면 history.back()
  const handleBack = () => {
    if (isOtherPubDet) {
      router.push('/post/short');
    } else {
      router.back();
    }
  };

  // User 탭 라벨 & 클릭 경로
  const userLabel = isOtherPubDet && id ? `@${id}` : 'User';
  const handleUserTab = () => {
    if (isOtherPubDet && id) {
      router.push(`/profile/otherpublisher/${id}`);
    } else {
      router.push('/profile/user');
    }
  };

  return (
    <>
      <Common.Header
        style={{ justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Common.IconButton onClick={handleBack} style={{ margin: '0 5px' }}>
            <BackArrowBtn />
          </Common.IconButton>

          <Common.TabWrapper>
            {/* 1) User 탭 (otherpublisher 디테일 시 id 라벨) */}
            <Common.Tab
              active={isUserPage || isOtherPubDet}
              onClick={handleUserTab}
            >
              {userLabel}
            </Common.Tab>

            {/* 2) Publisher 탭 */}
            <Common.Tab
              active={isPubRoot || isPubDet || isSignup}
              onClick={() => router.push('/profile/publisher')}
            >
              Publisher
            </Common.Tab>
          </Common.TabWrapper>
        </div>
      </Common.Header>
      {children}
    </>
  );
}
