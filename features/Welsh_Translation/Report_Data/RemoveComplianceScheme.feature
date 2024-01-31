Feature: Remove Compliance Scheme - Welsh Translation
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
        # Add Compliance Scheme
        When the user navigates to the add compliance scheme page
        When the user selects "Yes" on the add compliance scheme page
        And the user selects compliance scheme
        When the user confirms the compliance scheme option "change"
        Then the user should be on the "manage compliance scheme" page

    Scenario: What would you like to tell us about page
        When the user wants to change Compliance Scheme options
        Then the user should be on the "change compliance scheme" page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        Then the Welsh page H1 header should be correct for the "change compliance scheme" page
        # Remove Compliance Scheme
        And the registered user is on the "report data" page
        And the "English" toggle should be displayed
        When the user clicks the "English" toggle
        When the user removes the compliance scheme from the account
        Then the user should be on the "direct producer landing" page
        And the user signs out

    # https://dev.azure.com/defragovuk/RWD-CPR-EPR4P-ADO/_workitems/edit/248154
    # Commented until known issue resolved as will impact state (not remove CS after test)
    # Scenario: What would you like to tell us about not selected
    #     When the user wants to change Compliance Scheme options
    #     Then the user should be on the "change compliance scheme" page        
    #     And the "Welsh" toggle should be displayed
    #     When the user clicks the "Welsh" toggle
    #     When a value isn't selected or entered on the "what would you like to tell us about" page
    #     Then error message: "Dewiswch a ydych chi wedi newid cynllun cydymffurfio neu wedi rhoi’r gorau i ddefnyddio un." should display
    #     # Remove Compliance Scheme
    #     And the registered user is on the "report data" page
    #     And the "English" toggle should be displayed
    #     When the user clicks the "English" toggle
    #     When the user removes the compliance scheme from the account
    #     Then the user should be on the "direct producer landing" page
    #     And the user signs out

    Scenario: I am no longer using a compliance scheme page
        When the user wants to change Compliance Scheme options
        And the user chooses "remove compliance scheme" option
        Then the user should be on the "remove compliance scheme" page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        Then the Welsh page H1 header should be correct for the "remove compliance scheme" page
        # Remove Compliance Scheme
        And the registered user is on the "report data" page
        And the "English" toggle should be displayed
        When the user clicks the "English" toggle
        When the user removes the compliance scheme from the account
        Then the user should be on the "direct producer landing" page
        And the user signs out