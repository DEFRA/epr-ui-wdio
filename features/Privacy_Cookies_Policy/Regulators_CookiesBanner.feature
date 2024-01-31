@RegulatorsCookiesBanner
Feature: Regulators Cookies Banner functionality
    As a user who has logged in,
    I want to ensure that when the application loads,
    the content of the Regulators Cookies Banner is correct and I am able to interact with it

    Background: Open create account page
        Given init common scenario context

    # Regulators Cookies Banner displays correctly

    Scenario: Regulators Cookies Banner state from home
        And the registered user is on the "regulators home" page
        And the user logs in as an automation test user for: "Regulator"
        Then the cookies banner should be displayed, with header: "Cookies on the pEPR: Regulators’ service"
        And cookies "Accept" button should display
        And cookies "Reject" button should display
        Then the "View cookies" link should be displayed

    Scenario: Regulators Cookies Banner state from manage account
        And the registered user is on the "regulators home" page
        And the user logs in as an automation test user for: "Regulator"
        And the user clicks the "Manage your account" link
        Then the cookies banner should be displayed, with header: "Cookies on the pEPR: Regulators’ service"
        And cookies "Accept" button should display
        And cookies "Reject" button should display
        Then the "View cookies" link should be displayed

    # Accepting cookies reflects on Regulators Cookies Banner

    Scenario: Clicking accept button in Regulators Cookies Banner on home
        And init Cookies scenario context
        And the registered user is on the "regulators home" page
        And the user logs in as an automation test user for: "Regulator"
        And cookies are "Accepted"
        Then the cookies banner should be displayed, with text: "You’ve accepted analytics cookies."
        And the Hide cookie message button should display
        When the Hide cookie message button is clicked
        Then the cookies banner should not be displayed

    Scenario: Clicking accept button in Regulators Cookies Banner on manage account
        And init Cookies scenario context
        And the registered user is on the "regulators home" page
        And the user logs in as an automation test user for: "Regulator"
        And the user clicks the "Manage your account" link
        And cookies are "Accepted"
        Then the cookies banner should be displayed, with text: "You’ve accepted analytics cookies."
        And the Hide cookie message button should display
        When the Hide cookie message button is clicked
        Then the cookies banner should not be displayed

    # Rejecting cookies reflects on Regulators Cookies Banner

    Scenario: Clicking reject button in Regulators Cookies Banner on home
        And init Cookies scenario context
        And the registered user is on the "regulators home" page
        And the user logs in as an automation test user for: "Regulator"
        And cookies are "Rejected"
        Then the cookies banner should be displayed, with text: "You’ve rejected analytics cookies."
        And the Hide cookie message button should display
        When the Hide cookie message button is clicked
        Then the cookies banner should not be displayed

    Scenario: Clicking reject button in Regulators Cookies Banner on manage account
        And init Cookies scenario context
        And the registered user is on the "regulators home" page
        And the user logs in as an automation test user for: "Regulator"
        And the user clicks the "Manage your account" link
        And cookies are "Rejected"
        Then the cookies banner should be displayed, with text: "You’ve rejected analytics cookies."
        And the Hide cookie message button should display
        When the Hide cookie message button is clicked
        Then the cookies banner should not be displayed

    # Clicking View cookies link navigates to shared cookies policy page

    Scenario: Clicking View cookies link in Regulators Cookies Banner on home
        And the registered user is on the "regulators home" page
        And the user logs in as an automation test user for: "Regulator"
        And the "View cookies" link should be displayed
        When the user clicks on the "View cookies" link
        Then the user should be on the "regulators cookies policy" page

    Scenario: Clicking View cookies link in Regulators Cookies Banner on manage account
        And the registered user is on the "regulators home" page
        And the user logs in as an automation test user for: "Regulator"
        And the user clicks the "Manage your account" link
        And the "View cookies" link should be displayed
        When the user clicks on the "View cookies" link
        Then the user should be on the "regulators cookies policy" page

    # Accepting cookies on 1 frontend reflects on all frontends

    Scenario: Accept Cookies from regulators home
        And init Cookies scenario context
        And the registered user is on the "regulators home" page
        And the user logs in as an automation test user for: "Regulator"
        Then the user should be on the "regulators home" page
        And cookies are "Accepted"
        Then there should be a cookie created with name: ".epr_regulator_cookies_policy"
        And cookie with name: ".epr_regulator_cookies_policy" should have value: "True"
        And there should not be a cookie created with name: ".epr_cookie_policy"
        When the registered user is on the "regulators manage account" page
        Then there should be a cookie created with name: ".epr_regulator_cookies_policy"
        And cookie with name: ".epr_regulator_cookies_policy" should have value: "True"
        And there should not be a cookie created with name: ".epr_cookie_policy"

    Scenario: Accept Cookies from regulators manage account
        And init Cookies scenario context
        And the registered user is on the "regulators home" page
        And the user logs in as an automation test user for: "Regulator"
        And the user clicks the "Manage your account" link
        Then the user should be on the "regulators manage account" page
        And cookies are "Accepted"
        Then there should be a cookie created with name: ".epr_regulator_cookies_policy"
        And cookie with name: ".epr_regulator_cookies_policy" should have value: "True"
        And there should not be a cookie created with name: ".epr_cookie_policy"
        When the registered user is on the "regulators home" page
        Then there should be a cookie created with name: ".epr_regulator_cookies_policy"
        And cookie with name: ".epr_regulator_cookies_policy" should have value: "True"
        And there should not be a cookie created with name: ".epr_cookie_policy"

    # Rejecting cookies on 1 frontend reflects on all frontends

    Scenario: Reject Cookies from regulators home
        And init Cookies scenario context
        And the registered user is on the "regulators home" page
        And the user logs in as an automation test user for: "Regulator"
        Then the user should be on the "regulators home" page
        And cookies are "Rejected"
        Then there should be a cookie created with name: ".epr_regulator_cookies_policy"
        And cookie with name: ".epr_regulator_cookies_policy" should have value: "False"
        And there should not be a cookie created with name: ".epr_cookie_policy"
        When the registered user is on the "regulators manage account" page
        Then there should be a cookie created with name: ".epr_regulator_cookies_policy"
        And cookie with name: ".epr_regulator_cookies_policy" should have value: "False"
        And there should not be a cookie created with name: ".epr_cookie_policy"

    Scenario: Reject Cookies from regulators manage account
        And init Cookies scenario context
        And the registered user is on the "regulators home" page
        And the user logs in as an automation test user for: "Regulator"
        And the user clicks the "Manage your account" link
        Then the user should be on the "regulators manage account" page
        And cookies are "Rejected"
        Then there should be a cookie created with name: ".epr_regulator_cookies_policy"
        And cookie with name: ".epr_regulator_cookies_policy" should have value: "False"
        And there should not be a cookie created with name: ".epr_cookie_policy"
        When the registered user is on the "regulators home" page
        Then there should be a cookie created with name: ".epr_regulator_cookies_policy"
        And cookie with name: ".epr_regulator_cookies_policy" should have value: "False"
        And there should not be a cookie created with name: ".epr_cookie_policy"