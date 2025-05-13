'use client';

import React, { useState } from 'react';

const LoginTest = () => {
  const [responseData, setResponseData] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    try {
      const response = await fetch('http://10.124.204.201:4000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: 'testuser', // ⚠️ 실제 테스트 계정 ID
          password: 'testpassword', // ⚠️ 실제 테스트 계정 PW
        }),
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();
      setResponseData(JSON.stringify(data, null, 2));
      setError(null);
    } catch (err: any) {
      setError(err.message);
      setResponseData(null);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <button onClick={handleLogin} style={{ padding: '0.5rem 1rem' }}>
        일반 로그인 테스트
      </button>
      {responseData && (
        <pre style={{ marginTop: '1rem', background: '#eee', padding: '1rem' }}>{responseData}</pre>
      )}
      {error && (
        <p style={{ color: 'red', marginTop: '1rem' }}>Error: {error}</p>
      )}
    </div>
  );
};

export default LoginTest;
