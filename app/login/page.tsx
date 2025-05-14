'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import * as Common from '@/styles/Common';
import { FiMessageSquare } from 'react-icons/fi';
import { KakaoBtn } from '@/src/assets/icons';

export default function LoginPage() {
  const router = useRouter();
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [loginFailed, setLoginFailed] = useState(false);

  const handleLogin = async () => {
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
        const data = await res.json();
        console.log('로그인 성공:', data);
        setLoginFailed(false);
        router.push('/main'); // 원하는 페이지로 이동
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
          onChange={(e) => setUserId(e.target.value)}
        />

        <Common.LoginInput
          type="password"
          placeholder="비밀번호"
          value={userPw}
          onChange={(e) => setUserPw(e.target.value)}
          isError={loginFailed}
        />

        {loginFailed && (
          <Common.WarningText> 다시 입력해주세요.</Common.WarningText>
        )}

        <Common.LoginButton onClick={handleLogin}>로그인</Common.LoginButton>

        <Common.LoginBottomText>
          계정이 없으신가요? <a href="/signin">회원가입</a>
        </Common.LoginBottomText>
      </Common.LoginBottom>
    </Common.LoginWrapper>
  );
}
