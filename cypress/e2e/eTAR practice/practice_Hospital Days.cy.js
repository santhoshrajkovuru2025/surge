
describe('To test the eTAR Application', function () {


    beforeEach(function () {
        cy.fixture('loginDetails').then(function (data) {
            this.data = data
            cy.visit(this.data.url)
            cy.get('[id="pname"]').type(this.data.pname).should('have.value', '00A088470')
            cy.get('[id="oname"]').type(this.data.oname).should('have.value','456')
            cy.get('[id="emailId"]').type(this.data.email).should('have.value', 'santhoshraj.kovuru@softsol.com')
            cy.get('[value="Login"]').click()
            cy.wait(2000)
            cy.xpath('(//button[@name="submitButton"])[2]').click()

            Cypress.on('uncaught:exception', (err, runnable) => {
                // Log the error or handle it as needed
                console.error('Uncaught exception:', err);

                // Returning false prevents Cypress from failing the test
                return false;
            });

            cy.wait(2000)

        })
    })

    it('Launch eTAR Application', function () {

        // To Create a TAR from eTAR by clicking on Create a New TAR"

        cy.fixture('links').then(function (link) {
            
            this.link =link
            cy.get(this.link.createTAR).click()

        })

        // To Enter the details of the Provider Informaion

        cy.fixture('providerData').then(function (provider) {

            this.provider = provider

            cy.get('[name="MedCert"]').click().should('be.checked')
            cy.get('[name="ProvFax_area"]').type(this.provider.ProvFax_area).should('have.value', '888')
            cy.get('[name="ProvFax_pre"]').type(this.provider.ProvFax_pre).should('have.value', '889')
            cy.get('[name="ProvFax_sufx"]').type(this.provider.ProvFax_sufx).should('have.value','9238')
            cy.get('[name="txtProvContNme"]').type(this.provider.txtProvContNme).should('have.value', 'Judith Mauzy')
            cy.get('[name="txtTARCompBy"]').type(this.provider.txtTARCompBy).should('have.value', '01984')
            cy.get('[name="ContPhne_area"]').type(this.provider.ContPhne_area).should('have.value', '916')
            cy.get('[name="ContPhne_pre"]').type(this.provider.ContPhne_pre).should('have.value', '858')
            cy.get('[name="ContPhne_sufx"]').type(this.provider.ContPhne_sufx).should('have.value', '8452')
            cy.get('[name="ContPhne_ext"]').type(this.provider.ContPhne_ext).should('have.value', '412')
            cy.get('[value="Continue"]').click()

        })

        // To Enter the details in the Patient Information

        cy.fixture('patientData').then(function (patient) {

            this.patient = patient

            cy.get('[name="MedicalID"]').type(this.patient.MedicalID).should('have.value','000000111')
            cy.get('[name="PatLstNme"]').type(this.patient.PatLstNme).should('have.value', 'Yi')
            cy.get('[name="PatFrstNme"]').type(this.patient.PatFrstNme).should('have.value','Dale')
            cy.get('[name="PatDOB"]').type(this.patient.PatDOB).should('have.value','12221966')
            cy.xpath('(//input[@name="Gender"])[1]').click().should('be.checked')
            cy.get('[name="Submit"]').click()
        })

        // To click on the required service

            cy.xpath('//a[text()=" Hospital Days"]').click()

        // To enter the details in the service and Attachment and Submit.

        cy.fixture('serviceDetails').then(function(HospitalDays){

            this.HospitalDays= HospitalDays
            

            cy.get('[name="ServiceCode"]').type(this.HospitalDays.ServiceCode).should('have.value','2')
            cy.get('[name="TotUnitsReq"]').type(this.HospitalDays.TotalUnits).should('have.value','1')
            cy.get('[name="FromDate"]').clear().type(this.HospitalDays.FromDate).should('have.value','03062025')
            cy.get('[name="ThruDate"]').clear().type(this.HospitalDays.ThruDate).should('have.value','03062025')
            cy.get('[name="AdmitDate"]').clear().type(this.HospitalDays.AdmitDate).should('have.value','03062025')
            cy.get('[name="DischDate"]').clear().type(this.HospitalDays.DischargeDate).should('have.value','03062025')
            cy.get('select[name="Serv_ICDCodeType"]').select("0")
            cy.get('[name="Serv_ICD9_1"]').type(this.HospitalDays.Serv_ICD9_1).should('have.value','A52.02')
            cy.get('[name="Medical_Just"]').type(this.HospitalDays.Info)
            cy.get('[name="Submit"]').click()
        })

            // To navigate to TAR Summary

            cy.xpath('//a[@href="softsolwebservice?serviceName=softsolwebservice&templateName=TARSummary.htm&CurrentPage=serv_sel"]').click()
            cy.scrollTo('bottom')
            cy.get('#button19').click()
            cy.xpath('(//input[@name="Attach_Ind"])[6]').click()
            cy.get('[name="submit1"]').click()

            //To verify at TAR Inquiry


            

        
    })
})
