import{faker} from '@faker-js/faker';

describe("The Test Suite Name: Faker ApI Test", function () {


    it("Test Case 1: Verify the ", function() {

        cy.visit('https://testautomationpractice.blogspot.com/')
        const firstName =faker.person.firstName()
        const email=faker.internet.email()
        cy.get('#name').type(firstName)
        cy.get('#email').type(email)
    })
})