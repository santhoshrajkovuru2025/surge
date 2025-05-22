describe("To Purchase an item", () => {
    beforeEach(function () {
        cy.visit('https://demowebshop.tricentis.com/')
    })
    it('toWishlistTheItem', () => {
        cy.get('[href="/login"]').click()
        cy.get('#Email').should('be.empty').type('venky.kudumula@gmail.com')
        cy.get('#Password').should('be.empty').type('Venky@Kudumula1$')
        cy.xpath('//input[@class="button-1 login-button"]').should('be.enabled').click()
        cy.xpath('(//a[@href="/build-your-cheap-own-computer"])[1]').click()
        cy.get('[value="91"]').click()
        cy.get('[value="65"]').click()
        cy.get('[value="58"]').click()
        cy.get('[value="94"]').click()
        cy.get('[value="Add to compare list"]').click()
    })
})