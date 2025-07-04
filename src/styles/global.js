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
  :root{
    --primary-color: #3692ff;
    --gray-900-color: #111827;
    --gray-800-color: #1f2937;
    --gray-700-color: #374151;
    --gray-600-color: #4b5563;
    --gray-500-color: #6b7280;
    --gray-400-color: #9ca3af;
    --gray-200-color: #e5e7eb;
    --gray-100-color: #f3f4f6;
    --gray-50-color: #f9fafb;
    --white-color: #ffffff;
    --error-red-color: #f74747;

    /* Typography */
    --font-primary: "pretendard", sans-serif;
    --font-secondary: "ROKAF_Sans_Medium", sans-serif;

    --font-size-300: 0.75rem; /* 12px */
    --font-size-350: 0.875rem; /* 14px */
    --font-size-400: 1rem; /* 16px, base */
    --font-size-450: 1.125rem; /* 18px */
    --font-size-500: 1.25rem; /* 20px,*/
    --font-size-600: 1.5rem; /* 24px */
    --font-size-700: 1.75rem; /* 28px */
    --font-size-800: 2rem; /* 32px */
    --font-size-900: 2.25rem; /* 36px */
    --font-size-1000: 2.5rem; /* 40px */

    /* spacing */
    --spacing-xs: 5px;
    --spacing-sm: 10px;
    --spacing-md: 16px;
    --spacing-lg: 24px;
    --spacing-xl: 32px;
    --spacing-xxl: 48px;
    --spacing-xxxl: 64px;
    --spacing-xxxxl: 128px;

    /* border-radius */
    --border-radius-xs: 8px;
    --border-radius-sm: 12px;
    --border-radius-md: 16px;
    --border-radius-lg: 20px;
    --border-radius-xl: 40px;
    --border-radius-circle: 9999px;
  }
`;
