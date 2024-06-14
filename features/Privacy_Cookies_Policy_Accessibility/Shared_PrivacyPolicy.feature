@SharedPrivacyPolicy
Feature: Shared Privacy policy functionality
    As a user who has logged in,
    I want to ensure that when I navigate to the shared Privacy Policy page,
    the content of the page is correct and I can navigate back

    Background: Open create account page
        Given init common scenario context

    Scenario: Navigate to shared Privacy Policy from create account
        And the registered user is on the "create account" page
        And the user logs in as an automation test user for: "Account Creation"
        Then the "Privacy" link should be displayed
        When the user clicks on the "Privacy" link
        Then the user should be on the "shared privacy policy" page
        And the content of the Shared "Privacy" policy page should be correct
        Then the back link should be displayed
        When the user clicks the back link
        Then the user should be on the "is a registered charity" page

    Scenario: Navigate to shared Privacy Policy from report data
        And the registered user is on the "report data" page
        And the user logs in as an approved user with admin
        Then the "Privacy" link should be displayed
        When the user clicks on the "Privacy" link
        Then the user should be on the "shared privacy policy" page
        And the content of the Shared "Privacy" policy page should be correct
        Then the back link should be displayed
        When the user clicks the back link
        Then the user should be on the "direct producer landing" page

    Scenario: Navigate to shared Privacy Policy from manage account
        And the registered user is on the "manage account" page
        And the user logs in as an approved user with admin
        Then the "Privacy" link should be displayed
        When the user clicks on the "Privacy" link
        Then the user should be on the "shared privacy policy" page
        And the content of the Shared "Privacy" policy page should be correct
        Then the back link should be displayed
        When the user clicks the back link
        Then the user should be on the "manage account" page


    Scenario: Navigate to shared Privacy Policy from B2C Screen (Opened in new Tab)
        And the registered user is on the "report data" page
        Then the "Privacy" link should be displayed
        When the user clicks on the "Privacy" link
        Then the user should be on the "GOV.UK PROD privacy policy (English)" page in new Tab
