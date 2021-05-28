context("Navigation", () => {
  before(() => {
    cy.visit("/");
  });

  it("should navigate to /blog", () => {
    cy.get("[data-testid=site-nav]").contains("Blog").click();
    cy.url().should("contains", "/blog");
  });
});
