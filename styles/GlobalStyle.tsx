// styles/GlobalStyle.ts
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'neurimboGothicRegular';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-01@1.0/neurimboGothicRegular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  body {
    margin: 0;
    font-family: sans-serif; /* 기본 폰트는 유지 */
  }
`;

export default GlobalStyle;
