describe("To Automate the webTables", function () {
    beforeEach(function () {

        cy.visit('https://testautomationpractice.blogspot.com/')
    })
    it('Test case TC:01', function () {

        cy.xpath('//table[@name="BookTable"]').contains('td','Javascript').should('have.text','Javascript')
       // cy.xpath('//table[@name="BookTable"]').contains('td','Selenium').eq(2).should('have.text','Selenium')
        // Select the second occurrence (index starts from 0)
        cy.get('table tbody tr').contains('td', 'Selenium').eq(1) .should('be.visible');
    })
    it("Test Case TC: 02", function(){
        cy.get('tbody>tr:nth-child(6)>td:nth-child(3)').should('have.text','3000')
    })
})