@Regulator_Response_Applications
Feature: Validation Errors Check on Regulators Response Pages
        As a Regulator,
        I want to ensure that when I am using regulators features incorrectly,
        I should be able to see appropriate errors

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

Scenario: Transfer Application Page - Do not select Agency to Transfer to
    Given the user enters the Organisation Name: "Test_Reg_Applications16"
    When the user clicks on apply filter button
    And the user navigates to enrolment request details page of an organisation
    And the user clicks the Transfer application link
    And the user clicks the continue button
    Then error message: "Select which agency you want to transfer this application to" should display
    When the user clicks on the error body
    Then the user should see the first radio button highlighted 
    
  Scenario: Transfer Application Page - Do not enter a reason in the Transfer Notes
    Given the user enters the Organisation Name: "Test_Reg_Applications17"
    When the user clicks on apply filter button
    And the user navigates to enrolment request details page of an organisation
    And the user clicks the Transfer application link
    When the user selects "Northern Ireland Environment" radio button
    And the user clicks the continue button
    Then error message: "Enter why you’re transferring this application" should display
    When the user clicks on the error body
    Then the user should see the transfer notes input box highlighted 

  Scenario: Transfer Application Page - Reason for the Transfer is 201 digits long
    Given the user enters the Organisation Name: "Test_Reg_Applications18"
    When the user clicks on apply filter button
    And the user navigates to enrolment request details page of an organisation
    And the user clicks the Transfer application link
    When the user selects "Northern Ireland Environment" radio button
    And the reason for transfer is: "201" characters long
    And the user clicks the continue button
    Then error message: "Your summary must be 200 characters or less" should display
    When the user clicks on the error body
    Then the user should see the transfer notes input box highlighted