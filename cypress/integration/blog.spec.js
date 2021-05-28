context("Blog", () => {
  let posts;

  before(() => {
    const query = `
      query PostsIndex {
        posts: allMdx(sort: { fields: frontmatter___date, order: DESC }) {
          nodes {
            id
            slug
            frontmatter {
              title
            }
          }
        }
      }
    `;

    cy.request({
      method: "POST",
      url: "http://localhost:8000/___graphql",
      body: { query },
    }).then((response) => {
      posts = response.body.data.posts.nodes;
    });
  });

  describe("blog index", () => {
    before(() => {
      cy.visit("/blog");
    });

    it("should set title", () => {
      cy.title().should("contain", "Blog");
    });

    it("should list every blog post", () => {
      posts.forEach(({ frontmatter, slug }) => {
        cy.get("h2").contains(frontmatter.title);
      });
    });
  });

  describe("blog post", () => {
    it("should load page at post slug url", () => {
      posts.forEach(({ frontmatter, slug }) => {
        cy.visit(`/blog/${slug}`);
        cy.get("h1").contains(frontmatter.title);
        cy.title().should("contain", frontmatter.title);
      });
    });
  });
});
