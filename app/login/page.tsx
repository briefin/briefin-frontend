// app/login/page.tsx
'use client';

import React, { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('http://10.124.204.201:4000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
        credentials: 'include',
      });
      if (res.ok) {
        router.push('/main');
      } else {
        alert('로그인 실패');
      }
    } catch (err) {
      console.error(err);
      alert('네트워크 에러');
    }
  };

  /*const handleNaverLogin = () => {
    window.location.href = 'https://nid.naver.com/oauth2.0/authorize?...';
  };
  const handleKakaoLogin = () => {
    window.location.href = 'https://kauth.kakao.com/oauth/authorize?...';
  };*/

  return (
    <Container>
      <Title>로그인</Title>

      <Form onSubmit={handleSubmit}>
        <Input
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="아이디"
        />
        <Input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="비밀번호"
        />
        <SubmitButton type="submit">로그인</SubmitButton>
      </Form>

      <OAuthWrapper>
        <NaverButton /*onClick={handleNaverLogin}*/>
          네이버 로그인
        </NaverButton>
        <KakaoButton /*onClick={handleKakaoLogin}*/>
          카카오 로그인
        </KakaoButton>
      </OAuthWrapper>
    </Container>
  );
}

// ===== styled-components =====

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  background: #f5f5f5;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Form = styled.form`
  width: 90%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 1rem;
  font-size: 1.2rem;
  border: 2px solid #b54;
  border-radius: 10px;
  background: #e0e0e0;
`;

const SubmitButton = styled.button`
  padding: 1rem;
  font-size: 1.2rem;
  border-radius: 10px;
  border: none;
  background: #b54;
  color: white;
  cursor: pointer;
`;

const OAuthWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  width: 90%;
  max-width: 400px;
`;

const OAuthBase = styled.button`
  flex: 1;
  padding: 1rem;
  font-size: 1.2rem;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;

const NaverButton = styled(OAuthBase)`
  background: #3cba54;
  color: white;
`;

const KakaoButton = styled(OAuthBase)`
  background: #f7e600;
  color: #381e1f;
`;
