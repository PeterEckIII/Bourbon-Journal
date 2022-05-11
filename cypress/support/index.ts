import "@testing-library/cypress/add-commands";
import "./commands";

beforeEach(() => {
  cy.intercept("*", (req) => {
    req.headers["Accept-Encoding"] = "gzip, deflate";
  });
});
