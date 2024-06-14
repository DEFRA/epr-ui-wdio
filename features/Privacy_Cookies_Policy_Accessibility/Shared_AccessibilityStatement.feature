@SharedPrivacyPolicy
Feature: Shared Accessibility Statement functionality
    As a user who is on a RPD B2C screen
    user clicks on Accessibility statement link
    I want to ensure that a new tab is opened and correct URL is displayed for Accessibility statement page,

    Background: Open create account page
        Given init common scenario context


    Scenario: Navigate to shared Accessibility Statement from B2C Screen
        And the registered user is on the "report data" page
        Then the "Accessibility statement" link should be displayed
        When the user clicks on the "Accessibility statement" link
        Then the user should be on the "GOV.UK PROD Accessibility Statement (English)" page in new Tab
