'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import * as Common from '@/styles/Common';

const CATEGORY_LIST = [
  '트렌드', '인터뷰', '뉴스', '서은이바보',
  '테크', '패션', '아이돌', '미술', '시네마',
];

export default function PublisherSignupPage() {
  const router = useRouter();
  const [publisherId, setPublisherId] = useState('');
  const [bio, setBio] = useState('');
  const [avatar, setAvatar] = useState<File | null>(null);
  const [selected, setSelected] = useState<string[]>([]);

  const toggleCategory = (cat: string) =>
    setSelected(prev =>
      prev.includes(cat)
        ? prev.filter(x => x !== cat)
        : prev.length < 2
          ? [...prev, cat]
          : prev
    );

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) setAvatar(e.target.files[0]);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log({ publisherId, bio, avatar, selected });
    router.back();
  };

  return (
    <Common.FormWrapper>
      <Common.ContentWrapper as="form" onSubmit={handleSubmit}>
      {/* 퍼블리셔 아이디 */}
        <Common.Label>퍼블리셔 아이디</Common.Label>
        <Common.SmallInputWrapper>
         <Common.Input style={{paddingBottom : '4px', fontSize : '18px'}}
            type="text"
            placeholder="@"
            value={publisherId}
            onChange={e => setPublisherId(e.target.value)}
          />
        </Common.SmallInputWrapper>

      {/* 바이오 */}
        <Common.Label style={{marginTop : '-10px'}}>바이오</Common.Label>
        <Common.TextArea
          placeholder="계정의 아이덴티티를 표현해보세요."
          value={bio}
          onChange={e => setBio(e.target.value)}
          rows = {1}            
        />

      {/* 프로필 사진 업로드 */}
        <Common.UploadRow>
         <Common.Label style={{marginTop : '-85px'}}>프로필 사진</Common.Label>
          <Common.UploadWrapper style={{marginTop : '-2px', marginRight : '20px'}}>
           <Common.UploadInput
             id="avatar-upload"
              accept="image/*"
              placeholder ='upload'
              onChange={handleFileChange}
            />
            <Common.UploadLabel htmlFor="avatar-upload">
              {avatar ? '✔️' : 'upload'}
            </Common.UploadLabel>
          </Common.UploadWrapper>
        </Common.UploadRow>

      {/* 카테고리 선택 */}
        <Common.Label>카테고리 선택 (최대 2개)</Common.Label>
        <Common.InitialButtonRow style={{marginTop : '5px', paddingTop : '5px'}}>
          {CATEGORY_LIST.map(cat => (
            <Common.CategoryButton
              key={cat}
              type="button"
              active={selected.includes(cat)}
              onClick={() => toggleCategory(cat)}
           >
              {cat}
            </Common.CategoryButton>
          ))}
        </Common.InitialButtonRow>

        {/* 계정 생성 버튼 */}
        <Common.Centered>
          <Common.BottomBar>
            <Common.SubmitButton type="submit" onClick={handleSubmit}>
               계정생성
            </Common.SubmitButton>
          </Common.BottomBar>
        </Common.Centered>
      </Common.ContentWrapper>
    </Common.FormWrapper>
  );
}
