@SharedCookiesPolicy
Feature: Shared Cookies policy functionality
    As a user who has logged in,
    I want to ensure that when I navigate to the shared Cookies Policy page,
    the content of the page is correct and I can navigate back

    Background: Open create account page
        Given init common scenario context

    Scenario: Navigate to shared Cookies Policy from create account
        And the registered user is on the "create account" page
        And the user logs in as an automation test user for: "Account Creation"
        Then the "Cookies" link should be displayed
        When the user clicks on the "Cookies" link
        Then the user should be on the "shared cookies policy" page
        And the content of the Shared "Cookies" policy page should be correct
        Then the back link should be displayed
        When the user clicks the back link
        Then the user should be on the "is a registered charity" page

    Scenario: Navigate to shared Cookies Policy from report data
        And the registered user is on the "report data" page
        And the user logs in as an approved user with admin
        Then the "Cookies" link should be displayed
        When the user clicks on the "Cookies" link
        Then the user should be on the "shared cookies policy" page
        And the content of the Shared "Cookies" policy page should be correct
        Then the back link should be displayed
        When the user clicks the back link
        Then the user should be on the "direct producer landing" page

    Scenario: Navigate to shared Cookies Policy from manage account
        And the registered user is on the "manage account" page
        And the user logs in as an approved user with admin
        Then the "Cookies" link should be displayed
        When the user clicks on the "Cookies" link
        Then the user should be on the "shared cookies policy" page
        And the content of the Shared "Cookies" policy page should be correct
        Then the back link should be displayed
        When the user clicks the back link
        Then the user should be on the "manage account" page

    Scenario: Accept Cookies from Cookies Policy page
        And init Cookies scenario context
        And the registered user is on the "report data" page
        And the user logs in as an approved user with admin
        And the user clicks on the "Cookies" link
        And the user selects the "Accept" cookies radio button
        When the user saves their cookie settings
        Then there should be a cookie created with name: ".epr_cookies_policy"
        And cookie with name: ".epr_cookies_policy" should have value: "True"
        And there should not be a cookie created with name: ".epr_cookie_policy"

    Scenario: Reject Cookies from Cookies Policy page
        And init Cookies scenario context
        And the registered user is on the "report data" page
        And the user logs in as an approved user with admin
        And the user clicks on the "Cookies" link
        And the user selects the "Reject" cookies radio button
        When the user saves their cookie settings
        Then there should be a cookie created with name: ".epr_cookies_policy"
        And cookie with name: ".epr_cookies_policy" should have value: "False"
        And there should not be a cookie created with name: ".epr_cookie_policy"


Scenario: Navigate to Cookies page from B2C Screen (opened in New Tab)
        And the registered user is on the "report data" page
        Then the "Cookies" link should be displayed
        When the user clicks on the "Cookies" link
        Then the user should be on the "RPD PROD cookies policy (English)" page in new Tab
