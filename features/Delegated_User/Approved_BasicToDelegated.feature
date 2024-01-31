@DelegatedUser
Feature: Delegated User functionality - Approved: Basic to Delegated
    As an approved user for a Producer, with an basic user
    I want to elevate the basic user to a delegated user,
    So they can manage team, upload data and submit data

    Background: Open manage account page
        Given init common scenario context
        And init Account Management scenario context
        And the registered user is on the "manage account" page
        And the user logs in as an approved user with basic
        And cookies "Accept" button should display
        And cookies are "Accepted"

    Scenario: Elevate existing Basic user to Delegated user (Producer)
        # Change permissions and send invite
        Given I want to change permissions for user: "Autotest Invitedbasic" to: "Manage team, upload data and submit data"
        And the relationship with the organisation is as an: "employee"
        And the job title is: "Test Job Title"
        When checked the details are correct for a delegated user journey
        And the change link for: "How they work with your organisation" is clicked in the Account Management journey
        And the relationship with the organisation is as a: "consultant"
        And the name of the consultancy is: "Test consultancy"
        When checked the details are correct for a delegated user journey
        And the full name of the approved user with admin is entered: "Autotest Approveduserwithbasic"
        And the invitation is sent
        Then the status of the invitation for user: "Autotest Invitedbasic" is: "Pending invitation acceptance"
        # Accept Invite
        Given the user signs out
        And the registered user is on the "report data" page
        And the user logs in as a basic user invited to delegated
        Then the user should be able to view the invitation
        When the user accepts the invitation, name: "Autotest Invitedbasic", number: "07911111111"
        # Cancel Invite
        Given the user signs out
        And the registered user is on the "manage account" page
        And the user logs in as an approved user with basic
        Then the status of the invitation for user: "Autotest Invitedbasic" is: "Waiting for approval to submit data"
        Given I want to change permissions for user: "Autotest Invitedbasic" to: "Upload data only"
        When I want to cancel the invite: "Yes"


