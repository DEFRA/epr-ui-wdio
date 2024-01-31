Feature: Organisation details from Compliance Scheme: upload and submit - Welsh Translation
    As a Welsh Compliance Scheme,
    I want to be sure that if I upload and submit a valid Organisation data file when using Welsh,
    then the file will be uploaded and submitted.

    Background: Open report data page
        Given init common scenario context
        And the registered user is on the "report data" page
        And the user is logged in as a Compliance Scheme "Approved" user
        And cookies "Accept" button should display
        And cookies are "Accepted"

    Scenario: Report Organisation details - page
        When the user selects the "Report organisation details" card as "Compliance Scheme"
        Then the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        Then the user should be on the "organisation details sub landing" page
        And the Welsh page H1 header should be correct for the "cs organisation details sub landing" page

    Scenario: Upload Organisation details - page
        When the user selects the "Report organisation details" card as "Compliance Scheme"
        And the user navigates to "Report organisation details" page as a "Compliance Scheme"
        Then the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        Then the user should be on the "upload organisation details" page
        And the Welsh page H1 header should be correct for the "cs upload organisation details" page

    Scenario Outline: Upload company details completed - page, nothing additional required
        When the user selects the "Report organisation details" card as "Compliance Scheme"
        And the user navigates to "Report organisation details" page as a "Compliance Scheme"
        And the user uploads an Organisation data CSV file with a name <fileName>
        Then the Organisation data file <fileName> should not be rejected
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        Then the user should be on the "upload company details success" page
        And the Welsh page H3 header should be correct for the "upload company details success" page
        Examples:
            | fileName    |
            | RegDataFile |

    Scenario Outline: Upload company details completed - page, brands required
        When the user selects the "Report organisation details" card as "Compliance Scheme"
        And the user navigates to "Report organisation details" page as a "Compliance Scheme"
        And the user uploads an Organisation data CSV file with a name <fileName>
        Then the Organisation data file <fileName> should not be rejected
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        Then the user should be on the "upload company details success" page
        And the Welsh page H3 header should be correct for the "upload company details success" page
        Examples:
            | fileName               |
            | RegData_PacAct_primary |

    Scenario Outline: Upload company details completed - page, partners required
        When the user selects the "Report organisation details" card as "Compliance Scheme"
        And the user navigates to "Report organisation details" page as a "Compliance Scheme"
        And the user uploads an Organisation data CSV file with a name <fileName>
        Then the Organisation data file <fileName> should not be rejected
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        Then the user should be on the "upload company details success" page
        And the Welsh page H3 header should be correct for the "upload company details success" page
        Examples:
            | fileName            |
            | RegData_OrgType_PAR |

    Scenario Outline: Upload company details completed - page, brands and partners required
        When the user selects the "Report organisation details" card as "Compliance Scheme"
        And the user navigates to "Report organisation details" page as a "Compliance Scheme"
        And the user uploads an Organisation data CSV file with a name <fileName>
        Then the Organisation data file <fileName> should not be rejected
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        Then the user should be on the "upload company details success" page
        And the Welsh page H3 header should be correct for the "upload company details success" page
        Examples:
            | fileName              |
            | RegData_LLP_secondary |

    Scenario Outline: Brand information uploaded - page, nothing additional required
        When the user selects the "Report organisation details" card as "Compliance Scheme"
        And the user navigates to "Report organisation details" page as a "Compliance Scheme"
        And the user uploads an Organisation data CSV file with a name <OrgDataFileName>
        Then the Organisation data file <OrgDataFileName> should not be rejected
        And the "upload brand information" button should be displayed
        When the user clicks the "upload brand information" button
        Then the user should be on the "upload brand information" page
        When the user uploads a Brand data CSV file with a name <BrandDataFileName>
        Then the Brand data file <BrandDataFileName> should not be rejected
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        Then the user should be on the "file upload brand success" page
        And the Welsh page H3 header should be correct for the "file upload brand success" page
        Examples:
            | OrgDataFileName        | BrandDataFileName |
            | RegData_PacAct_primary | BrandData         |

    Scenario Outline: Brand information uploaded - page, partners required
        When the user selects the "Report organisation details" card as "Compliance Scheme"
        And the user navigates to "Report organisation details" page as a "Compliance Scheme"
        And the user uploads an Organisation data CSV file with a name <OrgDataFileName>
        Then the Organisation data file <OrgDataFileName> should not be rejected
        And the "upload brand information" button should be displayed
        When the user clicks the "upload brand information" button
        Then the user should be on the "upload brand information" page
        When the user uploads a Brand data CSV file with a name <BrandDataFileName>
        Then the Brand data file <BrandDataFileName> should not be rejected
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        Then the user should be on the "file upload brand success" page
        And the Welsh page H3 header should be correct for the "file upload brand success" page
        Examples:
            | OrgDataFileName       | BrandDataFileName |
            | RegData_LLP_secondary | BrandData         |

    Scenario Outline: Partner information uploaded - page
        When the user selects the "Report organisation details" card as "Compliance Scheme"
        And the user navigates to "Report organisation details" page as a "Compliance Scheme"
        And the user uploads an Organisation data CSV file with a name <OrgDataFileName>
        Then the Organisation data file <OrgDataFileName> should not be rejected
        And the "upload partner information" button should be displayed
        When the user clicks the "upload partner information" button
        Then the user should be on the "upload partner information" page
        When the user uploads a Partner data CSV file with a name <PartnerDataFileName>
        Then the Partner data file <PartnerDataFileName> should not be rejected
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        Then the user should be on the "file upload partner success" page
        And the Welsh page H3 header should be correct for the "file upload partner success" page
        Examples:
            | OrgDataFileName     | PartnerDataFileName |
            | RegData_OrgType_LLP | PartnerData         |

    Scenario Outline: An Organisation data file doesn't meet the requirements
        When the user selects the "Report organisation details" card as "Compliance Scheme"
        And the user navigates to "Report organisation details" page as a "Compliance Scheme"
        Then the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        And the user uploads an Organisation data CSV file with a name <fileName1>
        Then the Organisation data file upload <fileName1> should be terminated
        When the user uploads an Organisation data XLS file with a name <fileName2>
        Then the Organisation data file upload <fileName2> should be terminated
        When the user uploads without selected data file
        Then the Organisation data file upload <fileName3> should be terminated
        When the user uploads an Organisation data CSV file with a name <fileName4>
        Then the Organisation data file upload <fileName4> should be terminated
        When the user uploads an Organisation data CSV file with a name <fileName5>
        Then the Organisation data file upload <fileName5> should be terminated
        Examples:
            | fileName1 | fileName2              | fileName3 | fileName4                      | fileName5                     |
            | EmptyFile | OrgDataWrongFormatFile | No file   | OrganisationDetailsLessColumns | OrganisationDetailsMoreColumns |

    Scenario Outline: A Brand data file doesn't meet the requirements
        When the user selects the "Report organisation details" card as "Compliance Scheme"
        And the user navigates to "Report organisation details" page as a "Compliance Scheme"
        And the user uploads an Organisation data CSV file with a name <OrgDataFileName>
        Then the Organisation data file <OrgDataFileName> should not be rejected
        And the "upload brand information" button should be displayed
        When the user clicks the "upload brand information" button
        Then the user should be on the "upload brand information" page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        Then the user should be on the "upload brand information" page
        And the Welsh page H1 header should be correct for the "upload brand information" page
        When the user uploads a Brand data CSV file with a name <fileName1>
        Then the Organisation data file upload <fileName1> should be terminated
        When the user uploads a Brand data XLS file with a name <fileName2>
        Then the Organisation data file upload <fileName2> should be terminated
        When the user uploads without selected data file
        Then the Organisation data file upload <fileName3> should be terminated
        Examples:
            | OrgDataFileName        | fileName1 | fileName2                | fileName3 |
            | RegData_PacAct_primary | EmptyFile | BrandDataWrongFormatFile | No file   |

    Scenario Outline: A Partner data file doesn't meet the requirements
        When the user selects the "Report organisation details" card as "Compliance Scheme"
        And the user navigates to "Report organisation details" page as a "Compliance Scheme"
        And the user uploads an Organisation data CSV file with a name <OrgDataFileName>
        Then the Organisation data file <OrgDataFileName> should not be rejected
        And the "upload partner information" button should be displayed
        When the user clicks the "upload partner information" button
        Then the user should be on the "upload partner information" page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        Then the user should be on the "upload partner information" page
        And the Welsh page H1 header should be correct for the "upload partner information" page
        When the user uploads a Partner data CSV file with a name <fileName1>
        Then the Organisation data file upload <fileName1> should be terminated
        When the user uploads a Partner data XLS file with a name <fileName2>
        Then the Organisation data file upload <fileName2> should be terminated
        When the user uploads without selected data file
        Then the Organisation data file upload <fileName3> should be terminated
        Examples:
            | OrgDataFileName     | fileName1 | fileName2                  | fileName3 |
            | RegData_OrgType_PAR | EmptyFile | PartnerDataWrongFormatFile | No file   |

    Scenario Outline: Review Organisation Data - a file submitted and new file uploaded
        When the user selects the "Report organisation details" card as "Compliance Scheme"
        And the user navigates to "Report organisation details" page as a "Compliance Scheme"
        Then the user should be on the "upload organisation details" page
        When the user uploads an Organisation data CSV file with a name <fileName>
        Then the user should be on the "upload company details success" page
        When the user chooses "Continue" on the "upload company details success" page
        Then the user should be on the "review organisation data" page
        When the user submits an Organisation details file
        Then the user should be on the "organisation details confirmation" page
        When the user clicks the "Go to your account homepage" button on the "organisation details confirmation" page
        And the user selects the "Report organisation details" card as "Compliance Scheme"
        Then the submission status for the first submission period should be "submitted to regulator"
        When the user navigates to "Report organisation details" page as a "Compliance Scheme"
        Then the user should be on the "upload organisation details" page
        When the user uploads an Organisation data CSV file with a name <fileName>
        Then the user should be on the "upload company details success" page
        When the user chooses "Continue" on the "upload company details success" page
        Then the user should be on the "review organisation data" page
        When the user chooses "No" option on the "review organisation data" page
        And the user clicks the "confirm" button on the "review organisation data" page
        Then the user should be on the "organisation details sub landing" page
        When the user chooses to report organisation details for the first period
        Then the user should be on the "review organisation data" page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        And the Welsh page H1 header should be correct for the "cs review organisation data: check file and re-submit" page
        Examples:
            | fileName    |
            | RegDataFile |

    Scenario: Review Organisation Data page - validation
        When the user selects the "Report organisation details" card as "Compliance Scheme"
        And the user navigates to "Report organisation details" page as a "Compliance Scheme"
        Then the user should be on the "upload organisation details" page
        When the user uploads an Organisation data CSV file with a name <fileName>
        Then the user should be on the "upload company details success" page
        When the user chooses "Continue" on the "upload company details success" page
        Then the user should be on the "review organisation data" page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        And the user clicks the "confirm" button on the "review organisation data" page
        Then the error message should be displayed on the "review organisation data" page for "Compliance Scheme"
        Examples:
            | fileName    |
            | RegDataFile |

    Scenario Outline: Organisation Details Confirmation page- file successfully submitted
        When the user selects the "Report organisation details" card as "Compliance Scheme"
        And the user navigates to "Report organisation details" page as a "Compliance Scheme"
        Then the user should be on the "upload organisation details" page
        When the user uploads an Organisation data CSV file with a name <fileName>
        Then the user should be on the "upload company details success" page
        When the user chooses "Continue" on the "upload company details success" page
        Then the user should be on the "review organisation data" page
        When the user chooses "Yes" option on the "review organisation data" page
        And the user clicks the "confirm" button on the "review organisation data" page
        Then the user should be on the "organisation details confirmation" page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        And the Welsh page H1 header should be correct for the "organisation details confirmation" page
        Examples:
            | fileName    |
            | RegDataFile |