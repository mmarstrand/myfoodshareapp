describe("FoodShare", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  describe("Cards", () => {
    it("show the correct browser title", () => {
      cy.title().should("include", "FoodShare");
    });
  });

  describe("CreateCard", () => {
    it("show the correct browser title", () => {
      cy.title().should("include", "FoodShare");
    });
  });
});
