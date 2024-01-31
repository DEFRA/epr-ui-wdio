@InlineError
Feature: Account Creating - Inline Errors
    As an approved user for a Sole Trader Organisation, 
    I want to ensure that I can create an account,
    So I can submit packaging data

    Background: Open create account page
        Given init common scenario context
        And init Account Creation scenario context
        And the registered user is on the "create account" page
        And the user logs in as an automation test user for: "Account Creation"

    Scenario: Is a registered charity is not selected
        Given a value isn't selected or entered on the "Registered as charity" page  
        Then error message: "Select if your organisation is a registered charity" should display

    Scenario: Registered with companies house is not selected
        Given the organisation is a registered charity: "No"
        And a value isn't selected or entered on the "Registered with Companies House" page  
        Then error message: "Select if your organisation is registered with Companies House" should display

    Scenario: Companies house number is not entered
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "Yes"
        And a value isn't selected or entered on the "Companies House number" page  
        Then error message: "Enter your Companies House number" should display

    Scenario: Uk nation is not selected in Limited company journey
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "Yes"
        And the organisation's companies house number is: "11790216"
        And the organisation's companies house number is confirmed
        And a value isn't selected or entered on the "UK nation" page  
        Then error message: "Select where in the UK your organisation is based" should display

    Scenario: Uk nation is not selected in Sole trader journey
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "No"
        And the organisation registered type is a: "Sole trader"
        And the trading name is: "Test Co"
        And the registered business postcode is: "M25 0FG"
        And the address is not found
        And the address is entered manually: "OAKLEY DENTAL", "59", "BURY OLD ROAD", "PRESTWICH", "MANCHESTER", "M25 0FG"
        And a value isn't selected or entered on the "UK nation" page  
        Then error message: "Select where in the UK your business is based" should display

    Scenario: Role in the organisation is not selected
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "Yes"
        And the organisation's companies house number is: "11790216"
        And the organisation's companies house number is confirmed
        And the business or organisation is based in: "England"
        And a value isn't selected or entered on the "Role in organisation" page
        Then error message: "Select your role in the organisation" should display

    Scenario: Role in the organisation is not entered
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "No"
        And the organisation registered type is a: "Other"
        And the trading name is: "Test Co"
        And the registered business postcode is: "M25 0FG"
        And the full registered business address is: "OAKLEY DENTAL, 59, BURY OLD ROAD, PRESTWICH, MANCHESTER, M25 0FG"
        And the business or organisation is based in: "England"
        And a value isn't selected or entered on the "Role in organisation" page
        Then error message: "Enter your role in the organisation" should display
    
    Scenario: Type of organisation is not selected
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "No"
        And a value isn't selected or entered on the "Type of organisation" page
        Then error message: "Select what your organisation is registered as" should display

    Scenario: Trading name is not entered
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "No"
        And the organisation registered type is a: "Sole trader"
        And a value isn't selected or entered on the "Trading name" page
        Then error message: "Enter your trading name" should display

    Scenario: Business address postcode is not entered
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "No"
        And the organisation registered type is a: "Sole trader"
        And the trading name is: "Test Co"
        And a value isn't selected or entered on the "Business address postcode" page
        Then error message: "Enter a postcode, like AA1 1AA" should display

    Scenario: Business address is not selected
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "No"
        And the organisation registered type is a: "Sole trader"
        And the trading name is: "Test Co"
        And the registered business postcode is: "M25 0FG"
        And a value isn't selected or entered on the "Select business address" page
        Then error message: "Select your address from the list" should display

    Scenario: Manual address lookup - Building Number not entered
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "No"
        And the organisation registered type is a: "Sole trader"
        And the trading name is: "Test Co"
        And the registered business postcode is: "M25 0FG"
        And the address is not found
        And the address is entered manually without a building number 
        Then error message: "Enter a building number" should display

    Scenario: Manual address lookup - Street Name not entered
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "No"
        And the organisation registered type is a: "Sole trader"
        And the trading name is: "Test Co"
        And the registered business postcode is: "M25 0FG"
        And the address is not found
        And the address is entered manually without a street name
        Then error message: "Enter a street name" should display

    Scenario: Manual address lookup - Town or City not entered
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "No"
        And the organisation registered type is a: "Sole trader"
        And the trading name is: "Test Co"
        And the registered business postcode is: "M25 0FG"
        And the address is not found
        And the address is entered manually without a town or city
        Then error message: "Enter a town or city" should display

    Scenario: Manual address lookup - Postcode not entered
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "No"
        And the organisation registered type is a: "Sole trader"
        And the trading name is: "Test Co"
        And the registered business postcode is: "M25 0FG"
        And the address is not found
        And the address is entered manually without a postcode
        Then error message: "Enter a postcode, like AA1 1AA" should display

    Scenario: Full name - first name not entered
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "No"
        And the organisation registered type is a: "Sole trader"
        And the trading name is: "Test Co"
        And the registered business postcode is: "M25 0FG"
        And the full registered business address is: "OAKLEY DENTAL, 59, BURY OLD ROAD, PRESTWICH, MANCHESTER, M25 0FG"
        And the business or organisation is based in: "England"
        And the name is: "" "Last"
        Then error message: "Enter your first name" should display

    Scenario: Full name - last name not entered
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "No"
        And the organisation registered type is a: "Sole trader"
        And the trading name is: "Test Co"
        And the registered business postcode is: "M25 0FG"
        And the full registered business address is: "OAKLEY DENTAL, 59, BURY OLD ROAD, PRESTWICH, MANCHESTER, M25 0FG"
        And the business or organisation is based in: "England"
        And the name is: "First" ""
        Then error message: "Enter your last name" should display

    Scenario: Telephone number is not entered
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "No"
        And the organisation registered type is a: "Sole trader"
        And the trading name is: "Test Co"
        And the registered business postcode is: "M25 0FG"
        And the full registered business address is: "OAKLEY DENTAL, 59, BURY OLD ROAD, PRESTWICH, MANCHESTER, M25 0FG"
        And the business or organisation is based in: "England"
        And the name is: "First" "Last"
        And a value isn't selected or entered on the "Telephone number" page
        Then error message: "Enter a valid telephone number" should display

    Scenario: Companies House number is 7 digits long
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "Yes"
        And the organisation's companies house number is: "0123456"
        Then error message: "The number you entered is not on the Companies House register" should contain
        # And error message: "Enter a valid Companies House number" should contain
    
    Scenario: Companies House number is 9 digits long
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "Yes"
        And the organisation's companies house number is: "012345678"
        Then error message: "Companies House number must be 8 characters or less" should display

    Scenario: Trading name is 171 digits long
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "No"
        And the organisation registered type is a: "Sole trader"
        And the trading name is: "171" characters long
        Then error message: "Trading name must be 170 characters or less" should display

    Scenario Outline: Business Postcode - invalid formats
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "No"
        And the organisation registered type is a: "Sole trader"
        And the trading name is: "Test Co"
        And the registered business postcode is: <Postcode>
        Then error message: "Enter a postcode, like AA1 1AA" should display

        Examples:
            | Postcode   |
            | "M25 OFG"  |
            | "M25"      |
            | "M250 0FG" |

    Scenario: Telephone number - without a country code
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "No"
        And the organisation registered type is a: "Sole trader"
        And the trading name is: "Test Co"
        And the registered business postcode is: "M25 0FG"
        And the full registered business address is: "OAKLEY DENTAL, 59, BURY OLD ROAD, PRESTWICH, MANCHESTER, M25 0FG"
        And the business or organisation is based in: "England"
        And the name is: "First" "Last"
        And the telephone number is: "64423933023"
        Then error message: "Enter a valid telephone number" should display

    Scenario: First name is 51 digits long
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "No"
        And the organisation registered type is a: "Sole trader"
        And the trading name is: "Test Co"
        And the registered business postcode is: "M25 0FG"
        And the full registered business address is: "OAKLEY DENTAL, 59, BURY OLD ROAD, PRESTWICH, MANCHESTER, M25 0FG"
        And the business or organisation is based in: "England"
        And the first name is: "51" characters long
        Then error message: "First name must be 50 characters or less" should display

    Scenario: Last name is 51 digits long
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "No"
        And the organisation registered type is a: "Sole trader"
        And the trading name is: "Test Co"
        And the registered business postcode is: "M25 0FG"
        And the full registered business address is: "OAKLEY DENTAL, 59, BURY OLD ROAD, PRESTWICH, MANCHESTER, M25 0FG"
        And the business or organisation is based in: "England"
        And the last name is: "51" characters long
        Then error message: "Last name must be 50 characters or less" should display

    Scenario: Manual address lookup - Flat Number is 101 digits long
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "No"
        And the organisation registered type is a: "Sole trader"
        And the trading name is: "Test Co"
        And the registered business postcode is: "M25 0FG"
        And the address is not found
        And the flat number is: "101" characters long
        Then error message: "Flat or apartment number must be 100 characters or less" should display

    Scenario: Manual address lookup - Building Number is 51 digits long
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "No"
        And the organisation registered type is a: "Sole trader"
        And the trading name is: "Test Co"
        And the registered business postcode is: "M25 0FG"
        And the address is not found
        And the building number is: "51" characters long
        Then error message: "Building number must be 50 characters or less" should display

    Scenario: Manual address lookup - Building Name is 101 digits long
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "No"
        And the organisation registered type is a: "Sole trader"
        And the trading name is: "Test Co"
        And the registered business postcode is: "M25 0FG"
        And the address is not found
        And the building name is: "101" characters long
        Then error message: "Building name must be 100 characters or less" should display

    Scenario: Manual address lookup - Street Name is 101 digits long
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "No"
        And the organisation registered type is a: "Sole trader"
        And the trading name is: "Test Co"
        And the registered business postcode is: "M25 0FG"
        And the address is not found
        And the street name is: "101" characters long
        Then error message: "Street name must be 100 characters or less" should display

    Scenario: Manual address lookup - Town is 71 digits long
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "No"
        And the organisation registered type is a: "Sole trader"
        And the trading name is: "Test Co"
        And the registered business postcode is: "M25 0FG"
        And the address is not found
        And the town is: "71" characters long
        Then error message: "Town or city must be 70 characters or less" should display

    Scenario: Manual address lookup - County is 51 digits long
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "No"
        And the organisation registered type is a: "Sole trader"
        And the trading name is: "Test Co"
        And the registered business postcode is: "M25 0FG"
        And the address is not found
        And the county is: "51" characters long
        Then error message: "County must be 50 characters or less" should display

    Scenario: Manual address lookup - Postcode is 16 digits long
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "No"
        And the organisation registered type is a: "Sole trader"
        And the trading name is: "Test Co"
        And the registered business postcode is: "M25 0FG"
        And the address is not found
        And the postcode is: "16" characters long
        Then error message: "Enter a postcode, like AA1 1AA" should display

    Scenario: Role in the organisation - is 451 digits long
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "No"
        And the organisation registered type is a: "Partnership"
        And the trading name is: "Test Co"
        And the registered business postcode is: "M25 0FG"
        And the full registered business address is: "OAKLEY DENTAL, 59, BURY OLD ROAD, PRESTWICH, MANCHESTER, M25 0FG"
        And the business or organisation is based in: "England"
        And the role in the organisation is: "451" characters long
        Then error message: "Your role in the organisation must be 450 characters or less" should display        
