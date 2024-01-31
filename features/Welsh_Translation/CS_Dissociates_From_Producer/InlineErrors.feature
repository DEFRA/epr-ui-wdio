@WelshTranslation
Feature: CS Dissociates From Producer functionality - Inline Errors - Welsh Translation
    As a Welsh user for a compliance scheme,
    I want to be able to dissociate from a producer (if I have the correct permissions), using the Welsh language
    So that this producer is no longer linked to my compliance scheme

    Background: Set up scenario context
        Given init common scenario context
        And init CS Dissociates From Producers scenario context
        And the registered user is on the "report data" page
        And the user logs in as an "Approved" user of a Compliance Scheme operating in "England and Northern Ireland"
        And cookies are "Accepted"

    Scenario: Search for a non-existent organisation on the scheme members page
        And the user clicks the "View and remove members" link
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        And the user searches for an organisation: "aaaaaaa"
        Then 0 organisations are displayed

    Scenario: No option selected on the reason for removal page
        And the user clicks the "View and remove members" link
        And the user searches for an organisation: "KAINOS HEALTHCARE LTD"
        And the user clicks the "KAINOS HEALTHCARE LTD" organisation name link
        And the user clicks the "Remove member" link
        And the "Welsh" toggle should be displayed
        And the user clicks the "Welsh" toggle
        When a value isn't selected or entered on the "reason for removal" page
        Then error message: "Dewiswch pam hoffech chi dynnu’r aelod yma o’ch cyfrif" should display

    Scenario: No value entered on the tell us more page
        And the user clicks the "View and remove members" link
        And the user searches for an organisation: "KAINOS HEALTHCARE LTD"
        And the user clicks the "KAINOS HEALTHCARE LTD" organisation name link
        And the user clicks the "Remove member" link
        When the user selects the "None of the above" radio button as the reason for removal
        And the user clicks the "Continue" button
        And the "Welsh" toggle should be displayed
        And the user clicks the "Welsh" toggle
        When a value isn't selected or entered on the "tell us more" page
        Then error message: "Dewiswch pam hoffech chi dynnu’r aelod yma o’ch cyfrif" should display

    Scenario: Value entered on the tell us more page is 201 characters long
        And the user clicks the "View and remove members" link
        And the user searches for an organisation: "KAINOS HEALTHCARE LTD"
        And the user clicks the "KAINOS HEALTHCARE LTD" organisation name link
        And the user clicks the "Remove member" link
        When the user selects the "None of the above" radio button as the reason for removal
        And the user clicks the "Continue" button
        And the "Welsh" toggle should be displayed
        And the user clicks the "Welsh" toggle
        When the tell us more info is: "201" characters long
        Then error message: "Rhaid i’ch ymateb fod yn 200 neu lai o gymeriadau" should display

    Scenario: No value entered on the confirm removal page
        And the user clicks the "View and remove members" link
        And the user searches for an organisation: "KAINOS HEALTHCARE LTD"
        And the user clicks the "KAINOS HEALTHCARE LTD" organisation name link
        And the user clicks the "Remove member" link
        When the user selects the "It has ended its membership with this scheme" radio button as the reason for removal
        And the user clicks the "Continue" button
        And the "Welsh" toggle should be displayed
        And the user clicks the "Welsh" toggle
        When a value isn't selected or entered on the "confirm removal" page
        Then error message: "Dewiswch Ydw os hoffech chi dynnu’r aelod yma o’ch cyfrif" should display