/// <reference types="Cypress" />

import LoginPage from '../../../../support/pageObjects/LoginPage'
import Dashboardpage from '../../../../support/pageObjects/DashboardPage'
import ShipmentQuery from '../../../../support/pageObjects/ShipmentQuery'
import { Given,When,Then, And } from 'cypress-cucumber-preprocessor/steps';
const lp=new LoginPage()
const sh=new Dashboardpage()
const sq = new ShipmentQuery()
let trackingnumber
//Opening the site and logging into it
Given('I open the website and login to the site',function()
{
        lp.visit()
        lp.fillEmail(this.data.email)
        lp.fillPassword(this.data.password)
        lp.submit()
        cy.title().should('be.equal','Dashboard / nopCommerce administration')

    })

    And('Navigates onto Shipments Page',()=>
    {

        sh.selectsalesDD()
        sh.selectshipments()
        cy.title().should('be.equal','Shipments / nopCommerce administration')
    })
//Set a tracking number to the order and query the same
    When('A Valid Tracking number is set', function()
    {
        trackingnumber = this.data.TrackingNumber
        sq.selectthirdorder()
        sq.setTrackingNumber(trackingnumber)
        sq.selectShipments()
    })

    And('A Valid Tracking number is queried', ()=>
    {
        sq.queryspecifictrackingnumber(trackingnumber)
    })
//Verify if a single record is fetched for the specific order
    Then('The results should fetch a single record', ()=>
    {
       sq.verifyavailabilityofshipment().should('have.text', '1-1 of 1 items')
       

    })



