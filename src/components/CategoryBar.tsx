// src/components/CategoryBar.tsx
import React, { useState } from 'react';
import * as Common from '@/styles/Common';

interface CategoryBarProps {
  style?: React.CSSProperties;
  className?: string;
}

export default function CategoryBar({ style, className }: CategoryBarProps) {
  const [active, setActive] = useState('패션');
  const categories = ['패션', '인터뷰', '맛집'];

  return (
    <Common.ButtonRow
      style={style}
      className={className}
    >
      {categories.map(cat => (
        <Common.CategoryButton
          key={cat}
          active={active === cat}
          onClick={() => setActive(cat)}
        >
          {cat}
        </Common.CategoryButton>
      ))}
    </Common.ButtonRow>
  );
}

