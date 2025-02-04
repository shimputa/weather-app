import { createGlobalStyle } from 'styled-components';
import { ThemeType, lightTheme } from './theme';

export const GlobalStyles = createGlobalStyle<{ theme?: ThemeType }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${({ theme = lightTheme }) => theme.background};
    color: ${({ theme = lightTheme }) => theme.text};
    transition: all 0.3s ease-in-out;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    outline: none;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme = lightTheme }) => theme.primary};
    transition: color 0.3s ease-in-out;
  }

  /* Add smooth transitions for all themed elements */
  div, header, main, footer, section, article {
    transition: background-color 0.3s ease-in-out,
                color 0.3s ease-in-out,
                border-color 0.3s ease-in-out,
                box-shadow 0.3s ease-in-out;
  }
`;
