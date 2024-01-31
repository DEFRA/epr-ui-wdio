@RegulatorResponse
Feature: Reject Requests on Enrolment Requests Page
  As a Regulator,
  I want to ensure that when I am on Enrolment Requests page,
  I should be able to reject approved and delegated person request

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
    And the user enters the Organisation Name: "Test_Reg_Applications28"
    When the user clicks on apply filter button
    And the user navigates to enrolment request details page of an organisation
    Then the "Reject" button for "Approved" person is displayed
    When the user clicks "Reject" for "Approved" person

  Scenario: Enrolment decision Page - Reject application without a reason
    Given the user clicks the continue button
    Then error message: "Enter why you’re rejecting" should contain
    When the user clicks on the error body
    Then the user should see the reject decision input box highlighted

  Scenario: Enrolment decision Page - Reason for the Rejection is 201 digits long
    Given the reason for rejection is: "201" characters long
    When the user clicks the continue button
    Then error message: "Your summary must be 200 characters or less" should display
    When the user clicks on the error body
    Then the user should see the reject decision input box highlighted