import { createGlobalStyle } from "styled-components";

import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/600.css";
import "@fontsource/ibm-plex-mono/700.css";

import "@fontsource/nunito-sans/400.css";
import "@fontsource/nunito-sans/600.css";
import "@fontsource/nunito-sans/700.css";

const Typography = createGlobalStyle`
  html {
    font-family: "Nunito Sans", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color: var(--text-color);
    line-height: 1.5;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
    color: var(--accent-color);
  }

  a {
    color: var(--accent-color);
  }

  ::selection {
    background: var(--accent-background-color);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  code {
    display: block;
    margin: 0 0 1.5rem 0;
  }
`;

export default Typography;
