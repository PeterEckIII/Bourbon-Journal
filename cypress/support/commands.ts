import faker from "@faker-js/faker";
import "cypress-file-upload";
import "cypress-localstorage-commands";
import "@testing-library/cypress";
import "cypress-react-selector";

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Logs in with a random user. Yields the user and adds an alias to the user
       *
       * @returns {typeof login}
       * @memberof Chainable
       * @example
       *    cy.login()
       * @example
       *    cy.login({ email: 'whatever@example.com' })
       */
      login: typeof login;

      /**
       * Deletes the current @user
       *
       * @returns {typeof cleanupUser}
       * @memberof Chainable
       * @example
       *    cy.cleanupUser()
       * @example
       *    cy.cleanupUser({ email: 'whatever@example.com' })
       */
      cleanupUser: typeof cleanupUser;

      /**
       * Extends the standard visit command to wait for the page to load
       *
       * @returns {typeof visitAndCheck}
       * @memberof Chainable
       * @example
       *    cy.visitAndCheck('/')
       *  @example
       *    cy.visitAndCheck('/', 500)
       */
      visitAndCheck: typeof visitAndCheck;

      /**
       * Extends the standard visit command to wait for the page to load
       *
       * @returns {typeof loginExisting}
       * @memberof Chainable
       * @example
       *    cy.loginExisting('test@example.com')
       *  @example
       *    cy.loginExisting('test@example.com')
       */
      loginExisting: typeof loginExisting;

      /**
       * Extends the standard visit command to wait for the page to load
       *
       * @returns {typeof serverSideVisit}
       * @memberof Chainable
       * @example
       *    cy.serverSideVisit('/reviews')
       *  @example
       *    cy.serverSideVisit('/reviews')
       */
      serverSideVisit: typeof serverSideVisit;
    }
  }
}

function login({
  email = faker.internet.email(undefined, undefined, "example.com"),
}: {
  email?: string;
} = {}) {
  cy.then(() => ({ email })).as("user");
  cy.exec(
    `npx ts-node --require tsconfig-paths/register ./cypress/support/create-user.ts "${email}"`
  ).then(({ stdout }) => {
    const cookieValue = stdout
      .replace(/.*<cookie>(?<cookieValue>.*)<\/cookie>.*/s, "$<cookieValue>")
      .trim();
    cy.setCookie("__session", cookieValue);
  });
  cy.visitAndCheck("/reviews");
  return cy.get("@user");
}

function loginExisting({ email }: { email: string }) {
  cy.then(() => ({ email })).as("user");
  cy.exec(
    `npx ts-node --require tsconfig-paths/register ./cypress/support/loginExistingUser.ts "${email}"`
  ).then(({ stdout }) => {
    const cookieValue = stdout
      .replace(/.*<cookie>(?<cookieValue>.*)<\/cookie>.*/s, "$<cookieValue>")
      .trim();
    cy.setCookie("__session", cookieValue);
  });
  cy.serverSideVisit("/reviews");
  return cy.get("@user");
}

function cleanupUser({ email }: { email?: string } = {}) {
  if (email) {
    deleteUserByEmail(email);
  } else {
    cy.get("@user").then((user) => {
      const email = (user as { email?: string }).email;
      if (email) {
        deleteUserByEmail(email);
      }
    });
  }
  cy.clearCookie("__session");
}

function deleteUserByEmail(email: string) {
  cy.exec(
    `npx ts-node --require tsconfig-paths/register ./cypress/support/delete-user.ts "${email}"`
  );
  cy.clearCookie("__session");
}

function visitAndCheck(url: string, waitTime: number = 1000) {
  cy.visit(url);
  cy.location("pathname").should("contain", url).wait(waitTime);
}

function serverSideVisit(url: string) {
  cy.reload();
  cy.request(url)
    .its("body")
    .then((html) => {
      html = html.replace(
        /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        ""
      );
      cy.document().invoke({ log: false }, "write", html);
    });
  cy.get("script").should("not.exist");
}

// Adding commands

Cypress.Commands.add("login", login);
Cypress.Commands.add("cleanupUser", cleanupUser);
Cypress.Commands.add("visitAndCheck", visitAndCheck);
Cypress.Commands.add("loginExisting", loginExisting);
Cypress.Commands.add("serverSideVisit", serverSideVisit);

/*
eslint
  @typescript-eslint/no-namespace: "off",
*/
