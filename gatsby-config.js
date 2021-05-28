const remarkSlug = require("remark-slug");

module.exports = {
  siteMetadata: {
    title: "Rohan Chandra",
    author: "Rohan Chandra",
    repo: "https://github.com/rohanchandra/rohan-chandra-website",
    description: "Software engineer in Sydney, Australia.",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        remarkPlugins: [remarkSlug],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "./content/blog",
        name: "posts",
      },
    },
  ],
};
