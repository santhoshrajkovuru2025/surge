import { faker } from '@faker-js/faker'

describe('To write the Test Suite', function () {

    it('To write a Test case', function () {

        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.generateUser().then((user)=>{
            cy.get('#name').type(user.firstName)
            cy.get('#email').type(user.email)
            cy.get('#phone').type(user.Phone)
        })
    })
})

