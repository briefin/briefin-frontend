'use client';

import React, { useState } from 'react';
import * as Common from '@/styles/Common';
import { UploadBtn } from '@/src/assets/icons';

export default function ShortPostPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = 4;

  const images = [
    '/image_1.png',
    '/image_2.png',
    '/image_3.png',
    '/image_4.png',
  ];

  return (
    <div>
      {/* 👉 이미지 뷰 */}
      <Common.ImageViewer>
        <Common.ViewerImage src={images[currentIndex]} alt={`image-${currentIndex}`} />
      </Common.ImageViewer>

      {/* 👉 인디케이터 */}
      <Common.IndicatorWrapper>
        {Array.from({ length: total }).map((_, index) => (
          <Common.IndicatorDot
            key={index}
            active={currentIndex === index}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </Common.IndicatorWrapper>

      {/* 👉 설명 텍스트 */}
      <Common.Description>
        Lorem ipsum dolor sit amet consectetur. Nulla urna velit consectetur
        mattis sapien eget sed facilisi. Cursus mauris
      </Common.Description>
    </div>
  );
}
