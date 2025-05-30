import { faker } from '@faker-js/faker'

describe('To Launch the Application', function () {

    beforeEach(function () {
        cy.visit('https://testautomationpractice.blogspot.com/')
    })

    it('Test case 1', function () {
        const firstName = faker.person.firstName()
        cy.get('#name').type(firstName)
    })
    it.skip('Test case 2', function () {
        const email = faker.internet.email
        cy.get('#email').type(email)
    })
    it.only('Test case 3', function () {
        const phone = faker.phone.number()
        cy.get('#phone').type(phone)
    })
})