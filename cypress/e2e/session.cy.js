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

        })
            cy.visit('https://silsr.softsol.com:6114/tarmain?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJucGkiOiIwMEEwODg0NzAiLCJvd25lcm51bWJlciI6IjAxIiwiZW1haWwiOiJzYW50aG9zaHJhai5rb3Z1cnVAc29mdHNvbC5jb20iLCJzdWIiOiJzYW50aG9zaHJhai5rb3Z1cnVAc29mdHNvbC5jb20iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic2FudGhvc2hyYWoua292dXJ1QHNvZnRzb2wuY29tIiwianRpIjoiYWE2MzJlZWEtZjg0NC00Zjg5LTk2MzAtNzMxNWJmNTRmYjY1IiwiZXhwIjoxNzQ4NjA2ODA2LCJpc3MiOiJodHRwczovL2Rldi1tY3dlYi52ZXJpZnkuaWJtLmNvbS9zYW1sL3Nwcy9zYW1sMjBpcC9zYW1sMjAiLCJhdWQiOiJodHRwczovL2NhbXZkZXZ3bWN3d2IwMS5hZC5jYXhpeC5hY3MtaW5jLmNvbTo4NDQzL21jc3AvIn0._sodHiaC6INiv8ekxuPqC2POyJIhIcZerK2cmsZk7AE')
    })
    it("To Enter the Provider Information",()=>{
        cy.get('div table:nth-child(3) tbody tr:nth-child(2) td ul li:nth-child(1) a').click()
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