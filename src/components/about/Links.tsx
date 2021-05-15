import { links } from "../../data/about-me";
import React from "react";
import styled from "styled-components";
import { Row } from "../ui/Row";
import ExternalLink from "../ExternalLink";

const LinksStyles = styled.nav`
  a {
    color: var(--text-color);
  }
`;

const Item = styled.li`
  padding: 0.25rem 1rem 0.25rem 0;
`;

const Links: React.FC = () => {
  return (
    <LinksStyles>
      <Row>
        {links.map((link) => (
          <Item key={link.href}>
            <ExternalLink href={link.href}>{link.title}</ExternalLink>
          </Item>
        ))}
      </Row>
    </LinksStyles>
  );
};

export default Links;
