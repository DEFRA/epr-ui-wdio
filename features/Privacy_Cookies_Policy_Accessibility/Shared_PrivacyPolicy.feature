@SharedPrivacyPolicy
Feature: Shared Privacy policy functionality
    As a user who has logged in,
    I want to ensure that when I navigate to the shared Privacy Policy page,
    the content of the page is correct and I can navigate back

    Background: Open create account page
        Given init common scenario context

    Scenario: Navigate to shared Privacy Policy from create account
        And the registered user is on the "create account" page
        And the user logs in as an automation test user for: "Account Creation"
        Then the "Privacy" link should be displayed
        When the user clicks on the "Privacy" link
        Then the user should be on the "shared privacy policy" page
        And the content of the Shared "Privacy" policy page should be correct
        Then the back link should be displayed
        When the user clicks the back link
        Then the user should be on the "is a registered charity" page
 
    Scenario: Navigate to shared Privacy Policy from report data
        And the registered user is on the "report data" page
        And the user logs in as an approved user with admin
        Then the "Privacy" link should be displayed
        When the user clicks on the "Privacy" link
        Then the user should be on the "shared privacy policy" page
        And the content of the Shared "Privacy" policy page should be correct
        Then the back link should be displayed
        When the user clicks the back link
        Then the user should be on the "direct producer landing" page
 
    Scenario: Navigate to shared Privacy Policy from manage account
        And the registered user is on the "manage account" page
        And the user logs in as an approved user with admin
        Then the "Privacy" link should be displayed
        When the user clicks on the "Privacy" link
        Then the user should be on the "shared privacy policy" page
        And the content of the Shared "Privacy" policy page should be correct
        Then the back link should be displayed
        When the user clicks the back link
        Then the user should be on the "manage account" page
 
    # There scenarios are part of MVP1 for below Story Nos for validating the Accessibility statement link in the footer for English and Welsh
    # https://dev.azure.com/defragovuk/RWD-CPR-EPR4P-ADO/_workitems/edit/389616
    # https://dev.azure.com/defragovuk/RWD-CPR-EPR4P-ADO/_workitems/edit/386670
    # https://dev.azure.com/defragovuk/RWD-CPR-EPR4P-ADO/_workitems/edit/390473
 
    Scenario: Navigate to shared Privacy Policy from B2C Screen (Opened in new Tab)
        And the registered user is on the "report data" page
        Then the "Privacy" link should be displayed
        When the user clicks on the "Privacy" link
        Then the user should be on the "GOV.UK PROD privacy policy (English)" page in new Tab
 
    Scenario: Navigate to GOV.UK Privacy Policy from create account (Opened in new Tab)
        And the registered user is on the "create account" page
        And the user logs in as an automation test user for: "Account Creation"
        Then the "Privacy" link should be displayed
        When the user clicks on the "Privacy" link
        Then the user should be on the "GOV.UK PROD privacy policy (English)" page in new Tab
        And the user closes the "GOV.UK PROD privacy policy (English)" page and returns to main page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        And the user clicks on the "Privacy" link in the footer
        Then the user should be on the "GOV.UK PROD privacy policy (Welsh)" page in new Tab
        When the user closes the "GOV.UK PROD privacy policy (English)" page and returns to main page
        And the user clicks the "English" toggle        
        Then the user should be on the "is a registered charity" page
 
    Scenario: Navigate to GOV.UK Privacy Policy from manage account (Opened in new Tab)
        And the registered user is on the "manage account" page
        And the user logs in as a "Direct" Producer with "Approved" role
        Then the "Privacy" link should be displayed
        When the user clicks on the "Privacy" link
        Then the user should be on the "GOV.UK PROD privacy policy (English)" page in new Tab
        And the user closes the "GOV.UK PROD privacy policy (English)" page and returns to main page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        And the user clicks on the "Privacy" link in the footer
        Then the user should be on the "GOV.UK PROD privacy policy (Welsh)" page in new Tab
        When the user closes the "GOV.UK PROD privacy policy (English)" page and returns to main page
        And the user clicks the "English" toggle
        Then the user should be on the "manage account" page
 
    Scenario: Navigate to GOV.UK Privacy Policy from report data (Opened in new Tab)
        And the registered user is on the "report data" page
        And the user logs in as a "Direct" Producer with "Approved" role
        Then the "Privacy" link should be displayed
        When the user clicks on the "Privacy" link
        Then the user should be on the "GOV.UK PROD privacy policy (English)" page in new Tab
        And the user closes the "GOV.UK PROD privacy policy (English)" page and returns to main page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        And the user clicks on the "Privacy" link in the footer
        Then the user should be on the "GOV.UK PROD privacy policy (Welsh)" page in new Tab
        When the user closes the "GOV.UK PROD privacy policy (English)" page and returns to main page
        And the user clicks the "English" toggle
        Then the user should be on the "direct producer landing" page
 
    Scenario: Navigate to GOV.UK Privacy Policy from Regulator Home (Opened in new Tab)
        And the registered user is on the "regulators home" page
        And the user logs in as an automation test user for: "Regulator - SCO"
        Then the "Privacy" link should be displayed
        When the user clicks on the "Privacy" link
        Then the user should be on the "GOV.UK PROD privacy policy (English)" page in new Tab
        And the user closes the "GOV.UK PROD privacy policy (English)" page and returns to main page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        And the user clicks on the "Privacy" link in the footer
        Then the user should be on the "GOV.UK PROD privacy policy (Welsh)" page in new Tab
        When the user closes the "GOV.UK PROD privacy policy (English)" page and returns to main page
        And the user clicks the "English" toggle
        Then the page title should be correct for the "Regulators Home" page
 
 
    Scenario: Navigate to GOV.UK Privacy Policy from Obligation Checker(Large producer) (Opened in new Tab)
        And the registered user is on the "large producers public list" page
        Then the "Privacy" link should be displayed
        When the user clicks on the "Privacy" link
        Then the user should be on the "GOV.UK PROD privacy policy (English)" page in new Tab
        And the user closes the "GOV.UK PROD privacy policy (English)" page and returns to main page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        And the "Privacy" button should be displayed in the footer of "public list of large producers" page
        When the user clicks on the "Privacy" button in the footer of "public list of large producers" page
        Then the user should be on the "GOV.UK PROD privacy policy (Welsh)" page in new Tab
        When the user closes the "GOV.UK PROD privacy policy (English)" page and returns to main page
        And the user clicks the "English" toggle
        Then the user should be on the "public list of large producers" page