describe("To Login into the application",()=>{
    beforeEach("login",()=>{
        cy.session("session",()=>{
            cy.visit('https://silsr.softsol.com:6114/login')
            cy.get('#pname').type('00A088470')
            cy.get('#oname').type('01')
            cy.get('#emailId').type('test@test.com')
            cy.get('#txt_MedicalServices').click()
            Cypress.on('uncaught:exception', (err, runnable) => {
                // Log the error or handle it as needed
                console.error('Uncaught exception:', err);

                // Returning false prevents Cypress from failing the test
                return false;
            });
            cy.get('div table:nth-child(3) tbody tr:nth-child(2) td ul li:nth-child(1) a').click()
        })
    })
    it("To Enter the Provider Information",()=>{
        //cy.xpath('//input[@name="txtTARCompBy"]').should('exist')
        //cy.get('[name="txtTARCompBy"]').should('exist')
        cy.get('[name="txtTARCompBy"]',{timeout:5000}).type('Swaroop')
        cy.xpath('//input[@name="MedCert"]').should('exist')
        cy.xpath('//input[@name="MedCert"]').check({force:true})
    })
    it('To logout of the application',()=>{
        cy.xpath('//a[text()="Logout"]').click({force:true})
    })
})