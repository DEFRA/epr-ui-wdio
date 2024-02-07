@InlineError
Feature: Delegate User - Inline errors - Welsh - Inline Errors
    As a Welsh Organisation,
    I want to ensure that I can Manage an account, using the Welsh language
    So I can Delegate Team Members

    Background: Open manage account page
        Given init common scenario context
        And init Account Management scenario context
        And the registered user is on the "manage account" page
        And the user logs in as a "Direct" Producer with "Approved" role
        And cookies "Accept" button should display
        And cookies are "Accepted"
        Then the user should be on the "manage account" page

    Scenario: Relationship with Organisation is not entered
        Given I want to change permissions for user: "WelshTranslation BasicUser" to: "Manage team, upload data and submit data"
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        And the relationship with the organisation is: "Rhywbeth arall"
        And a value isn't selected or entered on the "relationship with organisation" page
        Then error message: "Rhowch eu perthynas nhw â’ch sefydliad chi" should display
        And the user signs out

    Scenario: Relationship with Organisation 451 digits long
        Given I want to change permissions for user: "WelshTranslation BasicUser" to: "Manage team, upload data and submit data"
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        And the relationship with the organisation is: "Rhywbeth arall"
        And the relationship with organisation is: "451" characters long
        Then error message: "Rhaid i’w perthynas nhw â’ch sefydliad fod yn 450 neu lai o gymeriadau" should display
        And the user signs out

    Scenario: Job Title is not entered
        Given I want to change permissions for user: "WelshTranslation BasicUser" to: "Manage team, upload data and submit data"
        And the relationship with the organisation is as an: "employee"
        Then the user should be on the "job title" page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        And a value isn't selected or entered on the "job title" page
        Then error message: "Rhowch eu teitl swydd" should display
        And the user signs out

    Scenario: Job Title 451 digits long
        Given I want to change permissions for user: "WelshTranslation BasicUser" to: "Manage team, upload data and submit data"
        And the relationship with the organisation is as an: "employee"
        Then the user should be on the "job title" page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        And the job title is: "451" characters long
        Then error message: "Rhaid i deitl swydd fod yn 450 neu lai o gymeriadau" should display
        And the user signs out

    Scenario: Name of Consultancy is not entered
        Given I want to change permissions for user: "WelshTranslation BasicUser" to: "Manage team, upload data and submit data"
        And the relationship with the organisation is as a: "consultant"
        Then the user should be on the "name of consultancy" page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        And a value isn't selected or entered on the "name of consultancy" page
        Then error message: "Rhowch enw’r ymgynghoriaeth maen nhw’n gweithio iddi" should display
        And the user signs out

    Scenario: Name of Consultancy 161 digits long
        Given I want to change permissions for user: "WelshTranslation BasicUser" to: "Manage team, upload data and submit data"
        And the relationship with the organisation is as a: "consultant"
        Then the user should be on the "name of consultancy" page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        And the name of consultancy is: "161" characters long
        Then error message: "Rhaid i enw’r ymgynghoriaeth fod yn 160 neu lai o gymeriadau" should display
        And the user signs out

    Scenario: Name of Organisation is not entered
        Given I want to change permissions for user: "WelshTranslation BasicUser" to: "Manage team, upload data and submit data"
        And the relationship with the organisation is: "Something else"
        And the relationship with the organisation is entered manually: "Test Relationship"
        Then the user should be on the "name of organisation" page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        And a value isn't selected or entered on the "name of consultancy" page
        Then error message: "Rhowch enw’r sefydliad maen nhw’n gweithio iddo" should display
        And the user signs out

    Scenario: Name of Organisation 161 digits long
        Given I want to change permissions for user: "WelshTranslation BasicUser" to: "Manage team, upload data and submit data"
        And the relationship with the organisation is: "Something else"
        And the relationship with the organisation is entered manually: "Test Relationship"
        Then the user should be on the "name of organisation" page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        And the name of organisation is: "161" characters long
        Then error message: "Rhaid i enw’r sefydliad fod yn 160 neu lai o gymeriadau" should display
        And the user signs out