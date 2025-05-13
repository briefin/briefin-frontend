'use client';

import React from 'react';
import * as Common from '@/styles/Common';

export default function LongPostPage() {
  const blocks = [
    {
      img: '/image_1.png',
      summary: 'Lorem ipsum dolor sit amet consectetur. Nulla urna velit consectetur mattis sapien eget sed facilisi. Cursus mauris',
      body: 'ullamcorperac elit elit ac eget massa. Quisque sagittis integer sed aenean donec tempor. Ut pellentesque integer integer habitant egestas quisque nec. Integer gravida sollicitudin elit euismod quam tellus faucibus aenean pellentesque. Morbi velit ac tincidunt molestie arcu enim sociis dignissim. Eget pharetra egestas aliquet sodales suspendisse. Quam aliquet ut suspendisse amet morbi sed. Lorem faucibus pellentesque quis egestas integer at dignissim.'
    },
    {
      img: '/image_2.png',
      summary: 'Lorem ipsum dolor sit amet consectetur. Nulla urna velit consectetur mattis sapien eget sed facilisi. Cursus mauris',
      body: 'ullamcorperac elit elit ac eget massa. Quisque sagittis integer sed aenean donec tempor. Ut pellentesque integer integer habitant egestas quisque nec. Integer gravida sollicitudin elit euismod quam tellus faucibus aenean pellentesque. Morbi velit ac tincidunt molestie arcu enim sociis dignissim. Eget pharetra egestas aliquet sodales suspendisse. Quam aliquet ut suspendisse amet morbi sed. Lorem faucibus pellentesque quis egestas integer at dignissim.'
    },
    {
      img: '/image_3.png',
      summary: 'Lorem ipsum dolor sit amet consectetur. Nulla urna velit consectetur mattis sapien eget sed facilisi. Cursus mauris',
      body: 'ullamcorperac elit elit ac eget massa. Quisque sagittis integer sed aenean donec tempor. Ut pellentesque integer integer habitant egestas quisque nec. Integer gravida sollicitudin elit euismod quam tellus faucibus aenean pellentesque. Morbi velit ac tincidunt molestie arcu enim sociis dignissim. Eget pharetra egestas aliquet sodales suspendisse. Quam aliquet ut suspendisse amet morbi sed. Lorem faucibus pellentesque quis egestas integer at dignissim.'
    },
    {
      img: '/image_4.png',
      summary: 'Lorem ipsum dolor sit amet consectetur. Nulla urna velit consectetur mattis sapien eget sed facilisi. Cursus mauris',
      body: 'ullamcorperac elit elit ac eget massa. Quisque sagittis integer sed aenean donec tempor. Ut pellentesque integer integer habitant egestas quisque nec. Integer gravida sollicitudin elit euismod quam tellus faucibus aenean pellentesque. Morbi velit ac tincidunt molestie arcu enim sociis dignissim. Eget pharetra egestas aliquet sodales suspendisse. Quam aliquet ut suspendisse amet morbi sed. Lorem faucibus pellentesque quis egestas integer at dignissim.'
    }
  ];

  return (
    <>
      {/* ✅ 배경 이미지 */}
      <Common.BackgroundImage />

      {/* ✅ 실제 내용 */}
      <div>
        {blocks.map((block, index) => (
          <div key={index}>
            <Common.HorizontalBlock>
              <Common.SquareImage src={block.img} alt={`image-${index}`} />
              <Common.SummaryText>{block.summary}</Common.SummaryText>
            </Common.HorizontalBlock>
            <Common.LongText>{block.body}</Common.LongText>
          </div>
        ))}
      </div>
    </>
  );
}
