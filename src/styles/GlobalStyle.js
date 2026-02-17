import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.textPrimary};
    font-family: ${({ theme }) => theme.fonts.main};
    line-height: 1.6;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: ${({ theme }) => theme.colors.transition};
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
    outline: none;
  }

  ::selection {
    background-color: ${({ theme }) => theme.colors.bgLight};
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export default GlobalStyle;
