// 사진 3장을 배치할 그리드 템플릿들
export const layouts = [
    {
      // 좌측에 a, 우측에 b/c 세로 배치
      gridTemplate: `
        "a b"
        "d c"
      `,
    },
    {
      // 상단 a/b, 하단 c 가로 2열
      gridTemplate: `
        "a b"
        "c d"
      `,
    },
    {
      // 가로 3열
      gridTemplate: `"a b c"`,
    },
  ];

  export const layouts4 = [
    {
      // a: 왼쪽 전체, b: 오른쪽 상단, c: 오른쪽 하단, d: 맨 오른쪽 전체
      gridTemplate: `
        "a b d"
        "a c d"
      `,
      areas: ['a','b','c','d'] as const,
    },
  
    // 필요하면 다른 4장 배치도 추가 가능
  ];
  
  