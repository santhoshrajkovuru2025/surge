describe('to test', function(){

    beforeEach(function(){
        cy.visit('https://testautomationpractice.blogspot.com/')
    })
    it('test case', function(){
        
        cy.get('#confirmBtn').click()
        cy.on('window:confirm', function (t) {
            expect(t).to.contains('Press a button!')
            return true;
        })
    })
    it('To Test alerts',function(){

        
        cy.get('[id="alertBtn"]').click()
        cy.on('window:alert',function(t){
            expect(t).to.contains('I am an alert box!')
        })
    })
    it('to test the confirmation alert',()=>{
     
        cy.get('[id="confirmBtn"]').click()
        cy.on('window:confirm', function(t1){
            expect(t1).to.contains('Press a button!')
            return true;
        })
        it('to test confirm alert for cancel',()=>{
 
            cy.get('[id="confirmBtn"]').click()
            cy.on('window:confirm',function(t2){
                expect(t2).to.have('Press a button!')
                return false;
            })
        })
    })
    it('to test the Prompt Alert',()=>{

        cy.window().then(function(win){
            cy.stub(win,'prompt').returns('I am Santhosh')
        })
        cy.get('[id="promptBtn"]').click()
        cy.contains('Prompt').click();
        cy.get('#demo').should('contain','I am Santhosh');
    })
    it('mouse over action',function(){
        cy.get('[class="dropdown"]').invoke('show')
        cy.contains('Mobiles').click({force:true})
    })
})