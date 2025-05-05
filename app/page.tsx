'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import * as Common from '@/styles/Common';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/main'); // 또는 'http://localhost:3000/main'도 가능하지만 상대 경로 권장
    }, 5000); // 5초

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
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
