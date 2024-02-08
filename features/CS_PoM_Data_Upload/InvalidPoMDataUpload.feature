@CSPoMDataUpload
Feature: Compliance Scheme - Invalid PoM data upload
        As a Compliance Scheme, I want to ensure that if I upload an invalid PoM data file,
        the file is rejected and the error report contains the number of rejected record
        and the corresponding error message

        Background: Log in
                Given init common scenario context
                And the registered user is on the "report data" page
                And the user is logged in as a Compliance Scheme "Approved" user
                And cookies "Accept" button should display
                And cookies are "Accepted"


        Scenario Outline: File upload failure - page
                When the user selects the "Report packaging data" card as "Compliance Scheme"
                And the user navigates to "Report packaging data" page as a "Compliance Scheme"
                When the Compliance Scheme user uploads a PoM data CSV file with a name <fileName>
                Then the user should be on the "file upload failure" page
                And the PoM data file with errors should be rejected
                And the content should be correct on the "file upload failure" page where the file contains only errors
                Examples:
                        | fileName           |
                        | CSSmallInvalidFile |

        Scenario Outline: The user uploads a PoM data file, that contains invalid data
                When the user selects the "Report packaging data" card as "Compliance Scheme"
                And the user navigates to "Report packaging data" page as a "Compliance Scheme"
                When the Compliance Scheme user uploads a PoM data CSV file with a name <fileName>
                Then the user should be on the "file upload failure" page
                And the PoM data file with errors and warnings should be rejected
                And the error report can be downloaded
                And the error report "<fileName>" for Compliance Scheme should contain all the issue information
                And the "upload your file again" button should be displayed on the "file upload failure" page
                When the user clicks the "upload your file again" button on the "file upload failure" page
                Then the user should be on the "report packaging data" page
                Examples:
                        | fileName                              |
                        | CSInvalidDataCombinationUpload        |
                        | CSInvalidOrganisationId               |
                        | CSInvalidOrganisationIdAnotherCompany |

        Scenario Outline: A PoM data file doesn't meet the requirements
                When the user selects the "Report packaging data" card as "Compliance Scheme"
                And the user navigates to "Report packaging data" page as a "Compliance Scheme"
                When the Compliance Scheme user uploads a PoM data CSV file with a name <fileName1>
                Then the PoM data file upload <fileName1> should be terminated
                When the user clicks on the error message text in the Packaging data error banner
                Then the Packaging data file upload page should scroll to the file upload field
                And the Packaging data file upload field should be highligted
                When the Compliance Scheme user uploads a PoM data XLS file with a name <fileName2>
                Then the PoM data file upload <fileName2> should be terminated
                When the user clicks on the error message text in the Packaging data error banner
                Then the Packaging data file upload page should scroll to the file upload field
                And the Packaging data file upload field should be highligted
                When the user uploads without selected PoM data file
                Then the PoM data file upload <fileName3> should be terminated
                When the user clicks on the error message text in the Packaging data error banner
                Then the Packaging data file upload page should scroll to the file upload field
                And the Packaging data file upload field should be highligted
                When the Compliance Scheme user uploads a PoM data CSV file with a name <fileName4>
                Then the PoM data file upload <fileName4> should be terminated
                When the user clicks on the error message text in the Packaging data error banner
                Then the Packaging data file upload page should scroll to the file upload field
                And the Packaging data file upload field should be highligted
                When the Compliance Scheme user uploads a PoM data CSV file with a name <fileName5>
                Then the PoM data file upload <fileName5> should be terminated
                When the user clicks on the error message text in the Packaging data error banner
                Then the Packaging data file upload page should scroll to the file upload field
                And the Packaging data file upload field should be highligted
                When the Compliance Scheme user uploads a PoM data CSV file with a name <fileName6>
                Then the PoM data file upload <fileName6> should be terminated
                When the user clicks on the error message text in the Packaging data error banner
                Then the Packaging data file upload page should scroll to the file upload field
                And the Packaging data file upload field should be highligted
                When the Compliance Scheme user uploads a PoM data CSV file with a name <fileName7>
                Then the PoM data file upload <fileName7> should be terminated
                When the user clicks on the error message text in the Packaging data error banner
                Then the Packaging data file upload page should scroll to the file upload field
                And the Packaging data file upload field should be highligted
                Examples:
                        | fileName1 | fileName2       | fileName3 | fileName4                 | fileName5                      | fileName6              | fileName7          |
                        | EmptyFile | WrongFormatFile | No file   | InvalidFileMissingHeaders | InvalidFileIncorrectColumnName | InvalidFileLessColumns | EmptyFileFromExcel |

        Scenario: The error report only contains entries from the previous upload
                When the user selects the "Report packaging data" card as "Compliance Scheme"
                And the user navigates to "Report packaging data" page as a "Compliance Scheme"
                When the Compliance Scheme user uploads a PoM data CSV file with a name <fileName>
                Then the user should be on the "file upload failure" page
                And the PoM data file with errors should be rejected
                When the user clicks the "upload your file again" button on the "file upload failure" page
                Then the user should be on the "report packaging data" page
                When the Compliance Scheme user uploads a PoM data CSV file with a name <fileName>
                Then the user should be on the "file upload failure" page
                And the PoM data file with errors should be rejected
                And the error report can be downloaded
                And the error report "<fileName>" for Compliance Scheme should contain all the issue information
                Examples:
                        | fileName           |
                        | CSSmallInvalidFile |