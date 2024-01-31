@DelegatedUser
Feature: Delegated User functionality - Delegated: Basic to Admin
    As an approved user for a Producer, with a delegated and basic user
    I want the delegated user to elevate the basic user to an admin user,
    So they can manage team and upload data

    Background: Open manage account page
        Given init common scenario context
        And init Account Management scenario context
        And the registered user is on the "manage account" page
        And the user logs in as a delegated user
        And cookies "Accept" button should display
        And cookies are "Accepted"

    Scenario: Elevate existing Basic user to Admin user (Delegated)
        # Change permissions
        Given I want to change permissions for user: "Autotest Invitedbasic2" to: "Manage team and upload data"
        Then the permissions for user: "Autotest Invitedbasic2" is: "Manage team and upload data"
        # Verify Admin Permissions
        Given the user signs out
        And the registered user is on the "report data" page
        And the user logs in as a basic user invited to admin
        When the user selects the "Report organisation details" card as "Producer"
        And the user navigates to "Report organisation details" page as a "Producer"
        Then the user should be on the "upload organisation details" page
        # Cancel Invite
        Given the user signs out
        And the registered user is on the "manage account" page
        And the user logs in as a delegated user
        And I want to change permissions for user: "Autotest Invitedbasic2" to: "Upload data only"
        Then the permissions for user: "Autotest Invitedbasic2" is: "Upload data only"
        # Verify Basic Permissions
        Given the user signs out
        And the registered user is on the "report data" page
        And the user logs in as a basic user invited to admin
        When the user selects the "Report organisation details" card as "Producer"
        And the user navigates to "Report organisation details" page as a "Producer"
        Then the user should be on the "upload organisation details" page
        
