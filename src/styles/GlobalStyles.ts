import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --red: #CEFFF8;
    --black: #2E2E2E;
    --yellow: #ffc600;
    --white: #fff;
    --grey: #adadad;

    --background-color: #171C20;
    --text-color: #FFFFFF;
    --accent-color: #CEFFF8;
    --accent-background-color: #283734;
  
    --footer-background-color: #272d36;
    --footer-border-color: #363d48;
  }

  body {
    background-color: var(--background-color);
    color: var(--text-color);
  }

  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
`;

export default GlobalStyles;
