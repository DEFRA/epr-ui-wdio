@LandingPages
Feature: CS Landing page functionality - Approved Person
    As Compliance Scheme user, I want to ensure that if I login
    then the correct landing page and options are available for me

    Background: Open report data page
        Given init common scenario context
        And init Landing Pages scenario context
        And the registered user is on the "report data" page
        And the user logs in as a Compliance Scheme "Approved" user
        Then the user should be on the "home compliance scheme" page

    Scenario: Landing page for CS Member
        Then the "Report your members’ organisation details" card should display on the home compliance scheme page
        And the "Report your members’ packaging data" card should display on the home compliance scheme page
        # When the user clicks the "What do I report" panel on the home compliance scheme page
        # Then the expected support text should display on the home compliance scheme page
        When the user clicks on an inactive Compliance Scheme tab on the home compliance scheme page
        Then the old inactive tab becomes active

    Scenario: Landing page for CS Member - Organisation details sub-landing page
        When the user selects the "Report organisation details" card as "Compliance Scheme"
        Then the user should be on the "organisation details sub landing" page
        And cards for different submission periods should be displayed
        When the user opens the "Organisation details Guidance" on the report members organisation details page
        Then the "Organisation details Guidance" page should display in a new tab

    Scenario: Landing page for CS Member - Packaging data sub-landing page
        When the user selects the "Report packaging data" card as "Compliance Scheme"
        Then the user should be on the "packaging data sub landing" page
        And the content should be correct on the "packaging data sub landing" page
        And cards for different submission periods should be displayed
        When the user opens the "PoM data Guidance" on the packaging data sub landing page
        Then the "PoM data Guidance" page should display in a new tab
        When the user opens the "PoM data rules" on the packaging data sub landing page
        Then the "PoM data rules" page should display in a new tab
        When the user opens the "PoM CSV example" on the packaging data sub landing page
        Then the "PoM CSV example" page should display in a new tab
        When the user opens the "PoM GOV.UK guidance" on the packaging data sub landing page
        Then the "PoM GOV.UK guidance" page should display in a new tab