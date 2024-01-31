@ProducerPoMDataUpload
Feature: Direct Producer - Re-upload PoM data

    Background: Open report data page
        Given init common scenario context
        And init Landing Pages scenario context
        And init PoM Data Upload scenario context
        And the registered user is on the "report data" page
        And the user is logged in as a "Direct" Producer with "Approved" role
        And cookies "Accept" button should display
        And cookies are "Accepted"

    Scenario Outline: Re-upload PoM data file
        Then the organisation id should be displayed on Direct producer Landing Page
        When the user selects the "Report packaging data" card as "Producer"
        And the user navigates to "Report packaging data" page as a "Producer"
        Then the user should be on the "report packaging data" page
        When the Producer user uploads a PoM data CSV file with a name <fileName>
        Then the user should be on the "file upload check file and submit" page
        And the <fileName> file should be in the "File you're submitting" table on the "check and submit" page
        And the uploaded date should be correct in the "File you're submitting" table on the "check and submit" page
        And the file in the "File you're submitting" table should be uploaded by the current user on the "check and submit" page
        And the url is saved in the scenario context
        And the link to change files uploaded should be displayed on the "check and submit" page
        When the user selects to change files uploaded on the "check and submit" page
        Then the user should be on the "report packaging data" page
        When the Producer user uploads a PoM data CSV file with a name <fileName>
        Then the user should be on the "file upload check file and submit" page
        And the submission id is used from the previous upload
        Examples:
            | fileName               |
            | ProducerSmallValidFile |