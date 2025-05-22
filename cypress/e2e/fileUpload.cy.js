describe("Launch the browser for the scroll bar", function(){

    beforeEach(function(){

        cy.visit('https://trytestingthis.netlify.app/')
    })

    it("To upload the file", function(){

        cy.get('#myfile').attachFile('Hi.pdf')

    })

})
