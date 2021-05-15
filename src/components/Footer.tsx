import { FooterQuery } from "-/graphqlTypes";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";

const FooterStyles = styled.footer`
  border: 1px solid var(--footer-border-color);
  border-bottom: none;
  border-radius: 1em 1em 0 0;
  color: var(--grey);
  font-size: 0.9rem;
  padding: 1.15rem 1.5rem;
  display: flex;

  p {
    margin: 0;
    flex-grow: 1;
  }
`;

const Footer: React.FC = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery<FooterQuery>(graphql`
    query Footer {
      site {
        siteMetadata {
          author
          repo
        }
      }
    }
  `);

  const year = new Date().getFullYear();

  return (
    <FooterStyles>
      <p className="center">
        &copy; {year} {siteMetadata.author}
      </p>

      <a href={siteMetadata.repo}>Edit on GitHub</a>
    </FooterStyles>
  );
};

export default Footer;
