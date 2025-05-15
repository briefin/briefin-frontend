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
        // User 탭(path === '/profile/user')일 때에만 otherpublisher 도 포함
        const isUserTab = path === '/profile/user';
        const isActive = isUserTab
          ? (pathname.startsWith('/profile/user') ||
             pathname.startsWith('/profile/otherpublisher/'))
          : pathname.startsWith(path);

        const Icon = isActive ? White : Gray;
        return (
          <S.NavIcon key={path} onClick={() => router.push(path)}>
            <Icon />
          </S.NavIcon>
        );
      })}
    </S.BottomNav>
  );
}




