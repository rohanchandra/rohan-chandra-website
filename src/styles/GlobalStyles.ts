import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --red: #CEFFF8;
    --black: #2E2E2E;
    --yellow: #ffc600;
    --white: #fff;
    --light-grey: #d9d9d9;
    --grey: #adadad;

    --background-color: #171C20;
    --text-color: #FFFFFF;
    --accent-color: #CEFFF8;
    --accent-background-color: #283734;
    --code-background-color: #252946;
  
    --footer-background-color: #272d36;
    --footer-border-color: #363d48;
    color-scheme: dark;
  }

  body {
    background-color: var(--background-color);
    color: var(--text-color);
  }

  html {
    box-sizing: border-box;

    @media (prefers-reduced-motion: no-preference) {
      scroll-behavior: smooth;
    }
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
`;

export default GlobalStyles;
