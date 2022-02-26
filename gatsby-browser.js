import React from "react";
import Layout from "./src/components/Layout";
import Prism from "prism-react-renderer/prism";

// Add Dart syntax highlighting.
// See: https://github.com/FormidableLabs/prism-react-renderer/issues/22#issuecomment-448398515
(typeof global !== "undefined" ? global : window).Prism = Prism;
require("prismjs/components/prism-dart");

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
