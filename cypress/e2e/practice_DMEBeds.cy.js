
describe('To Launch Application', function () {

    beforeEach(function () {
        cy.fixture('loginDetails').then(function (data) {
            this.data = data
            cy.visit(this.data.url)
            cy.get('#pname').type(this.data.pname)
            cy.get('#oname').type(this.data.oname)
            cy.get('#emailId').type(this.data.email)
            cy.xpath('//button[text()="Login"]').click()
            cy.wait(2000)
            cy.xpath('//button[text()="MedicalServices"]').click()
            Cypress.on('uncaught:exception', (err, runnable) => {
                // Log the error or handle it as needed
                console.error('Uncaught exception:', err);
                // Returning false prevents Cypress from failing the test
                return false;
            });
            cy.wait(2000)
        })
    })

    it('To Create a service', function () {

        cy.get('tbody>tr:nth-child(2)>td>ul>li:nth-child(1)>a').click()

        // to Enter the provider Information
        cy.fixture('providerData').then(function (Provider) {
            this.Provider = Provider
            cy.xpath('//input[@name="MedCert"]').click()
            cy.xpath('//input[@name="txtTARCompBy"]').type(this.Provider.txtTARCompBy)
            cy.xpath('//input[@name="Submit"]').click()
        })
        // To Enter Patient Information
        cy.fixture('patientData').then(function (patient) {
            this.patient = patient
            cy.xpath('//input[@name="MedicalID"]').type(this.patient.MedicalID)
            cy.xpath('//input[@name="PatLstNme"]').type(this.patient.PatLstNme)
            cy.xpath('//input[@name="PatFrstNme"]').type(this.patient.PatFrstNme)
            cy.xpath('//input[@name="PatDOB"]').type(this.patient.PatDOB)
            cy.xpath('(//input[@name="Gender"])[1]').click()
            cy.xpath('//input[@name="Submit"]').click()
        })
        // To Register a Service for 'DME-Beds' service
        cy.fixture('serviceDetails').then(function (service) {
            this.service=service
            cy.xpath('//a[text()=" Beds"]').click()
            cy.xpath('//input[@name="ServiceCode"]').type(this.service.DME_Beds)
            cy.xpath('//input[@name="ModifierCode1"]').type(this.service.Modifier)
            cy.xpath('//input[@name="TotUnitsReq"]').type(this.service.Totalunits_1)
            cy.xpath('//input[@name="FromDate"]').clear().type(this.service.FromDate_1)
            cy.xpath('//input[@name="ThruDate"]').clear().type(this.service.ThruDate_1)
            cy.xpath('//input[@name="AdmitDate"]').clear().type(this.service.AdmitDate_1)
            cy.xpath('//input[@name="DischDate"]').clear().type(this.service.DischDate_1)
            cy.xpath('//select[@name="POS"]').select("12")
            cy.xpath('//select[@name="Serv_ICDCodeType"]').select("0")
            cy.xpath('//input[@name="Serv_ICD9_1"]').type(this.service.Serv_ICD9_1_1)
            cy.xpath('//input[@name="Serv_DateOnset_1"]').clear().type(this.service.Serv_DateOnset_1_1)

            // Physician Information
            cy.xpath('//textarea[@name="PhysPresc"]').type(this.service.PhysPresc)
            cy.xpath('//input[@name="PhysLicNum"]').type(this.service.PhysLicNum)
            cy.xpath('//input[@name="PhysName"]').type(this.service.PhysName)
            cy.xpath('//input[@name="PhysPhne1"]').type(this.service.PhysPhne1)
            cy.xpath('//input[@name="PhysPhne2"]').type(this.service.PhysPhne2)
            cy.xpath('//input[@name="PhysPhne3"]').type(this.service.PhysPhne3)
            cy.xpath('//input[@name="PrescriptDte"]').type(this.service.PrescriptDte)

            // DME Attachment Form
            cy.xpath('(//input[@name="IndpOper"])[2]').click()
            cy.xpath('(//input[@name="SafeOper"])[2]').click()
            cy.xpath('(//input[@name="home_access"])[2]').click()
            cy.xpath('//input[@name="TurningSchedule"]').type(this.service.TurningSchedule)
            cy.xpath('//select[@name="UTS_1"]').select("B")
            cy.xpath('//select[@name="UTSRsn_1"]').select("4")
            cy.xpath('//input[@name="LabDate"]').clear().type(this.service.LabDate)
            cy.xpath('//input[@name="Submit4"]').click()
        })

        // Navigate to the TAR Summary Page
        cy.xpath('//a[@href="softsolwebservice?serviceName=softsolwebservice&templateName=TARSummary.htm&CurrentPage=serv_sel"]').click()
        cy.scrollTo('bottom')
        // cy.get('#button19').click()
        // select the required TAR Attachments
        // cy.xpath('(//input[@name="Attach_Ind"])[6]').click()
        // Submit the TAR
        // cy.get('[name="submit1"]').click()

    })
})