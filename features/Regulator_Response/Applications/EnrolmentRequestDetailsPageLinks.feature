@RegulatorResponse
Feature: Common Landing Pages from Applications page
        As a Regulator,
        I want to ensure that when I navigate through different common links on the Applications Page,
        the Url of the page is correct and I can navigate back

  Background: Open Regulator account page
    Given init common scenario context
    And the registered user is on the "regulators home" page
    When the user logs in as an automation test user for: "Regulator - ENG"
    And cookies are "Accepted"
    Then the page title should be correct for the "Regulators Home" page
    And the user should be able to view the "pEPR: Regulators’ Service" details for the Regulator
    And the manage "applications" link should be displayed
    And the user clicks the manage "applications" link
    And the user should be on the "regulators manage applications" page
    And the user enters the Organisation Name: "SB_Test0001"
    Then the user clicks on apply filter button
    When the user navigates to enrolment request details page of an organisation

  Scenario: Enrolment Request Details Page Links Verification - Gov.uk
    Given the "Gov.uk" link should be displayed
    When the user clicks on the "Gov.uk" link
    Then the user should be on the "www.gov.uk" page
    When the user clicks the browser back button
    Then the user should be on the "regulators enrolment details" page

  Scenario: Enrolment Request Details Page Links Verification - Accessibility
    Given the "Accessibility statement" link should be displayed
    When the user clicks on the "Accessibility statement" link
    Then the user should be on the "Accessibility statement" page

  Scenario: Enrolment Request Details Page Links Verification - Crown copyright
    Given the "Crown copyright" link should be displayed
    When the user clicks on the "Crown copyright" link
    Then the user should be on the "Crown copyright" page
    When the user clicks the browser back button
    Then the user should be on the "regulators enrolment details" page

  Scenario: Enrolment Request Details Page Links Verification - feedback
    Given the "Feedback" link should be displayed
    When the user clicks on the "Feedback" link
    And the user switches to the "feedback" page tab
    Then the page title should be correct for the "feedback" page
    When the user switches back to the "regulators enrolment details" tab
    Then the user should be on the "regulators enrolment details" page

  Scenario: Enrolment Request Details Page Links Verification - Open Government Licence
    Given the "Open Government Licence" link should be displayed
    When the user clicks on the "Open Government Licence" link
    Then the user should be on the "Open Government Licence" page
    When the user clicks the browser back button
    Then the user should be on the "regulators enrolment details" page