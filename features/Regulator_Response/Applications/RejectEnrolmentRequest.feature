@Regulator_Response_Applications
Feature: Reject Requests on Enrolment Requests Page
  As a Regulator,
  I want to ensure that when I am on Enrolment Requests page,
  I should be able to reject approved and delegated person request

  Background: Open Regulator account page
    Given init common scenario context
    And the registered user is on the "regulators home" page

  Scenario: Enrolment request Page - Reject Approved Person
    Given the user logs in as an automation test user for: "Regulator - ENG"
    And cookies are "Accepted"
    Then the page title should be correct for the "Regulators Home" page
    And the user should be able to view the "pEPR: Regulators’ Service" details for the Regulator
    And the manage "applications" link should be displayed
    And the user clicks the manage "applications" link
    And the user should be on the "regulators manage applications" page
    And the user enters the Organisation Name: "Test_Reg_Applications26"
    When the user clicks on apply filter button
    And the user navigates to enrolment request details page of an organisation
    Then the "Reject" button for "Approved" person is displayed
    And the "Reject" button for "Delegated" person is not displayed
    When the user clicks "Reject" for "Approved" person
    Then the text box for rejection reason is displayed
    When the user enters reason for rejection: "Automation Test Rejection" in the text box
    And the user clicks the continue button
    Then the "Success" banner is displayed for: approved person

  Scenario: Enrolment request Page - Reject Delegated Person
    Given the user logs in as an automation test user for: "Regulator - ENG"
    And cookies are "Accepted"
    Then the page title should be correct for the "Regulators Home" page
    And the user should be able to view the "pEPR: Regulators’ Service" details for the Regulator
    And the manage "applications" link should be displayed
    And the user clicks the manage "applications" link
    And the user should be on the "regulators manage applications" page
    And the user enters the Organisation Name: "Test_Reg_Applications11"
    When the user clicks on apply filter button
    And the user navigates to enrolment request details page of an organisation
    Then the "Reject" button for "Delegated" person is displayed
    When the user clicks "Reject" for "Delegated" person
    Then the text box for rejection reason is displayed
    When the user enters reason for rejection: "Automation Test Rejection" in the text box
    And the user clicks the continue button
    Then the "Success" banner is displayed for: delegated person