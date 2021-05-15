import React from "react";
import { graphql, PageProps, useStaticQuery } from "gatsby";
import { IndexQuery } from "-/graphqlTypes";
import Description from "../components/about/Description";
import Links from "../components/about/Links";
import Skills from "../components/about/Skills";
import styled from "styled-components";
import SEO from "../components/SEO";

const IndexStyles = styled.div`
  /* Vertical center */
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const IndexPage: React.FC<PageProps> = () => {
  const data = useStaticQuery<IndexQuery>(graphql`
    query Index {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <SEO title="About" />

      <IndexStyles>
        <Description />
        <Links />
        <Skills />
      </IndexStyles>
    </>
  );
};

export default IndexPage;
