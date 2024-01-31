@InlineError
Feature: Account Creation - Welsh - Inline Errors
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

    Scenario: Is a registered charity is not selected
        And the "Welsh" toggle should be displayed
        And the user clicks the "Welsh" toggle
        When a value isn't selected or entered on the "Registered as charity" page
        Then error message: "Dewiswch a yw’ch sefydliad yn elusen gofrestredig." should display
        And the user signs out

    Scenario: Registered with companies house is not selected
        Given the organisation is a registered charity: "No"
        And the "Welsh" toggle should be displayed
        And the user clicks the "Welsh" toggle
        And a value isn't selected or entered on the "Registered with Companies House" page
        Then error message: "Dewiswch a yw’ch sefydliad wedi’i gofrestru gyda Thŷ’r Cwmnïau" should display
        And the user signs out

    Scenario: Companies house number is not entered
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "Yes"
        And the "Welsh" toggle should be displayed
        And the user clicks the "Welsh" toggle
        And a value isn't selected or entered on the "Companies House number" page
        Then error message: "Rhowch eich rhif Tŷ’r Cwmnïau" should display
        And the user signs out

    Scenario: Companies House number is 7 digits long
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "Yes"
        And the "Welsh" toggle should be displayed
        And the user clicks the "Welsh" toggle
        And the organisation's companies house number is: "0123456"
        Then error message: "Dyw’r rhif rydych chi wedi’i roi ddim ar gofrestr Tŷ’r Cwmnïau" should contain
        And the user signs out

    Scenario: Companies House number is 9 digits long
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "Yes"
        And the "Welsh" toggle should be displayed
        And the user clicks the "Welsh" toggle
        And the organisation's companies house number is: "012345678"
        Then error message: "Rhaid i rif Tŷ’r Cwmnïau fod yn 8 neu lai o gymeriadau" should display
        And the user signs out

    Scenario: Type of organisation is not selected
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "No"
        And the "Welsh" toggle should be displayed
        And the user clicks the "Welsh" toggle
        And a value isn't selected or entered on the "Type of organisation" page
        Then error message: "Dewiswch sut mae’ch sefydliad wedi’i gofrestru" should display
        And the user signs out

    Scenario: Trading name is not entered
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "No"
        And the organisation registered type is a: "Sole trader"
        And the "Welsh" toggle should be displayed
        And the user clicks the "Welsh" toggle
        And a value isn't selected or entered on the "Trading name" page
        Then error message: "Rhowch eich enw masnachu" should display
        And the user signs out

    Scenario: Business address postcode is not entered
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "No"
        And the organisation registered type is a: "Sole trader"
        And the trading name is: "Test Co"
        And the "Welsh" toggle should be displayed
        And the user clicks the "Welsh" toggle
        And a value isn't selected or entered on the "Business address postcode" page
        Then error message: "Rhowch god post, fel AA1 1AA" should display
        And the user signs out

    Scenario: Business address is not selected
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "No"
        And the organisation registered type is a: "Sole trader"
        And the trading name is: "Test Co"
        And the registered business postcode is: "M25 0FG"
        And the "Welsh" toggle should be displayed
        And the user clicks the "Welsh" toggle
        And a value isn't selected or entered on the "Select business address" page
        Then error message: "Dewiswch eich cyfeiriad o’r rhestr" should display
        And the user signs out

    Scenario: Manual address lookup - Building Number not entered
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "No"
        And the organisation registered type is a: "Sole trader"
        And the trading name is: "Test Co"
        And the registered business postcode is: "M25 0FG"
        And the address is not found
        And the "Welsh" toggle should be displayed
        And the user clicks the "Welsh" toggle
        And the address is entered manually without a building number
        Then error message: "Rhowch rif adeilad" should display
        And the user signs out

    Scenario: Manual address lookup - Street Name not entered
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "No"
        And the organisation registered type is a: "Sole trader"
        And the trading name is: "Test Co"
        And the registered business postcode is: "M25 0FG"
        And the address is not found
        And the "Welsh" toggle should be displayed
        And the user clicks the "Welsh" toggle
        And the address is entered manually without a street name
        Then error message: "Rhowch enw stryd" should display
        And the user signs out

    Scenario: Manual address lookup - Town or City not entered
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "No"
        And the organisation registered type is a: "Sole trader"
        And the trading name is: "Test Co"
        And the registered business postcode is: "M25 0FG"
        And the address is not found
        And the "Welsh" toggle should be displayed
        And the user clicks the "Welsh" toggle
        And the address is entered manually without a town or city
        Then error message: "Rhowch enw tref neu ddinas" should display
        And the user signs out

    Scenario: Manual address lookup - Postcode not entered
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "No"
        And the organisation registered type is a: "Sole trader"
        And the trading name is: "Test Co"
        And the registered business postcode is: "M25 0FG"
        And the address is not found
        And the "Welsh" toggle should be displayed
        And the user clicks the "Welsh" toggle
        And the address is entered manually without a postcode
        Then error message: "Rhowch god post, fel AA1 1AA" should display
        And the user signs out

    Scenario: Manual address lookup - Flat Number is 101 digits long
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "No"
        And the organisation registered type is a: "Sole trader"
        And the trading name is: "Test Co"
        And the registered business postcode is: "M25 0FG"
        And the address is not found
        And the "Welsh" toggle should be displayed
        And the user clicks the "Welsh" toggle
        And the flat number is: "101" characters long
        Then error message: "Rhaid i rif y fflat neu’r rhandy fod yn 100 neu lai o gymeriadau" should display
        And the user signs out

    Scenario: Manual address lookup - Building Number is 51 digits long
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "No"
        And the organisation registered type is a: "Sole trader"
        And the trading name is: "Test Co"
        And the registered business postcode is: "M25 0FG"
        And the address is not found
        And the "Welsh" toggle should be displayed
        And the user clicks the "Welsh" toggle
        And the building number is: "51" characters long
        Then error message: "Rhaid i rif yr adeilad fod yn 50 neu lai o gymeriadau" should display
        And the user signs out

    Scenario: Manual address lookup - Building Name is 101 digits long
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "No"
        And the organisation registered type is a: "Sole trader"
        And the trading name is: "Test Co"
        And the registered business postcode is: "M25 0FG"
        And the address is not found
        And the "Welsh" toggle should be displayed
        And the user clicks the "Welsh" toggle
        And the building name is: "101" characters long
        Then error message: "Rhaid i enw’r adeilad fod yn 100 neu lai o gymeriadau" should display
        And the user signs out

    Scenario: Manual address lookup - Street Name is 101 digits long
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "No"
        And the organisation registered type is a: "Sole trader"
        And the trading name is: "Test Co"
        And the registered business postcode is: "M25 0FG"
        And the address is not found
        And the "Welsh" toggle should be displayed
        And the user clicks the "Welsh" toggle
        And the street name is: "101" characters long
        Then error message: "Rhaid i enw’r stryd fod yn 100 neu lai o gymeriadau" should display
        And the user signs out

    Scenario: Manual address lookup - Town is 71 digits long
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "No"
        And the organisation registered type is a: "Sole trader"
        And the trading name is: "Test Co"
        And the registered business postcode is: "M25 0FG"
        And the address is not found
        And the "Welsh" toggle should be displayed
        And the user clicks the "Welsh" toggle
        And the town is: "71" characters long
        Then error message: "Rhaid i’r dref neu’r ddinas fod yn 70 neu lai o gymeriadau" should display
        And the user signs out

    Scenario: Manual address lookup - County is 51 digits long
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "No"
        And the organisation registered type is a: "Sole trader"
        And the trading name is: "Test Co"
        And the registered business postcode is: "M25 0FG"
        And the address is not found
        And the "Welsh" toggle should be displayed
        And the user clicks the "Welsh" toggle
        And the county is: "51" characters long
        Then error message: "Rhaid i’r sir fod yn 50 neu lai o gymeriadau" should display
        And the user signs out

    Scenario: Manual address lookup - Postcode is 16 digits long
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "No"
        And the organisation registered type is a: "Sole trader"
        And the trading name is: "Test Co"
        And the registered business postcode is: "M25 0FG"
        And the address is not found
        And the "Welsh" toggle should be displayed
        And the user clicks the "Welsh" toggle
        And the postcode is: "16" characters long
        Then error message: "Rhowch god post, fel AA1 1AA" should display
        And the user signs out


    Scenario: Uk nation is not selected in Limited company journey
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "Yes"
        And the organisation's companies house number is: "14587802"
        And the organisation's companies house number is confirmed
        And the "Welsh" toggle should be displayed
        And the user clicks the "Welsh" toggle
        And a value isn't selected or entered on the "UK nation" page
        Then error message: "Dewiswch ble yn y Deyrnas Unedig mae’ch sefydliad wedi’i leoli" should display
        And the user signs out

    Scenario: Uk nation is not selected in Sole trader journey
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "No"
        And the organisation registered type is a: "Sole trader"
        And the trading name is: "Test Co"
        And the registered business postcode is: "M25 0FG"
        And the address is not found
        And the address is entered manually: "OAKLEY DENTAL", "59", "BURY OLD ROAD", "PRESTWICH", "MANCHESTER", "M25 0FG"
        And the "Welsh" toggle should be displayed
        And the user clicks the "Welsh" toggle
        And a value isn't selected or entered on the "UK nation" page
        Then error message: "Dewiswch ble yn y Deyrnas Unedig mae’ch busnes wedi’i leoli" should display
        And the user signs out

    Scenario: Role in the organisation is not selected
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "Yes"
        And the organisation's companies house number is: "14587802"
        And the organisation's companies house number is confirmed
        And the business or organisation is based in: "England"
        And the "Welsh" toggle should be displayed
        And the user clicks the "Welsh" toggle
        And a value isn't selected or entered on the "Role in organisation" page
        Then error message: "Dewiswch eich rôl yn y sefydliad" should display
        And the user signs out

    Scenario: Role in the organisation is not entered
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "No"
        And the organisation registered type is a: "Other"
        And the trading name is: "Test Co"
        And the registered business postcode is: "M25 0FG"
        And the full registered business address is: "OAKLEY DENTAL, 59, BURY OLD ROAD, PRESTWICH, MANCHESTER, M25 0FG"
        And the business or organisation is based in: "England"
        And the "Welsh" toggle should be displayed
        And the user clicks the "Welsh" toggle
        And a value isn't selected or entered on the "Role in organisation" page
        Then error message: "Rhowch eich rôl yn y sefydliad" should display
        And the user signs out

    Scenario: Role in the organisation - is 451 digits long
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "No"
        And the organisation registered type is a: "Partnership"
        And the trading name is: "Test Co"
        And the registered business postcode is: "M25 0FG"
        And the full registered business address is: "OAKLEY DENTAL, 59, BURY OLD ROAD, PRESTWICH, MANCHESTER, M25 0FG"
        And the business or organisation is based in: "England"
        And the "Welsh" toggle should be displayed
        And the user clicks the "Welsh" toggle
        And the role in the organisation is: "451" characters long
        Then error message: "Rhaid i’ch rôl yn y sefydliad fod yn 450 neu lai o gymeriadau" should display
        And the user signs out

    Scenario: Full name - first name not entered
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "No"
        And the organisation registered type is a: "Sole trader"
        And the trading name is: "Test Co"
        And the registered business postcode is: "M25 0FG"
        And the full registered business address is: "OAKLEY DENTAL, 59, BURY OLD ROAD, PRESTWICH, MANCHESTER, M25 0FG"
        And the business or organisation is based in: "England"
        And the "Welsh" toggle should be displayed
        And the user clicks the "Welsh" toggle
        And the name is: "" "Last"
        Then error message: "Rhowch eich enw cyntaf" should display
        And the user signs out

    Scenario: Full name - last name not entered
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "No"
        And the organisation registered type is a: "Sole trader"
        And the trading name is: "Test Co"
        And the registered business postcode is: "M25 0FG"
        And the full registered business address is: "OAKLEY DENTAL, 59, BURY OLD ROAD, PRESTWICH, MANCHESTER, M25 0FG"
        And the business or organisation is based in: "England"
        And the "Welsh" toggle should be displayed
        And the user clicks the "Welsh" toggle
        And the name is: "First" ""
        Then error message: "Rhowch eich enw olaf" should display
        And the user signs out

    Scenario: First name is 51 digits long
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "No"
        And the organisation registered type is a: "Sole trader"
        And the trading name is: "Test Co"
        And the registered business postcode is: "M25 0FG"
        And the full registered business address is: "OAKLEY DENTAL, 59, BURY OLD ROAD, PRESTWICH, MANCHESTER, M25 0FG"
        And the business or organisation is based in: "England"
        And the "Welsh" toggle should be displayed
        And the user clicks the "Welsh" toggle
        And the first name is: "51" characters long
        Then error message: "Rhaid i’r enw cyntaf fod yn 50 neu lai o gymeriadau" should display
        And the user signs out

    Scenario: Last name is 51 digits long
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "No"
        And the organisation registered type is a: "Sole trader"
        And the trading name is: "Test Co"
        And the registered business postcode is: "M25 0FG"
        And the full registered business address is: "OAKLEY DENTAL, 59, BURY OLD ROAD, PRESTWICH, MANCHESTER, M25 0FG"
        And the business or organisation is based in: "England"
        And the "Welsh" toggle should be displayed
        And the user clicks the "Welsh" toggle
        And the last name is: "51" characters long
        Then error message: "Rhaid i’r enw olaf fod yn 50 neu lai o gymeriadau" should display
        And the user signs out

    Scenario: Telephone number is not entered
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "No"
        And the organisation registered type is a: "Sole trader"
        And the trading name is: "Test Co"
        And the registered business postcode is: "M25 0FG"
        And the full registered business address is: "OAKLEY DENTAL, 59, BURY OLD ROAD, PRESTWICH, MANCHESTER, M25 0FG"
        And the business or organisation is based in: "England"
        And the name is: "First" "Last"
        And the "Welsh" toggle should be displayed
        And the user clicks the "Welsh" toggle
        And a value isn't selected or entered on the "Telephone number" page
        Then error message: "Rhowch rif ffôn dilys" should display
        And the user signs out

    Scenario: Telephone number - without a country code
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "No"
        And the organisation registered type is a: "Sole trader"
        And the trading name is: "Test Co"
        And the registered business postcode is: "M25 0FG"
        And the full registered business address is: "OAKLEY DENTAL, 59, BURY OLD ROAD, PRESTWICH, MANCHESTER, M25 0FG"
        And the business or organisation is based in: "England"
        And the name is: "First" "Last"
        And the "Welsh" toggle should be displayed
        And the user clicks the "Welsh" toggle
        And the telephone number is: "64423933023"
        Then error message: "Rhowch rif ffôn dilys" should display
        And the user signs out
