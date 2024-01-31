@RegulatorResponse
Feature: Regulator Response of Applications
        As a Regulator,
        I want to filter applications based on Orgnaisation and/or User Type
        So I can action the one(s) I am interested in

  Background: Open Regulator account page
    Given init common scenario context
    And the registered user is on the "regulators home" page
    And the user logs in as an automation test user for: "Regulator - ENG"
    And cookies are "Accepted"
    Then the page title should be correct for the "Regulators Home" page
    And the user should be able to view the "pEPR: Regulators’ Service" details for the Regulator
    And the manage "applications" link should be displayed
    And the user clicks the manage "applications" link
    And the user should be on the "regulators manage applications" page

  Scenario: Filter Applications by Organisation Name
    When the user enters the Organisation Name: "NIPAK LIMITED"
    And the user clicks on apply filter button
    Then the organisation with name: "NIPAK LIMITED" should display

  Scenario: Filter Applications by Approved Person
    When the user selects approved person filter box
    And the user clicks on apply filter button
    Then organisations with "Approved person" request pending should display

  Scenario: Filter Applications by Delegated Person
    When the user selects delegated person filter box
    And the user clicks on apply filter button
    Then organisations with "Delegated person" request pending should display

  Scenario: Filter Applications by Approved and Delegated Person
    When the user selects approved person filter box
    And the user selects delegated person filter box
    And the user clicks on apply filter button
    Then organisations with "Approved person Delegated person" request pending should display

  Scenario: Remove Filters Applications by Organisation Name
    Given init filter applications context
    When get number of applications from the applications page
    When the user enters the Organisation Name: "Test_Reg_Applications30"
    And the user clicks on apply filter button
    Then the number of applications should be less than the original number of applications
    When the user click on Clear filter
    Then the number of applications should be equal to the original number of applications