describe("Test Suite: To Test the Application - Automation Testing Practice", function () {

    beforeEach(function () {

        cy.fixture('notAFrame').then(function (data) {

            this.data = data
            cy.visit(this.data.WebsiteURL)
        })
    })

    it("Test case 1: To Test Simple Alerts", () => {
        cy.get('#alertBtn').click()
        cy.on('window:alert', (t) => {
            expect(t).to.contains('I am an alert box!')
        })
    })
    it("Test case 2: To Test Confirm Alerts (case 1)", () => {
        cy.get('#confirmBtn').click()
        cy.on('window:confirm', (f) => {
            expect(f).to.equal('Press a button!')
            return true;
        })
    })
    it("Test case 3: To Test Confirm Alerts (case 2)", () => {
        cy.get('#confirmBtn').click()
        cy.on('window:confirm', (f1) => {
            expect(f1).to.equal('Press a button!')
            return false;
        })
    })
    it("ss",function(){
        

        cy.window().then(function(win){
            cy.stub(win,'prompt').returns('I am santhosh');
        })
        cy.get('[id="promptBtn"]').click();
        cy.contains('Prompt').click();
        cy.get('#demo').should('contain','I am santhosh');
    })

    it.only("Handle Prompt Alert",function(){
 
       
        cy.window().then(function(win){
            cy.stub(win,'prompt').returns('I am Happy');
        })
        cy.get('[id="promptBtn"]').click()
        cy.contains('Prompt').click();
        cy.get('#demo').should('contain', 'I am Happy');
        //cy.get('#result').should('contain','I am Happy')
    })
})
