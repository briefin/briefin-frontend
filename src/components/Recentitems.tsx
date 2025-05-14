// src/components/RecentItems.tsx
'use client';
import React from 'react';
import styled from 'styled-components';
import { FiX } from 'react-icons/fi';

/** 1) @아이디용 Pill */
const HandlePill = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  margin-right: 8px;
  background: #232323;
  border-radius: 25px;
  color: #E7E7E7;           /* 흰 텍스트 */
  font-size: 14px;

  & .dot {
    width: 17px;
    height: 17px;
    border-radius: 50%;
    background: #666;
    margin-right: 6px;
  }
  & button {
    background: none;
    border: none;
    margin-left: 0px;
    padding-bottom: 3.5px;
    cursor: pointer;
    color: #fff;
  }
`;

/** 2) 일반 키워드용 리스트 */
const KeywordList = styled.ul`
  list-style: none;
  margin: 16px 0;
  padding: 0;
`;
const KeywordItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 0;
  color: #fff;           /* 흰 텍스트 */
  font-size: 18px;

  & button {
    background: none;
    border: none;
    cursor: pointer;
    color: #fff;
  }
`;

export function RecentItems({
  recents,
  onRemove,
}: {
  recents: string[];
  onRemove: (item: string) => void;
}) {
  const handles = recents.filter((x) => x.startsWith('@'));
  const keywords = recents.filter((x) => !x.startsWith('@'));

  return (
    <>
      {/* @아이디 Pills */}
      {handles.length > 0 && (
        <div style={{ whiteSpace: 'nowrap', overflowX: 'auto', padding: '8px 0' }}>
          {handles.map((h) => (
            <HandlePill key={h}>
              <span className="dot" />
              {h}
              <button onClick={() => onRemove(h)}>
                <FiX size={16} />
              </button>
            </HandlePill>
          ))}
        </div>
      )}

      {/* 일반 키워드 리스트 */}
      {keywords.length > 0 && (
        <KeywordList>
          {keywords.map((k) => (
            <KeywordItem key={k}>
              {k}
              <button onClick={() => onRemove(k)}>
                <FiX size={20} />
              </button>
            </KeywordItem>
          ))}
        </KeywordList>
      )}
    </>
  );
}
