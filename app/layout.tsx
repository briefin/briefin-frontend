'use client';

import './globals.css';
import GlobalStyle from '@/styles/GlobalStyle';
import * as Common from '@/styles/Common';
import { usePathname, useRouter } from 'next/navigation';
import { FiHome, FiSearch, FiBookOpen, FiUser } from 'react-icons/fi';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  // '/' 페이지에서는 하단 메뉴 안 보이게
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
              <Common.NavIcon onClick={() => router.push('/main')}><FiHome /></Common.NavIcon>
              <Common.NavIcon onClick={() => router.push('/search')}><FiSearch /></Common.NavIcon>
              <Common.NavIcon onClick={() => router.push('/sb')}><FiBookOpen /></Common.NavIcon>
              <Common.NavIcon onClick={() => router.push('/profile/user')}><FiUser /></Common.NavIcon>
            </Common.BottomNav>
          </Common.Centered>
        )}
      </body>
    </html>
  );
}
