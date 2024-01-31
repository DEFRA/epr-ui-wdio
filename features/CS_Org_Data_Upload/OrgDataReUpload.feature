@CSOrganisationDataUpload
Feature: Compliance Scheme - Re-upload Organisation details

    Background: Open report data page
        Given init common scenario context
        And the registered user is on the "report data" page
        And the user is logged in as a Compliance Scheme "Approved" user
        And cookies "Accept" button should display
        And cookies are "Accepted"

    Scenario Outline: Re-upload an Organisation data file from the review page
        When the user selects the "Report organisation details" card as "Compliance Scheme"
        And the user navigates to "Report organisation details" page as a "Compliance Scheme"
        And the user uploads an Organisation data CSV file with a name <OrgDataFileName>
        Then the Organisation data file <OrgDataFileName> should not be rejected
        And the "upload partner information" button should be displayed
        When the user clicks the "upload partner information" button
        And the user uploads a Partner data CSV file with a name <PartnerDataFileName>
        Then the Partner data file <PartnerDataFileName> should not be rejected
        And the "continue" button should be displayed
        When the user clicks the "continue" button
        Then the user should be on the "review organisation data" page
        And the link to change files uploaded should be displayed on the "review organisation data" page
        When the user selects to change files uploaded on the "review organisation data" page
        Then the user should be on the "upload organisation details" page
        And the "Files you’ve uploaded and are replacing" table should have the corresponding title on the "review organisation data" page
        
        Examples:
            | OrgDataFileName     | PartnerDataFileName |
            | RegData_OrgType_LLP | PartnerData         |

    Scenario Outline: Re-upload an Organisation data file from the "organisation details uploaded" page
        When the user selects the "Report organisation details" card as "Compliance Scheme"
        And the user navigates to "Report organisation details" page as a "Compliance Scheme"
        And the user uploads an Organisation data CSV file with a name <fileName>
        Then the Organisation data file <fileName> should not be rejected
        And the "continue" button should be displayed
        When the user clicks the "continue" button
        Then the user should be on the "review organisation data" page
        And the link to change files uploaded should be displayed on the "review organisation data" page
        When the user selects to change files uploaded on the "review organisation data" page
        Then the user should be on the "upload organisation details" page
        And the "Files you’ve uploaded and are replacing" table should have the corresponding title on the "review organisation data" page

        Examples:
            | fileName    |
            | RegDataFile |