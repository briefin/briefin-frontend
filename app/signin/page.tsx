'use client';

import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiEye, FiEyeOff } from 'react-icons/fi';
import * as Common from '@/styles/Common';
import { BackArrowBtn } from '@/src/assets/icons';

export default function JoinPage() {
  const [name, setName] = useState('');
  const [userId, setUserId] = useState('');                // ← 아이디 상태
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // 아이디 중복 체크 상태
  const [isCheckingId, setIsCheckingId] = useState(false);
  const [isIdTaken, setIsIdTaken]       = useState(false);
  const [idError, setIdError]           = useState<string | null>(null);

  // 1) userId가 바뀔 때마다 중복 체크
  useEffect(() => {
    if (!userId) {
      setIsIdTaken(false);
      setIdError(null);
      return;
    }

    let cancelled = false;
    setIsCheckingId(true);
    setIdError(null);

    // 예시: `/api/check-id?userId=...` 로 GET 요청
    fetch(`/api/check-id?userId=${encodeURIComponent(userId)}`)
      .then(res => res.json())
      .then(data => {
        if (cancelled) return;
        setIsIdTaken(data.taken); 
        setIdError(data.taken ? '중복된 아이디입니다.' : null);
      })
      .catch(() => {
        if (cancelled) return;
        setIdError('서버 오류, 다시 시도해주세요.');
      })
      .finally(() => {
        if (!cancelled) setIsCheckingId(false);
      });

    return () => {
      cancelled = true;
    };
  }, [userId]);

  // 비밀번호 불일치 플래그
  const isPasswordMismatch = confirm.length > 0 && confirm !== password;

  return (
    <Common.FormWrapper>
      {/* 헤더 */}
      <Common.FormHeader>
        <BackArrowBtn />
        회원가입
      </Common.FormHeader>

      {/* 이름 */}
      <Common.Label>이름</Common.Label>
      <Common.InputField
        placeholder="이름을 알려주세요."
        value={name}
        onChange={e => setName(e.target.value)}
      />

      {/* 이메일 */}
      <Common.Label>이메일</Common.Label>
      <Common.InputField
        placeholder="이메일을 입력해주세요."
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      {/* 아이디 */}
      <Common.LabelRow>
        <Common.Label>아이디</Common.Label>
        {/* 중복 체크 중, 에러, 성공 메시지 */}
        {isCheckingId && <Common.SmallText>확인 중...</Common.SmallText>}
        {!isCheckingId && idError && (
          <Common.SmallText style={{ color: '#86FF0D' }}>{idError}</Common.SmallText>
        )}
      </Common.LabelRow>
      <Common.PasswordInputRow isError={!!idError}>
        <Common.PasswordInput
          type="text"
          placeholder="사용할 아이디를 입력해주세요."
          value={userId}
          onChange={e => setUserId(e.target.value)}
        />
      </Common.PasswordInputRow>

      {/* 비밀번호 */}
      <Common.LabelRow>
        <Common.Label>비밀번호</Common.Label>
        <Common.SmallText>최소 8자, 영어, 특수기호 포함</Common.SmallText>
      </Common.LabelRow>
      <Common.PasswordInputRow>
        <Common.PasswordInput
          type={showPassword ? 'text' : 'password'}
          placeholder="비밀번호를 입력해주세요."
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Common.EyeButton onClick={() => setShowPassword(prev => !prev)}>
          {showPassword ? <FiEyeOff /> : <FiEye />}
        </Common.EyeButton>
      </Common.PasswordInputRow>

      {/* 비밀번호 확인 */}
      <Common.LabelRow>
        <Common.Label>비밀번호 확인</Common.Label>
        {isPasswordMismatch && (
          <Common.SmallText style={{ color: '#86FF0D' }}>
            비밀번호가 일치하지 않습니다.
          </Common.SmallText>
        )}
      </Common.LabelRow>
      <Common.PasswordInputRow isError={isPasswordMismatch}>
        <Common.PasswordInput
          type={showConfirm ? 'text' : 'password'}
          placeholder="비밀번호를 한 번 더 입력해주세요."
          value={confirm}
          onChange={e => setConfirm(e.target.value)}
        />
        <Common.EyeButton onClick={() => setShowConfirm(prev => !prev)}>
          {showConfirm ? <FiEyeOff /> : <FiEye />}
        </Common.EyeButton>
      </Common.PasswordInputRow>

      {/* 제출 버튼 */}
      <Common.BottomBar>
        <Common.SubmitButton disabled={!!idError || isCheckingId}>
          회원가입
        </Common.SubmitButton>
      </Common.BottomBar>
    </Common.FormWrapper>
  );
}
