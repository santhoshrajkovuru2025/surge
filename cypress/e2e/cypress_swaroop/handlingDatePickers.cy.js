describe('toAutomatethedatepickers', () => {

    it('Test1', () => {
        cy.visit('https://trytestingthis.netlify.app/')
        cy.get('#day').should('have.attr', 'type', 'date').type('2025-05-15').and('have.value', '2025-05-15')
    })
    it('Test2', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('#start-date').type('2025-05-15')
    })
    it('Test3', () => {
        cy.visit('https://qa-practice.netlify.app/bugs-form.html')
        Cypress.on('uncaught:exception', (err, runnable) => {
            console.error('Uncaught exception:', err);
            return false;
        });
        cy.get('[href="/calendar"]').click()
        cy.get('#range-date-calendar').click()
        cy.get('.drp-calendar.left .calendar-table tr:nth-child(4) td:nth-child(2)').wait(2000).click()
    })
    it.only('Test4', () => {
        cy.visit("https://www.goibibo.com/")
        cy.get('.sc-koXPp.bDtzaf').click()
        cy.get('.sc-12foipm-20.jPzQOy').eq(2).click()
        cy.get('.DayPicker-Month').eq(0).find('.fsw__date').each((e1) => {
            const date = e1.text()
            cy.log(e1)
            if (date === '24') {
                cy.wrap(e1).click()
            }
        })
    })
})