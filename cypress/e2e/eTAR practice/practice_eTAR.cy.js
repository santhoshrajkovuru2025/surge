describe("To Automate the eTAR Application", function () {
    before(function () {
        // To Launch the Application
        cy.visit('https://silsr.softsol.com:6114/login')
        cy.get('#pname').type('00A088470')
        cy.get('#oname').type('Own01')
        cy.get('#emailId').type('testdata@softsol.com')
        cy.wait(2000)
        cy.get('#txt_MedicalServices').click()
        Cypress.on('uncaught:exception', (err, runnable) => {
            // Log the error or handle it as needed
            console.error('Uncaught exception:', err);
            // Returning false prevents Cypress from failing the test
            return false;
        });
       cy.wait(2000)
    })

    it("To check the web Tables from the TAR Response", function () {

        cy.get('tbody>tr:nth-child(2)>td>ul>li:nth-child(5)>a').click()
        cy.get('[name="IncRecipID"]').type('000000111')
        cy.get('[name="FromDate"]').clear().type('04012025')
        cy.get('[name="ThruDate"]').clear().type('04012025')
        cy.get('[name="Submit"]').click()
        cy.wait(2000)
        cy.get('table:nth-child(5)>tbody>tr:nth-child(2)>td>table>tbody>tr:nth-child(4)>td:nth-child(5)').wait(2000).eq('1').should('have.text', 'Approved')

    })
})