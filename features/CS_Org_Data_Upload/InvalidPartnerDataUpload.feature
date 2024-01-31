@CSOrganisationDataUpload
Feature: Compliance Scheme - Invalid Partner Data upload
    As a Compliance Scheme, I want to ensure that if I upload an invalid Partner data file,
    the file is rejected and the error banner is shown with the correct error message

    Background: Open report data page
        Given init common scenario context
        And the registered user is on the "report data" page
        And the user is logged in as a Compliance Scheme "Approved" user
        And cookies "Accept" button should display
        And cookies are "Accepted"

    Scenario Outline: A Partner data file doesn't meet the requirements
        When the user selects the "Report organisation details" card as "Compliance Scheme"
        And the user navigates to "Report organisation details" page as a "Compliance Scheme"
        And the user uploads an Organisation data CSV file with a name <OrgDataFileName>
        Then the Organisation data file <OrgDataFileName> should not be rejected
        And the "upload partner information" button should be displayed
        When the user clicks the "upload partner information" button
        Then the user should be on the "upload partner information" page
        When the user uploads a Partner data CSV file with a name <fileName1>
        Then the Organisation data file upload <fileName1> should be terminated
        When the user uploads a Partner data XLS file with a name <fileName2>
        Then the Organisation data file upload <fileName2> should be terminated
        When the user uploads without selected data file
        Then the Organisation data file upload <fileName3> should be terminated

        Examples:
            | OrgDataFileName     | fileName1 | fileName2                  | fileName3 |
            | RegData_OrgType_PAR | EmptyFile | PartnerDataWrongFormatFile | No file   |