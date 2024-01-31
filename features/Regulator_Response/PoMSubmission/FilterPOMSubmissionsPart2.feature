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
 
 Scenario: Filter Submissions by Organisation name and Submission Status Pending
    When the user enters the Organisation Name: "BEYONDLY"
    And the user selects Pending filter box
    And the user clicks on apply filter button
    Then all the submissions with the organisation name: "BEYONDLY" should display
    And the submissions with "PENDING" status should be displayed

  Scenario: Filter Submissions by Organisation name and Submission Status Accepted
    When the user enters the Organisation Name: "BEYONDLY"
    And the user selects Accepted filter box
    And the user clicks on apply filter button
    Then all the submissions with the organisation name: "BEYONDLY" should display
    And the submissions with "ACCEPTED" status should be displayed

  Scenario: Filter Submissions by Organisation name and Submission Status Rejected
    When the user enters the Organisation Name: "BEYONDLY"
    And the user selects Rejected filter box
    And the user clicks on apply filter button
    Then all the submissions with the organisation name: "BEYONDLY" should display
    And the submissions with "REJECTED" status should be displayed

  Scenario: Filter Submissions by Organisation Type Direct producer and Organisation Name
    When the user selects Direct producer filter box
    And the user enters the Organisation Name: "Test"
    And the user clicks on apply filter button
    Then organisations with the "Direct producer" organisation type should display only
    And all the submissions with the organisation name: "Test" should display

  Scenario: Filter Submissions by Organisation Type Compliance scheme and Organisation Name
    When the user selects Compliance scheme filter box
    And the user enters the Organisation Name: "Test"
    And the user clicks on apply filter button
    Then organisations with the "Compliance scheme" organisation type should display only
    And all the submissions with the organisation name: "Test" should display

  Scenario: Filter Submissions by Submission Status Pending, Organisation Type Direct producer and Organisation Name
    When the user selects Pending filter box
    And the user selects Direct producer filter box
    And the user enters the Organisation Name: "Test"
    And the user clicks on apply filter button
    Then the submissions with "PENDING" status should be displayed
    And organisations with the "Direct producer" organisation type should display only
    And all the submissions with the organisation name: "Test" should display

  Scenario: Filter Submissions by Submission Status Accepted, Organisation Type Direct producer and Organisation Name
    When the user selects Accepted filter box
    And the user selects Direct producer filter box
    And the user enters the Organisation Name: "Test"
    And the user clicks on apply filter button
    Then the submissions with "ACCEPTED" status should be displayed
    And organisations with the "Direct producer" organisation type should display only
    And all the submissions with the organisation name: "Test" should display

  Scenario: Filter Submissions by Submission Status Rejected, Organisation Type Direct producer and Organisation Name
    When the user selects Rejected filter box
    And the user selects Direct producer filter box
    And the user enters the Organisation Name: "Test"
    And the user clicks on apply filter button
    Then the submissions with "REJECTED" status should be displayed
    And organisations with the "Direct producer" organisation type should display only
    And all the submissions with the organisation name: "Test" should display

  Scenario: Filter Submissions by Submission Status Pending, Organisation Type Compliance scheme and Organisation Name
    When the user selects Pending filter box
    And the user selects Compliance scheme filter box
    And the user enters the Organisation Name: "Test"
    And the user clicks on apply filter button
    Then the submissions with "PENDING" status should be displayed
    And organisations with the "Compliance scheme" organisation type should display only
    And all the submissions with the organisation name: "Test" should display

  Scenario: Filter Submissions by Submission Status Accepted, Organisation Type Compliance scheme and Organisation Name
    When the user selects Accepted filter box
    And the user selects Compliance scheme filter box
    And the user enters the Organisation Name: "BEYONDLY"
    And the user clicks on apply filter button
    Then the submissions with "ACCEPTED" status should be displayed
    And organisations with the "Compliance scheme" organisation type should display only
    And all the submissions with the organisation name: "BEYONDLY" should display

  Scenario: Filter Submissions by Submission Status Rejected, Organisation Type Compliance scheme and Organisation Name
    When the user selects Rejected filter box
    And the user selects Compliance scheme filter box
    And the user enters the Organisation Name: "BEYONDLY"
    And the user clicks on apply filter button
    Then the submissions with "REJECTED" status should be displayed
    And organisations with the "Compliance scheme" organisation type should display only
    And all the submissions with the organisation name: "BEYONDLY" should display

  Scenario: Filter Submissions by Organisation name and Organisation Id
    When the user enters the Organisation Name: "TESCO"
    And the user enters the Organisation Id: "101086"
    And the user clicks on apply filter button
    Then all the submissions with the organisation name: "TESCO" should display
    And all the submissions with the organisation ID: "101086" should display

  Scenario: Filter Submissions by Submission Status Pending, Organisation ID and Organisation Name
    When the user selects Pending filter box
    And the user enters the Organisation Id: "101"
    And the user enters the Organisation Name: "Test"
    And the user clicks on apply filter button
    Then the submissions with "PENDING" status should be displayed
    And all the submissions with the organisation ID: "101" should display
    And all the submissions with the organisation name: "Test" should display

  Scenario: Filter Submissions by Submission Status Accepted, Organisation ID and Organisation Name
    When the user selects Accepted filter box
    And the user enters the Organisation Id: "101"
    And the user enters the Organisation Name: "Test"
    And the user clicks on apply filter button
    Then the submissions with "ACCEPTED" status should be displayed
    And all the submissions with the organisation ID: "101" should display
    And all the submissions with the organisation name: "Test" should display

  Scenario: Filter Submissions by Submission Status Rejected, Organisation ID and Organisation Name
    When the user selects Rejected filter box
    And the user enters the Organisation Id: "101"
    And the user enters the Organisation Name: "Test"
    And the user clicks on apply filter button
    Then the submissions with "REJECTED" status should be displayed
    And all the submissions with the organisation ID: "101" should display
    And all the submissions with the organisation name: "Test" should display

  Scenario: Filter Submissions by Organisation Type Direct producer, Organisation ID and Organisation Name
    When the user selects Direct producer filter box
    And the user enters the Organisation Id: "101"
    And the user enters the Organisation Name: "Test"
    And the user clicks on apply filter button
    Then organisations with the "Direct producer" organisation type should display only
    And all the submissions with the organisation ID: "101" should display
    And all the submissions with the organisation name: "Test" should display

  Scenario: Filter Submissions by Organisation Type Compliance scheme, Organisation ID and Organisation Name
    When the user selects Compliance scheme filter box
    And the user enters the Organisation Id: "101"
    And the user enters the Organisation Name: "Test"
    And the user clicks on apply filter button
    Then organisations with the "Compliance scheme" organisation type should display only
    And all the submissions with the organisation ID: "101" should display
    And all the submissions with the organisation name: "Test" should display

  Scenario: Filter Submissions by Submission Status Pending, Organisation Type Direct producer, Organisation ID and Organisation Name
    When the user selects Pending filter box
    And the user enters the Organisation Id: "101"
    And the user enters the Organisation Name: "Test"
    And the user selects Direct producer filter box
    And the user clicks on apply filter button
    Then the submissions with "PENDING" status should be displayed
    Then organisations with the "Direct producer" organisation type should display only
    And all the submissions with the organisation ID: "101" should display
    And all the submissions with the organisation name: "Test" should display

  Scenario: Filter Submissions by Submission Status Accepted, Organisation Type Direct producer, Organisation ID and Organisation Name
    When the user selects Accepted filter box
    And the user enters the Organisation Id: "101"
    And the user enters the Organisation Name: "Test"
    And the user selects Direct producer filter box
    And the user clicks on apply filter button
    Then the submissions with "ACCEPTED" status should be displayed
    Then organisations with the "Direct producer" organisation type should display only
    And all the submissions with the organisation ID: "101" should display
    And all the submissions with the organisation name: "Test" should display

  Scenario: Filter Submissions by Submission Status Rejected, Organisation Type Direct producer, Organisation ID and Organisation Name
    When the user selects Rejected filter box
    And the user enters the Organisation Id: "101"
    And the user enters the Organisation Name: "Test"
    And the user selects Direct producer filter box
    And the user clicks on apply filter button
    Then the submissions with "REJECTED" status should be displayed
    Then organisations with the "Direct producer" organisation type should display only
    And all the submissions with the organisation ID: "101" should display
    And all the submissions with the organisation name: "Test" should display

  Scenario: Filter Submissions by Submission Status Pending, Organisation Type Direct producer, Organisation ID and Organisation Name
    When the user selects Pending filter box
    And the user enters the Organisation Id: "101"
    And the user enters the Organisation Name: "Test"
    And the user selects Compliance scheme filter box
    And the user clicks on apply filter button
    Then the submissions with "PENDING" status should be displayed
    Then organisations with the "Compliance scheme" organisation type should display only
    And all the submissions with the organisation ID: "101" should display
    And all the submissions with the organisation name: "Test" should display

  Scenario: Filter Submissions by Submission Status Accepted, Organisation Type Direct producer, Organisation ID and Organisation Name
    When the user selects Accepted filter box
    And the user enters the Organisation Id: "101"
    And the user enters the Organisation Name: "BEYONDLY"
    And the user selects Compliance scheme filter box
    And the user clicks on apply filter button
    Then the submissions with "ACCEPTED" status should be displayed
    Then organisations with the "Compliance scheme" organisation type should display only
    And all the submissions with the organisation ID: "101" should display
    And all the submissions with the organisation name: "BEYONDLY" should display

  Scenario: Filter Submissions by Submission Status Rejected, Organisation Type Compliance scheme, Organisation ID and Organisation Name
    When the user selects Rejected filter box
    And the user enters the Organisation Id: "101"
    And the user enters the Organisation Name: "BEYONDLY"
    And the user selects Compliance scheme filter box
    And the user clicks on apply filter button
    Then the submissions with "REJECTED" status should be displayed
    Then organisations with the "Compliance scheme" organisation type should display only
    And all the submissions with the organisation ID: "101" should display
    And all the submissions with the organisation name: "BEYONDLY" should display