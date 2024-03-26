@ManageOrganisations
Feature: Manage Organisation and their Approve Person for Admin and Basic Users
  As an Admin for a Regulator,
  I want to see Manage organisation Link
  So that I can perform search operation with either organisation ID or organisation name

  Background: Open Regulator account page
    Given init common scenario context
    And the registered user is on the "regulators home" page

 Scenario: user should see Manage Organisations and their approved person link
   Given the user logs in as an automation test user for: "Regulator - SCO"
   And cookies are "Accepted"
   When the page title should be correct for the "Regulators Home" page
   And the user should be able to view the "pEPR: Regulators’ Service" details for the Regulator
   And the user should be expected to view the "TestRegulator" nation details
   And the user should be able to view the logged in User name "RegulatorUser AdminType" for the nation
   And the manage "account" link should be displayed
   And the manage "applications" link should be displayed
   And the manage "organisations" link should be displayed
   When the user clicks the manage "organisations" link
   Then the user should be on the "regulator search" page
   And the page title should be correct for the "ID of the organisation" page

 Scenario: Validate the input field and enter valid  query
   Given the user logs in as an automation test user for: "Regulator - SCO"
   And cookies are "Accepted"
   When the page title should be correct for the "Regulators Home" page
   And the user should be able to view the "pEPR: Regulators’ Service" details for the Regulator
   And the user should be expected to view the "TestRegulator" nation details
   And the user should be able to view the logged in User name "RegulatorUser AdminType" for the nation
   And the manage "account" link should be displayed
   And the manage "applications" link should be displayed
   And the manage "organisations" link should be displayed
   When the user clicks the manage "organisations" link
   Then the user should be on the "regulator search" page
   Then the page title should be correct for the "ID of the organisation" page
   When the user enter search query: "cake"
   And the user clicks the continue button
   Then the user should be on the "regulator search result" page
   Then the page title should be correct for the "Result" page








