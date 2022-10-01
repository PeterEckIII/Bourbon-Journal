import { defineConfig } from "cypress";
import path from "path";

export default defineConfig({
  projectId: "f4j7aj",
  env: {
    "cypress-react-selector": {
      root: "#root",
    },
  },
  e2e: {
    // setupNodeEvents(on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) {
    //   on(
    //     "before:browser:launch",
    //     (browser: Cypress.Browser, launchOptions: Cypress.BrowserLaunchOptions) => {
    //       console.log(`Launching browser on ${browser}`);
    //       if (browser.family === "chromium") {
    //         const extensionFolder = path.resolve(
    //           __dirname,
    //           "..",
    //           "..",
    //           "..",
    //           "4.25.0_0"
    //         );
    //         console.log(
    //           `Adding React DevTools extension from ${extensionFolder}`
    //         );
    //         launchOptions.args.push(extensionFolder);
    //         return launchOptions;
    //       }
    //     }
    //   );
    // },
  },
});
