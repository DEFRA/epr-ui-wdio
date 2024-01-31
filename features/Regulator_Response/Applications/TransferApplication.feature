@RegulatorResponse
Feature: Transfer application on Transfer Application Page
  As a Regulator,
  I want to ensure that when I am on Transfer Application Page,
  I should be able to Transfer an Application

  Background: Open Regulator account page
    Given init common scenario context
    And the registered user is on the "regulators home" page
    And the user logs in as an automation test user for: "Regulator - ENG"
    And cookies are "Accepted"
    Then the page title should be correct for the "Regulators Home" page
    And the user should be able to view the "pEPR: Regulators’ Service" details for the Regulator
    And the manage "applications" link should be displayed
    When the user clicks the manage "applications" link
    Then the user should be on the "regulators manage applications" page

  Scenario: Transfer Application Page - Transfer Application
    # Transfer to Northern Ireland Regulator
    And the user enters the Organisation Name: "Test_Reg_Applications15"
    When the user clicks on apply filter button
    And the user navigates to enrolment request details page of an organisation
    And the user clicks the Transfer application link
    Then the user should be on the "regulators transfer application" page
    When the user selects "Northern Ireland Environment" radio button
    And the user enters a reason: "Automation Test transfer" in the Transfer Notes
    And the user clicks the continue button
    Then the transferred "Success" banner is displayed for Org Name: "Test_Reg_Applications", Agency: "Northern Ireland Environment" 
    # Transfer to England Regulator
    And the user signs out
    And the registered user is on the "regulators home" page
    And the user logs in as an automation test user for: "Regulator - NI"
    And cookies are "Accepted"
    Then the page title should be correct for the "Regulators Home" page
    And the user should be able to view the "pEPR: Regulators’ Service" details for the Regulator
    And the manage "applications" link should be displayed
    When the user clicks the manage "applications" link
    Then the user should be on the "regulators manage applications" page
    And the user enters the Organisation Name: "Test_Reg_Applications15"
    When the user clicks on apply filter button
    And the user navigates to enrolment request details page of an organisation
    Then the transferred "Important" banner is displayed, from Agency: "Environment Agency", to Agency: "Northern Ireland Environment"
    And the user clicks the Transfer application link
    Then the user should be on the "regulators transfer application" page
    When the user selects "Environment Agency" radio button
    And the user enters a reason: "Automation Test transfer" in the Transfer Notes
    And the user clicks the continue button
    Then the transferred "Success" banner is displayed for Org Name: "Test_Reg_Applications", Agency: "Environment Agency" 