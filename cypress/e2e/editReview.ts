// describe("Edit Review", () => {
//   it("successfully fills out a new review and allows editing", () => {
//     cy.login();
//     cy.visit(`${Cypress.config("baseUrl")}/reviews/new/bottleInfo`);
//     cy.get('[aria-label="name-input"]')
//       .should("be.visible")
//       .type("Lost Monarch");
//     cy.get('[aria-label="distiller-input"]')
//       .should("be.visible")
//       .type("Redwood Empire");
//     cy.get('[aria-label="bottler-input"]')
//       .should("be.visible")
//       .type("Redwood Empire");
//     cy.get('[aria-label="producer-input"]')
//       .should("be.visible")
//       .type("Redwood Empire");
//     cy.get('[aria-label="type-input"]').should("be.visible").type("Bourye");
//     cy.get('[aria-label="country-input"]').should("be.visible").type("USA");
//     cy.get('[aria-label="region-input"]').should("be.visible").type("Kentucky");
//     cy.get('[aria-label="price-input"]').should("be.visible").type("$32.99");
//     cy.get('[aria-label="age-input"]').should("be.visible").type("6yrs");
//     cy.get('[aria-label="color-input"]').should("be.visible").type("Amber");
//     cy.get('[aria-label="year-input"]').should("be.visible").type("2021");
//     cy.get('[aria-label="batch-input"]').should("be.visible").type("N/A");
//     cy.get('[aria-label="size-input"]').should("be.visible").type("750mL");
//     cy.get('[aria-label="alcoholPercent-input"]')
//       .should("be.visible")
//       .type("45%");
//     cy.get('[aria-label="proof-input"]').should("be.visible").type("90");
//     cy.get('[aria-label="finishing-input"]').should("be.visible").type("None");

