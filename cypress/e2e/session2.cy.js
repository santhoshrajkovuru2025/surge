describe("To Purchase an item", () => {
    beforeEach("sessionPractice", function () {
        var button1 = "Log out"
        cy.session(button1, () => {
            cy.visit('https://demowebshop.tricentis.com/')
            cy.get('[href="/login"]').click()
            cy.get('#Email').should('be.empty').type('venky.kudumula@gmail.com')
            cy.get('#Password').should('be.empty').type('Venky@Kudumula1$')
            cy.xpath('//input[@class="button-1 login-button"]').should('be.enabled').click()
        },
            {


                validate() {
                    cy.xpath('//a[@href="/logout"]').should('have.text', "Log out")
                }
            }

        );

    })
    it("toRegister", () => {
        cy.get('[href="/register"]').click().should('have.class', 'ico-register')
        cy.get('#gender-male').click().should('be.checked')
        cy.get('#FirstName').should('be.empty').type('Edward')
        cy.get('#LastName').should('have.class', 'text-box single-line').type('Barns')
        cy.get('#Email').type('Edward.Barns@outlook.com').should('have.value', 'Edward.Barns@outlook.com')
        cy.get('#Password').type('Edward@Barns2904').should('have.value', 'Edward@Barns2904')
        cy.get('#ConfirmPassword').type('Edward@Barns2904').should('have.value', 'Edward@Barns2904')
        // cy.get('#register-button').should('have.id','register-button').click().should('have.text','Your registration completed')
        //cy.xpath('//input[@class="button-1 register-continue-button"]').click()
    })

    it('toLoginToTheApplication', () => {
        //cy.get('[href="/login"]').click()
        //cy.get('#Email').should('be.empty').type('venky.kudumula@gmail.com')
        //cy.get('#Password').should('be.empty').type('Venky@Kudumula1$')
        //cy.xpath('//input[@class="button-1 login-button"]').should('be.enabled').click()
    })

    it.only('toSelectTheProduct', () => {

        // Annotations 
        cy.wait(5000)
        cy.xpath('(//a[normalize-space(text())="Computers"])[1]').click({force:true})
        cy.xpath('(//a[@href="/notebooks"])[4]').click()
        cy.xpath('//input[@value="Add to cart"]')
        cy.xpath('(//span[@class="cart-label"])[1]').click()
        cy.get('[id="checkout"]').click()
        cy.xpath('//button[@title="close"]').click()
        cy.get('[id="termsofservice"]').click()
        cy.get('[id="checkout"]').click()
        cy.get('[id="BillingNewAddress_CountryId"]').select('41')
        cy.get('[id="BillingNewAddress_City"]').type('Secunderabad')
        cy.get('[id="BillingNewAddress_Address1"]').type('H.No:2-5, Vidyanagar colony, secunderabad')
        cy.get('[id="BillingNewAddress_Address2"]').type('Hyderabad')
        cy.get('[id="BillingNewAddress_ZipPostalCode"]').type('5000081')
        cy.get('[id="BillingNewAddress_PhoneNumber"]').type('9000811341')
        cy.xpath('(//input[@class="button-1 new-address-next-step-button"])[1]').click()
        cy.xpath('(//input[@title="Continue"])[2]').click()
        cy.get('[id="shippingoption_2"]').click()
        cy.get('[class="button-1 shipping-method-next-step-button"]').click()
        cy.get('[id="paymentmethod_2"]').click()
        cy.get('[class="button-1 payment-method-next-step-button"]').click()
        cy.get('[id="CreditCardType"]').select('MasterCard')
        cy.get('[name="CardholderName"]').type('venky kudumula')
        cy.get('[id="CardNumber"]').type('5123456789012346')
        cy.get('[id="ExpireMonth"]').select('5')
        cy.get('[id="CardCode"]').type('123')
        cy.get('[class="button-1 payment-info-next-step-button"]').click()
        cy.get('[class="button-1 confirm-order-next-step-button"]').click().should('have.text', 'Your order has been successfully processed!')
        cy.get('[class="details"]').then((orderid) => {
            cy.log(orderid)
        })
    })
    it('toWishlistTheItem', () => {
        cy.get('[href="/login"]').click()
        cy.get('#Email').should('be.empty').type('venky.kudumula@gmail.com')
        cy.get('#Password').should('be.empty').type('Venky@Kudumula1$')
        cy.xpath('//input[@class="button-1 login-button"]').should('be.enabled').click()
        cy.xpath('(//a[@href="/build-your-cheap-own-computer"])[1]').click()
        cy.get('[value="91"]').click()
        cy.get('[value="65"]').click()
        cy.get('[value="58"]').click()
        cy.get('[value="94"]').click()
        cy.get('[value="Add to compare list"]').click()
    })
    it('toAddNotebooks', function () {
        cy.get('[href="/login"]').click()
        cy.get('#Email').should('be.empty').type('venky.kudumula@gmail.com')
        cy.get('#Password').should('be.empty').type('Venky@Kudumula1$')
        cy.xpath('//input[@class="button-1 login-button"]').should('be.enabled').click()
        cy.xpath('(//a[@href="/books"])[1]').click()
        cy.xpath('(//h2[@class="product-title"])[1]').click()
        cy.get("#add-to-cart-button-13").click()
        cy.get('[class="content"]').should('contain', 'The product has been added to your shopping cart')

    })
})