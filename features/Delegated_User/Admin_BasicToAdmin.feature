@DelegatedUser
Feature: Delegated User functionality - Admin: Basic to Admin
    As an approved user for a Producer, with an admin and basic user
    I want the admin user to elevate the basic user to an admin user,
    So they can manage team and upload data

    Background: Open manage account page
        Given init common scenario context
        And init Account Management scenario context
        And the registered user is on the "manage account" page
        And the user logs in as an admin user
        And cookies "Accept" button should display
        And cookies are "Accepted"

    Scenario: Elevate existing Basic user to Admin user (Admin)
        # Change permissions
        Given I want to change permissions for user: "Autotest Invitedbasic3" to: "Manage team and upload data"
        Then the permissions for user: "Autotest Invitedbasic3" is: "Manage team and upload data"
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
        And the user logs in as an admin user
        And I want to change permissions for user: "Autotest Invitedbasic3" to: "Upload data only"
        Then the permissions for user: "Autotest Invitedbasic3" is: "Upload data only"
        # Verify Basic Permissions
        Given the user signs out
        And the registered user is on the "report data" page
        And the user logs in as a basic user invited to admin
        When the user selects the "Report organisation details" card as "Producer"
        And the user navigates to "Report organisation details" page as a "Producer"
        Then the user should be on the "upload organisation details" page

    # https://dev.azure.com/defragovuk/RWD-CPR-EPR4P-ADO/_workitems/edit/223770
    Scenario: Admin user - Navigate to report data
        And the user goes to home page
        Then the user should be on the "direct producer landing" page
        
