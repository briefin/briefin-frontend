'use client';

import './globals.css';
import GlobalStyle from '@/styles/GlobalStyle';
import * as Common from '@/styles/Common';
import { usePathname, useRouter } from 'next/navigation';
// Gray 아이콘만 import
import {
  HomeGrayBtn,
  SearchGrayBtn,
  ScrapbookGrayBtn,
  UserGrayBtn,
} from '@/src/assets/icons';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const router   = useRouter();
  const pathname = usePathname() ?? '';

  const excludedPaths = ['/'];
  const showBottomNav = !excludedPaths.includes(pathname);

  return (
    <html lang="en">
      <body>
        <GlobalStyle />
        {children}

        {showBottomNav && (
          <Common.Centered>
            <Common.BottomNav>
              <Common.NavIcon key="main"    onClick={() => router.push('/main')}   >
                <HomeGrayBtn />
              </Common.NavIcon>

              <Common.NavIcon key="search"  onClick={() => router.push('/search')}>
                <SearchGrayBtn />
              </Common.NavIcon>

              <Common.NavIcon key="sb"      onClick={() => router.push('/sb')}    >
                <ScrapbookGrayBtn />
              </Common.NavIcon>

              <Common.NavIcon key="profile" onClick={() => router.push('/profile/user')}>
                <UserGrayBtn />
              </Common.NavIcon>
            </Common.BottomNav>
          </Common.Centered>
        )}
      </body>
    </html>
  );
}





