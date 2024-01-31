@CSOrganisationDataUpload
Feature: Compliance Scheme submits Organisation details
    As a Compliance Scheme, I want to ensure that if I submit a file, the file is submitted.

    Background: Open report data page
        Given init common scenario context
        And the registered user is on the "report data" page

    Scenario Outline: Review Organisation Data page - file successfully uploaded
        When the user is logged in as a Compliance Scheme "Approved" user
        And the user selects the "Report organisation details" card as "Compliance Scheme"
        And the user navigates to "Report organisation details" page as a "Compliance Scheme"
        Then the user should be on the "upload organisation details" page
        When the user uploads an Organisation data CSV file with a name <fileName>
        Then the user should be on the "upload company details success" page
        And the "Continue" button should be displayed on the "upload company details success" page
        When the user chooses "Continue" on the "upload company details success" page
        Then the user should be on the "review organisation data" page
        And the "Files to submit" table should have the corresponding title on the "review organisation data" page
        And the <fileName> file should be in the "Files to submit" table on the "review organisation data" page
        And the uploaded date should be correct in the "Files to submit" table on the "review organisation data" page
        And the file in the "Files to submit" table should be uploaded by the current user on the "review organisation data" page
        And the "Are you sure you want to re-submit" text should be displayed on the "review organisation data" page
        And the "Yes" radio button should be present on the "review organisation data" page
        And the "No" radio button should be present on the "review organisation data" page
        And the radio buttons should not be checked on the "review organisation data" page
        And the "confirm" button should be displayed on the "review organisation data" page
        And the warning about enforcement action should be displayed on the "review organisation data" page
        Examples:
            | fileName    |
            | RegDataFile |

    Scenario Outline: Organisation Details Confirmation page- file successfully submitted
        When the user is logged in as a Compliance Scheme "Approved" user
        And the user selects the "Report organisation details" card as "Compliance Scheme"
        And the user navigates to "Report organisation details" page as a "Compliance Scheme"
        Then the user should be on the "upload organisation details" page
        When the user uploads an Organisation data CSV file with a name <fileName>
        Then the user should be on the "upload company details success" page
        When the user chooses "Continue" on the "upload company details success" page
        Then the user should be on the "review organisation data" page
        When the user chooses "Yes" option on the "review organisation data" page
        And the user clicks the "confirm" button on the "review organisation data" page
        Then the user should be on the "organisation details confirmation" page
        And the "Organisation details submitted" banner is displayed
        And the link to "Print this page" is displayed on the "organisation details confirmation" page
        And the button to "Go to your account homepage" is displayed on the "organisation details confirmation" page
        Examples:
            | fileName    |
            | RegDataFile |

    Scenario Outline: Confirm Organisation Data Re-upload page - submit file when there is a file submitted in the account and nothing else uploaded
        When the user is logged in as a Compliance Scheme "Approved" user
        And the user selects the "Report organisation details" card as "Compliance Scheme"
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
        And the user chooses to report organisation details for the first period
        Then the user should be on the "confirm organisation data re upload" page
        And the "Files you’ve already submitted" table should have the corresponding title on the "confirm organisation data re upload" page
        And the <fileName> file should be in the "Files you’ve already submitted" table on the "confirm organisation data re upload" page
        And the uploaded date should be correct in the "Files you’ve already submitted" table on the "confirm organisation data re upload" page
        And the file in the "Files you’ve already submitted" table should be uploaded by the current user on the "confirm organisation data re upload" page
        And the "Continue" button should be displayed on the "confirm organisation data re upload" page
        And the "Cancel" button should be displayed on the "confirm organisation data re upload" page
        When the user clicks the "Cancel" button on the "confirm organisation data re upload" page
        Then the user should be on the "organisation details sub landing" page
        When the user chooses to report organisation details for the first period
        And the user clicks the "Continue" button on the "confirm organisation data re upload" page
        Then the user should be on the "upload organisation details" page
        Examples:
            | fileName    |
            | RegDataFile |

    Scenario Outline: Review Organisation Data page - submit file when there is a file submitted in the account and new file uploaded
        When the user is logged in as a Compliance Scheme "Approved" user
        And the user selects the "Report organisation details" card as "Compliance Scheme"
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
        And the "Files to submit" table should have the corresponding title on the "review organisation data" page
        And the <fileName> file should be in the "Files to submit" table on the "review organisation data" page
        And the uploaded date should be correct in the "Files to submit" table on the "review organisation data" page
        And the file in the "Files to submit" table should be uploaded by the current user on the "review organisation data" page
        And the "Files already submitted" table should have the corresponding title on the "review organisation data" page
        And the <fileName> file should be in the "Files already submitted" table on the "review organisation data" page
        And the uploaded date should be correct in the "Files already submitted" table on the "review organisation data" page
        And the file in the "Files already submitted" table should be uploaded by the current user on the "review organisation data" page
        And the "Are you sure you want to re-submit" text should be displayed on the "review organisation data" page
        And the "Yes" radio button should be present on the "review organisation data" page
        And the "No" radio button should be present on the "review organisation data" page
        And the radio buttons should not be checked on the "review organisation data" page
        And the "confirm" button should be displayed on the "review organisation data" page
        And the warning about enforcement action should be displayed on the "review organisation data" page
        Examples:
            | fileName    |
            | RegDataFile |

    Scenario Outline: Compliance Scheme Delegated person can submit data
        When the user is logged in as a Compliance Scheme "Delegated" user
        And the user selects the "Report organisation details" card as "Compliance Scheme"
        And the user navigates to "Report organisation details" page as a "Compliance Scheme"
        Then the user should be on the "upload organisation details" page
        When the user uploads an Organisation data CSV file with a name <fileName>
        Then the user should be on the "upload company details success" page
        When the user chooses "Continue" on the "upload company details success" page
        Then the user should be on the "review organisation data" page
        When the user submits an Organisation details file
        Then the user should be on the "organisation details confirmation" page
        Examples:
            | fileName    |
            | RegDataFile |

   Scenario Outline: Compliance Scheme Basic user can't submit data
        When the user is logged in as a Compliance Scheme "Basic" user
        And the user selects the "Report organisation details" card as "Compliance Scheme"
        And the user navigates to "Report organisation details" page as a "Compliance Scheme"
        Then the user should be on the "upload organisation details" page
        When the user uploads an Organisation data CSV file with a name <fileName>
        Then the user should be on the "upload company details success" page
        When the user chooses "Continue" on the "upload company details success" page
        Then the user should be on the "review organisation data" page
        And the "Files to submit" table should have the corresponding title on the "review organisation data" page
        And the <fileName> file should be in the "Files to submit" table on the "review organisation data" page
        And the uploaded date should be correct in the "Files to submit" table on the "review organisation data" page
        And the file in the "Files to submit" table should be uploaded by the current user on the "review organisation data" page
        And the "Files already submitted" table should have the corresponding title on the "review organisation data" page
        And the link to "Go to your account homepage" is displayed on the "review organisation data" page
        When the user clicks the "Go to your account homepage" link on the "review organisation data" page
        Then the user should be on the "home compliance scheme" page
        Examples:
            | fileName    |
            | RegDataFile |

    Scenario: Review Organisation Data page - Basic User - file uploaded in the past, but not submitted yet
       When the user logs in as a "basic" user of "compliance scheme" with submission status "file uploaded"
        And the user selects the "Report organisation details" card as "Compliance Scheme"
        Then the user should be on the "organisation details sub landing" page
        When the user chooses to report organisation details for the first period
        Then the user should be on the "confirm organisation data re upload" page
        And the "Files you’ve uploaded and are replacing" table should have the corresponding title on the "confirm organisation data re upload" page
        And the "Continue" button should be displayed on the "confirm organisation data re upload" page
        And the "Cancel" button should be displayed on the "confirm organisation data re upload" page

    Scenario: Review Organisation Data page - validation
        When the user is logged in as a Compliance Scheme "Approved" user
        And the user selects the "Report organisation details" card as "Compliance Scheme"
        And the user navigates to "Report organisation details" page as a "Compliance Scheme"
        Then the user should be on the "upload organisation details" page
        When the user uploads an Organisation data CSV file with a name <fileName>
        Then the user should be on the "upload company details success" page
        When the user chooses "Continue" on the "upload company details success" page
        Then the user should be on the "review organisation data" page
        When the user clicks the "confirm" button on the "review organisation data" page
        Then the error message should be displayed on the "review organisation data" page for "Compliance Scheme"
        Examples:
            | fileName    |
            | RegDataFile |