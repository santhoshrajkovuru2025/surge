
describe("To Test the all the scenarios", function () {
  beforeEach(function () {

    cy.visit('https://www.apollopharmacy.in/')
    Cypress.on('uncaught:exception', (err, runnable) => {
      // Optionally log the error
      console.error('Uncaught Exception:', err.message);
      // Return false to prevent the error from failing the test
      return false;
    });

  })
  it("testCase1",{tags:'@smoke'}, () => {
    //  cy.get('.SearchPlaceholder_sRoot__ZK2aL').click()

    cy.get('[class="SearchPlaceholder_icon-searchIcon__y_vio SearchPlaceholder_icon___bJlq"]').click()
    cy.get('[class="MedicineAutoSearch_medicineSearchForm___zxiZ  "]').type('Levipill 500Mg')
    cy.xpath('//h2[text()="15 Tablet"]').click()
  })

  it('testCase2',{tags:['@smoke','@regression']}, () => {

    cy.get('[href="/shop-by-category/apollo-products"]').invoke('show')
    cy.contains('Skin Care').click({ force: true })
    cy.xpath('//h2[text()="Apollo Pharmacy Premium Aqua Blue Handwash, 500 ml (2x250 ml)"]').click()
  })
  it.skip('testCase3',{tags:['@smoke','@regression','@SIT','@UAT']}, () => {
    cy.xpath('//h3[text()="Diabetes Care"]').click()
    cy.wait(2000)
    cy.xpath('//h2[text()="Apollo Pharmacy Smart Blood Glucose Monitoring Bluetooth System with Diabetes Management App, APG-01 + 25 Test Strips, 1 kit"]').click()
  })
  it('testCase4', () => {
    cy.get('[href="https://www.apollopharmacy.in/shop-by-category/mamypoko"]').click({ force: true })
    cy.xpath('//h2[text()="MamyPoko Extra Absorb Diaper Pants XL, 46 Count"]').click({ force: true })
  })
})