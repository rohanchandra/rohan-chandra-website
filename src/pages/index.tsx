import React from "react";
import { graphql, PageProps, useStaticQuery } from "gatsby";
import { IndexQuery } from "-/graphqlTypes";

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

  return <p>{data.site?.siteMetadata?.title}</p>;
};

export default IndexPage;
