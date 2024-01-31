@InlineError
Feature: CS Dissociates From Producer functionality - Inline Errors
    As a user for a compliance scheme,
    I want to be ensure that the correct validation is triggered when dissociating from a producer (if I have the correct permissions),
    So that I cannot accidentally enter invalid data

    Background: Set up scenario context and log in
        Given init common scenario context
        And init CS Dissociates From Producers scenario context
        And the registered user is on the "report data" page
        When the user logs in as an "Approved" user of a Compliance Scheme operating in "England and Northern Ireland"
        And cookies are "Accepted"

    Scenario: Search for a non-existent organisation on the scheme members page
        And the user clicks the "View and remove members" link
        When the user searches for an organisation: "aaaaaaa"
        Then 0 organisations are displayed

    Scenario: No option selected on the reason for removal page
        And the user clicks the "View and remove members" link
        And the user searches for an organisation: "KAINOS HEALTHCARE LTD"
        And the user clicks the "KAINOS HEALTHCARE LTD" organisation name link
        And the user clicks the "Remove member" link
        When a value isn't selected or entered on the "reason for removal" page
        Then error message: "Select why you want to remove this member from your account" should display

    Scenario: No value entered on the tell us more page
        And the user clicks the "View and remove members" link
        And the user searches for an organisation: "KAINOS HEALTHCARE LTD"
        And the user clicks the "KAINOS HEALTHCARE LTD" organisation name link
        And the user clicks the "Remove member" link
        When the user selects the "None of the above" radio button as the reason for removal
        And the user clicks the "Continue" button
        When a value isn't selected or entered on the "tell us more" page
        Then error message: "Enter more about why you’re removing this member" should display

    Scenario: Value entered on the tell us more page is 201 characters long
        And the user clicks the "View and remove members" link
        And the user searches for an organisation: "KAINOS HEALTHCARE LTD"
        And the user clicks the "KAINOS HEALTHCARE LTD" organisation name link
        And the user clicks the "Remove member" link
        When the user selects the "None of the above" radio button as the reason for removal
        And the user clicks the "Continue" button
        When the tell us more info is: "201" characters long
        Then error message: "Your response must be 200 characters or less" should display

    Scenario: No value entered on the confirm removal page
        And the user clicks the "View and remove members" link
        And the user searches for an organisation: "KAINOS HEALTHCARE LTD"
        And the user clicks the "KAINOS HEALTHCARE LTD" organisation name link
        And the user clicks the "Remove member" link
        When the user selects the "It has ended its membership with this scheme" radio button as the reason for removal
        And the user clicks the "Continue" button
        When a value isn't selected or entered on the "confirm removal" page
        Then error message: "Select yes if you would like to remove this member from your account" should display