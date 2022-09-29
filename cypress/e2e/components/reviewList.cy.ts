// import mockReviews from "../../fixtures/reviews.json";

// describe("Review List", () => {
//   beforeEach(() => {
//     cy.intercept(
//       "GET",
//       `${Cypress.config().baseUrl}/reviews?_data=routes%2Freviews%2Findex`,
//       {
//         fixture: "reviews.json",
//       }
//     ).as("getReviews");
//     cy.viewport(1500, 900);
//     cy.login();

//     cy.wait("@getReviews");
//   });

//   it("Renders the review list", () => {
//     cy.get("section")
//       .get(".ag-center-cols-clipper")
//       .get(".ag-center-cols-viewport")
//       .get(".ag-center-cols-container")
//       .each(($el, i) => {
//         cy.wrap($el).contains(mockReviews.reviewListItems[i].bottle.name);
//         cy.wrap($el).contains(mockReviews.reviewListItems[i].bottle.age);
//         cy.wrap($el).contains(
//           mockReviews.reviewListItems[i].bottle.alcoholPercent
//         );
//         cy.wrap($el).contains(mockReviews.reviewListItems[i].bottle.distiller);
//         cy.wrap($el).contains(mockReviews.reviewListItems[i].bottle.producer);
//         cy.wrap($el).contains(mockReviews.reviewListItems[i].bottle.price);
//         cy.wrap($el).contains(mockReviews.reviewListItems[i].bottle.type);
//         cy.wrap($el).contains(mockReviews.reviewListItems[i].date);
//         cy.wrap($el).contains(mockReviews.reviewListItems[i].overallRating);
//         cy.wrap($el).contains(mockReviews.reviewListItems[i].value);
//         cy.wrap($el).find("a").last().should("have.attr", "href");
//         // cy.wrap($el).contains(mockReviews.reviewListItems[i].bottle.name);
//         // cy.wrap($el).contains(mockReviews.reviewListItems[i].bottle.age);
//         // cy.wrap($el).contains(
//         //   mockReviews.reviewListItems[i].bottle.alcoholPercent
//         // );
//         // cy.wrap($el).contains(mockReviews.reviewListItems[i].bottle.distiller);
//         // cy.wrap($el).contains(mockReviews.reviewListItems[i].bottle.producer);
//         // cy.wrap($el).contains(mockReviews.reviewListItems[i].bottle.price);
//         // cy.wrap($el).contains(mockReviews.reviewListItems[i].bottle.type);
//         // cy.wrap($el).contains(mockReviews.reviewListItems[i].date);
//         // cy.wrap($el).contains(mockReviews.reviewListItems[i].overallRating);
//         // cy.wrap($el).contains(mockReviews.reviewListItems[i].value);
//         // cy.wrap($el).find("a").last().should("have.attr", "href");
//       });
//   });
// });
