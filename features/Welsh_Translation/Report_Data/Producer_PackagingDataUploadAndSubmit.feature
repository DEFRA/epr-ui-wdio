Feature: Packaging data from Producer: upload and submit - Welsh Translation
    As a Welsh Compliance Scheme,
    I want to be sure that if I upload and submit a valid Packaging data file when using Welsh,
    then the file will be uploaded and submitted.

    Background: Open report data page
        Given init common scenario context
        And init Landing Pages scenario context
        And the registered user is on the "report data" page

    Scenario: Landing page for Direct Producer
        When the user is logged in as a "Direct" Producer with "Approved" role
        Then cookies "Accept" button should display
        And cookies are "Accepted"
        And the user should be on the "direct producer landing" page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        And the Welsh page H1 header should be correct for the "direct producer landing" page

    Scenario: Packaging data sub-landing page
        When the user is logged in as a "Direct" Producer with "Approved" role
        Then cookies "Accept" button should display
        And cookies are "Accepted"
        When the user selects the "Report packaging data" card as "Producer"
        Then the user should be on the "packaging data sub landing" page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        And the content should be correct on the "packaging data sub landing" page

    Scenario: Packaging data file upload - page
        When the user is logged in as a "Direct" Producer with "Approved" role
        Then cookies "Accept" button should display
        And cookies are "Accepted"
        When the user selects the "Report packaging data" card as "Producer"
        And the user navigates to "Report packaging data" page as a "Producer"
        Then the user should be on the "report packaging data" page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        And the Welsh page H1 header should be correct for the "report packaging data" page
        And the content should be correct on the Direct Producer file upload page

    Scenario: Packaging data file upload - validation
        When the user is logged in as a "Direct" Producer with "Approved" role
        Then cookies "Accept" button should display
        And cookies are "Accepted"
        And the organisation id should be displayed on Direct producer Landing Page
        When the user selects the "Report packaging data" card as "Producer"
        And the user navigates to "Report packaging data" page as a "Producer"
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        And the Producer user uploads a PoM data CSV file with a name <fileName1>
        Then the PoM data file upload <fileName1> should be terminated
        When the Producer user uploads a PoM data XLS file with a name <fileName2>
        Then the PoM data file upload <fileName2> should be terminated
        When the user uploads without selected PoM data file
        Then the PoM data file upload <fileName3> should be terminated
        When the Producer user uploads a PoM data CSV file with a name <fileName4>
        Then the PoM data file upload <fileName4> should be terminated
        When the Producer user uploads a PoM data CSV file with a name <fileName5>
        Then the PoM data file upload <fileName5> should be terminated
        When the Producer user uploads a PoM data CSV file with a name <fileName6>
        Then the PoM data file upload <fileName6> should be terminated
        When the Producer user uploads a PoM data CSV file with a name <fileName7>
        Then the PoM data file upload <fileName7> should be terminated
        When the Producer user uploads a PoM data CSV file with a name <fileName8>
        Then the PoM data file upload <fileName8> should be terminated
        When the Producer user uploads a PoM data CSV file with a name <fileName9>
        Then the PoM data file upload <fileName9> should be terminated
        Examples:
            | fileName1 | fileName2       | fileName3 | fileName4                 | fileName5                      | fileName6              | fileName7                     | fileName8                                   | fileName9          |
            | EmptyFile | WrongFormatFile | No file   | InvalidFileMissingHeaders | InvalidFileIncorrectColumnName | InvalidFileLessColumns | ProducerInvalidOrganisationId | ProducerInvalidOrganisationIdAnotherCompany | EmptyFileFromExcel |

    Scenario: Packaging data file upload failure - page
        When the user is logged in as a "Direct" Producer with "Approved" role
        Then cookies "Accept" button should display
        And cookies are "Accepted"
        And the organisation id should be displayed on Direct producer Landing Page
        When the user selects the "Report packaging data" card as "Producer"
        And the user navigates to "Report packaging data" page as a "Producer"
        When the Producer user uploads a PoM data CSV file with a name <fileName>
        Then the user should be on the "file upload failure" page
        And the PoM data file with errors should be rejected
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        Then the header in Welsh should be correct on the "file upload failure" page
        Examples:
            | fileName                 |
            | ProducerSmallInvalidFile |

    Scenario Outline: The user uploads a PoM data file, that contains invalid data
        When the user is logged in as a "Direct" Producer with "Approved" role
        Then cookies "Accept" button should display
        And cookies are "Accepted"
        And the organisation id should be displayed on Direct producer Landing Page
        When the user selects the "Report packaging data" card as "Producer"
        And the user navigates to "Report packaging data" page as a "Producer"
        When the Producer user uploads a PoM data CSV file with a name <fileName>
        Then the user should be on the "file upload failure" page
        And the PoM data file with errors and warnings should be rejected
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        And the error report can be downloaded
        And the error report "<fileName>" for Producer should contain all the issue information
        Examples:
            | fileName                                  |
            | ProducerInvalidDataCombinationUploadWelsh |

    Scenario Outline: Check and Submit - page and validation
        When the user is logged in as a "Direct" Producer with "Approved" role
        Then cookies "Accept" button should display
        And cookies are "Accepted"
        And the organisation id should be displayed on Direct producer Landing Page
        When the user selects the "Report packaging data" card as "Producer"
        And the user navigates to "Report packaging data" page as a "Producer"
        Then the user should be on the "report packaging data" page
        When the Producer user uploads a PoM data CSV file with a name <fileName>
        Then the user should be on the "file upload check file and submit" page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        Then the title of the "file upload check file and submit" page should be correct
        And the "continue" button should be displayed on the "check and submit" page
        When the user clicks the "continue" button on the "check and submit" page
        Then the error message should be displayed on the "check and submit" page
        Examples:
            | fileName               |
            | ProducerSmallValidFile |

    Scenario Outline: Check and Submit - page for Basic user
        When the user is logged in as a "Direct" Producer with "Basic" role
        Then cookies "Accept" button should display
        And cookies are "Accepted"
        And the organisation id should be displayed on Direct producer Landing Page
        When the user selects the "Report packaging data" card as "Producer"
        And the user navigates to "Report packaging data" page as a "Producer"
        Then the user should be on the "report packaging data" page
        When the Producer user uploads a PoM data CSV file with a name <fileName>
        Then the user should be on the "file upload check file and submit" page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        Then the title of the "file upload check file and submit" page should be correct for Basic User
        Examples:
            | fileName               |
            | ProducerSmallValidFile |

    Scenario Outline: Submission Declaration page
        When the user is logged in as a "Direct" Producer with "Approved" role
        Then cookies "Accept" button should display
        And cookies are "Accepted"
        And the organisation id should be displayed on Direct producer Landing Page
        When the user selects the "Report packaging data" card as "Producer"
        And the user navigates to "Report packaging data" page as a "Producer"
        Then the user should be on the "report packaging data" page
        When the Producer user uploads a PoM data CSV file with a name <fileName>
        Then the user should be on the "file upload check file and submit" page
        When the user chooses "Yes" option on the "check and submit" page
        And the user clicks the "continue" button on the "check and submit" page
        Then the user should be on the "submission declaration" page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        Then the Welsh page H1 header should be correct for the "submission declaration" page
        When the user clicks the "submit file" button on the "submission declaration" page
        Then the "Enter your full name" error message is displayed on the "submission declaration" page
        When the user enters a name of 201 characters in the "Enter your full name" field for: "Packaging" data
        And the user clicks the "submit file" button on the "submission declaration" page
        Then the "Full name must be 200 characters or less" error message is displayed on the "submission declaration" page
        Examples:
            | fileName               |
            | ProducerSmallValidFile |

    Scenario Outline: Submission Confirmation page - file successfully submitted
        When the user is logged in as a "Direct" Producer with "Approved" role
        Then cookies "Accept" button should display
        And cookies are "Accepted"
        And the organisation id should be displayed on Direct producer Landing Page
        When the user selects the "Report packaging data" card as "Producer"
        And the user navigates to "Report packaging data" page as a "Producer"
        Then the user should be on the "report packaging data" page
        When the Producer user uploads a PoM data CSV file with a name <fileName>
        Then the user should be on the "file upload check file and submit" page
        When the user chooses "Yes" option on the "check and submit" page
        And the user clicks the "continue" button on the "check and submit" page
        Then the user should be on the "submission declaration" page
        When the user enters a full name in the "Enter your full name" field on the "submission declaration" page
        And the user clicks the "submit file" button on the "submission declaration" page
        Then the user should be on the "submission confirmation" page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        Then the Welsh page H1 header should be correct for the "submission confirmation" page
        Examples:
            | fileName               |
            | ProducerSmallValidFile |

    Scenario Outline: Check warnings - page
        When the user is logged in as a "Direct" Producer with "Approved" role
        Then cookies "Accept" button should display
        And cookies are "Accepted"
        And the organisation id should be displayed on Direct producer Landing Page
        When the user selects the "Report packaging data" card as "Producer"
        And the user navigates to "Report packaging data" page as a "Producer"
        Then the user should be on the "report packaging data" page
        When the Producer user uploads a PoM data CSV file with a name <fileName>
        Then the user should be on the "check warnings" page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        And the content should be correct on the Direct Producer "check warnings" page
        When the user clicks the dropdown on the "check warnings" page
        Then the content of the "check warnings" dropdown should be displayed
        Examples:
            | fileName                                  |
            | ProducerSmallFileContainingWarning60Welsh |

    Scenario Outline: Download warning report
        When the user is logged in as a "Direct" Producer with "Approved" role
        Then cookies "Accept" button should display
        And cookies are "Accepted"
        Then the organisation id should be displayed on Direct producer Landing Page
        When the user selects the "Report packaging data" card as "Producer"
        And the user navigates to "Report packaging data" page as a "Producer"
        Then the user should be on the "report packaging data" page
        When the Producer user uploads a PoM data CSV file with a name <fileName>
        Then the user should be on the "check warnings" page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        Then the warning report can be downloaded
        And the warning report "<fileName>" for Producer should contain all the issue information
        Examples:
            | fileName                                  |
            | ProducerSmallFileContainingWarning60Welsh |

    Scenario Outline: Check warnings - validation on the page
        When the user is logged in as a "Direct" Producer with "Approved" role
        Then cookies "Accept" button should display
        And cookies are "Accepted"
        Then the organisation id should be displayed on Direct producer Landing Page
        When the user selects the "Report packaging data" card as "Producer"
        And the user navigates to "Report packaging data" page as a "Producer"
        Then the user should be on the "report packaging data" page
        When the Producer user uploads a PoM data CSV file with a name <fileName>
        Then the user should be on the "check warnings" page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        And the user clicks the "continue" button on the "check warnings" page
        Then the user error message should be displayed on the "check warnings" page
        Examples:
            | fileName                             |
            | ProducerSmallFileContainingWarning60 |