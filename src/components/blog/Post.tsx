import React from "react";
import { graphql } from "gatsby";
import { PostByIdQuery } from "-/graphqlTypes";
import styled from "styled-components";
import { DateTime } from "../ui/DateTime";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXComponents } from "../mdx/components";
import { MDXProvider } from "@mdx-js/react";

const PostHeading = styled.h1`
  margin-bottom: 0.5rem;
`;

const PostWrapper = styled.div`
  margin: 1rem 0;
`;

export const pageQuery = graphql`
  query PostById($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        formattedDate: date(formatString: "DD MMMM YYYY")
        rawDate: date(formatString: "YYYY-MM-DD")
      }
    }
  }
`;

interface Props {
  data: PostByIdQuery;
}

const PostPage: React.FC<Props> = ({ data: { mdx } }) => {
  const { title, formattedDate, rawDate } = mdx.frontmatter;

  return (
    <>
      <PostHeading>{title}</PostHeading>
      <DateTime dateTime={rawDate}>{formattedDate}</DateTime>

      <PostWrapper>
        <MDXProvider components={MDXComponents}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </PostWrapper>
    </>
  );
};

export default PostPage;