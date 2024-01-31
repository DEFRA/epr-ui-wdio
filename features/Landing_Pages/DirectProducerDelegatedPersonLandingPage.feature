@LandingPages
Feature: Direct Producer Landing page functionality - Delegated Person
    As Producer, I want to ensure that if I login
    then the correct landing page and options are available for me

    Background: Open report data page
        Given init common scenario context
        And init Landing Pages scenario context
        And the registered user is on the "report data" page
        And the user logs in as a "Direct" Producer with "Delegated" role
        Then the user should be on the "direct producer landing" page

    Scenario: Landing page for the Direct Producer
        Then the organisation id should be displayed on Direct producer Landing Page
        And the button "add a compliance scheme to your account" should be displayed
        And the "Report organisation details" card should display on the direct producer landing page
        And the "Report packaging data" card should display on the direct producer landing page
        And the "Waste management fee" card should display on the direct producer landing page
        And the "Packaging waste recovery notes" card should display on the direct producer landing page

    Scenario: Producer - add Compliance Scheme page
        When the user navigates to the add compliance scheme page
        Then the user should be on the "add compliance scheme" page
        And two options are displayed on the add compliance scheme page
        And the "What is a compliance scheme" panel is displayed
        When the user clicks the "What is a compliance scheme" panel
        Then the expected support text should display on the "add compliance scheme" page

    Scenario: List of Compliance Schemes - page
        When the user navigates to the add compliance scheme page
        Then the user should be on the "add compliance scheme" page
        When the user selects "Yes" on the add compliance scheme page
        Then the list of Compliance Schemes is displayed
        And the "My compliance scheme is not listed" panel is displayed
        When the user clicks the "My compliance scheme is not listed" panel
        Then the expected support text should display on the "list of Compliance Schemes" page

    Scenario: Don't add a Compliance Scheme to the Producer account
        When the user navigates to the add compliance scheme page
        Then the user should be on the "add compliance scheme" page
        And two options are displayed on the add compliance scheme page
        When the user selects "No" on the add compliance scheme page
        Then the user should be on the "direct producer landing" page

    Scenario: Add a Compliance Scheme to the Producer account
        When the user navigates to the add compliance scheme page
        Then the user should be on the "add compliance scheme" page
        When the user selects "Yes" on the add compliance scheme page
        Then the list of Compliance Schemes is displayed
        When the user selects compliance scheme
        Then the user should be on the "confirm compliance scheme change" page
        When the user confirms the compliance scheme option "change"
        Then the user should be on the "manage compliance scheme" page
        And the Compliance Scheme name is displayed on the Producer landing page
        When the user removes the compliance scheme from the account
        Then the user should be on the "direct producer landing" page
