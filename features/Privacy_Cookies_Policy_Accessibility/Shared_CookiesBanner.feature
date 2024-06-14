@SharedCookiesBanner
Feature: Shared Cookies Banner functionality
    As a user who has logged in,
    I want to ensure that when the application loads,
    the content of the Shared Cookies Banner is correct and I am able to interact with it

    Background: Open create account page
        Given init common scenario context

    # Shared Cookies Banner displays correctly

    Scenario: Shared Cookies Banner state from report data
        And the registered user is on the "report data" page
        And the user logs in as an approved user with admin
        Then the cookies banner should be displayed, with header: "Cookies on the ‘report packaging data’ service"
        And cookies "Accept" button should display
        And cookies "Reject" button should display
        And the "View cookies" link should be displayed

    Scenario: Shared Cookies Banner state from create account
        And the registered user is on the "create account" page
        And the user logs in as an automation test user for: "Account Creation"
        Then the cookies banner should be displayed, with header: "Cookies on the ‘report packaging data’ service"
        And cookies "Accept" button should display
        And cookies "Reject" button should display
        And the "View cookies" link should be displayed

    Scenario: Shared Cookies Banner state from manage account
        And the registered user is on the "manage account" page
        And the user logs in as an approved user with admin
        Then the cookies banner should be displayed, with header: "Cookies on the ‘report packaging data’ service"
        And cookies "Accept" button should display
        And cookies "Reject" button should display
        And the "View cookies" link should be displayed

    # Accepting cookies reflects on Shared Cookies Banner

    Scenario: Clicking accept button in Shared Cookies Banner on report data
        And init Cookies scenario context
        And the registered user is on the "report data" page
        And the user logs in as an approved user with admin
        And cookies are "Accepted"
        Then the cookies banner should be displayed, with text: "You’ve accepted analytics cookies."
        And the Hide cookie message button should display
        When the Hide cookie message button is clicked
        Then the cookies banner should not be displayed

    Scenario: Clicking accept button in Shared Cookies Banner on create account
        And init Cookies scenario context
        And the registered user is on the "create account" page
        And the user logs in as an automation test user for: "Account Creation"
        And cookies are "Accepted"
        Then the cookies banner should be displayed, with text: "You’ve accepted analytics cookies."
        And the Hide cookie message button should display
        When the Hide cookie message button is clicked
        Then the cookies banner should not be displayed

    Scenario: Clicking accept button in Shared Cookies Banner on manage account
        And init Cookies scenario context
        And the registered user is on the "manage account" page
        And the user logs in as an approved user with admin
        And cookies are "Accepted"
        Then the cookies banner should be displayed, with text: "You’ve accepted analytics cookies."
        And the Hide cookie message button should display
        When the Hide cookie message button is clicked
        Then the cookies banner should not be displayed

    # Rejecting cookies reflects on Shared Cookies Banner

    Scenario: Clicking reject button in Shared Cookies Banner on report data
        And init Cookies scenario context
        And the registered user is on the "report data" page
        And the user logs in as an approved user with admin
        And cookies are "Rejected"
        Then the cookies banner should be displayed, with text: "You’ve rejected analytics cookies."
        And the Hide cookie message button should display
        When the Hide cookie message button is clicked
        Then the cookies banner should not be displayed

    Scenario: Clicking reject button in Shared Cookies Banner on create account
        And init Cookies scenario context
        And the registered user is on the "create account" page
        And the user logs in as an automation test user for: "Account Creation"
        And cookies are "Rejected"
        Then the cookies banner should be displayed, with text: "You’ve rejected analytics cookies."
        And the Hide cookie message button should display
        When the Hide cookie message button is clicked
        Then the cookies banner should not be displayed

    Scenario: Clicking reject button in Shared Cookies Banner on manage account
        And init Cookies scenario context
        And the registered user is on the "manage account" page
        And the user logs in as an approved user with admin
        And cookies are "Rejected"
        Then the cookies banner should be displayed, with text: "You’ve rejected analytics cookies."
        And the Hide cookie message button should display
        When the Hide cookie message button is clicked
        Then the cookies banner should not be displayed

    # Clicking View cookies link navigates to shared cookies policy page

    Scenario: Clicking View cookies link in Shared Cookies Banner on report data
        And the registered user is on the "report data" page
        And the user logs in as an approved user with admin
        And the "View cookies" link should be displayed
        When the user clicks on the "View cookies" link
        Then the user should be on the "shared cookies policy" page

    Scenario: Clicking View cookies link in Shared Cookies Banner on create account
        And the registered user is on the "create account" page
        And the user logs in as an automation test user for: "Account Creation"
        And the "View cookies" link should be displayed
        When the user clicks on the "View cookies" link
        Then the user should be on the "shared cookies policy" page
        And the user clicks the back link

    Scenario: Clicking View cookies link in Shared Cookies Banner on manage account
        And the registered user is on the "manage account" page
        And the user logs in as an approved user with admin
        And the "View cookies" link should be displayed
        When the user clicks on the "View cookies" link
        Then the user should be on the "shared cookies policy" page

    # Accepting cookies on 1 frontend reflects on all frontends

    Scenario: Accept Cookies from report data
        And init Cookies scenario context
        And the registered user is on the "report data" page
        And the user logs in as an approved user with admin
        Then the user should be on the "direct producer landing" page
        And cookies are "Accepted"
        Then there should be a cookie created with name: ".epr_cookies_policy"
        And cookie with name: ".epr_cookies_policy" should have value: "True"
        And there should not be a cookie created with name: ".epr_cookie_policy"
        When the registered user is on the "manage account" page
        Then there should be a cookie created with name: ".epr_cookies_policy"
        And cookie with name: ".epr_cookies_policy" should have value: "True"
        And there should not be a cookie created with name: ".epr_cookie_policy"

    Scenario: Accept Cookies from create account
        And init Account Creation scenario context
        And init Cookies scenario context
        And the registered user is on the "create account" page
        And the user logs in as an automation test user for: "Accept Cookies"
        Then the user should be on the "is a registered charity" page
        And cookies are "Accepted"
        Then there should be a cookie created with name: ".epr_cookies_policy"
        And cookie with name: ".epr_cookies_policy" should have value: "True"
        And there should not be a cookie created with name: ".epr_cookie_policy"
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "No"
        And the organisation registered type is a: "Sole trader"
        And the trading name is: "Test Co"
        And the registered business postcode is: "M25 0FG"
        And the full registered business address is: "OAKLEY DENTAL, 59, BURY OLD ROAD, PRESTWICH, MANCHESTER, M25 0FG"
        And the business or organisation is based in: "England"
        And the name is: "First" "Last"
        And the telephone number is: "07911111111"
        When checked the details are correct for an account creation journey
        And confirm and submit details
        And the registered user is on the "report data" page
        Then the user should be on the "direct producer landing" page
        And there should be a cookie created with name: ".epr_cookies_policy"
        And cookie with name: ".epr_cookies_policy" should have value: "True"
        And there should not be a cookie created with name: ".epr_cookie_policy"
        When the registered user is on the "manage account" page
        Then there should be a cookie created with name: ".epr_cookies_policy"
        And cookie with name: ".epr_cookies_policy" should have value: "True"
        And there should not be a cookie created with name: ".epr_cookie_policy"

    Scenario: Accept Cookies from manage account
        And init Cookies scenario context
        And the registered user is on the "manage account" page
        And the user logs in as an approved user with admin
        Then the user should be on the "manage account" page
        And cookies are "Accepted"
        Then there should be a cookie created with name: ".epr_cookies_policy"
        And cookie with name: ".epr_cookies_policy" should have value: "True"
        And there should not be a cookie created with name: ".epr_cookie_policy"
        When the registered user is on the "report data" page
        Then there should be a cookie created with name: ".epr_cookies_policy"
        And cookie with name: ".epr_cookies_policy" should have value: "True"
        And there should not be a cookie created with name: ".epr_cookie_policy"

    # Rejecting cookies on 1 frontend reflects on all frontends

    Scenario: Reject Cookies from report data
        And init Cookies scenario context
        And the registered user is on the "report data" page
        And the user logs in as an approved user with admin
        Then the user should be on the "direct producer landing" page
        And cookies are "Rejected"
        Then there should be a cookie created with name: ".epr_cookies_policy"
        And cookie with name: ".epr_cookies_policy" should have value: "False"
        And there should not be a cookie created with name: ".epr_cookie_policy"
        When the registered user is on the "manage account" page
        Then there should be a cookie created with name: ".epr_cookies_policy"
        And cookie with name: ".epr_cookies_policy" should have value: "False"
        And there should not be a cookie created with name: ".epr_cookie_policy"

    Scenario: Reject Cookies from create account
        And init Account Creation scenario context
        And init Cookies scenario context
        And the registered user is on the "create account" page
        And the user logs in as an automation test user for: "Reject Cookies"
        Then the user should be on the "is a registered charity" page
        And cookies are "Rejected"
        Then there should be a cookie created with name: ".epr_cookies_policy"
        And cookie with name: ".epr_cookies_policy" should have value: "False"
        And there should not be a cookie created with name: ".epr_cookie_policy"
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "No"
        And the organisation registered type is a: "Sole trader"
        And the trading name is: "Test Co"
        And the registered business postcode is: "M25 0FG"
        And the full registered business address is: "OAKLEY DENTAL, 59, BURY OLD ROAD, PRESTWICH, MANCHESTER, M25 0FG"
        And the business or organisation is based in: "England"
        And the name is: "First" "Last"
        And the telephone number is: "07911111111"
        When checked the details are correct for an account creation journey
        And confirm and submit details
        And the registered user is on the "report data" page
        Then the user should be on the "direct producer landing" page
        And there should be a cookie created with name: ".epr_cookies_policy"
        And cookie with name: ".epr_cookies_policy" should have value: "False"
        And there should not be a cookie created with name: ".epr_cookie_policy"
        And the registered user is on the "manage account" page
        And there should be a cookie created with name: ".epr_cookies_policy"
        And cookie with name: ".epr_cookies_policy" should have value: "False"
        And there should not be a cookie created with name: ".epr_cookie_policy"
    
    Scenario: Reject Cookies from manage account
        And init Cookies scenario context
        And the registered user is on the "manage account" page
        And the user logs in as an approved user with admin
        Then the user should be on the "manage account" page
        And cookies are "Rejected"
        Then there should be a cookie created with name: ".epr_cookies_policy"
        And cookie with name: ".epr_cookies_policy" should have value: "False"
        And there should not be a cookie created with name: ".epr_cookie_policy"
        When the registered user is on the "report data" page
        Then there should be a cookie created with name: ".epr_cookies_policy"
        And cookie with name: ".epr_cookies_policy" should have value: "False"
        And there should not be a cookie created with name: ".epr_cookie_policy"