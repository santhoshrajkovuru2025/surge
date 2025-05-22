
describe('To test the hidden Elements', ()=>{
    beforeEach(function (){
        cy.fixture('notAFrame').then(function(login){
            this.login=login
            cy.visit(this.login.URL2)
        })
    })
    it('To Test case 1',()=>{
        cy.get('[class="dropdown"]').invoke('show')
        cy.contains('Mobiles').click({force:true})
    })
    it('To Test case 2',function(){
        cy.get('[id="nav-link-accountList"]').invoke('show')
        cy.contains('Sign in').click({force:true})
    })
    it.only('To identify and click Sign up',()=>{
        cy.xpath('//div[@class="H6-NpN _3N4_BX"]').invoke('show')
        cy.contains('Sign Up').click({force:true})
        cy.go('back')
        cy.go('forward')
        cy.go('back')
        cy.url().should('include','flipkart.com')
        cy.xpath('//div[@class="H6-NpN _3N4_BX"]').invoke('show')
        cy.contains('My Profile').click({force:true})
        cy.go('back')
        cy.get('[class="_1TOQfO"]').invoke('show')
        cy.contains('Notification Preferences').click({force:true})

    })
})