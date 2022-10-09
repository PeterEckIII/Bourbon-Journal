import "@testing-library/cypress/add-commands";
import "./commands";

Cypress.on("window:before:load", (win) => {
  // @ts-ignore
  win.__REACT_DEVTOOLS_GLOBAL_HOOK__ =
    // @ts-ignore
    window.top.__REACT_DEVTOOLS_GLOBAL_HOOK__;
});

beforeEach(() => {
  cy.intercept("*", (req) => {
    req.headers["Accept-Encoding"] = "gzip, deflate";
  });
});
