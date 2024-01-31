@ProducerPoMDataSubmission
Feature: Direct Producer submits Packaging data
    As a Direct Producer, I want to ensure that if I submit a file, the file is submitted.

    Background: Open report data page
        Given init common scenario context
        And init Landing Pages scenario context
        And the registered user is on the "report data" page

    Scenario Outline: Check and Submit page - file successfully uploaded
        When the user is logged in as a "Direct" Producer with "Approved" role
        Then the organisation id should be displayed on Direct producer Landing Page
        When the user selects the "Report packaging data" card as "Producer"
        And the user navigates to "Report packaging data" page as a "Producer"
        Then the user should be on the "report packaging data" page
        When the Producer user uploads a PoM data CSV file with a name <fileName>
        Then the user should be on the "file upload check file and submit" page
        And the title of the "file upload check file and submit" page should be correct
        And the "File uploaded" table should have the corresponding title on the "check and submit" page
        And the <fileName> file should be in the "File uploaded" table on the "check and submit" page
        And the uploaded date should be correct in the "File uploaded" table on the "check and submit" page
        And the file in the "File uploaded" table should be uploaded by the current user on the "check and submit" page
        And the "Are you sure you want to submit" text should be displayed on the "check and submit" page
        And the "Yes" radio button should be present on the "check and submit" page
        And the "No" radio button should be present on the "check and submit" page
        And the radio buttons should not be checked on the "check and submit" page
        And the "continue" button should be displayed on the "check and submit" page
        Examples:
            | fileName               |
            | ProducerSmallValidFile |

    Scenario Outline: Submission Declaration page
        When the user is logged in as a "Direct" Producer with "Approved" role
        Then the organisation id should be displayed on Direct producer Landing Page
        When the user selects the "Report packaging data" card as "Producer"
        And the user navigates to "Report packaging data" page as a "Producer"
        Then the user should be on the "report packaging data" page
        When the Producer user uploads a PoM data CSV file with a name <fileName>
        Then the user should be on the "file upload check file and submit" page
        When the user chooses "Yes" option on the "check and submit" page
        And the user clicks the "continue" button on the "check and submit" page
        Then the user should be on the "submission declaration" page
        And the "enter your full name" field should be displayed on the "submission declaration" page
        And the warning about enforcement action should be displayed on the "submission declaration" page
        And the "submit file" button should be displayed on the "submission declaration" page
        When the user clicks the "submit file" button on the "submission declaration" page
        Then the "Enter your full name" error message is displayed on the "submission declaration" page
        When the user enters a name of 201 characters in the "Enter your full name" field for: "Packaging" data
        And the user clicks the "submit file" button on the "submission declaration" page
        Then the "Full name must be 200 characters or less" error message is displayed on the "submission declaration" page
        When the user enters a full name in the "Enter your full name" field on the "submission declaration" page
        And the user clicks the "submit file" button on the "submission declaration" page
        Then the user should be on the "submission confirmation" page

        Examples:
            | fileName               |
            | ProducerSmallValidFile |

    Scenario Outline: Submission Confirmation page - file successfully submitted
        When the user is logged in as a "Direct" Producer with "Approved" role
        Then the organisation id should be displayed on Direct producer Landing Page
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
        And the "Packaging data submitted" banner is displayed
        And the link to "Print this page" is displayed on the "submission confirmation" page
        And the button to "Go to your account homepage" is displayed on the "submission confirmation" page
        Examples:
            | fileName               |
            | ProducerSmallValidFile |

    Scenario Outline: Upload New File To Submit page - submit file when there is a file submitted in the account and nothing else uploaded
        When the user is logged in as a "Direct" Producer with "Approved" role
        Then the organisation id should be displayed on Direct producer Landing Page
        When the user selects the "Report packaging data" card as "Producer"
        And the user navigates to "Report packaging data" page as a "Producer"
        Then the user should be on the "report packaging data" page
        When the Producer user uploads a PoM data CSV file with a name <fileName>
        Then the user should be on the "file upload check file and submit" page
        When the user submits a Packaging data file
        Then the user should be on the "submission declaration" page
        When the user enters a full name in the "Enter your full name" field on the "submission declaration" page
        And the user clicks the "submit file" button on the "submission declaration" page
        Then the user should be on the "submission confirmation" page
        When the user clicks the "Go to your account homepage" button on the "submission confirmation" page
        And the user selects the "Report packaging data" card as "Producer"
        And the user chooses to report packaging data for the first period
        Then the user should be on the "upload new file to submit" page
        And the title of the "upload new file to submit" page should be correct
        And the "File already submitted" table should have the corresponding title on the "check and submit" page
        And the <fileName> file should be in the "File already submitted" table on the "check and submit" page
        And the uploaded date should be correct in the "File already submitted" table on the "check and submit" page
        And the file in the "File already submitted" table should be uploaded by the current user on the "check and submit" page
        And the "Upload new file" button should be displayed on the "upload new file to submit" page
        And the "Cancel" button should be displayed on the "upload new file to submit" page
        When the user clicks the "Cancel" button on the "upload new file to submit" page
        Then the user should be on the "packaging data sub landing" page
        When the user chooses to report packaging data for the first period
        And the user clicks the "Upload new file" button on the "upload new file to submit" page
        Then the user should be on the "report packaging data" page
        Examples:
            | fileName               |
            | ProducerSmallValidFile |

    Scenario Outline: Check and Submit page - submit file when there is a file submitted in the account and new file uploaded
        When the user is logged in as a "Direct" Producer with "Approved" role
        Then the organisation id should be displayed on Direct producer Landing Page
        When the user selects the "Report packaging data" card as "Producer"
        And the user navigates to "Report packaging data" page as a "Producer"
        Then the user should be on the "report packaging data" page
        When the Producer user uploads a PoM data CSV file with a name <fileName1>
        Then the user should be on the "file upload check file and submit" page
        When the user submits a Packaging data file
        Then the user should be on the "submission declaration" page
        When the user enters a full name in the "Enter your full name" field on the "submission declaration" page
        And the user clicks the "submit file" button on the "submission declaration" page
        Then the user should be on the "submission confirmation" page
        When the user clicks the "Go to your account homepage" button on the "submission confirmation" page
        And the user selects the "Report packaging data" card as "Producer"
        Then the submission status for the first submission period should be "submitted to regulator"
        When the user navigates to "Report packaging data" page as a "Producer"
        Then the user should be on the "report packaging data" page
        When the Producer user uploads a PoM data CSV file with a name <fileName2>
        Then the user should be on the "file upload check file and submit" page
        When the user chooses "No" option on the "check and submit" page
        And the user clicks the "continue" button on the "check and submit" page
        Then the user should be on the "packaging data sub landing" page
        When the user chooses to report packaging data for the first period
        Then the user should be on the "file upload check file and submit" page
        And the title of the "file upload check file and submit" page should be correct
        And the "File you're submitting" table should have the corresponding title on the "check and submit" page
        And the <fileName2> file should be in the "File you're submitting" table on the "check and submit" page
        And the uploaded date should be correct in the "File you're submitting" table on the "check and submit" page
        And the file in the "File you're submitting" table should be uploaded by the current user on the "check and submit" page
        And the "Last file submitted" table should have the corresponding title on the "check and submit" page
        And the <fileName1> file should be in the "Last file submitted" table on the "check and submit" page
        And the uploaded date should be correct in the "Last file submitted" table on the "check and submit" page
        And the file in the "Last file submitted" table should be uploaded by the current user on the "check and submit" page
        And the "Are you sure you want to submit" text should be displayed on the "check and submit" page
        And the "Yes" radio button should be present on the "check and submit" page
        And the "No" radio button should be present on the "check and submit" page
        And the radio buttons should not be checked on the "check and submit" page
        And the "continue" button should be displayed on the "check and submit" page
        Examples:
            | fileName1              | fileName2               |
            | ProducerSmallValidFile | ProducerValidDataUpload |

    Scenario Outline: Direct Producer Delegated person can submit data
        When the user is logged in as a "Direct" Producer with "Delegated" role
        Then the organisation id should be displayed on Direct producer Landing Page
        When the user selects the "Report packaging data" card as "Producer"
        And the user navigates to "Report packaging data" page as a "Producer"
        When the Producer user uploads a PoM data CSV file with a name <fileName>
        Then the user should be on the "file upload check file and submit" page
        And the title of the "file upload check file and submit" page should be correct
        When the user submits a Packaging data file
        Then the user should be on the "submission declaration" page
        When the user enters a full name in the "Enter your full name" field on the "submission declaration" page
        And the user clicks the "submit file" button on the "submission declaration" page
        Then the user should be on the "submission confirmation" page
        Examples:
            | fileName               |
            | ProducerSmallValidFile |

    Scenario Outline: Direct Producer Basic user can't submit data
        When the user is logged in as a "Direct" Producer with "Basic" role
        Then the organisation id should be displayed on Direct producer Landing Page
        When the user selects the "Report packaging data" card as "Producer"
        And the user navigates to "Report packaging data" page as a "Producer"
        Then the user should be on the "report packaging data" page
        When the Producer user uploads a PoM data CSV file with a name <fileName>
        Then the user should be on the "file upload check file and submit" page
        And the title of the "file upload check file and submit" page should be correct for Basic User
        And the "File uploaded" table should have the corresponding title on the "check and submit" page
        And the <fileName> file should be in the "File uploaded" table on the "check and submit" page
        And the uploaded date should be correct in the "File uploaded" table on the "check and submit" page
        And the "Last file submitted" table should have the corresponding title on the "check and submit" page
        And the file in the "File uploaded" table should be uploaded by the current user on the "check and submit" page
        And the link to "Go to your account homepage" is displayed on the "check and submit" page
        When the user clicks the "Go to your account homepage" link on the "check and submit" page
        Then the user should be on the "direct producer landing" page
        Examples:
            | fileName               |
            | ProducerSmallValidFile |

    Scenario: Check File and Submit page - Basic User - file uploaded in the past, but not submitted yet
        When the user logs in as a "basic" user of "direct producer" with submission status "file uploaded"
        And the user selects the "Report packaging data" card as "Producer"
        Then the user should be on the "packaging data sub landing" page
        When the user chooses to report packaging data for the first period
        Then the user should be on the "file upload check file and submit" page
        And the title of the "file upload check file and submit" page should be correct for Basic User
        And the "File uploaded" table should have the corresponding title on the "file upload check file and submit" page
        And the link to "Go to your account homepage" is displayed on the "file upload check file and submit" page

    Scenario: Check and Submit page - validation
        When the user is logged in as a "Direct" Producer with "Approved" role
        Then the organisation id should be displayed on Direct producer Landing Page
        When the user selects the "Report packaging data" card as "Producer"
        And the user navigates to "Report packaging data" page as a "Producer"
        Then the user should be on the "report packaging data" page
        When the Producer user uploads a PoM data CSV file with a name <fileName>
        Then the user should be on the "file upload check file and submit" page
        When the user clicks the "continue" button on the "check and submit" page
        Then the error message should be displayed on the "check and submit" page
        Examples:
            | fileName               |
            | ProducerSmallValidFile |