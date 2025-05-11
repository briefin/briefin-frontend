// styles/GlobalStyle.ts
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* neurimboGothicRegular 선언 유지 */
  @font-face {
    font-family: 'neurimboGothicRegular';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-01@1.0/neurimboGothicRegular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  /* Wanted Sans Regular & Medium */
  @font-face {
    font-family: 'Wanted Sans';
    src: url('/fonts/WantedSans-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Wanted Sans';
    src: url('/fonts/WantedSans-Medium.woff2') format('woff2');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  body {
    margin: 0;
    /* 전역 폰트 적용 */
    font-family: 'Wanted Sans', sans-serif;
    /* 필요하다면 fallback */
    /* font-family: 'Wanted Sans', Arial, sans-serif; */
  }
`;

export default GlobalStyle;

