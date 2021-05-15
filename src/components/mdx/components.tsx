import React from "react";
import CodeBlock from "./CodeBlock";
import Heading, { HeadingProps } from "./Heading";
import MdxLink from "./MdxLink";

interface MDXProps {
  children: React.ReactNode;
}

export const MDXComponents = {
  pre: (props: MDXProps) => <>{props.children}</>,
  code: CodeBlock,
  a: MdxLink,
  h1: (props: HeadingProps) => <Heading {...props} as={"h1"} />,
  h2: (props: HeadingProps) => <Heading {...props} as={"h2"} />,
  h3: (props: HeadingProps) => <Heading {...props} as={"h3"} />,
  h4: (props: HeadingProps) => <Heading {...props} as={"h4"} />,
  h5: (props: HeadingProps) => <Heading {...props} as={"h5"} />,
  h6: (props: HeadingProps) => <Heading {...props} as={"h6"} />,
};
