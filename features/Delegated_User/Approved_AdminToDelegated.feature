@DelegatedUser
Feature: Delegated User functionality - Approved: Admin to Delegated
    As an approved user for a Producer, with an admin user
    I want to elevate the admin user to a delegated user,
    So they can manage team, upload data and submit data

    Background: Open manage account page
        Given init common scenario context
        And init Account Management scenario context
        And the registered user is on the "manage account" page
        And the user logs in as an approved user with admin
        And cookies "Accept" button should display
        And cookies are "Accepted"

    Scenario: Elevate existing Admin user to Delegated user (Producer)
        # Change permissions and send invite
        Given I want to change permissions for user: "Autotest Invitedadmin" to: "Manage team, upload data and submit data"
        And the relationship with the organisation is as a: "consultant from a compliance scheme"
        And the name of the compliance scheme is: "Kite"
        When checked the details are correct for a delegated user journey
        And the change link for: "How they work with your organisation" is clicked in the Account Management journey
        And the relationship with the organisation is: "Something else"
        And the relationship with the organisation is entered manually: "Test Relationship"
        And the name of the organisation is: "Test Organisation"
        When checked the details are correct for a delegated user journey
        And the full name of the approved user with admin is entered: "Autotest Approveduserwithadmin"
        And the invitation is sent
        Then the status of the invitation for user: "Autotest Invitedadmin" is: "Pending invitation acceptance"
        # Accept Invite
        Given the user signs out
        And the registered user is on the "report data" page
        And the user logs in as an admin user invited to delegated
        Then the user should be able to view the invitation
        When the user accepts the invitation, name: "Autotest Invitedadmin", number: "07911111111"
        # Cancel Invite
        Given the user signs out
        And the registered user is on the "manage account" page
        And the user logs in as an approved user with admin
        Then the status of the invitation for user: "Autotest Invitedadmin" is: "Waiting for approval to submit data"
        Given I want to change permissions for user: "Autotest Invitedadmin" to: "Manage team and upload data"
        When I want to cancel the invite: "Yes"


