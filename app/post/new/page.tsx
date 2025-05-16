// src/app/post/new/page.tsx
'use client';

import React, { useState, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import * as Common from '@/styles/Common';
import { BackArrowBtn } from '@/src/assets/icons';

export default function NewPostPage() {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [shortText, setShortText] = useState('');
  const [longText, setLongText] = useState('');

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0] ?? null;
    setFile(f);
    if (f) setPreview(URL.createObjectURL(f));
  };

  const handleSubmit = () => {
    // TODO: 서버 업로드 로직 추가
    console.log({ file, shortText, longText });
    router.push('/');
  };

  const publisherId = 'mag.daily';

  return (
    <Common.Wrapper>
      {/* 상단: 스크롤 가능 영역 */}
      <Common.ContentWrapper style={{ flex: 1, overflowY: 'auto', padding: 16 }}>
        {preview && <Preview src={preview} alt="preview" />}
        <Common.ActionIcons  onClick={() => router.push(`/profile/publisher/${publisherId}`)}
            style={{ marginBottom: '10px', cursor: 'pointer' }}>
            <BackArrowBtn/>
        </Common.ActionIcons>

        <InputGroup>
          <label htmlFor="short">짧은글</label>
          <ShortInput
            id="short"
            placeholder="한 줄 요약을 입력하세요"
            value={shortText}
            onChange={e => setShortText(e.target.value)}
          />
        </InputGroup>

        <InputGroup>
          <label htmlFor="long">긴글</label>
          <LongTextarea
            id="long"
            placeholder="자세한 설명을 입력하세요"
            value={longText}
            onChange={e => setLongText(e.target.value)}
          />
        </InputGroup>
      </Common.ContentWrapper>

      {/* 하단: 파일 업로드 + 게시 버튼 */}
      <BottomBar>
        <FileInput
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
        <SubmitButton
          onClick={handleSubmit}
          disabled={!file || !shortText}
        >
          게시하기
        </SubmitButton>
      </BottomBar>
    </Common.Wrapper>
  );
}

// Styled components for preview and inputs
const Preview = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: contain;
  border-radius: 8px;
  margin-bottom: 16px;
`;

const InputGroup = styled.div`
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;

  label {
    font-weight: bold;
    margin-bottom: 4px;
    color: #fff;
  }
`;

const ShortInput = styled.input`
  padding: 8px;
  background: #222;
  border: 1px solid #444;
  border-radius: 4px;
  color: #fff;
`;

const LongTextarea = styled.textarea`
  padding: 8px;
  background: #222;
  border: 1px solid #444;
  border-radius: 4px;
  color: #fff;
  min-height: 100px;
  resize: vertical;
`;

const BottomBar = styled.section`
  padding: 16px;
  background: #000;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const FileInput = styled.input`
  flex: 1;
`;

const SubmitButton = styled.button`
  padding: 8px 16px;
  background: #fff;
  color: #000;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:disabled {
    background: #555;
    cursor: not-allowed;
  }
`;
