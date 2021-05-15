import React from "react";
import { graphql, PageProps, useStaticQuery } from "gatsby";
import { PostsIndexQuery } from "-/graphqlTypes";
import PostPreview from "../components/blog/PostPreview";

const BlogPage: React.FC<PageProps> = () => {
  const { posts } = useStaticQuery<PostsIndexQuery>(graphql`
    query PostsIndex {
      posts: allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          id
          slug
          excerpt(pruneLength: 250)
          frontmatter {
            title
            formattedDate: date(formatString: "DD MMMM YYYY")
            rawDate: date(formatString: "YYYY-MM-DD")
            emoji
          }
        }
      }
    }
  `);

  return (
    <>
      {posts.nodes.map((post) => (
        <PostPreview key={post.id} {...post} {...post.frontmatter} />
      ))}
    </>
  );
};

export default BlogPage;
