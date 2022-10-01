// describe("Login", () => {
//   beforeEach(() => {
//     cy.intercept(
//       `${Cypress.config("baseUrl")}/**/*`,
//       { middleware: true },
//       ($req) => {
//         $req.on("before:response", ($res) => {
//           $res.headers["cache-control"] = "no-store";
//         });
//       }
//     ).as("cacheControl");

//     cy.intercept(
//       "POST",
//       `${Cypress.config("baseUrl")}/logout?_data=routes%2Flogout`
//     ).as("loggedOut");

//     cy.intercept(
//       "GET",
//       `${Cypress.config("baseUrl")}/login?_data=routes%2Flogin`,
//       ($req) => {
//         $req.reply(200);
//       }
//     ).as("loginPage");

//     // user
//     cy.intercept(
//       "GET",
//       `${Cypress.config("baseUrl")}/reviews?_data=root`,
//       ($req) => {
//         $req.reply(($res) => {
//           $res.send({ fixture: "user.json" });
//         });
//       }
//     ).as("getUser");

//     // reviews
//     cy.intercept(
//       "GET",
//       `${Cypress.config("baseUrl")}/reviews?_data=routes%2Freviews`,
//       ($req) => {
//         $req.reply(($res) => {
//           $res.send({ fixture: "reviews.json" });
//         });
//       }
//     ).as("getReviews");

//     // userId and reviews
//     cy.intercept(
//       "GET",
//       `${Cypress.config("baseUrl")}/reviews?_data=routes%2Freviews%2Findex`,
//       ($req) => {
//         $req.reply(($res) => {
//           $res.send({ fixture: "userAndReviews.json" });
//         });
//       }
//     ).as("getUserAndReviews");

//     cy.viewport(1025, 900);
//     cy.visitAndCheck("/");
//   });

//   it("Logs in an existing user", () => {
//     cy.intercept(
//       "POST",
//       `${Cypress.config("baseUrl")}/login?_data=routes%2Flogin`
//     ).as("loginSuccess");

//     cy.findByRole("link", { name: /log in/i }).click();
//     cy.wait("@loginPage");
//     cy.location("pathname").should("include", "/login");
//     cy.findByLabelText(/email address/i).type("test@example.com");
//     cy.findByLabelText(/password/i).type("Cypress2022");
//     cy.findByRole("button", { name: /log in/i }).click();
//     cy.pause();
//     cy.wait("@loginSuccess");
//     cy.wait("@getUserAndReviews");
//     cy.findByRole("link", { name: /my reviews/i }).should("be.visible");
//   });

//   it("Logs out a logged in user", () => {
//     cy.intercept(
//       "POST",
//       `${Cypress.config("baseUrl")}/login?_data=routes%2Flogin`
//     ).as("loginSuccess");
//     cy.findByRole("link", { name: /log in/i }).click();
//     cy.wait("@loginPage");
//     cy.location("pathname").should("include", "/login");
//     cy.findByLabelText(/email address/i).type("test@example.com");
//     cy.findByLabelText(/password/i).type("Cypress2022");
//     cy.findByRole("button", { name: /log in/i }).click();
//     cy.wait("@loginSuccess");
//     cy.wait("@getUserAndReviews");
//     cy.findByRole("button", { name: /logout/i }).click();
//     cy.wait("@loggedOut");
//     cy.findByRole("link", { name: /log in/i }).should("be.visible");
//   });

//   it("Shows an error if an incorrect password is typed", () => {
//     cy.intercept(
//       "POST",
//       `${Cypress.config("baseUrl")}/login?_data=routes%2Flogin`,
//       ($req) => {
//         $req.reply(($res) => {
//           $res.send({
//             fixture: "invalidPassword.json",
//           });
//         });
//       }
//     ).as("invalidPassword");

//     cy.intercept(
//       "GET",
//       `${Cypress.config("baseUrl")}/login?_data=root`,
//       ($req) => {
//         $req.reply(($res) => {
//           $res.send({ fixture: "nullUser.json" });
//         });
//       }
//     ).as("emptyUser");

//     cy.findByRole("link", { name: /log in/i }).click();
//     cy.wait("@loginPage");
//     cy.location("pathname").should("include", "/login");
//     cy.findByLabelText(/email address/i).type("test@example.com");
//     cy.findByLabelText(/password/i).type("Cypress2021");
//     cy.findByRole("button", { name: /log in/i }).click();
//     cy.wait("@invalidPassword");
//     cy.wait("@emptyUser");
//     cy.findByText("Invalid email or password").should("be.visible");
//   });

//   it("Shows an error if password does not match minimum length", () => {
//     cy.intercept(
//       "POST",
//       `${Cypress.config("baseUrl")}/login?_data=routes%2Flogin`,
//       ($req) => {
//         $req.reply(($res) => {
//           $res.send({ fixture: "passwordTooShort.json" });
//         });
//       }
//     ).as("passwordTooShort");

//     cy.intercept(
//       "GET",
//       `${Cypress.config("baseUrl")}/login?_data=root`,
//       ($req) => {
//         $req.reply(($res) => {
//           $res.send({ fixture: "nullUser.json" });
//         });
//       }
//     ).as("emptyUser");

//     cy.findByRole("link", { name: /log in/i }).click();
//     cy.wait("@loginPage");
//     cy.url().should("include", "/login");
//     cy.findByLabelText(/email address/i).type("test@example.com");
//     cy.findByLabelText(/password/i).type("1");
//     cy.findByRole("button", { name: /log in/i }).click();
//     cy.wait("@passwordTooShort");
//     cy.wait("@emptyUser");
//     cy.findByText("Password is too short").should("be.visible");
//   });
// });
