@ProducerOrganisationDataUpload
Feature: The user can see the submission status for the particular submission period
    As a Direct Producer, I want to see the status of the particular submission

    Background: Open report data page
        Given init common scenario context
        And the registered user is on the "report data" page

    Scenario: Submission status - NOT STARTED
        When the user logs in as an "approved" user of "direct producer" with submission status "not started"
        And the user selects the "Report organisation details" card as "Producer"
        Then the submission status for the first submission period should be "not started"

    Scenario: Submission status - FILE UPLOADED
        When the user logs in as an "approved" user of "direct producer" with submission status "file uploaded"
        And the user selects the "Report organisation details" card as "Producer"
        Then the submission status for the first submission period should be "file uploaded"

    Scenario: Submission status - SUBMITTED TO REGULATOR
        When the user logs in as an "approved" user of "direct producer" with submission status "submitted to regulator"
        And the user selects the "Report organisation details" card as "Producer"
        Then the submission status for the first submission period should be "submitted to regulator"

    Scenario: Submission status - CANNOT START YET
        When the user logs in as an "approved" user of "direct producer" with submission status "submitted to regulator"
        And the user selects the "Report organisation details" card as "Producer"
        Then the submission status for the second submission period for "Organisation details" should be "cannot start yet"