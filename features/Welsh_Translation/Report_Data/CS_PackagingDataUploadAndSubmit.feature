Feature: Packaging data from Compliance Scheme: upload and submit - Welsh Translation
    As a Welsh Compliance Scheme,
    I want to be sure that if I upload and submit a valid Packaging data file when using Welsh,
    then the file will be uploaded and submitted.

    Background: Open report data page
        Given init common scenario context
        And the registered user is on the "report data" page

    Scenario: Landing page for CS Member
        When the user logs in as a Compliance Scheme "Approved" user
        Then cookies "Accept" button should display
        And cookies are "Accepted"
        And the user should be on the "home compliance scheme" page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        And the Welsh page H1 header should be correct for the "home compliance scheme" page

    Scenario: Packaging data sub-landing page
        When the user logs in as a Compliance Scheme "Approved" user
        Then cookies "Accept" button should display
        And cookies are "Accepted"
        When the user selects the "Report packaging data" card as "Compliance Scheme"
        Then the user should be on the "packaging data sub landing" page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        And the content should be correct on the "packaging data sub landing" page

    Scenario: Packaging data file upload - page
        When the user logs in as a Compliance Scheme "Approved" user
        Then cookies "Accept" button should display
        And cookies are "Accepted"
        When the user selects the "Report packaging data" card as "Compliance Scheme"
        And the user navigates to "Report packaging data" page as a "Compliance Scheme"
        Then the user should be on the "report packaging data" page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        And the Welsh page H1 header should be correct for the "report packaging data" page
        And the content should be correct on the Compliance Scheme file upload page

    Scenario: Packaging data file upload - validation
        When the user logs in as a Compliance Scheme "Approved" user
        Then cookies "Accept" button should display
        And cookies are "Accepted"
        When the user selects the "Report packaging data" card as "Compliance Scheme"
        And the user navigates to "Report packaging data" page as a "Compliance Scheme"
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        And the Compliance Scheme user uploads a PoM data CSV file with a name <fileName1>
        Then the PoM data file upload <fileName1> should be terminated
        When the Compliance Scheme user uploads a PoM data XLS file with a name <fileName2>
        Then the PoM data file upload <fileName2> should be terminated
        When the user uploads without selected PoM data file
        Then the PoM data file upload <fileName3> should be terminated
        When the Compliance Scheme user uploads a PoM data CSV file with a name <fileName4>
        Then the PoM data file upload <fileName4> should be terminated
        When the Compliance Scheme user uploads a PoM data CSV file with a name <fileName5>
        Then the PoM data file upload <fileName5> should be terminated
        When the Compliance Scheme user uploads a PoM data CSV file with a name <fileName6>
        Then the PoM data file upload <fileName6> should be terminated
        When the Compliance Scheme user uploads a PoM data CSV file with a name <fileName7>
        Then the PoM data file upload <fileName7> should be terminated
        Examples:
            | fileName1 | fileName2       | fileName3 | fileName4                 | fileName5                      | fileName6              | fileName7          |
            | EmptyFile | WrongFormatFile | No file   | InvalidFileMissingHeaders | InvalidFileIncorrectColumnName | InvalidFileLessColumns | EmptyFileFromExcel |

    Scenario: Packaging data file upload failure - page
        When the user logs in as a Compliance Scheme "Approved" user
        Then cookies "Accept" button should display
        And cookies are "Accepted"
        When the user selects the "Report packaging data" card as "Compliance Scheme"
        And the user navigates to "Report packaging data" page as a "Compliance Scheme"
        When the Compliance Scheme user uploads a PoM data CSV file with a name <fileName>
        Then the user should be on the "file upload failure" page
        And the PoM data file with errors should be rejected
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        Then the header in Welsh should be correct on the "file upload failure" page
        Examples:
            | fileName           |
            | CSSmallInvalidFile |

    Scenario Outline: The user uploads a PoM data file, that contains invalid data
        When the user logs in as a Compliance Scheme "Approved" user
        Then cookies "Accept" button should display
        And cookies are "Accepted"
        When the user selects the "Report packaging data" card as "Compliance Scheme"
        And the user navigates to "Report packaging data" page as a "Compliance Scheme"
        When the Compliance Scheme user uploads a PoM data CSV file with a name <fileName>
        Then the user should be on the "file upload failure" page
        And the PoM data file with errors and warnings should be rejected
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        And the error report can be downloaded
        And the error report "<fileName>" for Compliance Scheme should contain all the issue information
        Examples:
            | fileName                                   |
            | CSInvalidDataCombinationUploadWelsh        |
            | CSInvalidOrganisationIdWelsh               |
            | CSInvalidOrganisationIdAnotherCompanyWelsh |

    Scenario Outline: Check and Submit - page and validation
        When the user logs in as a Compliance Scheme "Approved" user
        Then cookies "Accept" button should display
        And cookies are "Accepted"
        And the user selects the "Report packaging data" card as "Compliance Scheme"
        And the user navigates to "Report packaging data" page as a "Compliance Scheme"
        Then the user should be on the "report packaging data" page
        When the Compliance Scheme user uploads a PoM data CSV file with a name <fileName>
        Then the user should be on the "file upload check file and submit" page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        Then the title of the "file upload check file and submit" page should be correct
        And the "continue" button should be displayed on the "check and submit" page
        When the user clicks the "continue" button on the "check and submit" page
        Then the error message should be displayed on the "check and submit" page
        Examples:
            | fileName         |
            | CSSmallValidFile |

    Scenario Outline: Check and Submit - page for Basic User
        When the user logs in as a Compliance Scheme "Basic" user
        Then cookies "Accept" button should display
        And cookies are "Accepted"
        And the user selects the "Report packaging data" card as "Compliance Scheme"
        And the user navigates to "Report packaging data" page as a "Compliance Scheme"
        Then the user should be on the "report packaging data" page
        When the Compliance Scheme user uploads a PoM data CSV file with a name <fileName>
        Then the user should be on the "file upload check file and submit" page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        Then the title of the "file upload check file and submit" page should be correct for Basic User
        Examples:
            | fileName         |
            | CSSmallValidFile |

    Scenario Outline: Submission Confirmation page - file successfully submitted
        When the user logs in as a Compliance Scheme "Approved" user
        Then cookies "Accept" button should display
        And cookies are "Accepted"
        When the user selects the "Report packaging data" card as "Compliance Scheme"
        And the user navigates to "Report packaging data" page as a "Compliance Scheme"
        Then the user should be on the "report packaging data" page
        When the Compliance Scheme user uploads a PoM data CSV file with a name <fileName>
        Then the user should be on the "file upload check file and submit" page
        When the user chooses "Yes" option on the "check and submit" page
        And the user clicks the "continue" button on the "check and submit" page
        Then the user should be on the "submission confirmation" page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        Then the Welsh page H1 header should be correct for the "submission confirmation" page
        Examples:
            | fileName         |
            | CSSmallValidFile |

    Scenario Outline: Check warnings - page
        When the user logs in as a Compliance Scheme "Approved" user
        Then cookies "Accept" button should display
        And cookies are "Accepted"
        When the user selects the "Report packaging data" card as "Compliance Scheme"
        And the user navigates to "Report packaging data" page as a "Compliance Scheme"
        Then the user should be on the "report packaging data" page
        When the Compliance Scheme user uploads a PoM data CSV file with a name <fileName>
        Then the user should be on the "check warnings" page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        Then the content should be correct on the Compliance Scheme "check warnings" page
        When the user clicks the dropdown on the "check warnings" page
        Then the content of the "check warnings" dropdown should be displayed
        Examples:
            | fileName                            |
            | CSSmallFileContainingWarning60Welsh |

    Scenario Outline: Download warning report
        When the user logs in as a Compliance Scheme "Approved" user
        Then cookies "Accept" button should display
        And cookies are "Accepted"
        When the user selects the "Report packaging data" card as "Compliance Scheme"
        And the user navigates to "Report packaging data" page as a "Compliance Scheme"
        Then the user should be on the "report packaging data" page
        When the Compliance Scheme user uploads a PoM data CSV file with a name <fileName>
        Then the user should be on the "check warnings" page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        Then the warning report can be downloaded
        And the warning report "<fileName>" for Compliance Scheme should contain all the issue information
        Examples:
            | fileName                            |
            | CSSmallFileContainingWarning60Welsh |

    Scenario Outline: Check warnings - validation on the page
        When the user logs in as a Compliance Scheme "Approved" user
        Then cookies "Accept" button should display
        And cookies are "Accepted"
        When the user selects the "Report packaging data" card as "Compliance Scheme"
        And the user navigates to "Report packaging data" page as a "Compliance Scheme"
        Then the user should be on the "report packaging data" page
        When the Compliance Scheme user uploads a PoM data CSV file with a name <fileName>
        Then the user should be on the "check warnings" page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        And the user clicks the "continue" button on the "check warnings" page
        Then the user error message should be displayed on the "check warnings" page
        Examples:
            | fileName                            |
            | CSSmallFileContainingWarning60Welsh |
