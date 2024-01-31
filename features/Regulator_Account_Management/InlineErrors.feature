@AccountManagement
Feature: Account Management for Admin and Basic Users - Inline Errors
        As an Admin for a Regulator,
        I want to add new Team members
        So I can able to perform the user journey

        Background: Open Regulator account page
                Given init common scenario context
                And the registered user is on the "regulators home" page
                When the user logs in as an automation test user for: "Regulator - SCO"
                And cookies are "Accepted"
                Then the page title should be correct for the "Regulators Home" page
                And the user should be able to view the "pEPR: Regulators’ Service" details for the Regulator
                And the user should be expected to view the "TestRegulator" nation details
                And the user should be able to view the logged in User name "RegulatorUser AdminType" for the nation
                And the manage "account" link should be displayed
                And the manage "applications" link should be displayed
                When the user clicks the manage "account" link
                Then the user should be on the "regulators manage account" page
                When the user clicks on the "Add team member" link in manage account page
                Then the user should be on the "regulators invite team member email" page

        Scenario: Regulator Invite Team Member Email Address is not entered
                When a value isn't selected or entered on the "regulators invite team member email" page
                Then error message: "Enter their email address" should display

        Scenario: Regulator Invite Team Member Email Address is in incorrect format
                When the user enters email address: "AutomatedTest"
                And the user clicks the continue button
                Then error message: "Enter an email in the correct format, like name@example.com" should display
        
        Scenario: Regulator Invite Team Member Invite already sent
                When the user enters email address: "AutomationSample@testdev3.testinator.com"
                And the user clicks the continue button
                And the user type or permission "Basic user" is selected
                And the user clicks the continue button
                And the invitation is sent to the member
                Then error message: "An invitation has already been sent to AutomationSample@testdev3.testinator.com" should contain

        Scenario: Regulator Invite Team Member Account Type is not selected
                When the user enters email address: "AutomatedTest@test.com"
                And the user clicks the continue button
                And a value isn't selected or entered on the "regulators team member permissions" page
                Then error message: "Please select which type of account user do you want them to be" should display
