@Regulator_Response_PoM_Submission
Feature: Filter Submissions from Manage Submissions page
  As a Regulator,
  when I use the use the various filters on the Manage submissions page,
  the correct results are displayed

  Background: Open Regulator account page
    Given init common scenario context
    And the registered user is on the "regulators home" page
    When the user logs in as an automation test user for: "Regulator Admin - ENG"
    And cookies are "Accepted"
    Then the page title should be correct for the "Regulators Home" page
    And the user should be able to view the "pEPR: Regulators’ Service" details for the Regulator
    And the manage "packaging data submissions" link should be displayed
    And the user clicks the manage "packaging data submissions" link
    And the user should be on the "regulators packaging data submissions" page

  Scenario: Filter Submissions by Submission status - Pending
    When the user selects Pending filter box
    And the user clicks on apply filter button
    Then the submissions with "PENDING" status should be displayed

  Scenario: Filter Submissions by Submission status - Accepted
    When the user selects Accepted filter box
    And the user clicks on apply filter button
    Then the submissions with "ACCEPTED" status should be displayed

  Scenario: Filter Submissions by Submission status - Rejected
    When the user selects Rejected filter box
    And the user clicks on apply filter button
    Then the submissions with "REJECTED" status should be displayed

  Scenario: Filter Submissions by Organisation Type - Direct Producer
    When the user selects Direct producer filter box
    And the user clicks on apply filter button
    Then organisations with the "Direct producer" organisation type should display only

  Scenario: Filter Submissions by Organisation Type - Compliance Scheme
    When the user selects Compliance scheme filter box
    And the user clicks on apply filter button
    Then organisations with the "Compliance scheme" organisation type should display only

  Scenario: Filter Submissions by Submission status and org type - Direct Producer Pending
    When the user selects Direct producer filter box
    And the user selects Pending filter box
    And the user clicks on apply filter button
    Then organisations with the "Direct producer" organisation type should display only
    And the submissions with "PENDING" status should be displayed

  Scenario: Filter Submissions by Submission status and org type - Direct Producer Accepted
    When the user selects Direct producer filter box
    And the user selects Accepted filter box
    And the user clicks on apply filter button
    Then organisations with the "Direct producer" organisation type should display only
    And the submissions with "ACCEPTED" status should be displayed

  Scenario: Filter Submissions by Submission status and org type - Direct Producer Rejected
    When the user selects Direct producer filter box
    And the user selects Rejected filter box
    And the user clicks on apply filter button
    Then organisations with the "Direct producer" organisation type should display only
    And the submissions with "REJECTED" status should be displayed

  Scenario: Filter Submissions by Submission status and org type - Compliance Scheme Pending
    When the user selects Compliance scheme filter box
    And the user selects Pending filter box
    And the user clicks on apply filter button
    Then organisations with the "Compliance scheme" organisation type should display only
    And the submissions with "PENDING" status should be displayed

  Scenario: Filter Submissions by Submission status and org type - Compliance scheme Accepted
    When the user selects Compliance scheme filter box
    And the user selects Accepted filter box
    And the user clicks on apply filter button
    Then organisations with the "Compliance scheme" organisation type should display only
    And the submissions with "ACCEPTED" status should be displayed

  Scenario: Filter Submissions by Submission status and org type - Direct Producer Rejected
    When the user selects Compliance scheme filter box
    And the user selects Rejected filter box
    And the user clicks on apply filter button
    Then organisations with the "Compliance scheme" organisation type should display only
    And the submissions with "REJECTED" status should be displayed

  Scenario: Filter Submissions by Organisation Id only
    When the user enters the Organisation Id: "101086"
    And the user clicks on apply filter button
    Then all the submissions with the organisation ID: "101086" should display

  Scenario: Filter Submissions by Submission Status Pending and Organisation Id
    When the user enters the Organisation Id: "101086"
    And the user selects Pending filter box
    And the user clicks on apply filter button
    Then all the submissions with the organisation ID: "101086" should display
    And the submissions with "PENDING" status should be displayed

  Scenario: Filter Submissions by Submission Status Accepted and Organisation Id
    When the user enters the Organisation Id: "101086"
    And the user selects Accepted filter box
    And the user clicks on apply filter button
    Then all the submissions with the organisation ID: "101086" should display
    And the submissions with "ACCEPTED" status should be displayed

  Scenario: Filter Submissions by Submission Status Rejected and Organisation Id
    When the user enters the Organisation Id: "101086"
    And the user selects Rejected filter box
    And the user clicks on apply filter button
    Then all the submissions with the organisation ID: "101086" should display
    And the submissions with "REJECTED" status should be displayed

  Scenario: Filter Submissions by Organisation Type Direct Producer and Organisation Id
    When the user enters the Organisation Id: "101"
    And the user selects Direct producer filter box
    And the user clicks on apply filter button
    Then all the submissions with the organisation ID: "101" should display
    And organisations with the "Direct producer" organisation type should display only

  Scenario: Filter Submissions by Organisation Type Compliance Scheme and Organisation Id
    When the user enters the Organisation Id: "101"
    And the user selects Compliance scheme filter box
    And the user clicks on apply filter button
    Then all the submissions with the organisation ID: "101" should display
    And organisations with the "Compliance scheme" organisation type should display only

  Scenario: Filter Submissions by Submission Status Pending, Organisation Type Direct Producer and Organisation ID
    When the user selects Pending filter box
    And the user selects Direct producer filter box
    And the user enters the Organisation Id: "101"
    And the user clicks on apply filter button
    Then the submissions with "PENDING" status should be displayed
    And organisations with the "Direct producer" organisation type should display only
    And all the submissions with the organisation ID: "101" should display

  Scenario: Filter Submissions by Submission Status Accepted, Organisation Type Direct Producer and Organisation ID
    When the user selects Accepted filter box
    And the user selects Direct producer filter box
    And the user enters the Organisation Id: "101"
    And the user clicks on apply filter button
    Then the submissions with "ACCEPTED" status should be displayed
    And organisations with the "Direct producer" organisation type should display only
    And all the submissions with the organisation ID: "101" should display

  Scenario: Filter Submissions by Submission Status Pending, Organisation Type Direct Producer and Organisation ID
    When the user selects Rejected filter box
    And the user selects Direct producer filter box
    And the user enters the Organisation Id: "101"
    And the user clicks on apply filter button
    Then the submissions with "REJECTED" status should be displayed
    And organisations with the "Direct producer" organisation type should display only
    And all the submissions with the organisation ID: "101" should display

  Scenario: Filter Submissions by Submission Status Pending, Organisation Type Compliance Scheme and Organisation ID
    When the user selects Pending filter box
    And the user selects Compliance scheme filter box
    And the user enters the Organisation Id: "101"
    And the user clicks on apply filter button
    Then the submissions with "PENDING" status should be displayed
    And organisations with the "Compliance scheme" organisation type should display only
    And all the submissions with the organisation ID: "101" should display

  Scenario: Filter Submissions by Submission Status Pending, Organisation Type Compliance Scheme and Organisation ID
    When the user selects Accepted filter box
    And the user selects Compliance scheme filter box
    And the user enters the Organisation Id: "101"
    And the user clicks on apply filter button
    Then the submissions with "ACCEPTED" status should be displayed
    And organisations with the "Compliance scheme" organisation type should display only
    And all the submissions with the organisation ID: "101" should display

  Scenario: Filter Submissions by Submission Status Pending, Organisation Type Compliance Scheme and Organisation ID
    When the user selects Rejected filter box
    And the user selects Compliance scheme filter box
    And the user enters the Organisation Id: "101"
    And the user clicks on apply filter button
    Then the submissions with "REJECTED" status should be displayed
    And organisations with the "Compliance scheme" organisation type should display only
    And all the submissions with the organisation ID: "101" should display

  Scenario: Filter Submissions by Organisation Name only
    When the user enters the Organisation Name: "TESCO"
    And the user clicks on apply filter button
    Then all the submissions with the organisation name: "TESCO" should display