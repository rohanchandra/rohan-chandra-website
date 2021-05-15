import React from "react";
import Highlight, {
  PrismTheme,
  Language,
  defaultProps,
} from "prism-react-renderer";
import shadesOfPurple from "prism-react-renderer/themes/shadesOfPurple";
import styled from "styled-components";

export interface CodeBlockProps {
  children: string;
  title?: string;
  className?: string;
}

const CodeBlockStyles = styled.div`
  border: 1px solid var(--accent-background-color);
  padding: 0.5rem 1rem;
  display: block;
  width: 100%;
  margin: 1.5rem 0;

  pre {
    overflow-x: auto;
    margin: 0;
  }
`;

const CodeBlock: React.FC<CodeBlockProps> = ({
  title,
  children,
  className,
}) => {
  const languge = (className?.replace(/language-/, "") as Language) ?? "";
  return (
    <CodeBlockStyles>
      <CodeHeader title={title} language={languge} />
      <PrismCodeBlock
        // Read language from class name, attached by MDX processor.
        language={languge}
        // Highlight children as code, with trim to remove trailing whitespace.
        code={children.trim()}
        theme={shadesOfPurple}
      />
    </CodeBlockStyles>
  );
};

interface CodeHeaderProps {
  title?: string;
  language: string;
  children?: React.ReactNode;
}

const CodeHeaderStyles = styled.div`
  border-bottom: 1px solid var(--accent-background-color);
  padding: 0 0 0.5rem 0;
  margin-bottom: 1ch;
  display: flex;
  font-family: var(--code-font-stack);
  font-size: 0.9rem;
  span:first-child {
    flex-grow: 1;
  }
  span:last-child {
    color: var(--grey);
  }
`;

const CodeHeader: React.FC<CodeHeaderProps> = ({
  title,
  language,
  children,
}) => {
  return (
    <CodeHeaderStyles>
      <span>{title}</span>
      <span>{language}</span>
      {children}
    </CodeHeaderStyles>
  );
};

interface PrismCodeBlockProps {
  code: string;
  language: Language;
  theme: PrismTheme;
}

const PrismCodeBlock: React.FC<PrismCodeBlockProps> = ({
  code,
  language,
  theme,
}) => {
  // Render highlighted code.
  // Implementation based on https://mdxjs.com/guides/syntax-highlighting.
  return (
    <Highlight
      {...defaultProps}
      code={code}
      language={language as Language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{ ...style, backgroundColor: "none" }}
        >
          {tokens.map((line, index) => {
            const lineProps = getLineProps({ line, key: index });
            return (
              <div key={index} {...lineProps}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            );
          })}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;
