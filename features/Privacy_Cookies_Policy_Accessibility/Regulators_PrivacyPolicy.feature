@RegulatorsPrivacyPolicy
Feature: Regulators Privacy policy functionality
    As a user who has logged in,
    I want to ensure that when I navigate to the Regulators Privacy Policy page,
    the content of the page is correct and I can navigate back

    Scenario: Navigate to Regulators Privacy Policy
        Given init common scenario context
        And the registered user is on the "regulators home" page
        And the user logs in as an automation test user for: "Regulator"
        And cookies are "Accepted"
        Then the "Privacy" link should be displayed
        When the user clicks on the "Privacy" link
        Then the user should be on the "regulators privacy policy" page
        And the content of the Regulators "Privacy" policy page should be correct
        Then the back link should be displayed
        When the user clicks the back link
        Then the user should be on the "regulators home" page