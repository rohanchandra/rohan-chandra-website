import React from "react";
import { graphql } from "gatsby";
import { DemoQuery } from "-/graphqlTypes";

interface Props {
  data: DemoQuery;
}

const CodegenPage: React.FC<Props> = ({ data }) => {
  return (
    <>
      <p>{data.site.siteMetadata.title}</p>
    </>
  );
};

export const query = graphql`
  query Demo {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default CodegenPage;
