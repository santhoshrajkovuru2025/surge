const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // To handle reports
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    //watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // To handle reports
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
});
