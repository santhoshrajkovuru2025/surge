/////<reference types = "cypress"/>

//To Launch the browser

describe("Launch Chrome Browser", function () {

  beforeEach(function () {

    // To Launch Orange HRM Application
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get('[name="username"]').type("Admin")
    cy.get('[name="password"]').type("admin123")
    cy.get('[type="submit"]').click()
  })

  it("Launch Orange HRM Application", function () {

    // To Click on the PIM Module
    cy.get('[href="/web/index.php/pim/viewPimModule"]').click()
    //Click on "Add" button
    cy.get('[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()
    //  To add a record and submit successfully.
    cy.get('[name="firstName"]').type('Durga')
    cy.get('[name="middleName"]').type('Ashok')
    cy.get('[name="lastName"]').type('Kumar')
    cy.get('[class="oxd-switch-input oxd-switch-input--active --label-right"]').click()
    cy.xpath('(//input[@class="oxd-input oxd-input--active"])[3]').type('durga123')
    // cy.xpath('(//span[@class="oxd-radio-input oxd-radio-input--active --label-right oxd-radio-input"])[2]').click()
    cy.xpath('(//input[@type="password"])[1]').type('@durga12@123')
    cy.xpath('(//input[@type="password"])[2]').type('@durga12@123')
    cy.get('[type="submit"]').click()
    cy.get('(//input[@class="oxd-input oxd-input--active"])[4]').type('DIVLIC12345678')

  })

  it("To Handle Toggles and Scroll bar", function(){

    cy.xpath('(//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"])[3]').click()
    cy.wait(2000)
    cy.get('[class="oxd-switch-input oxd-switch-input--active --label-right"]').check()

  })

})

