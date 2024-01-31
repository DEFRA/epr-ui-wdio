@ProducerPoMDataUpload
Feature: Direct Producer - only a valid Packaging data file can be uploaded
    As a Direct Producer, I want to ensure that if I upload an invalid PoM data file,
    the file will not be saved in the account.

    Background: Open report data page
        Given init common scenario context
        And init Landing Pages scenario context
        And the registered user is on the "report data" page
        And the user is logged in as a "Direct" Producer with "Approved" role
        And cookies "Accept" button should display
        And cookies are "Accepted"

    Scenario Outline: Invalid packaging data file is not treated as valid
        Then the organisation id should be displayed on Direct producer Landing Page
        When the user selects the "Report packaging data" card as "Producer"
        And the user navigates to "Report packaging data" page as a "Producer"
        Then the user should be on the "report packaging data" page
        When the Producer user uploads a PoM data CSV file with a name <fileName1>
        Then the user should be on the "file upload check file and submit" page
        And the "File uploaded" table should have the corresponding title on the "check and submit" page
        And the <fileName1> file should be in the "File uploaded" table on the "check and submit" page
        And the link to change files uploaded should be displayed on the "check and submit" page
        When the user selects to change files uploaded on the "check and submit" page
        Then the user should be on the "report packaging data" page
        When the Producer user uploads a PoM data CSV file with a name <fileName2>
        Then the PoM data file with errors should be rejected
        When the user goes to home page
        When the user selects the "Report packaging data" card as "Producer"
        And the user navigates to "Report packaging data" page as a "Producer"
        Then the user should be on the "report packaging data" page
        When the Producer user uploads a PoM data CSV file with a name <fileName2>
        Then the PoM data file with errors should be rejected
        When the user goes to home page
        When the user selects the "Report packaging data" card as "Producer"
        When the user chooses to report packaging data for the first period
        Then the user should be on the "file upload check file and submit" page
        And the "File uploaded" table should have the corresponding title on the "check and submit" page
        Then the <fileName1> file should be in the "File uploaded" table on the "check and submit" page
        Examples:
            | fileName1              | fileName2                |
            | ProducerSmallValidFile | ProducerSmallInvalidFile |