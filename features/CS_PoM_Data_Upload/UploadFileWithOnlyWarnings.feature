@CSPoMDataUpload
Feature: Compliance Scheme - Upload Packaging data file containing warnings
    As a Compliance Scheme, I want to ensure that if I upload a PoM data file containing warnings,
    the warning report contains the number of record
    and the corresponding error message

    Background: Log in
        Given init common scenario context
        And the registered user is on the "report data" page
        And the user is logged in as a Compliance Scheme "Approved" user
        And cookies "Accept" button should display
        And cookies are "Accepted"

    Scenario Outline: Check warnings - page
        When the user selects the "Report packaging data" card as "Compliance Scheme"
        And the user navigates to "Report packaging data" page as a "Compliance Scheme"
        Then the user should be on the "report packaging data" page
        When the Compliance Scheme user uploads a PoM data CSV file with a name <fileName>
        Then the user should be on the "check warnings" page
        And the content should be correct on the Compliance Scheme "check warnings" page
        When the user clicks the dropdown on the "check warnings" page
        Then the content of the "check warnings" dropdown should be displayed
        When the user clicks the file specification link on the "check warnings" page
        Then the file specification should be opened from the "check warnings" page
        When the user switches back to the "check warnings" tab
        Then the user should be on the "check warnings" page
        Examples:
            | fileName                       |
            | CSSmallFileContainingWarning60 |

    Scenario Outline: Download warning report
        When the user selects the "Report packaging data" card as "Compliance Scheme"
        And the user navigates to "Report packaging data" page as a "Compliance Scheme"
        Then the user should be on the "report packaging data" page
        When the Compliance Scheme user uploads a PoM data CSV file with a name <fileName>
        Then the user should be on the "check warnings" page
        And the warning report can be downloaded
        And the warning report "<fileName>" for Compliance Scheme should contain all the issue information
        Examples:
            | fileName                       |
            | CSSmallFileContainingWarning60 |

    Scenario Outline: Upload with warnings
        When the user selects the "Report packaging data" card as "Compliance Scheme"
        And the user navigates to "Report packaging data" page as a "Compliance Scheme"
        Then the user should be on the "report packaging data" page
        When the Compliance Scheme user uploads a PoM data CSV file with a name <fileName>
        Then the user should be on the "check warnings" page
        When the user chooses "No" option on the "check warnings" page
        And the user clicks the "continue" button on the "check warnings" page
        Then the user should be on the "file upload check file and submit" page
        And the <fileName> file should be in the "File you're submitting" table on the "check and submit" page
        Examples:
            | fileName                       |
            | CSSmallFileContainingWarning60 |

    Scenario Outline: Do not upload with warnings
        When the user selects the "Report packaging data" card as "Compliance Scheme"
        And the user navigates to "Report packaging data" page as a "Compliance Scheme"
        Then the user should be on the "report packaging data" page
        When the Compliance Scheme user uploads a PoM data CSV file with a name <fileName>
        Then the user should be on the "check warnings" page
        When the user chooses "Yes" option on the "check warnings" page
        And the user clicks the "continue" button on the "check warnings" page
        Then the user should be on the "report packaging data" page
        Examples:
            | fileName                       |
            | CSSmallFileContainingWarning60 |

    Scenario Outline: Check warnings - validation on the page
        When the user selects the "Report packaging data" card as "Compliance Scheme"
        And the user navigates to "Report packaging data" page as a "Compliance Scheme"
        Then the user should be on the "report packaging data" page
        When the Compliance Scheme user uploads a PoM data CSV file with a name <fileName>
        Then the user should be on the "check warnings" page
        When the user clicks the "continue" button on the "check warnings" page
        Then the user error message should be displayed on the "check warnings" page
        Examples:
            | fileName                       |
            | CSSmallFileContainingWarning60 |

    Scenario Outline:  Review Warnings from the last file upload
        When the user selects the "Report packaging data" card as "Compliance Scheme"
        And the user navigates to "Report packaging data" page as a "Compliance Scheme"
        Then the user should be on the "report packaging data" page
        When the Compliance Scheme user uploads a PoM data CSV file with a name <fileName>
        Then the user should be on the "check warnings" page
        When the user chooses "No" option on the "check warnings" page
        And the user clicks the "continue" button on the "check warnings" page
        Then the user should be on the "file upload check file and submit" page
        And the <fileName> file should be in the "File you're submitting" table on the "check and submit" page
        When the registered user is on the "report data" page
        And the user selects the "Report packaging data" card as "Compliance Scheme"
        And the user chooses to report packaging data for the first period
        Then the user should be on the "check warnings" page
        Examples:
            | fileName                       |
            | CSSmallFileContainingWarning60 |