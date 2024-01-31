@RegulatorsCookiesPolicy
Feature: Regulators Cookies policy functionality
    As a user who has logged in,
    I want to ensure that when I navigate to the regulators Cookies Policy page,
    the content of the page is correct and I can navigate back

    Background: Open create account page
        Given init common scenario context

    Scenario: Navigate to regulators Cookies Policy from home
        And the registered user is on the "regulators home" page
        And the user logs in as an automation test user for: "Regulator"
        Then the "Cookies" link should be displayed
        When the user clicks on the "Cookies" link
        Then the user should be on the "regulators cookies policy" page
        And the content of the Regulators "Cookies" policy page should be correct
        Then the back link should be displayed
        When the user clicks the back link
        Then the user should be on the "regulators home" page

    Scenario: Navigate to regulators Cookies Policy from manage account
        And the registered user is on the "regulators home" page
        And the user logs in as an automation test user for: "Regulator"
        And the user clicks the "Manage your account" link
        Then the "Cookies" link should be displayed
        When the user clicks on the "Cookies" link
        Then the user should be on the "regulators cookies policy" page
        And the content of the Regulators "Cookies" policy page should be correct
        Then the back link should be displayed
        When the user clicks the back link
        Then the user should be on the "regulators manage account" page

    Scenario: Accept Cookies from Cookies Policy page
        And init Cookies scenario context
        And the registered user is on the "regulators home" page
        And the user logs in as an automation test user for: "Regulator"
        And the user clicks on the "Cookies" link
        And the user selects the "Accept" cookies radio button
        When the user saves their cookie settings
        Then there should be a cookie created with name: ".epr_regulator_cookies_policy"
        And cookie with name: ".epr_regulator_cookies_policy" should have value: "True"
        And there should not be a cookie created with name: ".epr_cookie_policy"

    Scenario: Reject Cookies from Cookies Policy page
        And init Cookies scenario context
        And the registered user is on the "regulators home" page
        And the user logs in as an automation test user for: "Regulator"
        And the user clicks on the "Cookies" link
        And the user selects the "Reject" cookies radio button
        When the user saves their cookie settings
        Then there should be a cookie created with name: ".epr_regulator_cookies_policy"
        And cookie with name: ".epr_regulator_cookies_policy" should have value: "False"
        And there should not be a cookie created with name: ".epr_cookie_policy"