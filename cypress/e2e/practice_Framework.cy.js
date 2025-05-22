import{faker} from '@faker-js/faker';

describe("Test Suite: To Test the Application - Automation Testing Practice", function () {

    beforeEach(function () {

        cy.fixture('notAFrame').then(function(data) {

            this.data = data
            cy.visit(this.data.WebsiteURL)
            // to get the url of the page.
            cy.url().then(function(curl){
                cy.log(curl)
            })
            // To get know the title of the page
            cy.title().then(function(ctitle){
                cy.log(ctitle)
            })
        })
    })
    it("Test case 1: Automate Text fields through the FakerAPI", function () {

        const fn=faker.person.fullName();
        const e=faker.internet.email();
        cy.get('#name').type(fn)
        cy.get('#email').type(e)
    })
    it("Test case 2: to Test Drag and Drop", function() {
        cy.wait(2000)
        cy.get('#draggable').drag('#droppable', {force:true})
    })
    it("Test Case 3: To Test the file upload", ()=>{

        cy.get('#singleFileInput').attachFile('Hi.pdf')
    })
    it("Test case 4: to Test web tables", ()=> {

        cy.xpath('//table[@name="BookTable"]').contains('td', 'Javascript').should('have.text','Javascript')
    })
    it("Test case 5: To Test Simple Alerts", ()=>{
        cy.get('#alertBtn').click()
        cy.on('window:alert',(t)=>{
        expect(t).to.contains('I am an alert box!')   
        })
    })
    it.only("Test case 6: To Test Confirm Alerts (case 1)", ()=>{
        cy.get('#confirmBtn').click()
        cy.on('window:confirm',(f)=>{
            expect(f).to.equal('Press a button!')
            return true;
        })
    })
    it.only("Test case 6: To Test Confirm Alerts (case 2)", ()=>{
        cy.get('#confirmBtn').click()
        cy.on('window:confirm',(f1)=>{
            expect(f1).to.equal('Press a button!')
            return false;
        })
    })
})

