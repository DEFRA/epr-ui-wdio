@ComplianceSchemeOperator
Feature: Compliance Scheme Operator functionality
    As an approved user for a Compliance Scheme Operator, 
    I want to ensure that I can create an account,
    So I can submit packaging data

    Background: Open create account page
        Given init common scenario context
        And init Account Creation scenario context
        And the registered user is on the "create account" page
        And the user logs in as an automation test user for: "Account Creation"
        And cookies "Accept" button should display
        And cookies are "Accepted"

     Scenario: Compliance Scheme Operator Journey
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "Yes"
        And the organisation's companies house number is: "04592964"
        And the organisation's companies house number is confirmed
        And the role in the organisation is: "Director"
        And the name is: "First" "Last"
        And the telephone number is: "07911111111"
        When the change link for: "Role" is clicked in the Account Creation journey
        And the role in the organisation is: "Company secretary"
        And the name is: "First" "Last"
        And the telephone number is: "07911111111"
        When checked the details are correct for an account creation journey
        # And confirm and submit details
        # Then the account should have been created

        # After scenario - clear down created account   
