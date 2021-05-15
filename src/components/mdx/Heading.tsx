import React from "react";
import styled from "styled-components";

export interface HeadingProps {
  // The heading ID used for internal page links.
  id?: string;
  // The HTML heading tag.
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  // The content of the heading.
  children: string;
  // Any unknown props.
  [key: string]: any;
}

const StyledHeading = styled.h2`
  a {
    text-decoration: none;
  }
`;

const Heading: React.FC<HeadingProps> = ({ as, id, children, ...rest }) => {
  return id ? (
    <StyledHeading as={as} id={id} {...rest}>
      <a href={`#${id}`}>{children}</a>
    </StyledHeading>
  ) : (
    <StyledHeading as={as} {...rest} />
  );
};

export default Heading;
