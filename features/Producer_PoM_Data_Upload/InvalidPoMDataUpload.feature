@ProducerPoMDataUpload
Feature: Direct Producer - Invalid PoM data upload
        As a Direct Producer, I want to ensure that if I upload an invalid PoM data file,
        the file is rejected and the error report contains the number of rejected record
        and the corresponding error message

        Background: Log in
                Given init common scenario context
                And init Landing Pages scenario context
                And the registered user is on the "report data" page
                And the user is logged in as a "Direct" Producer with "Approved" role
                And cookies "Accept" button should display
                And cookies are "Accepted"


        Scenario Outline: File upload failure - page
                Then the organisation id should be displayed on Direct producer Landing Page
                When the user selects the "Report packaging data" card as "Producer"
                And the user navigates to "Report packaging data" page as a "Producer"
                Then the user should be on the "report packaging data" page
                When the Producer user uploads a PoM data CSV file with a name <fileName>
                Then the user should be on the "file upload failure" page
                And the PoM data file with errors should be rejected
                And the content should be correct on the "file upload failure" page where the file contains only errors
                Examples:
                        | fileName                 |
                        | ProducerSmallInvalidFile |

        Scenario Outline: The user uploads a PoM data file, that contains invalid data
                Then the organisation id should be displayed on Direct producer Landing Page
                When the user selects the "Report packaging data" card as "Producer"
                And the user navigates to "Report packaging data" page as a "Producer"
                Then the user should be on the "report packaging data" page
                When the Producer user uploads a PoM data CSV file with a name <fileName>
                Then the user should be on the "file upload failure" page
                And the PoM data file with errors and warnings should be rejected
                And the error report can be downloaded
                And the error report "<fileName>" for Producer should contain all the issue information
                And the "upload your file again" button should be displayed on the "file upload failure" page
                When the user clicks the "upload your file again" button on the "file upload failure" page
                Then the user should be on the "report packaging data" page
                Examples:
                        | fileName                             |
                        | ProducerInvalidDataCombinationUpload |

        Scenario Outline: A PoM data file doesn't meet the requirements
                Then the organisation id should be displayed on Direct producer Landing Page
                When the user selects the "Report packaging data" card as "Producer"
                And the user navigates to "Report packaging data" page as a "Producer"
                Then the user should be on the "report packaging data" page
                When the Producer user uploads a PoM data CSV file with a name <fileName1>
                Then the PoM data file upload <fileName1> should be terminated
                When the user clicks on the error message text in the Packaging data error banner
                Then the Packaging data file upload page should scroll to the file upload field
                And the Packaging data file upload field should be highligted
                When the Producer user uploads a PoM data XLS file with a name <fileName2>
                Then the PoM data file upload <fileName2> should be terminated
                When the user clicks on the error message text in the Packaging data error banner
                Then the Packaging data file upload page should scroll to the file upload field
                And the Packaging data file upload field should be highligted
                When the user uploads without selected PoM data file
                Then the PoM data file upload <fileName3> should be terminated
                When the user clicks on the error message text in the Packaging data error banner
                Then the Packaging data file upload page should scroll to the file upload field
                And the Packaging data file upload field should be highligted
                When the Producer user uploads a PoM data CSV file with a name <fileName4>
                Then the PoM data file upload <fileName4> should be terminated
                When the user clicks on the error message text in the Packaging data error banner
                Then the Packaging data file upload page should scroll to the file upload field
                And the Packaging data file upload field should be highligted
                When the Producer user uploads a PoM data CSV file with a name <fileName5>
                Then the PoM data file upload <fileName5> should be terminated
                When the user clicks on the error message text in the Packaging data error banner
                Then the Packaging data file upload page should scroll to the file upload field
                And the Packaging data file upload field should be highligted
                When the Producer user uploads a PoM data CSV file with a name <fileName6>
                Then the PoM data file upload <fileName6> should be terminated
                When the user clicks on the error message text in the Packaging data error banner
                Then the Packaging data file upload page should scroll to the file upload field
                And the Packaging data file upload field should be highligted
                When the Producer user uploads a PoM data CSV file with a name <fileName7>
                Then the PoM data file upload <fileName7> should be terminated
                When the user clicks on the error message text in the Packaging data error banner
                Then the Packaging data file upload page should scroll to the file upload field
                And the Packaging data file upload field should be highligted
                When the Producer user uploads a PoM data CSV file with a name <fileName8>
                Then the PoM data file upload <fileName8> should be terminated
                When the user clicks on the error message text in the Packaging data error banner
                Then the Packaging data file upload page should scroll to the file upload field
                And the Packaging data file upload field should be highligted
                When the Producer user uploads a PoM data CSV file with a name <fileName9>
                Then the PoM data file upload <fileName9> should be terminated
                When the user clicks on the error message text in the Packaging data error banner
                Then the Packaging data file upload page should scroll to the file upload field
                And the Packaging data file upload field should be highligted
                Examples:
                        | fileName1 | fileName2       | fileName3 | fileName4                 | fileName5                      | fileName6              | fileName7                     | fileName8                                   | fileName9          |
                        | EmptyFile | WrongFormatFile | No file   | InvalidFileMissingHeaders | InvalidFileIncorrectColumnName | InvalidFileLessColumns | ProducerInvalidOrganisationId | ProducerInvalidOrganisationIdAnotherCompany | EmptyFileFromExcel |

        Scenario: The error report only contains entries from the previous upload
                Then the organisation id should be displayed on Direct producer Landing Page
                When the user selects the "Report packaging data" card as "Producer"
                And the user navigates to "Report packaging data" page as a "Producer"
                Then the user should be on the "report packaging data" page
                When the Producer user uploads a PoM data CSV file with a name <fileName>
                Then the user should be on the "file upload failure" page
                And the PoM data file with errors should be rejected
                When the user clicks the "upload your file again" button on the "file upload failure" page
                Then the user should be on the "report packaging data" page
                When the Producer user uploads a PoM data CSV file with a name <fileName>
                Then the user should be on the "file upload failure" page
                And the PoM data file with errors should be rejected
                And the error report can be downloaded
                And the error report "<fileName>" for Producer should contain all the issue information
                Examples:
                        | fileName                 |
                        | ProducerSmallInvalidFile |