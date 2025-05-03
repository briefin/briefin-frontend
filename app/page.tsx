'use client';

import Image from 'next/image';
import * as Common from '@/styles/Common';

export default function Home() {
  return (
    <>
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
    </>
  );
}