//     // NEXT BUTTON
//     cy.get("#next-button").click();
//     // NEW URL -- /reviews/new/addImage
//     cy.url().should(
//       "equal",
//       `${Cypress.config("baseUrl")}/reviews/new/addImage`
//     );
//   });
//   it("Successfully submits an image", () => {
//     cy.login();
//     cy.visit(`${Cypress.config("baseUrl")}/reviews/new/addImage`);
//     cy.get('[data-cy="file-input"]').attachFile("lostMonarch.png");
//     // UPLOAD BUTTON
//     cy.get("#upload-button").click();
//     cy.wait(5000);
//     cy.get("#next-button").click();
//     // NEW URL -- /reviews/new/setting
//     cy.url().should(
//       "equal",
//       `${Cypress.config("baseUrl")}/reviews/new/setting`
//     );
//   });
//   it("Successfully submits the setting", () => {
//     cy.login();
//     cy.visit(`${Cypress.config("baseUrl")}/reviews/new/setting`);
//     cy.get('[aria-label="date-input"]').should("be.visible").type("05/10/2022");
//     cy.get('[aria-label="restTime-input"]').should("be.visible").type("10min");
//     cy.get('[aria-label="glassware-input"]')
//       .should("be.visible")
//       .type("Glencairn");
//     cy.get('[aria-label="setting-input"]')
//       .should("be.visible")
//       .type("Writing some e2e tests!");
//     cy.get('[aria-label="nose-input"]')
//       .should("be.visible")
//       .type(
//         "Cherry and dill dominate the nose with more rye spice peeking out, as well as some decedent caramel and sweet oak."
//       );
//     cy.get('[aria-label="palate-input"]')
//       .should("be.visible")
//       .type(
//         "The palate is similar to the nose. Big crashes of cherry, dill, anise, and rye with carroway seeds."
//       );
//     cy.get('[aria-label="finish-input"]')
//       .should("be.visible")
//       .type(
//         "Medium-long with dominant oak and rye spice continuing from the palate. There's some cherry there too, but its mostly oak, leather, and rye spice."
//       );
//     cy.get('[aria-label="thoughts-input"]')
//       .should("be.visible")
//       .type(
//         "This is a solid, middle-of-the-pack bourye that doesn't compromise on flavor. Both bourbon and rye notes are present, though the rye notes do dominate the nose, palate, and finish."
//       );
//     // NEXT BUTTON
//     cy.get("#next-button").click();
//     // NEW URL -- /reviews/new/notes
//     cy.url().should("equal", `${Cypress.config("baseUrl")}/reviews/new/notes`);
//   });
//   it("Successfully submits the notes", () => {
//     cy.login();
//     cy.visit(`${Cypress.config("baseUrl")}/reviews/new/notes`);
//     cy.get('[aria-label="pepper-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3");
//     cy.get('[aria-label="cinnamon-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3");
//     cy.get('[aria-label="bakingspice-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3");
//     cy.get('[aria-label="herbal-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3");
//     cy.get('[aria-label="mint-input"]').should("be.visible").clear().type("3");
//     cy.get('[aria-label="cherry-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3");
//     cy.get('[aria-label="strawberry-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3");
//     cy.get('[aria-label="raspberry-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3");
//     cy.get('[aria-label="blackberry-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3");
//     cy.get('[aria-label="blueberry-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3");
//     cy.get('[aria-label="apple-input"]').should("be.visible").clear().type("3");
//     cy.get('[aria-label="banana-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3");
//     cy.get('[aria-label="grape-input"]').should("be.visible").clear().type("3");
//     cy.get('[aria-label="stone-input"]').should("be.visible").clear().type("3");
//     cy.get('[aria-label="tropical-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3");
//     cy.get('[aria-label="coffee-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3");
//     cy.get('[aria-label="tobacco-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3");
//     cy.get('[aria-label="leather-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3");
//     cy.get('[aria-label="oak-input"]').should("be.visible").clear().type("3");
//     cy.get('[aria-label="toasted-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3");
//     cy.get('[aria-label="smokey-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3");
//     cy.get('[aria-label="peanut-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3");
//     cy.get('[aria-label="almond-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3");
//     cy.get('[aria-label="pecan-input"]').should("be.visible").clear().type("3");
//     cy.get('[aria-label="walnut-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3");
//     cy.get('[aria-label="oily-input"]').should("be.visible").clear().type("3");
//     cy.get('[aria-label="floral-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3");
//     cy.get('[aria-label="corn-input"]').should("be.visible").clear().type("3");
//     cy.get('[aria-label="rye-input"]').should("be.visible").clear().type("3");
//     cy.get('[aria-label="wheat-input"]').should("be.visible").clear().type("3");
//     cy.get('[aria-label="malt-input"]').should("be.visible").clear().type("3");
//     cy.get('[aria-label="dough-input"]').should("be.visible").clear().type("3");
//     cy.get('[aria-label="vanilla-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3");
//     cy.get('[aria-label="caramel-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3");
//     cy.get('[aria-label="molasses-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3");
//     cy.get('[aria-label="butterscotch-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3");
//     cy.get('[aria-label="honey-input"]').should("be.visible").clear().type("3");
//     cy.get('[aria-label="chocolate-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3");
//     cy.get('[aria-label="toffee-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3");
//     cy.get('[aria-label="sugar-input"]').should("be.visible").clear().type("3");
//     cy.get('[aria-label="value-input"]').should("be.visible").clear().type("3");
//     cy.get('[aria-label="overallRating-input"]')
//       .should("be.visible")
//       .clear()
//       .type("3");
//     cy.get("#review-button").click();
//     cy.url().should(
//       "equal",
//       `${Cypress.config("baseUrl")}/reviews/new/confirm`
//     );
//   });
//   it("Submits the review successfully", () => {
//     cy.get("#submitreview-button").click();
//     cy.url().should("match", /\/reviews\/(\w|\d)*/);
//     cy.get("#bottleDetails").should("be.visible");
//     cy.get("#edit-button").should("be.visible").click();
//     cy.url().should("match", /\/reviews\/edit\/(\w|\d)*/);
//     cy.get('[aria-label="bakingspice-input"]')
//       .should("be.visible")
//       .clear()
//       .type("5");
//     cy.get('[aria-label="herbal-input"]')
//       .should("be.visible")
//       .clear()
//       .type("5");
//     cy.get('[aria-label="mint-input"]').should("be.visible").clear().type("4");
//     cy.get('[aria-label="cherry-input"]')
//       .should("be.visible")
//       .clear()
//       .type("5");
//     cy.get('[aria-label="chocolate-input"]')
//       .should("be.visible")
//       .clear()
//       .type("5");
//     cy.get("#update-button").should("be.visible").click();
//     cy.url().should("match", /\/reviews\/(\w|\d)*/);
//   });
// });
