describe("To Purchase an item", () => {
    beforeEach(function () {
        cy.visit('https://demowebshop.tricentis.com/')
    })
    it('toLoginToTheApplication', () => {
        cy.get('[href="/login"]').click()
        cy.get('#Email').should('be.empty').type('venky.kudumula@gmail.com')
        cy.get('#Password').should('be.empty').type('Venky@Kudumula1$')
        cy.xpath('//input[@class="button-1 login-button"]').should('be.enabled').click()
        cy.get('[class="topic-html-content-header"]').should('contain', 'Welcome to our store')
    })
})