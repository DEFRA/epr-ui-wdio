@RegulatorResponse
Feature: Common Landing Pages from Manage Submissions page
  As a Regulator,
  I want to ensure that when I navigate through different common links on the Manage Submissions Page,
  the Url of the page is correct and I can navigate back

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

  Scenario: Manage Submissions Page Links Verification - Gov.uk
    Then the "Gov.uk" link should be displayed
    When the user clicks on the "Gov.uk" link
    Then the user should be on the "www.gov.uk" page
    When the user clicks the browser back button
    Then the user should be on the "regulators packaging data submissions" page

  Scenario: Manage Submissions Page Links Verification - pEPR: Regulators Service
    Then the "pEPR: Regulators Service" link should be displayed
    When the user clicks on the "pEPR: Regulators Service" link
    Then the user should be on the "regulators home" page
    When the user clicks the browser back button
    Then the user should be on the "regulators packaging data submissions" page

  Scenario: Manage Submissions Page Links Verification - Cookies
    Then the "Cookies" link should be displayed
    When the user clicks on the "Cookies" link
    Then the user should be on the "regulators cookies policy" page
    When the user clicks the browser back button
    Then the user should be on the "regulators packaging data submissions" page

  Scenario: Manage Submissions Page Links Verification - Privacy
    Then the "Privacy" link should be displayed
    When the user clicks on the "Privacy" link
    Then the user should be on the "regulators privacy policy" page
    When the user clicks the browser back button
    Then the user should be on the "regulators packaging data submissions" page

  Scenario: Enrolment Request Details Page Links Verification - Accessibility
    Then the "Accessibility statement" link should be displayed
    When the user clicks on the "Accessibility statement" link
    Then the user should be on the "Accessibility statement" page

  Scenario: Enrolment Request Details Page Links Verification - Crown copyright
    Then the "Crown copyright" link should be displayed
    When the user clicks on the "Crown copyright" link
    Then the user should be on the "Crown copyright" page
    When the user clicks the browser back button
    Then the user should be on the "regulators packaging data submissions" page

  Scenario: Enrolment Request Details Page Links Verification - Open Government Licence
    Then the "Open Government Licence" link should be displayed
    When the user clicks on the "Open Government Licence" link
    Then the user should be on the "Open Government Licence" page
    When the user clicks the browser back button
    Then the user should be on the "regulators packaging data submissions" page

  Scenario: Enrolment Request Details Page Links Verification - Feedback
    Then the "Feedback" link should be displayed
    When the user clicks on the "Feedback" link
    And the user switches to the "feedback" page tab
    Then the page title should be correct for the "feedback" page
    When the user switches back to the "regulators packaging data submissions" tab
    Then the user should be on the "regulators packaging data submissions" page