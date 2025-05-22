
describe("To Test drag and Drop functionality", function(){

    

    it("drag and drop", function(){
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.wait(2000)
        cy.get('[id="draggable"]').drag('[id="droppable"]', {force:true})
        //cy.xpath('(//span[@class="ui-slider-handle ui-corner-all ui-state-default"])[1]').invoke('val','80').trigger('input').should('have.value','80')
        cy.xpath('(//span[@class="ui-slider-handle ui-corner-all ui-state-default"])[1]').invoke('attr','style','left: 45%;').trigger('attr',{force:true})
        //cy.get('[id="slider-range"]').invoke('attr','style','left: 45%;').trigger('style',{force:true})
    
    })
})