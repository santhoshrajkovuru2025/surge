// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// To Import and utilize the xpath properties in cypress
require('cypress-xpath');

// To use the file upload.
require("cypress-file-upload");

// To use the drag and drop in cypress
require('@4tw/cypress-drag-drop');

//Disable the Fetch and XHR logs
before(() => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
  });

  //shadow Dom command
  import 'cypress-shadow-dom';

  // To handle Reports
  import 'cypress-mochawesome-reporter/register';

  //load this module from the support file or at the top of the spec file if not using the support file.
// You import the registration function and then call it:
//--const registerCypressGrep = require('@cypress/grep')
//--registerCypressGrep()
//(OR) Load and Register the grep feature using "require" function
require('@cypress/grep')()

// Handling on uncaught expections

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});


  
