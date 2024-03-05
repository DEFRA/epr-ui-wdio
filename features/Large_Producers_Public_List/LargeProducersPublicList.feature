@LargeProducersPublicList

Feature: Public list of large producers
    As a member of the public
    I want to be allowed to access the page and download reports for each nation or for all of them
    to find out which organisations have registered as large producers.

    Background: Open Public list of large producers page
        Given the user is on the "large producers public list" page

    Scenario: Public list of large producers - page
        Then the user should be on the "public list of large producers" page
        And the content should be correct on the "public list of large producers" page
        When the user clicks the "how to use public list" link on the "public list of large producers" page
        Then the "how to use public list" page should be opened from the "public list of large producers" page
        Given the user is on the "large producers public list" page
        Then the user should be on the "public list of large producers" page
        When the user clicks the "registered producers on NPWD" link on the "public list of large producers" page
        Then the "registered producers on NPWD" page should be opened from the "public list of large producers" page

    Scenario: Public list of large producers - navigate to Cookies page
        Then the user should be on the "public list of large producers" page
        And the "Cookies" button should be displayed in the footer of "public list of large producers" page
        When the user clicks on the "Cookies" button in the footer of "public list of large producers" page
        Then the user should be on the "Cookies of Large Producers" page
        And "Cookies page" title should be displayed on the "Cookies of Large Producers" page

    Scenario: Public list of large producers - navigate to Privacy page
        Then the user should be on the "public list of large producers" page
        And the "Privacy" button should be displayed in the footer of "public list of large producers" page
        When the user clicks on the "Privacy" button in the footer of "public list of large producers" page
        Then the user should be on the "Privacy of Large Producers" page
        And "Privacy notice" title should be displayed on the "Privacy of Large Producers" page

    Scenario: Public list of large producers - navigate to Accessibility statement page
        Then the user should be on the "public list of large producers" page
        And the "Accessibility" button should be displayed in the footer of "public list of large producers" page
        When the user clicks on the "Accessibility" button in the footer of "public list of large producers" page
        Then the user should be on the "Accessibility of Large Producers" page
        And "Accessibility statement" title should be displayed on the "Accessibility of Large Producers" page

    Scenario Outline: Download the reports for each nation and all nations and check headers
        Then the user should be on the "public list of large producers" page
        When the user clicks the large producers report for <nation> link
        Then the file for <nation> should be downloaded and the headers should be correct in the report
        Examples:
            | nation           |
            | England          |
            | Wales            |
            | Scotland         |
            | Northern Ireland |
            | all nations      |

    Scenario: Shared Cookies Banner state from large producers
        And cookies cleared from browser
        And the user is on the "large producers public list" page
        Then the cookies banner should be displayed, with header: "Cookies on “large producers on the ‘report packaging data’ service”"
        And cookies "Accept" button should display
        And cookies "Reject" button should display
        And the "View cookies" link should be displayed

    Scenario: Clicking accept button in Shared Cookies Banner on large producers
        And init Cookies scenario context
        And cookies cleared from browser
        And the user is on the "large producers public list" page
        And cookies are "Accepted"
        Then the cookies banner on large producers page should be displayed, with text: "You’ve accepted analytics cookies."
        And the Hide cookie message button should display
        When the Hide cookie message button is clicked
        Then the cookies banner should not be displayed

    Scenario: Clicking reject button in Shared Cookies Banner on large producers
        And init Cookies scenario context
        And cookies cleared from browser
        And the user is on the "large producers public list" page
        And cookies are "Rejected"
        Then the cookies banner on large producers page should be displayed, with text: "You’ve rejected analytics cookies."
        And the Hide cookie message button should display
        When the Hide cookie message button is clicked
        Then the cookies banner should not be displayed

    Scenario: Clicking View cookies link in Shared Cookies Banner on large producers
        And cookies cleared from browser
        And the user is on the "large producers public list" page
        And the "View cookies" link should be displayed
        When the user clicks on the "View cookies" link
        Then the user should be on the "shared cookies policy" page