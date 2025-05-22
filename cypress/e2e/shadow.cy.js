describe("To Automate the shadow objects",()=>{
    beforeEach(function(){
        cy.visit('https://testautomationpractice.blogspot.com/')
    })
    it("shadow",()=>{
        //cy.get('[id="footer-2-2"]').shadow().find('Laptops').click()
      //  cy.xpath('(//h2["text()=ShadowDOM"])[19]').shadow().find('Mobiles').shadow().find('Laptops').click()
      cy.get('#shadow_host').shadow().find('.info').should('have.text','Mobiles')
      cy.get('#shadow_host').shadow().find('input[type="text"]').type('Hello Shadow DOM').should('have.value', 'Hello Shadow DOM');
    })
})