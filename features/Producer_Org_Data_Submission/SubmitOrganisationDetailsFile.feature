@ProducerOrganisationDataUpload
Feature: Direct Producer submits Organisation details
    As a Direct Producer, I want to ensure that if I submit a file, the file is submitted.

    Background: Open report data page
        Given init common scenario context
        And the registered user is on the "report data" page

    Scenario Outline: Review Organisation Data page - file successfully uploaded
        When the user is logged in as a "Direct" Producer with "Approved" role
        And the user selects the "Report organisation details" card as "Producer"
        And the user navigates to "Report organisation details" page as a "Producer"
        Then the user should be on the "upload organisation details" page
        When the user uploads an Organisation data CSV file with a name <fileName>
        Then the user should be on the "upload company details success" page
        And the "Continue" button should be displayed on the "upload company details success" page
        When the user chooses "Continue" on the "upload company details success" page
        Then the user should be on the "review organisation data" page
        And the "Files uploaded" table should have the corresponding title on the "review organisation data" page
        And the <fileName> file should be in the "Files uploaded" table on the "review organisation data" page
        And the uploaded date should be correct in the "Files uploaded" table on the "review organisation data" page
        And the file in the "Files uploaded" table should be uploaded by the current user on the "review organisation data" page
        And the "Are you sure you want to re-submit" text should be displayed on the "review organisation data" page
        And the "Yes" radio button should be present on the "review organisation data" page
        And the "No" radio button should be present on the "review organisation data" page
        And the radio buttons should not be checked on the "review organisation data" page
        And the "confirm" button should be displayed on the "review organisation data" page
        Examples:
            | fileName    |
            | RegDataFile |

    Scenario Outline: Submission Declaration page
        When the user is logged in as a "Direct" Producer with "Approved" role
        And the user selects the "Report organisation details" card as "Producer"
        And the user navigates to "Report organisation details" page as a "Producer"
        Then the user should be on the "upload organisation details" page
        When the user uploads an Organisation data CSV file with a name <fileName>
        Then the user should be on the "upload company details success" page
        And the "Continue" button should be displayed on the "upload company details success" page
        When the user chooses "Continue" on the "upload company details success" page
        Then the user should be on the "review organisation data" page
        When the user chooses "Yes" option on the "review organisation data" page
        And the user clicks the "confirm" button on the "review organisation data" page
        Then the user should be on the "declaration enter full name" page
        And the "enter your full name" field should be displayed on the "declaration enter full name" page
        And the warning about enforcement action should be displayed on the "declaration enter full name" page
        And the "submit file" button should be displayed on the "declaration enter full name" page
        When the user clicks the "submit file" button on the "declaration enter full name" page
        Then the "Enter your full name" error message is displayed on the "declaration enter full name" page
        When the user enters a name of 201 characters in the "Enter your full name" field for: "Organisation" data
        And the user clicks the "submit file" button on the "declaration enter full name" page
        Then the "Full name must be 200 characters or less" error message is displayed on the "declaration enter full name" page
        When the user enters a full name in the "Enter your full name" field on the "declaration enter full name" page
        And the user clicks the "submit file" button on the "declaration enter full name" page
        Then the user should be on the "organisation details confirmation" page
        Examples:
            | fileName    |
            | RegDataFile |

    Scenario Outline: Organisation Details Confirmation page- file successfully submitted
        When the user is logged in as a "Direct" Producer with "Approved" role
        And the user selects the "Report organisation details" card as "Producer"
        And the user navigates to "Report organisation details" page as a "Producer"
        Then the user should be on the "upload organisation details" page
        When the user uploads an Organisation data CSV file with a name <fileName>
        Then the user should be on the "upload company details success" page
        When the user chooses "Continue" on the "upload company details success" page
        Then the user should be on the "review organisation data" page
        When the user chooses "Yes" option on the "review organisation data" page
        And the user clicks the "confirm" button on the "review organisation data" page
        Then the user should be on the "declaration enter full name" page
        When the user enters a full name in the "Enter your full name" field on the "declaration enter full name" page
        And the user clicks the "submit file" button on the "declaration enter full name" page
        Then the user should be on the "organisation details confirmation" page
        And the "Organisation details submitted" banner is displayed
        And the link to "Print this page" is displayed on the "organisation details confirmation" page
        And the button to "Go to your account homepage" is displayed on the "organisation details confirmation" page
        Examples:
            | fileName    |
            | RegDataFile |

    Scenario Outline: Confirm Organisation Data Re-upload page - submit file when there is a file submitted in the account and nothing else uploaded
        When the user is logged in as a "Direct" Producer with "Approved" role
        And the user selects the "Report organisation details" card as "Producer"
        And the user navigates to "Report organisation details" page as a "Producer"
        Then the user should be on the "upload organisation details" page
        When the user uploads an Organisation data CSV file with a name <fileName>
        Then the user should be on the "upload company details success" page
        When the user chooses "Continue" on the "upload company details success" page
        Then the user should be on the "review organisation data" page
        When the user submits an Organisation details file
        Then the user should be on the "declaration enter full name" page
        When the user enters a full name in the "Enter your full name" field on the "declaration enter full name" page
        And the user clicks the "submit file" button on the "declaration enter full name" page
        Then the user should be on the "organisation details confirmation" page
        When the user clicks the "Go to your account homepage" button on the "organisation details confirmation" page
        And the user selects the "Report organisation details" card as "Producer"
        And the user chooses to report organisation details for the first period
        Then the user should be on the "confirm organisation data re upload" page
        And the "Files you’ve already submitted" table should have the corresponding title on the "review organisation data" page
        And the <fileName> file should be in the "Files you’ve already submitted" table on the "review organisation data" page
        And the uploaded date should be correct in the "Files you’ve already submitted" table on the "review organisation data" page
        And the file in the "Files you’ve already submitted" table should be uploaded by the current user on the "review organisation data" page
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
        When the user is logged in as a "Direct" Producer with "Approved" role
        And the user selects the "Report organisation details" card as "Producer"
        And the user navigates to "Report organisation details" page as a "Producer"
        Then the user should be on the "upload organisation details" page
        When the user uploads an Organisation data CSV file with a name <fileName>
        Then the user should be on the "upload company details success" page
        When the user chooses "Continue" on the "upload company details success" page
        Then the user should be on the "review organisation data" page
        When the user submits an Organisation details file
        Then the user should be on the "declaration enter full name" page
        When the user enters a full name in the "Enter your full name" field on the "declaration enter full name" page
        And the user clicks the "submit file" button on the "declaration enter full name" page
        Then the user should be on the "organisation details confirmation" page
        When the user clicks the "Go to your account homepage" button on the "organisation details confirmation" page
        And the user selects the "Report organisation details" card as "Producer"
        Then the submission status for the first submission period should be "submitted to regulator"
        And the user navigates to "Report organisation details" page as a "Producer"
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
        And the "Files uploaded" table should have the corresponding title on the "review organisation data" page
        And the <fileName> file should be in the "Files uploaded" table on the "review organisation data" page
        And the uploaded date should be correct in the "Files uploaded" table on the "review organisation data" page
        And the file in the "Files uploaded" table should be uploaded by the current user on the "review organisation data" page
        And the "Files already submitted" table should have the corresponding title on the "review organisation data" page
        And the <fileName> file should be in the "Files already submitted" table on the "review organisation data" page
        And the uploaded date should be correct in the "Files already submitted" table on the "review organisation data" page
        And the file in the "Files already submitted" table should be uploaded by the current user on the "review organisation data" page
        And the "Are you sure you want to re-submit" text should be displayed on the "review organisation data" page
        And the "Yes" radio button should be present on the "review organisation data" page
        And the "No" radio button should be present on the "review organisation data" page
        And the radio buttons should not be checked on the "review organisation data" page
        And the "confirm" button should be displayed on the "review organisation data" page
        Examples:
            | fileName    |
            | RegDataFile |

    Scenario Outline: Direct Producer Delegated person can submit data
        When the user is logged in as a "Direct" Producer with "Delegated" role
        And the user selects the "Report organisation details" card as "Producer"
        And the user navigates to "Report organisation details" page as a "Producer"
        Then the user should be on the "upload organisation details" page
        When the user uploads an Organisation data CSV file with a name <fileName>
        Then the user should be on the "upload company details success" page
        When the user chooses "Continue" on the "upload company details success" page
        Then the user should be on the "review organisation data" page
        When the user submits an Organisation details file
        Then the user should be on the "declaration enter full name" page
        When the user enters a full name in the "Enter your full name" field on the "declaration enter full name" page
        And the user clicks the "submit file" button on the "declaration enter full name" page
        Then the user should be on the "organisation details confirmation" page
        Examples:
            | fileName    |
            | RegDataFile |

    Scenario Outline: Direct Producer Basic user can't submit data
        When the user is logged in as a "Direct" Producer with "Basic" role
        And the user selects the "Report organisation details" card as "Producer"
        And the user navigates to "Report organisation details" page as a "Producer"
        Then the user should be on the "upload organisation details" page
        When the user uploads an Organisation data CSV file with a name <fileName>
        Then the user should be on the "upload company details success" page
        When the user chooses "Continue" on the "upload company details success" page
        Then the user should be on the "review organisation data" page
        And the "Files uploaded" table should have the corresponding title on the "review organisation data" page
        And the <fileName> file should be in the "Files uploaded" table on the "review organisation data" page
        And the uploaded date should be correct in the "Files uploaded" table on the "review organisation data" page
        And the file in the "Files uploaded" table should be uploaded by the current user on the "review organisation data" page
        And the "Files already submitted" table should have the corresponding title on the "review organisation data" page
        And the link to "Go to your account homepage" is displayed on the "review organisation data" page
        When the user clicks the "Go to your account homepage" link on the "review organisation data" page
        Then the user should be on the "direct producer landing" page
        Examples:
            | fileName    |
            | RegDataFile |

    Scenario: Review Organisation Data page - Basic User - file uploaded in the past, but not submitted yet
        When the user logs in as a "basic" user of "direct producer" with submission status "file uploaded"
        And the user selects the "Report organisation details" card as "Producer"
        Then the user should be on the "organisation details sub landing" page
        When the user chooses to report organisation details for the first period
        Then the user should be on the "confirm organisation data re upload" page
        And the "Files you’ve uploaded and are replacing" table should have the corresponding title on the "confirm organisation data re upload" page
        And the "Continue" button should be displayed on the "confirm organisation data re upload" page
        And the "Cancel" button should be displayed on the "confirm organisation data re upload" page

    Scenario: Review Organisation Data page - validation
        When the user is logged in as a "Direct" Producer with "Approved" role
        And the user selects the "Report organisation details" card as "Producer"
        And the user navigates to "Report organisation details" page as a "Producer"
        Then the user should be on the "upload organisation details" page
        When the user uploads an Organisation data CSV file with a name <fileName>
        Then the user should be on the "upload company details success" page
        When the user chooses "Continue" on the "upload company details success" page
        Then the user should be on the "review organisation data" page
        When the user clicks the "confirm" button on the "review organisation data" page
        Then the error message should be displayed on the "review organisation data" page for "Producer"
        Examples:
            | fileName    |
            | RegDataFile |

