const { createFilePath } = require("gatsby-source-filesystem");
const path = require("path");

/**
 * Generates MDX pages
 * @see: https://www.gatsbyjs.com/docs/mdx/programmatically-creating-pages/
 */

exports.onCreateNode = ({
  node,
  actions: { createNodeField },
  getNode,
  reporter,
}) => {
  // Generate slugs for mdx pages.
  if (node.internal.type === "Mdx") {
    const filePath = createFilePath({ node, getNode });
    const slug = `/blog${filePath}`;

    createNodeField({
      name: "slug",
      node,
      value: slug,
    });

    reporter.info(`Created slug of ${slug} for MDX at ${filePath}`);
  }
};

exports.createPages = async ({
  graphql,
  actions: { createPage },
  reporter,
}) => {
  //  Generate blog posts.
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('ERROR: Loading "createPages" query for MDX pages');
  }

  const posts = result.data.allMdx.edges;

  posts.forEach(({ node }) => {
    const { fields, id } = node;

    createPage({
      path: fields.slug,
      component: path.resolve(`./src/components/blog/Post.tsx`),
      context: { id },
    });

    reporter.info(`Created page at ${path}`);
  });
};
