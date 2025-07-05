import { createGlobalStyle } from 'styled-components';

import '@/styles/fonts.css';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: "pretendard", sans-serif;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    font-size: inherit;
    font-weight: inherit;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  button {
    font-family: inherit;
    cursor: pointer;
  }
  button:disabled {
    cursor: not-allowed;
  }
  li {
    list-style: none;
  }
`;
