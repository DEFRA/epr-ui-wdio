@RegisteredCharity
Feature: Registered Charity functionality
    As an approved user for a Registered Charity Organisation, 
    I want to ensure that I do NOT have to create an account,
    and I do NOT have to submit packaging data

    Background: Open create account page
        Given init common scenario context
        And init Account Creation scenario context
        And the registered user is on the "create account" page
        And the user logs in as an automation test user for: "Account Creation"
        And cookies "Accept" button should display
        And cookies are "Accepted"

     Scenario: Registered Charity Journey
        Given the organisation is a registered charity: "Yes"
        Then the user should be on the "do not need to create account" page
        And the text: "Based on the answers you’ve given, you do not need to create an account" should display on the not affected page