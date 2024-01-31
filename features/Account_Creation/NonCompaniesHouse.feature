@NonCompaniesHouse
Feature: Non Companies House functionality
    As an approved user for a Non Companies House Organisation, 
    I want to ensure that I can create an account,
    So I can submit packaging data

    Background: Open create account page
        Given init common scenario context
        And init Account Creation scenario context
        And the registered user is on the "create account" page
        And the user logs in as an automation test user for: "Account Creation"
        And cookies "Accept" button should display
        And cookies are "Accepted"

     Scenario: Sole Trader Journey - using auto address lookup
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "No"
        And the organisation registered type is a: "Sole trader"
        And the trading name is: "Test Co"
        And the registered business postcode is: "M25 0FG"
        And the full registered business address is: "OAKLEY DENTAL, 59, BURY OLD ROAD, PRESTWICH, MANCHESTER, M25 0FG"
        And the business or organisation is based in: "England"
        And the name is: "First" "Last"
        And the telephone number is: "07911111111"
        When checked the details are correct for an account creation journey
        # And confirm and submit details
        # Then the account should have been created

        # After scenario - clear down created account   

    Scenario: Sole Trader Journey - using manual address lookup
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "No"
        And the organisation registered type is a: "Sole trader"
        And the trading name is: "Test Co"
        And the registered business postcode is: "M25 0FG"
        And the address is not found
        And the address is entered manually: "OAKLEY DENTAL", "59", "BURY OLD ROAD", "MANCHESTER", "M25 0FG"
        And the business or organisation is based in: "England"
        And the name is: "First" "Last"
        And the telephone number is: "07911111111"
        When checked the details are correct for an account creation journey
        # And confirm and submit details
        # Then the account should have been created

        # After scenario - clear down created account   

    Scenario: Sole Trader Journey - Change Details - Trading name
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "No"
        And the organisation registered type is a: "Sole trader"
        And the trading name is: "Test Co"
        And the registered business postcode is: "M25 0FG"
        And the full registered business address is: "OAKLEY DENTAL, 59, BURY OLD ROAD, PRESTWICH, MANCHESTER, M25 0FG"
        And the business or organisation is based in: "England"
        And the name is: "First" "Last"
        And the telephone number is: "07911111111"
        When the change link for: "Trading name" is clicked in the Account Creation journey
        And the trading name is: "Test Co Changed"
        And the registered business postcode is: "M25 0FG"
        And the full registered business address is: "OAKLEY DENTAL, 59, BURY OLD ROAD, PRESTWICH, MANCHESTER, M25 0FG"
        And the business or organisation is based in: "England"
        And the name is: "First" "Last"
        And the telephone number is: "07911111111"
        And checked the details are correct for an account creation journey
        # And confirm and submit details
        # Then the account should have been created

        # After scenario - clear down created account   

    Scenario: Sole Trader Journey - Change Details - Telephone
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "No"
        And the organisation registered type is a: "Sole trader"
        And the trading name is: "Test Co"
        And the registered business postcode is: "M25 0FG"
        And the full registered business address is: "OAKLEY DENTAL, 59, BURY OLD ROAD, PRESTWICH, MANCHESTER, M25 0FG"
        And the business or organisation is based in: "England"
        And the name is: "First" "Last"
        And the telephone number is: "07911111111"
        When the change link for: "Telephone" is clicked in the Account Creation journey
        And the telephone number is: "07922222222"
        And checked the details are correct for an account creation journey
        # And confirm and submit details
        # Then the account should have been created

        # After scenario - clear down created account  

    Scenario: Sole Trader Journey - Change Details - Organisation Type
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "No"
        And the organisation registered type is a: "Sole trader"
        And the trading name is: "Test Co"
        And the registered business postcode is: "M25 0FG"
        And the full registered business address is: "OAKLEY DENTAL, 59, BURY OLD ROAD, PRESTWICH, MANCHESTER, M25 0FG"
        And the business or organisation is based in: "England"
        And the name is: "First" "Last"
        And the telephone number is: "07911111111"
        When the change link for: "Type of organisation" is clicked in the Account Creation journey
        And the organisation registered type is a: "Partnership"
        And the trading name is: "Test Co"
        And the registered business postcode is: "M25 0FG"
        And the full registered business address is: "OAKLEY DENTAL, 59, BURY OLD ROAD, PRESTWICH, MANCHESTER, M25 0FG"
        And the business or organisation is based in: "England"
        And the role in the organisation is entered manually: "Director"
        And the name is: "First" "Last"
        And the telephone number is: "07911111111"
        And checked the details are correct for an account creation journey
        # And confirm and submit details
        # Then the account should have been created

        # After scenario - clear down created account