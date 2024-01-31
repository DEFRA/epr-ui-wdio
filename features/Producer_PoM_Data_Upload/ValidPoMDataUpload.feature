@ProducerPoMDataUpload
Feature: Direct Producer - Valid PoM data upload
    As a Direct Producer, I want to ensure that if I upload a valid PoM data file,
    the file is uploaded.

    Background:
        Given init common scenario context
        And the registered user is on the "report data" page

    Scenario: File upload - page
        Given the user is logged in as a "Direct" Producer with "Approved" role
        And cookies "Accept" button should display
        And cookies are "Accepted"
        When the user selects the "Report packaging data" card as "Producer"
        And the user navigates to "Report packaging data" page as a "Producer"
        Then the user should be on the "report packaging data" page
        And the content should be correct on the Direct Producer file upload page

    Scenario Outline: Valid file uploaded
        Given init Landing Pages scenario context
        And the user is logged in as a "Direct" Producer with "Approved" role
        And cookies "Accept" button should display
        And cookies are "Accepted"
        Then the organisation id should be displayed on Direct producer Landing Page
        When the user selects the "Report packaging data" card as "Producer"
        And the user navigates to "Report packaging data" page as a "Producer"
        Then the user should be on the "report packaging data" page
        When the Producer user uploads a PoM data CSV file with a name <fileName>
        Then the user should be on the "file upload check file and submit" page
        Examples:
            | fileName                |
            | ProducerValidDataUpload |

    Scenario Outline: Check and Submit page (Approved user) - file uploaded, but not submitted
        And init Landing Pages scenario context
        And the user logs in as an "approved" user of "direct producer" with submission status "file uploaded"
        And cookies "Accept" button should display
        And cookies are "Accepted"
        Then the organisation id should be displayed on Direct producer Landing Page
        When the user selects the "Report packaging data" card as "Producer"
        And the user navigates to "Report packaging data" page as a "Producer"
        Then the user should be on the "report packaging data" page
        When the Producer user uploads a PoM data CSV file with a name <fileName>
        Then the user should be on the "file upload check file and submit" page
        And the "File uploaded" table should have the corresponding title on the "file upload check file and submit" page
        And the <fileName> file should be in the "File uploaded" table on the "file upload check file and submit" page
        And the uploaded date should be correct in the "File uploaded" table on the "file upload check file and submit" page
        And the file in the "File uploaded" table should be uploaded by the current user on the "file upload check file and submit" page
        And the "Yes" radio button should be present on the "file upload check file and submit" page
        And the "No" radio button should be present on the "file upload check file and submit" page
        And the radio buttons should not be checked on the "file upload check file and submit" page
        And the "continue" button should be displayed on the "file upload check file and submit" page
        When the user chooses "No" option on the "file upload check file and submit" page
        And the user clicks the "continue" button on the "file upload check file and submit" page
        Then the user should be on the "packaging data sub landing" page
        When the user chooses to report packaging data for the first period
        Then the user should be on the "file upload check file and submit" page
        And the "File uploaded" table should have the corresponding title on the "file upload check file and submit" page
        And the <fileName> file should be in the "File uploaded" table on the "file upload check file and submit" page
        And the uploaded date should be correct in the "File uploaded" table on the "file upload check file and submit" page
        And the file in the "File uploaded" table should be uploaded by the current user on the "file upload check file and submit" page
        And the "Yes" radio button should be present on the "file upload check file and submit" page
        And the "No" radio button should be present on the "file upload check file and submit" page
        And the radio buttons should not be checked on the "file upload check file and submit" page
        And the "continue" button should be displayed on the "file upload check file and submit" page
        Examples:
            | fileName               |
            | ProducerSmallValidFile |