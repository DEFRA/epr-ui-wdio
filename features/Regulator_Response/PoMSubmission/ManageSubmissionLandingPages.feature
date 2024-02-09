@Regulator_Response_PoM_Submission
Feature: Common Landing Pages from Manage Submissions page
  As a Regulator,
  when I navigate to Pending, Accept and Reject submissions and resubmission,
  the Url is correct, and back and PowerBi links are working


  Background: Open Regulator account page
    Given init common scenario context
    And the registered user is on the "regulators home" page
    When the user logs in as an automation test user for: "Regulator - ENG"
    And cookies are "Accepted"
    Then the page title should be correct for the "Regulators Home" page
    And the user should be able to view the "pEPR: Regulators’ Service" details for the Regulator
    And the manage "packaging data submissions" link should be displayed
    And the user clicks the manage "packaging data submissions" link
    And the user should be on the "regulators packaging data submissions" page

  Scenario: Manage Submissions Landing to Pending Submission
    When the user selects "Pending" filter box
    And the user clicks on apply filter button
    Then the submissions with "PENDING" status should be displayed
    When the user navigates to "submission" request details page
    And the "Accept" button should be displayed
    And the "Reject" button should be displayed
    Then a "PENDING" status tag should be displayed

  Scenario: Manage Submissions Landing to Accepted Submission
    When the user selects "Accepted" filter box
    And the user clicks on apply filter button
    Then the submissions with "ACCEPTED" status should be displayed
    When the user navigates to "submission" request details page
    Then a "ACCEPTED" status tag should be displayed

  Scenario: Manage Submissions Landing to Rejected Submission
    When the user selects "Rejected" filter box
    And the user clicks on apply filter button
    Then the submissions with "REJECTED" status should be displayed
    When the user navigates to "submission" request details page
    Then a "REJECTED" status tag should be displayed

  Scenario: Manage Submissions Landing to Accepted Resubmission
    When the user enters the Organisation Name: "BEYONDLY GLOBAL LIMITED"
    And the user selects "Accepted" filter box
    And the user clicks on apply filter button
    Then the submissions with "ACCEPTED" status should be displayed
    When the user navigates to "submission" request details page
    Then a "Resubmitted By" header should be displayed

  Scenario: Manage Submissions Landing to Rejected Resubmission
    When the user enters the Organisation Name: "AM_Test_Data1"
    And the user selects "Rejected" filter box
    And the user clicks on apply filter button
    Then the submissions with "REJECTED" status should be displayed
    When the user navigates to "resubmission" request details page
    Then a "Resubmitted By" header should be displayed
    Then a "Reason for rejection" header should be displayed

  Scenario: Checking Back Links and PowerBI link in Submission details Page
    When the user navigates to "submission" request details page
    And the user clicks the back link
    Then the user should be on the "regulators packaging data submissions" page
    When the user navigates to "submission" request details page
    And the user clicks the Go back to all submission link
    Then the user should be on the "regulators packaging data submissions" page
    When the user navigates to "submission" request details page
    And the user clicks on the "log in to Power-BI" link
    Then the user should be on the "log in to Power BI" page
    And the user clicks the browser back button