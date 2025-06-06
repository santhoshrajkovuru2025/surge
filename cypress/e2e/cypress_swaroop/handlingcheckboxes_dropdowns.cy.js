describe('toautomatecheckboxes', function(){

    beforeEach(function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    })
    it('checkboxes',function(){
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2','option3']).should('be.checked')
    })
    // Handling static drop- downs
    it('handlingDropdrowns',function(){
        cy.get('select').select('option2').should('have.value','option2')
    })
    // handling dynamuc drop-downs
    it.only('selectionofvaluesindynamicdropdowns',function(){

        cy.get('#autocomplete').type('ind')

        cy.get('.ui-menu-item div').each(($el, index, $list) => {

        if($el.text()==="India")
        {
            $el.click()
        }
        })

    cy.get('#autocomplete').should('have.value','India')
    })
})