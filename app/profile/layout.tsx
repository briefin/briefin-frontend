'use client';

import * as Common from '@/styles/Common';
import { usePathname, useRouter, useParams } from 'next/navigation';
import { BackArrowBtn, AddBtn } from '@/src/assets/icons';

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? '';
  const router   = useRouter();
  const { id }   = useParams() as { id?: string };

  // 경로 플래그
  const isOtherPubDet  = !!id && pathname.startsWith('/profile/otherpublisher/');
  const isUserPage     = pathname === '/profile/user' || isOtherPubDet;
  const isPubRoot      = pathname === '/profile/publisher';
  const isPubDet       = !!id && pathname === `/profile/publisher/${id}`;
  const isSignup       = pathname.endsWith('/signup');

  // Publisher 루트에서만 Add 버튼 노출 (상세 페이지에는 숨김)
  const showAddButton = isPubRoot && !isSignup;
  const handleAdd = () => {
    router.push('/profile/publisher/signup');
  };

  // 뒤로가기 버튼 동작
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
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 10,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {/* 뒤로가기 */}
          <Common.IconButton onClick={handleBack} style={{ margin: '0 5px' }}>
            <BackArrowBtn />
          </Common.IconButton>

          {/* 탭 */}
          <Common.TabWrapper>
            {/* User / OtherPublisher 탭 */}
            <Common.Tab active={isUserPage} onClick={handleUserTab}>
              {userLabel}
            </Common.Tab>

            {/* Publisher 탭은 otherpublisher 상세 페이지에서는 렌더링하지 않음 */}
            {!isOtherPubDet && (
              <Common.Tab
                active={isPubRoot || isPubDet || isSignup}
                onClick={() => router.push('/profile/publisher')}
              >
                Publisher
              </Common.Tab>
            )}
          </Common.TabWrapper>
        </div>

        {/* Publisher 루트에서만 보이는 Add 버튼 */}
        {showAddButton && (
          <Common.IconButton onClick={handleAdd} style={{ margin: '0 5px' }}>
            <AddBtn />
          </Common.IconButton>
        )}
      </Common.Header>

      {children}
    </>
  );
}
