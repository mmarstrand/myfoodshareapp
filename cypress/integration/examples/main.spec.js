describe("FoodShare", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  describe("FoodShare", () => {
    it("show the correct browser title", () => {
      cy.title().should("include", "FoodShare");
    });
  });

  describe("CreateCard", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/share");
    });
    it("show the correct header text", () => {
      cy.get('[data-cy="header-title"]').should("contain", "Sh");
    });
    it("submits form", () => {
      cy.get("[data-cy=form-submit]").click();
      cy.get("[data-cy=header-title]").should("contain", "Sh");
      cy.location("pathname").should("include", "share");
    });
  });
});
