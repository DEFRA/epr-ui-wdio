@LandingPages
Feature: Indirect Producer Landing page functionality - Basic User
    As Producer, I want to ensure that if I login
    then the correct landing page and options are available for me

    Background: Open report data page
        Given the registered user is on the "report data" page
        And init common scenario context
        And init Landing Pages scenario context
        And the user logs in as an "Indirect" Producer with "Basic" role

    Scenario: Landing page for the Indirect Producer
        Then the user should be on the "manage compliance scheme" page
        And the Compliance Scheme name is displayed on the Producer landing page
        And the organisation id should be displayed on Indirect producer Landing Page
        And the link "change or remove compliance scheme" should not be displayed
