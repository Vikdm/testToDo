Cypress.Commands.add("text", (text) => {
    cy.get('.input-text').type(text)
  });

Cypress.Commands.add("tap", () => {
    cy.get('.input-submit').click();
  });

Cypress.Commands.add("visible", (text) => {
    cy.contains(text).should("be.visible");
});