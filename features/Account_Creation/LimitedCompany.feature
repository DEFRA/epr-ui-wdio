@LimitedCompany
Feature: Limited Company functionality
    As an approved user for a Limited Company Organisation, 
    I want to ensure that I can create an account,
    So I can submit packaging data

    Background: Open create account page
        Given init common scenario context
        And init Account Creation scenario context
        And the registered user is on the "create account" page
        And the user logs in as an automation test user for: "Account Creation"
        And cookies "Accept" button should display
        And cookies are "Accepted"

     Scenario: Limited Company Journey
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "Yes"
        And the organisation's companies house number is: "11790216"
        And the organisation's companies house number is confirmed
        And the business or organisation is based in: "England"
        And the role in the organisation is: "Director"
        And the name is: "First" "Last"
        And the telephone number is: "07911111111"
        When checked the details are correct for an account creation journey
        # And confirm and submit details
        # Then the account should have been created

        # After scenario - clear down created account   

     Scenario: Limited Company Journey - Change Details - First and Last Name
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "Yes"
        And the organisation's companies house number is: "11790216"
        And the organisation's companies house number is confirmed
        And the business or organisation is based in: "England"
        And the role in the organisation is: "Director"
        And the name is: "First" "Last"
        And the telephone number is: "07911111111"
        When the change link for: "Name" is clicked in the Account Creation journey
        And the name is: "FirstChanged" "LastChanged"
        And the telephone number is: "07911111111"
        When checked the details are correct for an account creation journey
        # And confirm and submit details
        # Then the account should have been created

        # After scenario - clear down created account

     Scenario: Limited Company Journey - Change Details - UK Nation
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "Yes"
        And the organisation's companies house number is: "11790216"
        And the organisation's companies house number is confirmed
        And the business or organisation is based in: "England"
        And the role in the organisation is: "Director"
        And the name is: "First" "Last"
        And the telephone number is: "07911111111"
        When the change link for: "UK nation" is clicked in the Account Creation journey
        And the business or organisation is based in: "Scotland"
        And the role in the organisation is: "Director"
        And the name is: "First" "Last"
        And the telephone number is: "07911111111"
        When checked the details are correct for an account creation journey
        # And confirm and submit details
        # Then the account should have been created

        # After scenario - clear down created account  

     # https://dev.azure.com/defragovuk/RWD-CPR-EPR4P-ADO/_workitems/edit/223770
     Scenario: Limited Company Journey - Login from report data
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "Yes"
        And the organisation's companies house number is: "11790216"
        And the organisation's companies house number is confirmed
        And the business or organisation is based in: "England"
        And the role in the organisation is: "Director"
        And the name is: "First" "Last"
        And the telephone number is: "07911111111"
        When checked the details are correct for an account creation journey
        Given the user signs out
        And the registered user is on the "report data" page
        And the user logs in as an automation test user for: "Account Creation"
        Then the user should be on the "is a registered charity" page
