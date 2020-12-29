/// <reference types="Cypress" />
class ShipmentQuery
{
selectthirdorder()
{
  cy.get("a[href='/Admin/Order/ShipmentDetails/3']").click()        
}

setTrackingNumber(value)
{
cy.get('#TrackingNumber').clear().type(value)
cy.contains("Set tracking number").click()
}

selectShipments()
{
cy.contains("Shipments").click()
}

queryspecifictrackingnumber(value)
{
cy.get("[name='TrackingNumber']").type(value)
cy.get("#search-shipments").click()
}

    
verifyavailabilityofshipment()
{
    return cy.get('.dataTables_info')
}
}
export default ShipmentQuery

