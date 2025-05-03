'use client';

import "./globals.css";
import GlobalStyle from '@/styles/GlobalStyle';

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GlobalStyle /> {/* ✅ 이것이 있어야 폰트 로딩됨 */}
        {children}
      </body>
    </html>
  );
}
