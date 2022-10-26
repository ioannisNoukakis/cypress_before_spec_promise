describe("A", () => {
    it("Should load cypress docs", () => {
        cy.visit("https://docs.cypress.io/api/plugins/before-spec-api#Syntax");
        cy.task("log", "----> I Should print after promise");
    });
});