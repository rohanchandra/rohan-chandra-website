import { createGlobalStyle } from "styled-components";

import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/600.css";
import "@fontsource/ibm-plex-mono/700.css";

import "@fontsource/nunito-sans/400.css";
import "@fontsource/nunito-sans/600.css";
import "@fontsource/nunito-sans/700.css";

const Typography = createGlobalStyle`
  :root {
    --code-font-stack: "IBM Plex Mono", Monaco, Consolas, "Courier New";
  }

  html {
    font-family: "Nunito Sans", Roboto, Arial, sans-serif;
    color: var(--text-color);
    line-height: 1.5;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
    color: var(--accent-color);
  }

  a {
    color: var(--accent-color);
    text-decoration-thickness: 0.11rem;
    text-underline-offset: 0.33rem;
  }

  blockquote {
    padding: 0 0.66rem;
    color: var(--light-grey);
    border-left: .25rem solid var(--grey);
  }

  ::selection {
    background: #004480;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  pre,
  blockquote,
  table {
    display: block;
    margin: 0 0 1rem 0;
  }

  code {
    background: var(--code-background-color);
    padding: 0.1rem 0.5rem;
  }

  code, pre {
    font-family: var(--code-font-stack);
  }

  hr {
    background-color: var(--grey);
    border: 0;
    height: 0.15em;
    margin: 0 0 1rem 0;
  }

  ol, ul {
    padding-left: 1rem;
  }

  table {
    width: 100%;
    display: block;
    overflow: auto;
    border-spacing: 0;
    border-collapse: collapse;
  }

  table td, table th {
    border: 1px solid var(--accent-background-color);
    padding: 0.5rem 1rem;
  }
`;

export default Typography;
