describe("To Purchase an item", () => {
    beforeEach(function () {
        cy.visit('https://demowebshop.tricentis.com/')
    })
    it("toRegister", () => {
        cy.get('[href="/register"]').click().should('have.class', 'ico-register')
        cy.get('#gender-male').click().should('be.checked')
        cy.get('#FirstName').should('be.empty').type('Edward')
        cy.get('#LastName').should('have.class', 'text-box single-line').type('Barns')
        cy.get('#Email').type('Edward.Barns@outlook.com').should('have.value', 'Edward.Barns@outlook.com')
        cy.get('#Password').type('Edward@Barns2904').should('have.value', 'Edward@Barns2904')
        cy.get('#ConfirmPassword').type('Edward@Barns2904').should('have.value', 'Edward@Barns2904')
        cy.get('#register-button').should('have.id','register-button').click().should('have.text','Your registration completed')
        cy.xpath('//input[@class="button-1 register-continue-button"]').click()
    })
})