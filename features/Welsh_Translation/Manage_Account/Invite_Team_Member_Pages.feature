Feature: Invite Team Member - Welsh Translation
    As a Welsh Organisation,
    I want to ensure that I can Manage an account, using the Welsh language
    So I can Invite Team Members

    Background: Open create account page
        Given init common scenario context
        And init Account Creation scenario context
        And the registered user is on the "manage account" page
        And the user logs in as a "Direct" Producer with "Approved" role
        And cookies "Accept" button should display
        And cookies are "Accepted"
        Then the user should be on the "manage account" page

    Scenario: Manage Acccount page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        Then the Welsh page H1 header should be correct for the "manage account" page
        And the user signs out

    Scenario: Team Members email page
        When the user clicks on the "Add team member" link in manage account page
        Then the user should be on the "invite team member email" page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        Then the Welsh page H1 header should be correct for the "invite team member email" page
        And the user signs out

    Scenario: Invite Team Member Email Address is not entered
        When the user clicks on the "Add team member" link in manage account page
        Then the user should be on the "invite team member email" page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        When a value isn't selected or entered on the "invite team member email" page
        Then error message: "Rhowch gyfeiriad ebost yr aelod o’r tîm" should display
        And the user signs out

    Scenario: Invite Team Member Email Address is in incorrect format
        When the user clicks on the "Add team member" link in manage account page
        Then the user should be on the "invite team member email" page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        When the user enters email address: "AutomatedTest"
        And the user clicks the continue button
        Then error message: "Rhowch gyfeiriad ebost yn y fformat cywir, fel enw@enghraifft.com" should display
        And the user signs out

    Scenario: What do you want them to do page
        When the user clicks on the "Add team member" link in manage account page
        When the user enters email address: "AutomatedTest@test.com"
        And the user clicks the continue button
        Then the user should be on the "team member permissions" page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        Then the Welsh page H1 header should be correct for the "team member permissions" page
        And the user signs out

    Scenario: Invite Team Member Account Type is not selected
        When the user clicks on the "Add team member" link in manage account page
        When the user enters email address: "AutomatedTest@test.com"
        And the user clicks the continue button
        Then the user should be on the "team member permissions" page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        And a value isn't selected or entered on the "team member permissions" page
        Then error message: "Dewiswch beth hoffech chi iddyn nhw ei wneud" should display
        And the user signs out

    Scenario: Check Invitation Details page
        When the user clicks on the "Add team member" link in manage account page
        When the user enters email address: "AutomatedTest@test.com"
        And the user clicks the continue button
        Then the user should be on the "team member permissions" page
        And the user type or permission "Upload data only" is selected
        And the user clicks the continue button
        Then the user should be on the "member details page" page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        Then the Welsh page H1 header should be correct for the "member details page" page
        And the user signs out