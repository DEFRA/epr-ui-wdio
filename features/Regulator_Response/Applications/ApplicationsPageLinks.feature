@Regulator_Response_Applications
Feature: Common Landing Pages from Applications page
        As a Regulator,
        I want to ensure that when I navigate through different common links on the Applications Page,
        the Url of the page is correct and I can navigate back

  Background: Open Regulator account page
    Given init common scenario context
    And the registered user is on the "regulators home" page

  Scenario: Applications Page Links Verification - Gov.uk
    Given the user logs in as an automation test user for: "Regulator - ENG"
    And cookies are "Accepted"
    Then the page title should be correct for the "Regulators Home" page
    And the user should be able to view the "pEPR: Regulators’ Service" details for the Regulator
    And the manage "applications" link should be displayed
    And the user clicks the manage "applications" link
    And the user should be on the "regulators manage applications" page
    And the "Gov.uk" link should be displayed
    When the user clicks on the "Gov.uk" link
    Then the user should be on the "www.gov.uk" page
    When the user clicks the browser back button
    Then the user should be on the "regulators manage applications" page

  Scenario: Applications Page Links Verification - Accessibility
    Given the user logs in as an automation test user for: "Regulator - ENG"
    And cookies are "Accepted"
    Then the page title should be correct for the "Regulators Home" page
    And the user should be able to view the "pEPR: Regulators’ Service" details for the Regulator
    And the manage "applications" link should be displayed
    And the user clicks the manage "applications" link
    And the user should be on the "regulators manage applications" page
    And the "Accessibility statement" link should be displayed
    When the user clicks on the "Accessibility statement" link
    Then the user should be on the "Accessibility statement" page

  Scenario: Applications Page Links Verification - Crown copyright
    Given the user logs in as an automation test user for: "Regulator - ENG"
    And cookies are "Accepted"
    Then the page title should be correct for the "Regulators Home" page
    And the user should be able to view the "pEPR: Regulators’ Service" details for the Regulator
    And the manage "applications" link should be displayed
    And the user clicks the manage "applications" link
    And the user should be on the "regulators manage applications" page
    And the "Crown copyright" link should be displayed
    When the user clicks on the "Crown copyright" link
    Then the user should be on the "Crown copyright" page
    When the user clicks the browser back button
    Then the user should be on the "regulators manage applications" page

  Scenario: Applications Page Links Verification - Feedback
    Given the user logs in as an automation test user for: "Regulator - ENG"
    And cookies are "Accepted"
    Then the page title should be correct for the "Regulators Home" page
    And the user should be able to view the "pEPR: Regulators’ Service" details for the Regulator
    And the manage "applications" link should be displayed
    And the user clicks the manage "applications" link
    And the user should be on the "regulators manage applications" page
    And the "Feedback" link should be displayed
    When the user clicks on the "Feedback" link
    And the user switches to the "feedback" page tab
    Then the page title should be correct for the "feedback" page
    When the user switches back to the "regulators manage applications" tab
    Then the user should be on the "regulators manage applications" page

  Scenario: Applications Page Links Verification - Open Government Licence
    Given the user logs in as an automation test user for: "Regulator - ENG"
    And cookies are "Accepted"
    Then the page title should be correct for the "Regulators Home" page
    And the user should be able to view the "pEPR: Regulators’ Service" details for the Regulator
    And the manage "applications" link should be displayed
    And the user clicks the manage "applications" link
    And the user should be on the "regulators manage applications" page
    And the "Open Government Licence" link should be displayed
    When the user clicks on the "Open Government Licence" link
    Then the user should be on the "Open Government Licence" page
    When the user clicks the browser back button
    Then the user should be on the "regulators manage applications" page
