/// <reference types="Cypress" />

class DashboardPage{


    selectsalesDD(){

        cy.get("a[href='#'] i[class = 'fa fa-shopping-cart']").click()
        
    }

    selectshipments(){

        cy.contains("Shipments").click()

    }
}

export default DashboardPage
