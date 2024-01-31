@RegulatorResponse
Feature: View Applications on the regulator manage applications page
        As a Regulator,
        I want to ensure that when I am on Enrolment Requests page,
        I should be able view the application correctly

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

  Scenario: Manage applications page - View applications - View Non Ltd Company
    Given the user enters the Organisation Name: "SB_Test0001"
    Then the user clicks on apply filter button
    When the user navigates to enrolment request details page of an organisation
    Then the Companies house number should be displayed as "Not listed"

  Scenario: Manage applications page - View applications - View Ltd Company
    Given the user enters the Organisation Name: "PAPERPAK LIMITED"
    Then the user clicks on apply filter button
    When the user navigates to enrolment request details page of an organisation
    Then the Companies house number should be displayed as "07699232"

  Scenario: Manage applications page - View applications - Application for Approved Person Only
    Given the user enters the Organisation Name: "SB_Test0001"
    Then the user clicks on apply filter button
    When the user navigates to enrolment request details page of an organisation
    Then the "Accept" button for "Approved" person is displayed
    And the "Delegated" person header is not displayed

  Scenario: Manage applications page - View applications - Application for Approved Person and Delegated Person
    Given the user enters the Organisation Name: "Test_Reg_Applications5"
    Then the user clicks on apply filter button
    When the user navigates to enrolment request details page of an organisation
    Then the "Accept" button for "Approved" person is displayed
    And the "Delegated" person header is displayed