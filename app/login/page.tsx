// src/components/LoginPage.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import * as Common from '@/styles/Common';
import { FiMessageSquare } from 'react-icons/fi';
import { KakaoBtn } from '@/src/assets/icons';

export default function LoginPage() {
  const router = useRouter();
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [loginFailed, setLoginFailed] = useState(false);

  // 페이지 진입 시 body 스크롤 잠금, 언마운트 시 복원
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  const handleLogin = async () => {
    // 🚀 임시: 버튼 누르면 무조건 /main 으로 이동
    router.push('/main');
    return;

    try {
      const res = await fetch('http://localhost:4000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          username: userId,
          password: userPw,
        }),
      });

      if (res.ok) {
        // 실제 로그인 로직 (추후 복원 가능)
        const data = await res.json();
        console.log('로그인 성공:', data);
        setLoginFailed(false);
        router.push('/main');
      } else {
        setLoginFailed(true);
      }
    } catch (err) {
      console.error('로그인 요청 에러:', err);
      setLoginFailed(true);
    }
  };

  return (
    <Common.LoginWrapper>
      <Common.LoginTop>
        <Common.Logo src="/briefin_logo.png" alt="logo" />
      </Common.LoginTop>

      <Common.LoginBottom>
        <Common.KakaoButton>
          <KakaoBtn />
        </Common.KakaoButton>

        <Common.LoginInput
          type="text"
          placeholder="이메일"
          value={userId}
          onChange={e => setUserId(e.target.value)}
        />

        <Common.LoginInput
          type="password"
          placeholder="비밀번호"
          value={userPw}
          onChange={e => setUserPw(e.target.value)}
          isError={loginFailed}
        />

        {loginFailed && (
          <Common.WarningText>다시 입력해주세요.</Common.WarningText>
        )}

        <Common.LoginButton onClick={handleLogin}>
          로그인
        </Common.LoginButton>

        <Common.LoginBottomText style={{ marginBottom: '15px' }}>
          계정이 없으신가요? <a href="/signin">회원가입</a>
        </Common.LoginBottomText>
      </Common.LoginBottom>
    </Common.LoginWrapper>
  );
}
