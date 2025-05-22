///<reference types = "cypress"/>

describe("To Launch the edge browser", function () {

    beforeEach(function () {
        cy.fixture('testdata').then(function (data) {
                             this.data1 = data
            cy.visit(this.data1.url)
            cy.get('[id="pname"]').type(this.data1.provID)
            cy.get('[id="oname"]').type(this.data1.Ownnum)
            cy.get('[id="emailId"]').type(this.data1.email)
            cy.get('[value="Login"]').click()
            cy.get('[value="MedicalServices"]').click()

        })
    })

    it("to launch the eTAR Application", function () {

        /*// Visit the eTAR Website

        cy.visit("http://sysdev.softsol.com/")

        // Enter the Provider ID and Owner No. and click on "Login button"

        cy.get('[id="pname"]').type('00A088470')
        cy.get('[id="oname"]').type('01')
        cy.get('[value="Login"]').click()*/

        // Click on "Medical Services" hyperlink

        cy.get('[id="MedicalService"]').click()
        cy.wait(2000)

        // Click on "Create New TAR"

        cy.get('tbody>tr:nth-child(2)>td>ul>li:nth-child(1)>a').click()
        cy.wait(6000)
    })
})
