'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import * as Common from '@/styles/Common';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(async () => {
      try {
        const res = await fetch('/api/auth/check', {
          method: 'GET',
          // 쿠키 기반 세션을 쓰면 credentials: 'include' 필요
          credentials: 'include',
        });

        if (!res.ok) {
          // 401, 500 등 에러나면 무조건 로그인 페이지로
          return router.push('/login');
        }

        const { authenticated, token } = await res.json();
        // { authenticated: boolean, token?: string } 형태 가정
        if (authenticated) {
          router.push('/main');
        } else {
          router.push('/login');
        }
      } catch (err) {
        console.error('Auth check failed', err);
        router.push('/login');
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <Common.FullCentered>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Common.BriefinLogo>
          <Image
            src="/briefin_logo.png"
            alt="logo"
            width={80}
            height={80}
            priority
          />
        </Common.BriefinLogo>
        <Common.BriefinTitle>BRIEFIN</Common.BriefinTitle>
      </div>
    </Common.FullCentered>
  );
}
