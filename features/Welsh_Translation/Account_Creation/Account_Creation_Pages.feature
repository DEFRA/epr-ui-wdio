@InlineError
Feature: Account Creation - Welsh Translation
    As a Welsh Organisation, 
    I want to ensure that I can create an account, using the Welsh language
    So I can submit packaging data

    Background: Open create account page
        Given init common scenario context
        And init Account Creation scenario context
        And the registered user is on the "create account" page
        And the user logs in as an automation test user for: "Account Creation"
        And cookies "Accept" button should display
        And cookies are "Accepted"

    Scenario: Is a Registered Charity page
        Then the user should be on the "is a registered charity" page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        Then the Welsh page H1 header should be correct for the "is a registered charity" page
        And the user signs out

    Scenario: Do not need to Create Account page
        Then the user should be on the "is a registered charity" page
        Given the organisation is a registered charity: "Yes"
        Then the user should be on the "do not need to create account" page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        Then the Welsh page H1 header should be correct for the "do not need to create account" page
        And the user signs out
               
    Scenario: Is registered with companies house
        Then the user should be on the "is a registered charity" page
        Given the organisation is a registered charity: "No"
        Then the user should be on the "is registered with companies house" page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        Then the Welsh page H1 header should be correct for the "is registered with companies house" page 
        And the user signs out

    Scenario: Type of Organisation page
        Then the user should be on the "is a registered charity" page
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "No"
        Then the user should be on the "type of organisation" page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        Then the Welsh page H1 header should be correct for the "type of organisation" page
        And the user signs out

    Scenario: Companies House number page
        Then the user should be on the "is a registered charity" page
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "Yes"
        Then the user should be on the "companies house number" page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        Then the Welsh page H1 header should be correct for the "companies house number" page
        And the user signs out

    Scenario: Confirm Companies House number page
        Then the user should be on the "is a registered charity" page
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "Yes"
        And the organisation's companies house number is: "11790216"
        Then the user should be on the "confirm companies house number" page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        Then the Welsh page H1 header should be correct for the "confirm companies house number" page          
        And the user signs out
    
    Scenario: Trading Name page
        Then the user should be on the "is a registered charity" page
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "No"
        And the organisation registered type is a: "Sole trader"
        Then the user should be on the "trading name" page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        Then the Welsh page H1 header should be correct for the "trading name" page   
        And the user signs out

    Scenario: Business Address Postcode page
        Then the user should be on the "is a registered charity" page
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "No"
        And the organisation registered type is a: "Sole trader"
        And the trading name is: "Test Co"
        Then the user should be on the "business address postcode" page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        Then the Welsh page H1 header should be correct for the "business address postcode" page  
        And the user signs out

    Scenario: Select Business Address page
        Then the user should be on the "is a registered charity" page
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "No"
        And the organisation registered type is a: "Sole trader"
        And the trading name is: "Test Co"
        And the registered business postcode is: "M25 0FG"
        Then the user should be on the "select business address" page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        Then the Welsh page H1 header should be correct for the "select business address" page   
        And the user signs out

    Scenario: Business Address page
        Then the user should be on the "is a registered charity" page
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "No"
        And the organisation registered type is a: "Sole trader"
        And the trading name is: "Test Co"
        And the registered business postcode is: "M25 0FG"
        And the address is not found
        Then the user should be on the "business address" page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        Then the Welsh page H1 header should be correct for the "business address" page    
        And the user signs out

    Scenario: UK Nation page
        Then the user should be on the "is a registered charity" page
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "No"
        And the organisation registered type is a: "Sole trader"
        And the trading name is: "Test Co"
        And the registered business postcode is: "M25 0FG"
        And the full registered business address is: "OAKLEY DENTAL, 59, BURY OLD ROAD, PRESTWICH, MANCHESTER, M25 0FG"
        Then the user should be on the "uk nation" page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        Then the Welsh page H1 header should be correct for the "uk nation" page   
        And the user signs out

    Scenario: Role in Organisation - Partnership page
        Then the user should be on the "is a registered charity" page
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "No"
        And the organisation registered type is a: "Partnership"
        And the trading name is: "Test Co"
        And the registered business postcode is: "M25 0FG"
        And the full registered business address is: "OAKLEY DENTAL, 59, BURY OLD ROAD, PRESTWICH, MANCHESTER, M25 0FG"
        And the business or organisation is based in: "England"
        Then the user should be on the "role in organisation manual" page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        Then the Welsh page H1 header should be correct for the "role in organisation manual" page
        And the user signs out

    Scenario: Cannot Create Account page
        Then the user should be on the "is a registered charity" page
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "Yes"
        And the organisation's companies house number is: "14587802"
        And the organisation's companies house number is confirmed
        And the business or organisation is based in: "England"
        And the role in the organisation is: "None of the above"
        Then the user should be on the "cannot create account" page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        Then the Welsh page H1 header should be correct for the "cannot create account" page    
        And the user signs out

    Scenario: Full Name page
        Then the user should be on the "is a registered charity" page
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "No"
        And the organisation registered type is a: "Partnership"
        And the trading name is: "Test Co"
        And the registered business postcode is: "M25 0FG"
        And the full registered business address is: "OAKLEY DENTAL, 59, BURY OLD ROAD, PRESTWICH, MANCHESTER, M25 0FG"
        And the business or organisation is based in: "England"
        And the role in the organisation is entered manually: "Director"
        Then the user should be on the "full name" page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        Then the Welsh page H1 header should be correct for the "full name" page  
        And the user signs out

    Scenario: Telephone Number page
        Then the user should be on the "is a registered charity" page
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "No"
        And the organisation registered type is a: "Partnership"
        And the trading name is: "Test Co"
        And the registered business postcode is: "M25 0FG"
        And the full registered business address is: "OAKLEY DENTAL, 59, BURY OLD ROAD, PRESTWICH, MANCHESTER, M25 0FG"
        And the business or organisation is based in: "England"
        And the role in the organisation is entered manually: "Director"
        And the name is: "Welsh" "Translation"
        Then the user should be on the "telephone number" page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        Then the Welsh page H1 header should be correct for the "telephone number" page  
        And the user signs out

    Scenario: Declaration page
        Then the user should be on the "is a registered charity" page
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "No"
        And the organisation registered type is a: "Non-UK organisation"
        And the trading name is: "Test Co"
        And the registered business postcode is: "M25 0FG"
        And the full registered business address is: "OAKLEY DENTAL, 59, BURY OLD ROAD, PRESTWICH, MANCHESTER, M25 0FG"
        And the business or organisation is based in: "England"
        And the role in the organisation is entered manually: "Director"
        And the name is: "Welsh" "Translation"
        And the telephone number is: "07911111111"
        When checked the details are correct for an account creation journey 
        Then the user should be on the "declaration" page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        Then the Welsh page H1 header should be correct for the "declaration" page  
        And the user signs out
