describe("To automate Automation Testing",()=>{
    
    it("To Test click operation",()=>{
        cy.visit('https://www.apollohospitals.com/')
        cy.get('[id="closePopup"]').click()
        cy.xpath('(//span[@class="menu-icon"])[1]').invoke('show')
        cy.xpath('(//span[@class="menu-text"])[3]').invoke('show')
        cy.contains('Dr. Preetha Reddy').click({force:true})
    })
    it(' to test the functionality of the hyperlinks',()=>{
        cy.visit('https://www.amazon.in/')
        cy.get('[id="twotabsearchtextbox"]').type('JBL Airpods')
        cy.get('[id="nav-search-submit-button"]').click()
      //  cy.get('[id="p_36/range-slider_slider-item_upper-bound-slider"]').invoke('attr','90').trigger('aria-valuenow')
      //cy.xpath('(//a[@class="a-link-normal s-line-clamp-2 s-link-style a-text-normal"])[1]').invoke('removeAttr','target').click()
        cy.xpath('//span[text()="JBL New Launch Live Beam 3 TWS,Hi-Res Audio True ANC Earbuds,Smart Case with Touch Display,48H Playtime,Wireless Charging,6 Mic,Multipoint Connection,Ip55 Proof, Headphones App,Personi-Fi 3.0 (Black)"]').invoke('removeAttr','target').click()
    })
    it('TochandleChildWindows',function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
            cy.get('#opentab').invoke('removeAttr','target').click()
            cy.origin('https://www.qaclickacademy.com/',()=> {
                cy.get('#navbarSupportedContent  a[href*="about"]').click()
                cy.get('.mt-50').should('contain','QAClick Academy')
            })
    })
    it.only('webTables',()=>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {

            const text = $e1.text()
            if(text.includes("Python"))
                {
                cy.get("tr td:nth-child(2)").eq(index).next().then(function(price)
                {
                    const priceText= price.text() 
                    expect(priceText).to.equal('25')
                })
            }
        })
    })
})