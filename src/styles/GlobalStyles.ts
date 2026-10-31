// src/styles/GlobalStyles.ts

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* Reset */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Root */
  html {
    font-size: 16px;
    scroll-behavior: smooth;
    background-color: ${({ theme }) => theme.colors.paper};
  }

  body {
    min-height: 100vh;
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => theme.fontSizes.base};
    line-height: ${({ theme }) => theme.lineHeights.normal};
    color: ${({ theme }) => theme.colors.ink};
    background-color: ${({ theme }) => theme.colors.paper};
    /* Faint grid paper */
    background-image:
      linear-gradient(${({ theme }) => theme.colors.grid} 1px, transparent 1px),
      linear-gradient(90deg, ${({ theme }) => theme.colors.grid} 1px, transparent 1px);
    background-size: 24px 24px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    line-height: ${({ theme }) => theme.lineHeights.tight};
    color: ${({ theme }) => theme.colors.ink};
    overflow-wrap: break-word;
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSizes["6xl"]};

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      font-size: ${({ theme }) => theme.fontSizes["5xl"]};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ theme }) => theme.fontSizes["4xl"]};
    }
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSizes["5xl"]};

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      font-size: ${({ theme }) => theme.fontSizes["4xl"]};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ theme }) => theme.fontSizes["3xl"]};
    }
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSizes["3xl"]};

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ theme }) => theme.fontSizes["2xl"]};
    }
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }

  code, kbd, samp, pre {
    font-family: ${({ theme }) => theme.fonts.mono};
  }

  /* Links */
  a {
    color: inherit;
    text-decoration: none;
  }

  /* Buttons */
  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
    color: inherit;
  }

  /* Images */
  img, svg {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Lists */
  ul, ol {
    list-style: none;
  }

  /* Inputs */
  input, textarea, select {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
  }

  /* Thick, always-visible keyboard focus on every interactive element */
  :focus {
    outline: none;
  }

  :focus-visible {
    outline: ${({ theme }) => theme.focus.outline};
    outline-offset: ${({ theme }) => theme.focus.offset};
  }

  /* <main> is only focusable as the skip-link target */
  main:focus-visible {
    outline: none;
  }

  input:focus-visible,
  textarea:focus-visible,
  select:focus-visible {
    outline-offset: 0;
  }

  /* Selection */
  ::selection {
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.ink};
  }

  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.paper};
    border-left: ${({ theme }) => theme.borders.thin};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.ink};
  }

  /* Respect reduced-motion preferences everywhere */
  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }

    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

export default GlobalStyles;
