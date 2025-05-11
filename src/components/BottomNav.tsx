// src/components/BottomNav.tsx
'use client';

import { useRouter, usePathname } from 'next/navigation';
import * as Icons from 'src/assets/icons';   // 위에서 export 한 SVG들
import * as S     from '@/styles/Common';  // styled-components

export default function BottomNav() {
  const router   = useRouter();
  const pathname = usePathname() ?? '';

  // 1) 탭 정보 정의
  const tabs = [
    { path: '/main',         Gray: Icons.HomeGrayBtn,       White: Icons.HomeWhiteBtn     },
    { path: '/search',       Gray: Icons.SearchGrayBtn,     White: Icons.SearchWhiteBtn   },
    { path: '/sb',           Gray: Icons.ScrapbookGrayBtn,  White: Icons.ScrapbookWhiteBtn},
    { path: '/profile/user', Gray: Icons.UserGrayBtn,       White: Icons.UserWhiteBtn     },
  ];

  return (
    <S.BottomNav>
      {tabs.map(({ path, Gray, White }) => {
        // startsWith 로 서브경로도 모두 active 처리
        const isActive = pathname.startsWith(path);
        const Icon     = isActive ? White : Gray;
        return (
          <S.NavIcon key={path} onClick={() => router.push(path)}>
            <Icon />
          </S.NavIcon>
        );
      })}
    </S.BottomNav>
  );
}




