describe("Navigation", () => {
  beforeEach(() => {
    cy.login();
  });

  afterEach(() => {
    cy.cleanupUser();
  });

  it("Renders the links properly", () => {
    cy.viewport(1025, 900);
    cy.visit("/reviews");

    // Testing My Reviews link
    cy.get("#my-review-link_desktop").contains("My Reviews").click();
    cy.url().should("eq", `${Cypress.config().baseUrl}/reviews`);

    // Testing New Review link
    cy.get("#new-review-link_desktop").contains("New Review").click();
    cy.url().should("eq", `${Cypress.config().baseUrl}/reviews/new/bottleInfo`);
  });

  it("Renders the links on mobile", () => {
    cy.viewport(600, 700);
    cy.visit("/reviews");

    cy.get("#hamburger-menu").click();
    cy.get("#my-review-link_mobile").contains("My Reviews").click();
    cy.url().should("eq", `${Cypress.config().baseUrl}/reviews`);

    cy.get("#hamburger-menu").click();
    cy.get("#new-review-link_mobile").contains("New Review").click();
    cy.url().should("eq", `${Cypress.config().baseUrl}/reviews/new/bottleInfo`);

    cy.get("#hamburger-menu").click();
    cy.get("#my-review-link_desktop").should("not.be.visible");
    cy.get("#new-review-link_desktop").should("not.be.visible");
  });
});
