const remarkSlug = require("remark-slug");

module.exports = {
  siteMetadata: {
    title: "Rohan Chandra",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
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
