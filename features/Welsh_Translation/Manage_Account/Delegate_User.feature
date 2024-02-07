Feature: Delegate User - Welsh Translation
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

    Scenario: Change Account Permissions page
        When the user clicks change permissions for user: "WelshTranslation BasicUser"
        Then the user should be on the "change account permissions" page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        Then the Welsh page H1 header should be correct for the "change account permissions" page
        And the user signs out

    Scenario: Relationship with Organisation page
        Given I want to change permissions for user: "WelshTranslation BasicUser" to: "Manage team, upload data and submit data"
        And the relationship with the organisation is: "Something else"
        Then the user should be on the "relationship with organisation" page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        Then the Welsh page H1 header should be correct for the "relationship with organisation" page
        And the user signs out

    Scenario: Job Title page
        Given I want to change permissions for user: "WelshTranslation BasicUser" to: "Manage team, upload data and submit data"
        And the relationship with the organisation is as an: "employee"
        Then the user should be on the "job title" page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        Then the Welsh page H1 header should be correct for the "job title" page
        And the user signs out

    Scenario: Name of Consultancy page
        Given I want to change permissions for user: "WelshTranslation BasicUser" to: "Manage team, upload data and submit data"
        And the relationship with the organisation is as a: "consultant"
        Then the user should be on the "name of consultancy" page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        Then the Welsh page H1 header should be correct for the "name of consultancy" page
        And the user signs out

    Scenario: Name of Compliance Scheme page
        Given I want to change permissions for user: "WelshTranslation BasicUser" to: "Manage team, upload data and submit data"
        And the relationship with the organisation is as a: "consultant from a compliance scheme"
        Then the user should be on the "name of compliance scheme" page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        Then the Welsh page H1 header should be correct for the "name of compliance scheme" page
        And the user signs out

    Scenario: Name of Organisation page
        Given I want to change permissions for user: "WelshTranslation BasicUser" to: "Manage team, upload data and submit data"
        And the relationship with the organisation is: "Something else"
        And the relationship with the organisation is entered manually: "Test Relationship"
        Then the user should be on the "name of organisation" page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        Then the Welsh page H1 header should be correct for the "name of organisation" page
        And the user signs out

    Scenario: Check details send invite page (Employee)
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        And I want to change permissions for user: "WelshTranslation BasicUser" to: "Rheoli’r tîm, uwchlwytho data a chyflwyno data"
        And the relationship with the organisation is fel: "cyflogai"
        And the job title is: "Test Job Title"
        Then checked the details are correct for a delegated user journey

    Scenario: Check details send invite page (Consultant)
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        And I want to change permissions for user: "WelshTranslation BasicUser" to: "Rheoli’r tîm, uwchlwytho data a chyflwyno data"
        And the relationship with the organisation is fel: "ymgynghorydd"
        And the name of the consultancy is: "Test consultancy"
        Then checked the details are correct for a delegated user journey

    Scenario: Check details send invite page (Consultant from CS)
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        And I want to change permissions for user: "WelshTranslation BasicUser" to: "Rheoli’r tîm, uwchlwytho data a chyflwyno data"
        And the relationship with the organisation is fel: "ymgynghorydd o gynllun cydymffurfio"
        And the name of the compliance scheme is: "Kite"
        Then checked the details are correct for a delegated user journey

    Scenario: Check details send invite page (Something Else)
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        And I want to change permissions for user: "WelshTranslation BasicUser" to: "Rheoli’r tîm, uwchlwytho data a chyflwyno data"
        And the relationship with the organisation is: "Rhywbeth arall"
        And the relationship with the organisation is entered manually: "Test Relationship"
        And the name of the organisation is: "Test Organisation"
        Then checked the details are correct for a delegated user journey
