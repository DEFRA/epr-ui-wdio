@ProducerOrganisationDataUpload
Feature: Direct Producer - Invalid Organisation Data upload
    As a Direct Producer, I want to ensure that if I upload an invalid Organisation data file,
    the file is rejected and the error banner is shown with the correct error message

    Background: Open report data page
        Given init common scenario context
        And the registered user is on the "report data" page
        And the user is logged in as a "Direct" Producer with "Approved" role
        And cookies "Accept" button should display
        And cookies are "Accepted"

    Scenario Outline: An Organisation data file doesn't meet the requirements
        When the user selects the "Report organisation details" card as "Producer"
        And the user navigates to "Report organisation details" page as a "Producer"
        And the user uploads an Organisation data CSV file with a name <fileName1>
        Then the Organisation data file upload <fileName1> should be terminated
        When the user clicks on the error message text in the Organisation details error banner
        Then the Organisation details file upload page should scroll to the file upload field
        And the Organisation details file upload field should be highligted
        When the user uploads an Organisation data XLS file with a name <fileName2>
        Then the Organisation data file upload <fileName2> should be terminated
        When the user clicks on the error message text in the Organisation details error banner
        Then the Organisation details file upload page should scroll to the file upload field
        And the Organisation details file upload field should be highligted
        When the user uploads without selected data file
        Then the Organisation data file upload <fileName3> should be terminated
        When the user clicks on the error message text in the Organisation details error banner
        Then the Organisation details file upload page should scroll to the file upload field
        And the Organisation details file upload field should be highligted
        When the user uploads an Organisation data CSV file with a name <fileName4>
        Then the Organisation data file upload <fileName4> should be terminated
        When the user clicks on the error message text in the Organisation details error banner
        Then the Organisation details file upload page should scroll to the file upload field
        And the Organisation details file upload field should be highligted
        When the user uploads an Organisation data CSV file with a name <fileName5>
        Then the Organisation data file upload <fileName5> should be terminated
        When the user clicks on the error message text in the Organisation details error banner
        Then the Organisation details file upload page should scroll to the file upload field
        And the Organisation details file upload field should be highligted
        Examples:
            | fileName1 | fileName2              | fileName3 | fileName4                      | fileName5                     |
            | EmptyFile | OrgDataWrongFormatFile | No file   | OrganisationDetailsLessColumns | OrganisationDetailsMoreColumns |