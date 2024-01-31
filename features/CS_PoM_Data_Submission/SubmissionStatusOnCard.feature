@CSPoMDataSubmission
Feature: The user can see the submission status for the particular submission period
    As a Compliance Scheme, I want to see the status of the particular submission

    Background: Open report data page
        Given init common scenario context
        And the registered user is on the "report data" page

    Scenario: Submission status - NOT STARTED
        When the user logs in as an "approved" user of "compliance scheme" with submission status "not started"
        And the user selects the "Report packaging data" card as "Compliance Scheme"
        Then the submission status for the first submission period should be "not started"

    Scenario: Submission status - FILE UPLOADED
        When the user logs in as an "approved" user of "compliance scheme" with submission status "file uploaded"
        And the user selects the "Report packaging data" card as "Compliance Scheme"
        Then the submission status for the first submission period should be "file uploaded"

    Scenario: Submission status - SUBMITTED TO REGULATOR
        When the user logs in as an "approved" user of "compliance scheme" with submission status "submitted to regulator"
        And the user selects the "Report packaging data" card as "Compliance Scheme"
        Then the submission status for the first submission period should be "submitted to regulator"

    Scenario: Submission status - CANNOT START YET
        When the user logs in as an "approved" user of "compliance scheme" with submission status "submitted to regulator"
        And the user selects the "Report packaging data" card as "Compliance Scheme"
        Then the submission status for the second submission period for "Packaging data" should be "cannot start yet"