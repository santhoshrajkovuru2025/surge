///<reference types ='cypress'/>

describe('toAutomatetheVInsuranceApplication', () => {
    beforeEach('toLogintoURL', () => {
        //Login URL
        cy.fixture('Tricenties/Automobile').then(function(data){
            cy.visit(this.data.loginURL)
        })
    })
    it("quoteforAutombile",() => {
        cy.get('#nav_automobile').click()
        // To select the Make of the Car
        cy.xpath('//select[@id="make"]').select('Nissan')
        // To enter the Engine Performance
        cy.xpath('//input[@id="engineperformance"]').type('1400')
        // To Enter the date of manufacturer
        cy.xpath('//button[@id="opendateofmanufacturecalender"]').type('06/10/2024')
        // To select the No. of Seats
        cy.xpath('//select[@id="numberofseats"]').select('5')
        // To select the Type of fuel
        cy.xpath('//select[@id="fuel"]').select("Petrol")
        // To enter the price
        cy.xpath('//input[@id="listprice"]').type('15000')
        // To enter the vehicle number
        cy.xpath('//input[@id="licenseplatenumber"]').type('7XJH294')
        // To enter the Annaual Mileage
        cy.xpath('//input[@id="annualmileage"]').type('3000')
        // To navigate t0 the Enter the insurance data block
        cy.xpath('//button[@id="nextenterinsurantdata"]').click()
        // To enter the Customer First Name
        cy.xpath('//input[@id="firstname"]').type('Alice')
        // To enter the customer Last Name
        cy.xpath('//input[@id="lastname"]').type('Joe')
        // To provide the customer date of birth
        cy.xpath('//input[@id="birthdate"]').type('06/01/1988')
        // To select the gender of the customer
        cy.xpath('//input[@id="genderfemale"]').click({ force: true })
        // To add the street address of the customer
        cy.xpath('//input[@id="streetaddress"]').type('calfornia')
        // To select the country of the customer
        cy.xpath('//select[@id="country"]').select('United States')
        // To enter the Zip code
        cy.xpath('//input[@id="zipcode"]').type('98450')
        // To enter the city of the customer
        cy.xpath('//input[@id="city"]').type('Fremont')
        // To know the select the occupation
        cy.xpath('//select[@id="occupation"]').select('Farmer')
        // to know the Hobbies of the customer
        cy.xpath('//input[@id="cliffdiving"]').click({ force: true })
        // To enter the website
        cy.xpath('//input[@id="website"]').type('www.framer.com')
        // To upload the customer vehicle image
        // cy.xpath('//button[@id="open"]').selectFile('cypress/fixtures/image.png')
        // To navigate to the Product data page
        cy.xpath('//button[@id="nextenterproductdata"]').click()
        // To enter the start date of the Vehicle
        cy.xpath('//button[@id="openstartdatecalender"]').type('07/15/2035')
        // to select the insurance amount
        cy.xpath('//select[@id="insurancesum"]').select('10.000.000,00')
        //  To select the Merit Rating
        cy.xpath('//select[@id="meritrating"]').select('Malus 13')
        // To cover the damage insurance
        cy.xpath('//select[@id="damageinsurance"]').select('Full Coverage')
        // To select the Optional Products
        cy.xpath('//input[@id="LegalDefenseInsurance"]').click({ force: true })
        // to select the Courtesy Car
        cy.xpath('//select[@id="courtesycar"]').select('Yes')
        // To navigate to the Price
        cy.xpath('//button[@id="nextselectpriceoption"]').click({ force: true })
        //To select the option
        cy.xpath('(//span[@class="ideal-radio"])[4]').click()
        // To view quote
        //cy.xpath('//a[@id="viewquote"]').click()
        // To Navigate to the Send Quote
        cy.xpath('//button[@id="nextsendquote"]').click({ force: true })
        // To Enter the Email Id
        cy.xpath('//input[@id="email"]').type('Send@test.com')
        //To enter the Username
        cy.xpath('//input[@id="username"]').type('Alice.Joe109')
        //To enter the password
        cy.xpath('//input[@id="password"]').type('Alicejoe1092')
        // To re-enter the password
        cy.xpath('//input[@id="confirmpassword"]').type('Alicejoe1092')
        // To enter the comments
        cy.xpath('//textarea[@id="Comments"]').type('comments')
        // To send the application
        cy.xpath('//button[@id="sendemail"]').click()
        //Verify the popup message
        cy.xpath('//h2[text()="Sending e-mail success!"]', { timeout: 10000 }).should('be.visible')
        //Click on OK button in popup message
        cy.xpath('//button[@class="confirm"]').click({ force: true })
        //Back to main menu (Main page)
        cy.xpath('//a[@id="backmain"]').click({ force: true })

    })
    it("quoteforMotorcycle",() =>{
        //Click on the 'Motor Cycle
        cy.xpath('(//a[@id="nav_motorcycle"])[1]').click()
        // select the Make
        cy.xpath('//select[@id="make"]').select('Honda')
        // To select the Model
        cy.xpath('//select[@id="model"]').select('Three-Wheeler')
        // To enter the Cylinder Capacity
        cy.xpath('//input[@id="cylindercapacity"]').type('1600')
        // To enter the Engine Performance
        cy.xpath('//input[@id="engineperformance"]').type('1400')
        // To Enter the date of manufacturer
        cy.xpath('//button[@id="opendateofmanufacturecalender"]').type('06/10/2024')
        // To select the No. of Seats
        cy.xpath('//select[@id="numberofseatsmotorcycle"]').select('3')
        // To enter the price
        cy.xpath('//input[@id="listprice"]').type('15000')
        // To enter the Annaual Mileage
        cy.xpath('//input[@id="annualmileage"]').type('3000')
        // To navigate t0 the Enter the insurance data block
        cy.xpath('//button[@id="nextenterinsurantdata"]').click()
        // To enter the Customer First Name
        cy.xpath('//input[@id="firstname"]').type('Alice')
        // To enter the customer Last Name
        cy.xpath('//input[@id="lastname"]').type('Joe')
        // To provide the customer date of birth
        cy.xpath('//input[@id="birthdate"]').type('06/01/1988')
        // To select the gender of the customer
        cy.xpath('//input[@id="genderfemale"]').click({ force: true })
        // To add the street address of the customer
        cy.xpath('//input[@id="streetaddress"]').type('calfornia')
        // To select the country of the customer
        cy.xpath('//select[@id="country"]').select('United States')
        // To enter the Zip code
        cy.xpath('//input[@id="zipcode"]').type('98450')
        // To enter the city of the customer
        cy.xpath('//input[@id="city"]').type('Fremont')
        // To know the select the occupation
        cy.xpath('//select[@id="occupation"]').select('Farmer')
        // to know the Hobbies of the customer
        cy.xpath('//input[@id="cliffdiving"]').click({ force: true })
        // To enter the website
        cy.xpath('//input[@id="website"]').type('www.framer.com')
        // To upload the customer vehicle image
        // cy.xpath('//button[@id="open"]').selectFile('cypress/fixtures/image.png')
        // To navigate to the Product data page
        cy.xpath('//button[@id="nextenterproductdata"]').click()
        // To enter the start date of the Vehicle
        cy.xpath('//button[@id="openstartdatecalender"]').type('07/15/2035')
        // to select the insurance amount
        cy.xpath('//select[@id="insurancesum"]').select('10.000.000,00')
        // To cover the damage insurance
        cy.xpath('//select[@id="damageinsurance"]').select('Full Coverage')
        // To select the Optional Products
        cy.xpath('//input[@id="LegalDefenseInsurance"]').click({ force: true })
        // To navigate to the Price
        cy.xpath('//button[@id="nextselectpriceoption"]').click({ force: true })
        //To select the option
        cy.xpath('(//span[@class="ideal-radio"])[4]').click()
        // To view quote
        // cy.xpath('//a[@id="viewquote"]').click()
        // To Navigate to the Send Quote
        cy.xpath('//button[@id="nextsendquote"]').click({ force: true })
        // To Enter the Email Id
        cy.xpath('//input[@id="email"]').type('Send@test.com')
        //To enter the Username
        cy.xpath('//input[@id="username"]').type('Alice.Joe109')
        //To enter the password
        cy.xpath('//input[@id="password"]').type('Alicejoe1092', { log: false })
        // To re-enter the password
        cy.xpath('//input[@id="confirmpassword"]').type('Alicejoe1092', { log: false })
        // To enter the comments
        cy.xpath('//textarea[@id="Comments"]').type('comments')
        // To send the application
        cy.xpath('//button[@id="sendemail"]').click()
        //Verify the popup message
        cy.xpath('//h2[text()="Sending e-mail success!"]', { timeout: 10000 }).should('be.visible')
        //Click on OK button in popup message
        cy.xpath('//button[@class="confirm"]').click({ force: true })
        //Back to main menu (Main page)
        cy.xpath('//a[@id="backmain"]').click({ force: true })

    })
    it("quoteforTRUCK",() =>{
        //click on TRUCK from Main Menu
        cy.xpath('(//a[@id="nav_truck"])[1]').click()
        //Verifying the screen after click on TRUCK from Main Menu
        cy.xpath('//Span[@id="selectedinsurance"]').should("be.visible")
        ///Enter VECHILE DATA
        //selecting the Make value from the Dropdown
        /*cy.xpath('//select[@id="make"]').each((t1)=>{
                    const textdata=t1.text()
                    cy.log(textdata)
                    if(textdata==='Honda'){
                        cy.wrap(t1).select(t1)
                    }
 
        })*/
        cy.xpath('//select[@id="make"]').select('Honda')
        //Enter Engine Performance[Kw] must be 1 to 2000
        cy.xpath('//input[@id="engineperformance"]').type('1500')
        //Verifying the Engine Performance[Kw] error message if user enters more than 2000
        cy.xpath('//span[text()="Must be a number between 1 and 2000"]').should('not.be.visible')
        //Enter Date of Manufacture
        cy.xpath('//input[@id="dateofmanufacture"]').type('04/05/2025')
        //Select No of Seats
        cy.xpath('//select[@id="numberofseats"]').select('7')
        //Select Fuel Type
        cy.xpath('//select[@id="fuel"]').select('Diesel')
        //Enter Payload[kg] between 1 to 1000
        cy.xpath('//input[@id="payload"]').type('999')
        //Enter Total Weight[kg] between 100 to 50000
        cy.xpath('//input[@id="totalweight"]').type('34000')
        //Enter List Price[$] between 500 to 100000
        cy.xpath('//input[@id="listprice"]').type('50000')
        //Enter License Plate Number below 10 characters
        cy.xpath('//input[@id="licenseplatenumber"]').type('9873214560')
        //Enter Annual Mileage [mi] between 100 to 100000
        cy.xpath('//input[@id="annualmileage"]').type('999')
        //Click on NEXT button
        cy.xpath('//button[@id="nextenterinsurantdata"]').click()
        //Verify the sucessfully navigate to next page or not
        cy.xpath('//label[text()="First Name"]').should('be.visible')

        ///Enter INSURANCE DATA
        //Enter First Name
        cy.xpath('//input[@id="firstname"]').type('SWAROOP')
        //Enter Last Name
        cy.xpath('//input[@id="lastname"]').type('REDDY')
        //Enter DOB
        cy.xpath('//input[@id="birthdate"]').type('05/05/1987')
        //Selec Gender Radio button
        cy.xpath('//input[@id="gendermale" and @value="Male"]').check({ force: true })
        //Enter the Street Address
        cy.xpath('//input[@id="streetaddress"]').type('C3-347,Chanda Nagar,Huda Colony')
        //Select the Country filter list
        cy.xpath('//select[@id="country"]').select('India')
        //Enter Zip code
        cy.xpath('//input[@id="zipcode"]').type('500050')
        //Enter city
        cy.xpath('//input[@id="city"]').type('Hyderabad')
        //Select Occupation
        cy.xpath('//select[@id="occupation"]').select('Farmer')
        //Check the Hobbies Checkbox
        cy.xpath('//input[@id="speeding"]').check({ force: true })
        //Enter web site URL
        cy.xpath('//input[@id="website"]').type('www.testing.com')
        //Attach Picture
        cy.xpath('//input[@id="picture"]').attachFile('image.png')
        //Click on Next button
        cy.xpath('//button[@id="nextenterproductdata"]').click()
        //Verify the screen navigate to next screen or not
        cy.xpath('//label[text()="Start Date"]').should('be.visible')

        ///Enter Product Data
        //Enter Start Date
        cy.xpath('//input[@id="startdate"]').type('06/05/2026')
        //Select Insurance Sum [$] from list
        cy.xpath('//select[@id="insurancesum"]').select(3)
        //Select Damage Insurance from list
        cy.xpath('//select[@id="damageinsurance"]').select('Full Coverage')
        //Check the Optional Products checkbox
        cy.xpath('//input[@id="EuroProtection"]').check({ force: true })
        //Click on Next Button
        cy.xpath('//button[@id="nextselectpriceoption"]').click()
        //Verify the screen navigate to next screen or not
        cy.xpath('//table[@id="priceTable"]').should('be.visible')

        ///Select Price option
        //Select Radio button (Silver, Gold, Platinum and Ultimate)
        cy.xpath('//input[@id="selectgold"]').check({ force: true }).should('be.checked')
        //Download the Quote
        cy.xpath('//a[@id="downloadquote"]', { timeout: 20000 }).click()
        //Verify the screen auto navigate to next screen
        // cy.xpath('//input[@id="email"]',{ timeout: 20000 }).should('be.visible')
        //Click on NEXT button
        cy.xpath('//button[@id="nextsendquote"]').click({ force: true })

        ///Send quote to mail
        //Enter Email
        cy.xpath('//input[@id="email"]').type('swaroop910@gmail.com', { force: true })
        //Enter Phone Number
        cy.xpath('//input[@id="phone"]').type('9696123123', { force: true })
        //Enter Username
        cy.xpath('//input[@id="username"]').type('swaroop910', { force: true })
        //Enter Password
        cy.xpath('//input[@id="password"]').type('Swaroop@910', { force: true }, { log: false })
        //Enter Confirm Password
        cy.xpath('//input[@id="confirmpassword"]').type('Swaroop@910', { force: true }, { log: false })
        //Enter Comments
        cy.xpath('//textarea[@id="Comments"]').type('In Cypress automation, the Page Object Model (POM) is a design pattern that organizes test code by creating objects (classes) that represent web pages or components of a web application. ', { force: true })
        //Click on Send button
        cy.xpath('//button[@id="sendemail"]').click({ force: true })
        //Verify the popup message
        cy.xpath('//h2[text()="Sending e-mail success!"]', { timeout: 10000 }).should('be.visible')
        //Click on OK button in popup message
        cy.xpath('//button[@class="confirm"]').click({ force: true })
        //Back to main menu (Main page)
        cy.xpath('//a[@id="backmain"]').click({ force: true })
    })
    it("quoteforCamper",() =>{
        //to click the 'Camper' hyperlink
        cy.xpath('(//a[@id="nav_camper"])[1]').click()
        //to select the make of camper
        cy.xpath('//select[@id="make"]').select('BMW')
        //to enter the Engine performance
        cy.xpath('//input[@id="engineperformance"]').type('1400')
        //to select the date of manufacturer
        cy.xpath('//input[@id="dateofmanufacture"]').type('04/05/2025')
        // to select the No.of seats
        cy.xpath('//select[@id="numberofseats"]').select('5')
        //to select the right hand drive
        cy.xpath('//input[@id="righthanddriveno"]').check({ force: true })
        // to select the fuel type
        cy.xpath('//select[@id="fuel"]').select('Petrol')
        // to enter the payload
        cy.xpath('//input[@id="payload"]').type('900')
        // to enter the total weight
        cy.xpath('//input[@id="totalweight"]').type('5000')
        // to enter the list price
        cy.xpath('//input[@id="listprice"]').type('95000')
        // to enter the Annual Milleage
        cy.xpath('//input[@id="annualmileage"]').type('100000')

        // To enter Insurance data
        cy.xpath('//button[@id="nextenterinsurantdata"]').click()
        // to enter the First name
        cy.xpath('//input[@id="firstname"]').type('joe')
        // to enter the last name
        cy.xpath('//input[@id="lastname"]').type('Alice')
        // to enter the birth date
        cy.xpath('//input[@id="birthdate"]').type('04/05/2005')
        // to check the gender
        cy.xpath('//input[@id="genderfemale"]').check({ force: true })
        // to select the country
        cy.xpath('//select[@id="country"]').select('Estonia')
        // to enter the zip Code
        cy.xpath('//input[@id="zipcode"]').type('98450')
        // to select the occupation
        cy.xpath('//select[@id="occupation"]').select('Employee')
        // to select the hobbie
        cy.xpath('//input[@id="bungeejumping"]').check({ force: true })
        // to enter the Product data
        cy.xpath('//button[@id="nextenterproductdata"]').click({ force: true })
        // to select the start date
        cy.xpath('//input[@id="startdate"]').type('07/15/2025')
        // to select the insurance sum
        cy.xpath('//select[@id="insurancesum"]').select('5.000.000,00')
        // to select the damage insurance
        cy.xpath('//select[@id="damageinsurance"]').select('Full Coverage')
        // to select the optional products
        cy.xpath('//input[@id="LegalDefenseInsurance"]').check({ force: true })
        // to select the price
        cy.xpath('//button[@id="nextselectpriceoption"]').click({ force: true })
        // to select the option
        cy.xpath('//input[@id="selectultimate"]').check({ force: true })
        //  to send the next quote
        cy.xpath('//button[@id="nextsendquote"]').click({ force: true })

        ///Send quote to mail
        //Enter Email
        cy.xpath('//input[@id="email"]').type('swaroop910@gmail.com', { force: true })
        //Enter Phone Number
        cy.xpath('//input[@id="phone"]').type('9696123123', { force: true })
        //Enter Username
        cy.xpath('//input[@id="username"]').type('swaroop910', { force: true })
        //Enter Password
        cy.xpath('//input[@id="password"]').type('Swaroop@910', { force: true }, { log: false })
        //Enter Confirm Password
        cy.xpath('//input[@id="confirmpassword"]').type('Swaroop@910', { force: true }, { log: false })
        //Enter Comments
        cy.xpath('//textarea[@id="Comments"]').type('In Cypress automation, the Page Object Model (POM) is a design pattern that organizes test code by creating objects (classes) that represent web pages or components of a web application. ', { force: true })
        //Click on Send button
        cy.xpath('//button[@id="sendemail"]').click({ force: true })
        //Verify the popup message
        cy.xpath('//h2[text()="Sending e-mail success!"]', { timeout: 10000 }).should('be.visible')
        //Click on OK button in popup message
        cy.xpath('//button[@class="confirm"]').click({ force: true })
        //Back to main menu (Main page)
        cy.xpath('//a[@id="backmain"]').click({ force: true })

    })
})