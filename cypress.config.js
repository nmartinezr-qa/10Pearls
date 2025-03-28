const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    defaultCommandTimeout: 3000,
    specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {

    },
  },
});
