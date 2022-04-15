import faker from "@faker-js/faker";

describe("smoke tests", () => {
  afterEach(() => {
    cy.cleanupUser();
  });

  it("should allow you to register and login", () => {
    const loginForm = {
      email: `${faker.internet.userName()}@example.com`,
      password: faker.internet.password(),
    };
    cy.then(() => ({ email: loginForm.email })).as("user");

    cy.visit("/");
    cy.findByRole("link", { name: /sign up/i }).click();

    cy.findByRole("textbox", { name: /email/i }).type(loginForm.email);
    cy.findByLabelText(/password/i).type(loginForm.password);
    cy.findByRole("button", { name: /create account/i }).click();

    // cy.findByRole("link", { name: /reviews/i }).click();
    // cy.findByRole("button", { name: /logout/i }).click();
    // cy.findByRole("link", { name: /log in/i });
  });

  it("should allow you to make a review", () => {
    // const testReview = {
    //   title: faker.lorem.words(1),
    //   body: faker.lorem.sentences(1),
    //   name: faker.lorem.words(2),
    //   date: faker.lorem.words(1),
    //   type: faker.lorem.words(1),
    //   distiller: faker.lorem.words(3),
    //   bottler: faker.lorem.words(2),
    //   producer: faker.lorem.words(2),
    //   country: faker.lorem.words(2),
    //   region: faker.lorem.words(1),
    //   price: faker.commerce.price(),
    //   age: faker.lorem.words(1),
    //   alcoholPercent: faker.lorem.words(1),
    //   proof: faker.lorem.words(1),
    //   size: faker.lorem.words(1),
    //   color: faker.lorem.words(1),
    //   finishing: faker.lorem.words(1),
    //   setting: faker.lorem.words(5),
    //   glassware: faker.lorem.words(1),
    //   restTime: faker.lorem.words(1),
    //   nose: faker.lorem.paragraph(),
    //   palate: faker.lorem.paragraph(),
    //   finish: faker.lorem.paragraph(),
    //   thoughts: faker.lorem.paragraph(),
    //   overallRating: faker.datatype.number({ min: 0, max: 5 }),
    //   value: faker.datatype.number({ min: 0, max: 5 }),
    // };
    cy.login();
    cy.visit("/");

    // cy.findByRole("link", { name: /reviews/i }).click();

    // cy.findByRole("link", { name: /\+ new note/i }).click();

    // cy.findByRole("textbox", { name: /name/i }).type(testReview.name);
    // cy.findByRole("textbox", { name: /type/i }).type(testReview.type);
    // cy.findByRole("button", { name: /save/i }).click();

    // cy.findByRole("button", { name: /delete/i }).click();

    // cy.findByText("No notes yet");
  });
});
