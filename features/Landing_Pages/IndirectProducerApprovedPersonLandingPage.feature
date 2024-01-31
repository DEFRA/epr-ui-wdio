@LandingPages
Feature: Indirect Producer Landing page functionality - Approved Person
    As Producer, I want to ensure that if I login
    then the correct landing page and options are available for me

    Background: Open report data page
        Given the registered user is on the "report data" page
        And init common scenario context
        And init Landing Pages scenario context
        And the user logs in as an "Indirect" Producer with "Approved" role
        Then the user should be on the "manage compliance scheme" page

    Scenario: Landing page for the Indirect Producer
        Then the Compliance Scheme name is displayed on the Producer landing page
        And the organisation id should be displayed on Indirect producer Landing Page
        And the link "change or remove compliance scheme" should be displayed

    Scenario: Change Compliance Scheme in Producer account
        Then the Compliance Scheme name is displayed on the Producer landing page
        When the user wants to change Compliance Scheme options
        Then the user should be on the "change compliance scheme" page
        And the two compliance scheme options should be displayed
        When the user chooses "change compliance scheme" option
        Then the list of Compliance Schemes is displayed
        When the user selects compliance scheme
        Then the user should be on the "confirm compliance scheme change" page
        When the user confirms the compliance scheme option "change"
        Then the user should be on the "manage compliance scheme" page
        And the Compliance Scheme name is displayed on the Producer landing page
        And the Compliance Scheme name is different

    Scenario: Remove Compliance Scheme from Producer account
        Then the Compliance Scheme name is displayed on the Producer landing page
        When the user wants to change Compliance Scheme options
        Then the user should be on the "change compliance scheme" page
        And the two compliance scheme options should be displayed
        When the user chooses "remove compliance scheme" option
        Then the user should be on the "remove compliance scheme" page
        When the user confirms the compliance scheme option "removal"
        Then the user should be on the "direct producer landing" page
        When the user adds a compliance scheme to the account
        Then the user should be on the "manage compliance scheme" page