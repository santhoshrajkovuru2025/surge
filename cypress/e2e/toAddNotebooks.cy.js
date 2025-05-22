describe("To Purchase an item", () => {
    beforeEach(function () {
        cy.visit('https://demowebshop.tricentis.com/')
    })
    it('toAddNotebooks',function(){
        cy.get('[href="/login"]').click()
        cy.get('#Email').should('be.empty').type('venky.kudumula@gmail.com')
        cy.get('#Password').should('be.empty').type('Venky@Kudumula1$')
        cy.xpath('//input[@class="button-1 login-button"]').should('be.enabled').click()
        cy.xpath('(//a[@href="/books"])[1]').click()
        cy.xpath('(//h2[@class="product-title"])[1]').click()
        cy.get("#add-to-cart-button-13").click()
        cy.get('[class="content"]').should('contain', 'The product has been added to your shopping cart')

    })
})