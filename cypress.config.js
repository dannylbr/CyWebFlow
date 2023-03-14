const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    screenshotOnRunFailure: true,
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    excludeSpecPattern: "*.js",
    baseUrl: 'https://sites.google.com/view/integraesol/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
});
