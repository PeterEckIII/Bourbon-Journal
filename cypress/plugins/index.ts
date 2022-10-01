const path = require("path");

module.exports = (
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
) => {
  const isDev = config.watchForFileChanges;
  const port = process.env.PORT ?? (isDev ? "3000" : "8811");
  const configOverrides: Partial<Cypress.PluginConfigOptions> = {
    baseUrl: `http://localhost:${port}`,
    integrationFolder: "cypress/e2e",
    video: !process.env.CI,
    screenshotOnRunFailure: !process.env.CI,
  };
  Object.assign(config, configOverrides);

  on("before:browser:launch", (browser, launchOptions) => {
    console.log(`Launching browser ${JSON.stringify(browser)}`);
    if (browser.family === "chromium") {
      const extensionFolder = path.resolve(__dirname, "..", "..", "4.25.0_0");
      console.log(`Adding React DevTools extension from ${extensionFolder}`);
      launchOptions.args.push(`--load-extension=${extensionFolder}`);
      return launchOptions;
    }
  });

  // To use this:
  // cy.task('log', whateverYouWantInTheTerminal)
  on("task", {
    log(message) {
      console.log(message);
      return null;
    },
  });

  return config;
};
