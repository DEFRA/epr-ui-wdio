@Regulator_Response_Applications
Feature: Accept Requests on Enrolment Requests Page
  As a Regulator,
  I want to ensure that when I am on Enrolment Requests page,
  I should be able to accept a submission

  Background: Open Regulator account page
    Given init common scenario context
    And the registered user is on the "regulators home" page
    
  Scenario: Enrolment request Page - Accept Approved and Delegated Person
    Given the user logs in as an automation test user for: "Regulator - ENG"
    And cookies are "Accepted"
    Then the page title should be correct for the "Regulators Home" page
    And the user should be able to view the "pEPR: Regulators’ Service" details for the Regulator
    And the manage "applications" link should be displayed
    And the user clicks the manage "applications" link
    And the user should be on the "regulators manage applications" page
    And the user enters the Organisation Name: "Test_Reg_Applications1"
    When the user clicks on apply filter button
    And the user navigates to enrolment request details page of an organisation
    Then the "Accept" button for "Approved" person is displayed
    And the "Accept" button for "Delegated" person is not displayed
    When the user clicks "Accept" for "Approved" person
    Then the "Accepted" banner is displayed for: Approved person
    And the "Accept" button for "Delegated" person is displayed
    And the "Accept" button for "Approved" person is not displayed
    When the user clicks "Accept" for "Delegated" person
    Then the "Accepted" banner is displayed for: Delegated person