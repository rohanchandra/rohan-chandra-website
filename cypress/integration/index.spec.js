context("Homepage", () => {
  beforeEach(() => {
    cy.visit(`/`).waitForRouteChange();
  });

  it("should set title", () => {
    cy.title().should("contain", "About");
  });

  it("should contain site name", () => {
    cy.get("#home").contains("Rohan Chandra");
  });
});
