import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { SiteMetadataQuery } from "-/graphqlTypes";

interface SEOProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

const SEO: React.FC<SEOProps> = ({ title, description, children }) => {
  const { site } = useStaticQuery<SiteMetadataQuery>(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <Helmet titleTemplate={`%s - ${site?.siteMetadata?.title}`}>
      <html lang="en" />
      <title>{title}</title>

      <link rel="icon" type="image/png" href="/favicon.png" />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta
        name="description"
        content={description ?? site?.siteMetadata?.description ?? ""}
      />

      {children}
    </Helmet>
  );
};

export default SEO;
