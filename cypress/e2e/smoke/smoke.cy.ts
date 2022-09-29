// import { faker } from "@faker-js/faker";

// describe("Smoke tests", () => {
//   afterEach(() => {
//     cy.cleanupUser();
//   });

//   it("Should allow you to register and login", () => {
//     const loginForm = {
//       email: `${faker.internet.userName}@example.com`,
//       password: faker.internet.password(),
//     };

//     cy.then(() => ({ email: loginForm.email })).as("user");

//     cy.visitAndCheck(`/`);
//     cy.findByRole("link", { name: /sign up/i }).click();
//     cy.findByRole("textbox", { name: /email/i }).type(loginForm.email);
//     cy.findByLabelText(/password/i).type(loginForm.password);
//     cy.findByRole("button", { name: /create account/i }).click();
//     cy.findByRole("link", { name: /reviews/i }).click();
//     cy.findByRole("button", { name: /logout/i }).click();
//     cy.findByRole("link", { name: /log in/i });
//   });

//   it("Should allow you to create a review", () => {});
// });

// describe("smoke tests", () => {

// it("should allow you to make a review", async () => {
//   const testBottle = {
//     id: faker.datatype.uuid(),
//     name: faker.name.findName(),
//     type: faker.word.noun(),
//     distiller: faker.word.noun(),
//     bottler: faker.word.noun(),
//     producer: faker.word.noun(),
//     country: faker.word.noun(),
//     region: faker.word.noun(),
//     price: `${faker.finance.currencySymbol()}${faker.commerce.price}`,
//     age: `${faker.datatype.number({
//       min: 2,
//       max: 50,
//     })} + ${faker.word.noun()}`,
//     year: faker.datatype.string(),
//     batch: faker.word.noun(),
//     alcoholPercent: `${faker.datatype.number({ min: 30, max: 99 })}%`,
//     proof: `${faker.datatype.number({ min: 60, max: 199 })} proof`,
//     size: `${faker.datatype.number}mL`,
//     color: faker.commerce.color(),
//     finishing: faker.word.noun(),
//   };
//   // await createBottle(testBottle);

//   const testReview = {
//     id: faker.datatype.uuid(),
//     bottleId: testBottle.id,
//     createdAt: faker.datatype.datetime(),
//     updatedAt: faker.datatype.datetime(),
//     userId: faker.datatype.uuid(),
//     imageId: faker.datatype.uuid(),

//     date: faker.word.noun(),
//     setting: faker.lorem.lines(1),
//     glassware: faker.word.noun(),
//     restTime: faker.word.noun(),
//     nose: faker.lorem.paragraph(4),
//     palate: faker.lorem.paragraph(4),
//     finish: faker.lorem.paragraph(4),
//     thoughts: faker.lorem.paragraph(4),
//     cherry: faker.datatype.number({ min: 0, max: 5 }),
//     strawberry: faker.datatype.number({ min: 0, max: 5 }),
//     raspberry: faker.datatype.number({ min: 0, max: 5 }),
//     blackberry: faker.datatype.number({ min: 0, max: 5 }),
//     blueberry: faker.datatype.number({ min: 0, max: 5 }),
//     apple: faker.datatype.number({ min: 0, max: 5 }),
//     banana: faker.datatype.number({ min: 0, max: 5 }),
//     grape: faker.datatype.number({ min: 0, max: 5 }),
//     stone: faker.datatype.number({ min: 0, max: 5 }),
//     citrus: faker.datatype.number({ min: 0, max: 5 }),
//     tropical: faker.datatype.number({ min: 0, max: 5 }),
//     pepper: faker.datatype.number({ min: 0, max: 5 }),
//     bakingSpice: faker.datatype.number({ min: 0, max: 5 }),
//     cinnamon: faker.datatype.number({ min: 0, max: 5 }),
//     herbal: faker.datatype.number({ min: 0, max: 5 }),
//     mint: faker.datatype.number({ min: 0, max: 5 }),
//     coffee: faker.datatype.number({ min: 0, max: 5 }),
//     tobacco: faker.datatype.number({ min: 0, max: 5 }),
//     leather: faker.datatype.number({ min: 0, max: 5 }),
//     oak: faker.datatype.number({ min: 0, max: 5 }),
//     toasted: faker.datatype.number({ min: 0, max: 5 }),
//     smokey: faker.datatype.number({ min: 0, max: 5 }),
//     peanut: faker.datatype.number({ min: 0, max: 5 }),
//     almond: faker.datatype.number({ min: 0, max: 5 }),
//     pecan: faker.datatype.number({ min: 0, max: 5 }),
//     walnut: faker.datatype.number({ min: 0, max: 5 }),
//     oily: faker.datatype.number({ min: 0, max: 5 }),
//     floral: faker.datatype.number({ min: 0, max: 5 }),
//     corn: faker.datatype.number({ min: 0, max: 5 }),
//     rye: faker.datatype.number({ min: 0, max: 5 }),
//     wheat: faker.datatype.number({ min: 0, max: 5 }),
//     malt: faker.datatype.number({ min: 0, max: 5 }),
//     dough: faker.datatype.number({ min: 0, max: 5 }),
//     vanilla: faker.datatype.number({ min: 0, max: 5 }),
//     caramel: faker.datatype.number({ min: 0, max: 5 }),
//     molasses: faker.datatype.number({ min: 0, max: 5 }),
//     butterscotch: faker.datatype.number({ min: 0, max: 5 }),
//     honey: faker.datatype.number({ min: 0, max: 5 }),
//     chocolate: faker.datatype.number({ min: 0, max: 5 }),
//     toffee: faker.datatype.number({ min: 0, max: 5 }),
//     sugar: faker.datatype.number({ min: 0, max: 5 }),
//     overallRating: faker.datatype.number({ min: 0, max: 5 }),
//     value: faker.datatype.number({ min: 0, max: 5 }),
//   };
//   // await createReview(testReview);
//   cy.login();
//   cy.visit(`${Cypress.config("baseUrl")}/reviews/${testReview.id}`);
//   cy.findByRole("button", { name: /edit/i }).should("be.visible");
//   cy.findByRole("button", { name: /delete/i }).should("be.visible");
// });
//  });
