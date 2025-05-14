'use client';

import * as Common from '@/styles/Common';
import { FiChevronLeft, FiPlus } from 'react-icons/fi';
import { usePathname, useRouter, useParams } from 'next/navigation';
import { BackArrowBtn, AddBtn } from '@/src/assets/icons';

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? '';
  const router   = useRouter();
  const params   = useParams() as { id: string };
  const id       = params.id; // /profile/publisher/[id]

  const isUser      = pathname.includes('/profile/user');
  const isPublisher = pathname.includes('/profile/publisher');

  // 눌렀을 때 동적 id가 없으면 이동하지 않게 안전장치
  const handleAdd = () => {
    if (id) {
      router.push(`/profile/publisher/${id}/signup`);
    }
  };

  return (
    <>
      <Common.Header style={{ justifyContent: 'space-between', alignItems: 'center' , marginTop: '10px'}}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Common.IconButton onClick={() => router.back()}>
            <BackArrowBtn />
          </Common.IconButton>
          <Common.TabWrapper>
            <Common.Tab active={isUser} onClick={() => router.push('/profile/user')}>
              User
            </Common.Tab>
            <Common.Tab active={isPublisher} onClick={() => router.push('/profile/publisher')}>
              Publisher
            </Common.Tab>
          </Common.TabWrapper>
        </div>
        {/* Add 버튼 클릭 시 실제 ID가 들어간 경로로 이동 */}
        <Common.AddIconButton onClick={handleAdd}>
          <AddBtn />
        </Common.AddIconButton>
      </Common.Header>

      {children}
    </>
  );
}
