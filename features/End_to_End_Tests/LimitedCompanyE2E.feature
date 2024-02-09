Feature: Limited Company E2E functionality
    # As an approved user for a Limited Company,
    # I want to ensure that I can create an account,
    # So I can submit packaging data

    Background: Open create account page
        Given init common scenario context
        And init Account Creation scenario context
        And init Landing Pages scenario context
        And the registered user is on the "create account" page

    Scenario: Create Ltd Company, Regulator Approve, Upload and Submit Organisation, Brand and Partner Data
        And the user logs in as an automation test user for: "End to End Ltd Co. Org"
        And cookies "Accept" button should display
        And cookies are "Accepted"
        # Create Limited Company Account
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "Yes"
        And the organisation's companies house number is: "10878572"
        And the organisation's companies house number is confirmed
        And the business or organisation is based in: "England"
        And the role in the organisation is: "Director"
        And the name is: "E2ETest" "LimitedCompany"
        And the telephone number is: "07911111111"
        When checked the details are correct for an account creation journey
        And confirm and submit details
        And the user signs out
        # Regulator Approval
        And the registered user is on the "regulators home" page
        And the user logs in as an automation test user for: "Regulator - ENG"
        And cookies "Accept" button should display
        And cookies are "Accepted"
        Then the page title should be correct for the "Regulators Home" page
        And the user clicks the manage "applications" link
        And the user should be on the "regulators manage applications" page
        # Filter application
        And the user enters the Organisation Name: "KAINOS ACCOUNTANCY SERVICES LTD"
        When the user clicks on apply filter button
        And the user navigates to enrolment request details page of an organisation
        # Accept application
        When the user clicks "Accept" for "Approved" person
        Then the "Accepted" banner is displayed for: Approved person
        Given the user signs out
        # Producer not using CS
        And the registered user is on the "report data" page
        And the user logs in as an automation test user for: "End to End Ltd Co. Org"
        And cookies "Accept" button should display
        And cookies are "Accepted"
        Then the user should be on the "direct producer landing" page
        When the user navigates to the add compliance scheme page
        And the user selects "No" on the add compliance scheme page
        And the registered user is on the "report data" page
        # Upload Registration Data
        Then the user should be on the "direct producer landing" page
        When the user selects the "Report organisation details" card as "Producer"
        And the user navigates to "Report organisation details" page as a "Producer"
        And the user uploads an Organisation data CSV file with a name <OrgDataFileName>
        Then the Organisation data file <OrgDataFileName> should not be rejected
        And the "upload brand information" button should be displayed
        When the user clicks the "upload brand information" button
        Then the user should be on the "upload brand information" page
        When the user uploads a Brand data CSV file with a name <BrandDataFileName>
        Then the Brand data file <BrandDataFileName> should not be rejected
        And the "continue to partner information" button should be displayed
        When the user clicks the "continue to partner information" button
        Then the user should be on the "upload partner information" page
        When the user uploads a Partner data CSV file with a name <PartnerDataFileName>
        Then the Partner data file <PartnerDataFileName> should not be rejected
        And the "continue" button should be displayed
        When the user clicks the "continue" button
        Then the user should be on the "review organisation data" page
        And the "Organisation details" field should contain <OrgDataFileName> file
        And the "Brand information" field should contain <BrandDataFileName> file
        And the "Partner information" field should contain <PartnerDataFileName> file
        And the uploaded date should be correct for all the Direct Producer files
        And the files should be uploaded by Direct Producer
        And the "confirm" button should be displayed
        # Submit Registration Data
        When the user chooses "Yes" option on the "review organisation data" page
        And the user clicks the "confirm" button on the "review organisation data" page
        Then the user should be on the "declaration enter full name" page
        And the "enter your full name" field should be displayed on the "declaration enter full name" page
        And the warning about enforcement action should be displayed on the "declaration enter full name" page
        And the "submit file" button should be displayed on the "declaration enter full name" page
        When the user enters a full name in the "Enter your full name" field on the "declaration enter full name" page
        And the user clicks the "submit file" button on the "declaration enter full name" page
        Then the user should be on the "organisation details confirmation" page

        Examples:
            | OrgDataFileName       | BrandDataFileName | PartnerDataFileName |
            | RegData_LLP_secondary | BrandData         | PartnerData         |

    Scenario: Create Ltd Company, Regulator Approve, Upload and Submit Packaging Data
        And the user logs in as an automation test user for: "End to End Ltd Co. PoM"
        And cookies "Accept" button should display
        And cookies are "Accepted"
        # Create Limited Company Account
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "Yes"
        And the organisation's companies house number is: "00580798"
        And the organisation's companies house number is confirmed
        And the business or organisation is based in: "England"
        And the role in the organisation is: "Director"
        And the name is: "E2ETest" "LimitedCompany"
        And the telephone number is: "07911111111"
        When checked the details are correct for an account creation journey
        And confirm and submit details
        And the user signs out
        # Regulator Approval
        And the registered user is on the "regulators home" page
        And the user logs in as an automation test user for: "Regulator - ENG"
        And cookies "Accept" button should display
        And cookies are "Accepted"
        Then the page title should be correct for the "Regulators Home" page
        And the user clicks the manage "applications" link
        And the user should be on the "regulators manage applications" page
        # Filter application
        And the user enters the Organisation Name: "ZONES RESTRICTED LIMITED"
        When the user clicks on apply filter button
        And the user navigates to enrolment request details page of an organisation
        # Accept application
        When the user clicks "Accept" for "Approved" person
        Then the "Accepted" banner is displayed for: Approved person
        Given the user signs out
        # Producer not using CS
        And the registered user is on the "report data" page
        And the user logs in as an automation test user for: "End to End Ltd Co. PoM"
        And cookies "Accept" button should display
        And cookies are "Accepted"
        Then the user should be on the "direct producer landing" page
        When the user navigates to the add compliance scheme page
        And the user selects "No" on the add compliance scheme page
        And the registered user is on the "report data" page
        And the organisation id should be displayed on Direct producer Landing Page
        # Upload Packaging Data
        When the user selects the "Report packaging data" card as "Producer"
        And the user navigates to "Report packaging data" page as a "Producer"
        Then the user should be on the "report packaging data" page
        When the Producer user uploads a PoM data CSV file with a name <fileName>
        Then the user should be on the "file upload check file and submit" page
        And the "File uploaded" table should have the corresponding title on the "file upload check file and submit" page
        And the <fileName> file should be in the "File uploaded" table on the "file upload check file and submit" page
        And the uploaded date should be correct in the "File uploaded" table on the "file upload check file and submit" page
        And the file in the "File uploaded" table should be uploaded by the current user on the "file upload check file and submit" page
        # Submit Packaging Data
        When the user chooses "Yes" option on the "file upload check file and submit" page
        And the user clicks the "continue" button on the "file upload check file and submit" page
        Then the user should be on the "submission declaration" page
        When the user enters a full name in the "Enter your full name" field on the "submission declaration" page
        And the user clicks the "submit file" button on the "submission declaration" page
        Then the user should be on the "submission confirmation" page
        And the "Packaging data submitted" banner is displayed
        And the link to "Print this page" is displayed on the "submission confirmation" page
        And the button to "Go to your account homepage" is displayed on the "submission confirmation" page

        Examples:
            | fileName               |
            | ProducerSmallValidFile |

    Scenario: Create Ltd Company, Regulator Reject
        And the user logs in as an automation test user for: "End to End Reject"
        And cookies "Accept" button should display
        And cookies are "Accepted"
        # Create Limited Company Account
        Given the organisation is a registered charity: "No"
        And the organisation is registered with companies house: "Yes"
        And the organisation's companies house number is: "14849180"
        And the organisation's companies house number is confirmed
        And the business or organisation is based in: "England"
        And the role in the organisation is: "Director"
        And the name is: "E2ETest" "LimitedCompany"
        And the telephone number is: "07911111111"
        When checked the details are correct for an account creation journey
        And confirm and submit details
        And the user signs out
        # Regulator Rejection
        And the registered user is on the "regulators home" page
        And the user logs in as an automation test user for: "Regulator - ENG"
        And cookies "Accept" button should display
        And cookies are "Accepted"
        Then the page title should be correct for the "Regulators Home" page
        And the user clicks the manage "applications" link
        And the user should be on the "regulators manage applications" page
        # Filter application
        And the user enters the Organisation Name: "051 LEISURE LTD"
        When the user clicks on apply filter button
        And the user navigates to enrolment request details page of an organisation
        # Reject application
        When the user clicks "Reject" for "Approved" person
        Then the text box for rejection reason is displayed
        When the user enters reason for rejection: "Automation E2E Test Rejection" in the text box
        And the user clicks the continue button
        Then the "Success" banner is displayed for: approved person
        Given the user signs out
        And the registered user is on the "report data" page
        And the user logs in as an automation test user for: "End to End Reject"
        And the user should be on the "is a registered charity" page