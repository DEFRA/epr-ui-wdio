@AccountManagement
Feature: Account Management for Admin and Basic Users
        As an Admin for a Regulator,
        I want to add new Team members
        So I can able to perform the user journey

        Background: Open Regulator account page
                Given init common scenario context
                And the registered user is on the "regulators home" page

        Scenario: Validate the Landing Screen for Admin User
                Given the user logs in as an automation test user for: "Regulator - SCO"
                And cookies are "Accepted"
                Then the page title should be correct for the "Regulators Home" page
                When the user should be able to view the "pEPR: Regulators’ Service" details for the Regulator
                And the user should be expected to view the "TestRegulator" nation details
                And the user should be able to view the logged in User name "RegulatorUser AdminType" for the nation
                And the manage "account" link should be displayed
                And the manage "applications" link should be displayed
                When the user clicks the manage "account" link
                Then the user should be on the "regulators manage account" page
                When the user clicks the back to home link
                And the user clicks the manage "applications" link
                Then the user should be on the "regulators manage applications" page
                And the user clicks the back to home link

        Scenario: Validate the Landing Screen for Basic User
                Given the user logs in as an automation test user for: "Regulator Basic"
                And cookies are "Accepted"
                Then the page title should be correct for the "Regulators Home" page
                And the user should be able to view the "pEPR: Regulators’ Service" details for the Regulator
                And the user should be expected to view the "TestRegulator" nation details
                And the user should be able to view the logged in User name "RegulatorUser BasicType" for the nation
                And the manage "applications" link should be displayed
                When the user clicks the manage "applications" link
                Then the user should be on the "regulators manage applications" page
                And the user clicks the back to home link

        Scenario: Validate the access for account and applications page for Admin User to Regulator Service
                Given the user logs in as an automation test user for: "Regulator - SCO"
                And cookies are "Accepted"
                Then the page title should be correct for the "Regulators Home" page
                And the user should be able to view the "pEPR: Regulators’ Service" details for the Regulator
                And the user should be expected to view the "TestRegulator" nation details
                And the user should be able to view the logged in User name "RegulatorUser AdminType" for the nation
                Given the registered user is on the "regulators manage account" page
                Then the user should be on the "regulators manage account" page
                When the user clicks the back to home link
                Given the registered user is on the "regulators application" page
                Then the user should be on the "regulators manage applications" page
                And the user clicks the back to home link

        Scenario: Validate the access for account and applications page for Basic User to Regulator Service
                Given the user logs in as an automation test user for: "Regulator Basic"
                And cookies are "Accepted"
                Then the page title should be correct for the "Regulators Home" page
                And the user should be able to view the "pEPR: Regulators’ Service" details for the Regulator
                And the user should be expected to view the "TestRegulator" nation details
                And the user should be able to view the logged in User name "RegulatorUser BasicType" for the nation
                Given the registered user is on the "regulators application" page
                Then the user should be on the "regulators manage applications" page
                Given the user clicks the back to home link
                And the registered user is on the "regulators manage account" page
                Then the user should be on the "access Denied" page

