Feature: Query for a tracking number in shipments and verify a single succesful result
Query tracking number
Scenario: Tracking Number results
    Given I open the website and login to the site
    And Navigates onto Shipments Page
    When A Valid Tracking number is set
    And A Valid Tracking number is queried
    Then The results should fetch a single record
