Feature: Add Compliance Scheme - Welsh Translation
    As a Welsh Organisation,
    I want to ensure that I can Add and Remove Compliance Schemes, using the Welsh language
    So I can submit packaging data

    Background: Open report data page
        Given init common scenario context
        And init Landing Pages scenario context
        And the registered user is on the "report data" page
        And the user logs in as a "Direct" Producer with "Approved" role
        And cookies "Accept" button should display
        And cookies are "Accepted"

    Scenario: Using a Compliance Scheme page
        Then the user should be on the "direct producer landing" page
        When the user navigates to the add compliance scheme page
        Then the user should be on the "add compliance scheme" page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        Then the Welsh page H1 header should be correct for the "add compliance scheme" page
        And the user signs out

    # https://dev.azure.com/defragovuk/RWD-CPR-EPR4P-ADO/_workitems/edit/248154
    Scenario: Using a Compliance Scheme not selected
        Then the user should be on the "direct producer landing" page
        When the user navigates to the add compliance scheme page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        When a value isn't selected or entered on the "using a Compliance Scheme" page
        Then error message: "Dewiswch a ydych chi’n defnyddio cynllun cydymffurfio" should display
        And the user signs out

    Scenario: Using a Compliance Scheme page Hint text
        Then the user should be on the "direct producer landing" page
        When the user navigates to the add compliance scheme page
        When the user selects "Yes" on the add compliance scheme page
        Then the user should be on the "select compliance scheme" page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        And the "My compliance scheme is not listed" panel is displayed
        When the user clicks the "My compliance scheme is not listed" panel
        Then the expected support text should display on the "list of Compliance Schemes" page
        And the user signs out

    Scenario: Select your Compliance Scheme page
        Then the user should be on the "direct producer landing" page
        When the user navigates to the add compliance scheme page
        When the user selects "Yes" on the add compliance scheme page
        Then the user should be on the "select compliance scheme" page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        Then the Welsh page H1 header should be correct for the "select compliance scheme" page
        And the user signs out

    # https://dev.azure.com/defragovuk/RWD-CPR-EPR4P-ADO/_workitems/edit/248154
    Scenario: Compliance Scheme not selected
        Then the user should be on the "direct producer landing" page
        When the user navigates to the add compliance scheme page
        And the user selects "Yes" on the add compliance scheme page
        And the "Welsh" toggle should be displayed
        And the user clicks the "Welsh" toggle
        And a value isn't selected or entered on the "select compliance scheme" page
        Then error message: "Dewiswch pa gynllun cydymffurfio rydych chi’n ei ddefnyddio" should display
        And the user signs out

    Scenario: Select your Compliance Scheme page Hint text
        Then the user should be on the "direct producer landing" page
        When the user navigates to the add compliance scheme page
        When the user selects "Yes" on the add compliance scheme page
        Then the user should be on the "select compliance scheme" page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        And the "My compliance scheme is not listed" panel is displayed
        When the user clicks the "My compliance scheme is not listed" panel
        Then the expected support text should display on the "list of Compliance Schemes" page
        And the user signs out

    Scenario: Confirm Choice of Compliance Scheme page
        Then the user should be on the "direct producer landing" page
        When the user navigates to the add compliance scheme page
        When the user selects "Yes" on the add compliance scheme page
        And the user selects compliance scheme
        Then the user should be on the "confirm compliance scheme change" page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        Then the Welsh page H1 header should be correct for the "confirm compliance scheme change" page
        And the user signs out

    Scenario: Manage Compliance Scheme page after adding CS
        Then the user should be on the "direct producer landing" page
        When the user navigates to the add compliance scheme page
        When the user selects "Yes" on the add compliance scheme page
        And the user selects compliance scheme
        When the user confirms the compliance scheme option "change"
        Then the user should be on the "manage compliance scheme" page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        Then the Welsh page H1 header should be correct for the "manage compliance scheme" page
        And the Compliance Scheme name is displayed on the Producer landing page
        And the "English" toggle should be displayed
        When the user clicks the "English" toggle
        When the user removes the compliance scheme from the account
        Then the user should be on the "direct producer landing" page
        And the user signs out
