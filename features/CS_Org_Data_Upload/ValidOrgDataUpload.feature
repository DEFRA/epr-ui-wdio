@CSOrganisationDataUpload
Feature: Compliance Scheme - Valid Organisation Data upload
    As a Compliance Scheme, I want to ensure that if I upload a valid Organisation data file,
    the file is uploaded.

    Background: Open report data page
        Given init common scenario context
        And the registered user is on the "report data" page
        And the user is logged in as a Compliance Scheme "Approved" user
        And cookies "Accept" button should display
        And cookies are "Accepted"

    Scenario Outline: Upload an Organisation data file, nothing additional required
        When the user selects the "Report organisation details" card as "Compliance Scheme"
        And the user navigates to "Report organisation details" page as a "Compliance Scheme"
        And the user uploads an Organisation data CSV file with a name <fileName>
        Then the Organisation data file <fileName> should not be rejected
        And the "continue" button should be displayed
        When the user clicks the "continue" button
        Then the user should be on the "review organisation data" page
        Examples:
            | fileName    |
            | RegDataFile |

    Scenario Outline: Upload an Organisation data file, Brand data required
        When the user selects the "Report organisation details" card as "Compliance Scheme"
        And the user navigates to "Report organisation details" page as a "Compliance Scheme"
        And the user uploads an Organisation data CSV file with a name <OrgDataFileName>
        Then the Organisation data file <OrgDataFileName> should not be rejected
        And the "upload brand information" button should be displayed
        When the user clicks the "upload brand information" button
        Then the user should be on the "upload brand information" page
        When the user uploads a Brand data CSV file with a name <BrandDataFileName>
        Then the Brand data file <BrandDataFileName> should not be rejected
        And the "continue" button should be displayed
        When the user clicks the "continue" button
        Then the user should be on the "review organisation data" page
        Examples:
            | OrgDataFileName        | BrandDataFileName |
            | RegData_PacAct_primary | BrandData         |

    Scenario Outline: Upload an Organisation data file, Partner data required
        When the user selects the "Report organisation details" card as "Compliance Scheme"
        And the user navigates to "Report organisation details" page as a "Compliance Scheme"
        And the user uploads an Organisation data CSV file with a name <OrgDataFileName>
        Then the Organisation data file <OrgDataFileName> should not be rejected
        And the "upload partner information" button should be displayed
        When the user clicks the "upload partner information" button
        Then the user should be on the "upload partner information" page
        When the user uploads a Partner data CSV file with a name <PartnerDataFileName>
        Then the Partner data file <PartnerDataFileName> should not be rejected
        And the "continue" button should be displayed
        When the user clicks the "continue" button
        Then the user should be on the "review organisation data" page
        Examples:
            | OrgDataFileName     | PartnerDataFileName |
            | RegData_OrgType_LLP | PartnerData         |

    Scenario Outline: Upload an Organisation data file, Brand and Partner data required
        When the user selects the "Report organisation details" card as "Compliance Scheme"
        And the user navigates to "Report organisation details" page as a "Compliance Scheme"
        And the user uploads an Organisation data CSV file with a name <OrgDataFileName>
        Then the Organisation data file <OrgDataFileName> should not be rejected
        And the "upload brand information" button should be displayed
        When the user clicks the "upload brand information" button
        Then the user should be on the "upload brand information" page
        When the user uploads a Brand data CSV file with a name <BrandDataFileName>
        Then the Brand data file <BrandDataFileName> should not be rejected
        And the "continue to partner information" button should be displayed
        When the user clicks the "continue to partner information" button
        Then the user should be on the "upload partner information" page
        When the user uploads a Partner data CSV file with a name <PartnerDataFileName>
        Then the Partner data file <PartnerDataFileName> should not be rejected
        And the "continue" button should be displayed
        When the user clicks the "continue" button
        Then the user should be on the "review organisation data" page
        And the "Organisation details" field should contain <OrgDataFileName> file
        And the "Brand information" field should contain <BrandDataFileName> file
        And the "Partner information" field should contain <PartnerDataFileName> file
        And the uploaded date should be correct for all the Compliance Scheme files
        And the files should be uploaded by Compliance Scheme
        And the "confirm" button should be displayed
        Examples:
            | OrgDataFileName       | BrandDataFileName | PartnerDataFileName |
            | RegData_LLP_secondary | BrandData         | PartnerData         |

    Scenario Outline: Organisation data file that requires Brands - validation rules
        When the user selects the "Report organisation details" card as "Compliance Scheme"
        And the user navigates to "Report organisation details" page as a "Compliance Scheme"
        And the user uploads an Organisation data CSV file with a name <OrgDataFileName>
        Then the Organisation data file <OrgDataFileName> should not be rejected
        And the "upload brand information" button should be displayed
        Examples:
            | OrgDataFileName          | BrandDataFileName |
            | RegData_PacAct_primary   | BrandData         |
            | RegData_PacAct_secondary | BrandData         |

    Scenario Outline: Organisation data file that requires Partners - validation rules
        When the user selects the "Report organisation details" card as "Compliance Scheme"
        And the user navigates to "Report organisation details" page as a "Compliance Scheme"
        And the user uploads an Organisation data CSV file with a name <OrgDataFileName>
        Then the Organisation data file <OrgDataFileName> should not be rejected
        And the "upload partner information" button should be displayed
        Examples:
            | OrgDataFileName     | PartnerDataFileName |
            | RegData_OrgType_LLP | PartnerData         |
            | RegData_OrgType_LPA | PartnerData         |
            | RegData_OrgType_PAR | PartnerData         |