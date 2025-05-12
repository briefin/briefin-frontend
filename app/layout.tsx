// 'use client'는 이미 선언돼 있다 치고…
// app/layout.tsx (또는 pages/_app.tsx)
'use client';

import './globals.css';
import GlobalStyle from '@/styles/GlobalStyle';
import * as Common from '@/styles/Common';
import { usePathname, useRouter } from 'next/navigation';
// Gray/White 아이콘 둘 다 import
import {
  HomeGrayBtn,    HomeWhiteBtn,
  SearchGrayBtn,  SearchWhiteBtn,
  ScrapbookGrayBtn, ScrapbookWhiteBtn,
  UserGrayBtn,    UserWhiteBtn,
} from 'src/assets/icons';  // 경로는 프로젝트에 맞게!

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const router   = useRouter();
  const pathname = usePathname() ?? '';

  // BottomNav에서 쓸 탭 정의
  const tabs = [
    { key: 'main',    path: '/main',   Gray: HomeGrayBtn,       White: HomeWhiteBtn      },
    { key: 'search',  path: '/search', Gray: SearchGrayBtn,     White: SearchWhiteBtn    },
    { key: 'sb',      path: '/sb',     Gray: ScrapbookGrayBtn,  White: ScrapbookWhiteBtn },
    { key: 'profile', path: '/profile/user',Gray: UserGrayBtn,       White: UserWhiteBtn      },
  ];

  // '/' 주소는 '/main'으로 보내거나, 제외하려면 excludedPaths 로 처리
  const excludedPaths = ['/'];
  const showBottomNav = !excludedPaths.includes(pathname);

  return (
    <html lang="ko">
      <body>
        <GlobalStyle />
        {children}

        {showBottomNav && (
          <Common.Centered>
            <Common.BottomNav>
              {tabs.map(({ key, path, Gray, White }) => {
                // 현재 URL이 path와 정확히 일치하거나 서브 경로면 활성화
                const isActive =
                  pathname === path || pathname.startsWith(path + '/');
                // Gray vs White 선택
                const Icon = isActive ? White : Gray;

                return (
                  <Common.NavIcon
                    key={key}
                    onClick={() => router.push(path)}
                    className={isActive ? 'active' : ''}
                  >
                    <Icon />
                  </Common.NavIcon>
                );
              })}
            </Common.BottomNav>
          </Common.Centered>
        )}
      </body>
    </html>
  );
} 







