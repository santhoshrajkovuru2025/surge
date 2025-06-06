///<reference types ='cypress'/>

describe('tocreateAutomobile', () => {
    beforeEach('toLogintoURL', () => {
        //Login URL
        cy.visit('https://sampleapp.tricentis.com/101/index.php')
    })
    it('tocreateAutomobile', () => {
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
        cy.xpath('//a[@id="viewquote"]').click()
        // To Navigate to the Send Quote
        cy.xpath('//button[@id="nextsendquote"]').click({force:true})
        // To Enter the Email Id
        cy.xpath('//input[@id="email"]').type('Send@test.com')
        //To enter the Username
        cy.xpath('//input[@id="username"]').type('Alice.Joe109')
        //To enter the password
        cy.xpath('//input[@id="password"]').type('Alicejoe1092')
        // To re-enter the password
        cy.xpath('//input[@id="confirmpassword"]').type('Alicejoe1092')
    })

    it.only('toCreateAMotorCycle',()=>{
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
        cy.xpath('//a[@id="viewquote"]').click()
        // To Navigate to the Send Quote
        // cy.xpath('//button[@id="nextsendquote"]').click({force:true})
        // To Enter the Email Id
        cy.xpath('//input[@id="email"]').type('Send@test.com')
        //To enter the Username
        cy.xpath('//input[@id="username"]').type('Alice.Joe109')
        //To enter the password
        cy.xpath('//input[@id="password"]').type('Alicejoe1092')
        // To re-enter the password
        cy.xpath('//input[@id="confirmpassword"]').type('Alicejoe1092')
    })
})