'use client';

import React, { useState } from 'react';
import { FiChevronLeft, FiEye, FiEyeOff } from 'react-icons/fi';
import * as Common from '@/styles/Common';

export default function JoinPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const isPasswordMismatch = confirm.length > 0 && confirm !== password;

  return (
    <Common.FormWrapper>
      {/* 헤더 */}
      <Common.FormHeader>
        <FiChevronLeft />
        회원가입
      </Common.FormHeader>

      {/* 이름 */}
      <Common.Label>이름</Common.Label>
      <Common.InputField
        placeholder="이름을 알려주세요."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {/* 이메일 */}
      <Common.Label>이메일</Common.Label>
      <Common.InputField
        placeholder="이메일을 입력해주세요."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* 비밀번호 */}
      <Common.Label>
        비밀번호 <span style={{ fontSize: '12px', color: '#888' }}>최소 8자, 영어, 특수기호 포함</span>
      </Common.Label>
      <Common.PasswordInputRow>
        <Common.PasswordInput
          type={showPassword ? 'text' : 'password'}
          placeholder="비밀번호를 입력해주세요."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Common.EyeButton onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <FiEyeOff /> : <FiEye />}
        </Common.EyeButton>
      </Common.PasswordInputRow>

      {/* 비밀번호 확인 */}
      <Common.Label>
        비밀번호 확인{' '}
        {isPasswordMismatch && <span style={{ color: '#7fff00', fontSize: '12px' }}>다시 입력해주세요.</span>}
      </Common.Label>
      <Common.PasswordInputRow isError={isPasswordMismatch}>
        <Common.PasswordInput
          type={showConfirm ? 'text' : 'password'}
          placeholder="비밀번호를 한 번 더 입력해주세요."
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />
        <Common.EyeButton onClick={() => setShowConfirm(!showConfirm)}>
          {showConfirm ? <FiEyeOff /> : <FiEye />}
        </Common.EyeButton>
      </Common.PasswordInputRow>

      {/* 제출 버튼 */}
      <Common.SubmitButton>회원가입</Common.SubmitButton>
    </Common.FormWrapper>
  );
}
