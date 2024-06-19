@SharedPrivacyPolicy
Feature: Shared Accessibility Statement functionality
    As a user who is on a RPD B2C screen
    user clicks on Accessibility statement link
    I want to ensure that a new tab is opened and correct URL is displayed for Accessibility statement page,
 
    Background: Open create account page
        Given init common scenario context
 
 
 # There scenarios are part of MVP1 for below Story Nos for validating the Accessibility statement link in the footer for English and Welsh
    # https://dev.azure.com/defragovuk/RWD-CPR-EPR4P-ADO/_workitems/edit/389616
    # https://dev.azure.com/defragovuk/RWD-CPR-EPR4P-ADO/_workitems/edit/386670
    # https://dev.azure.com/defragovuk/RWD-CPR-EPR4P-ADO/_workitems/edit/390473
   
    Scenario: Navigate to shared Accessibility Statement from B2C Screen
            And the registered user is on the "report data" page
        Then the "Accessibility statement" link should be displayed
        When the user clicks on the "Accessibility statement" link
        Then the user should be on the "GOV.UK PROD Accessibility Statement (English)" page in new Tab
 
    Scenario: Navigate to GOV.UK Accessibility statement page from create account (Opened in new Tab)
            And the registered user is on the "create account" page
            And the user logs in as an automation test user for: "Account Creation"
        Then the "Accessibility statement" link should be displayed
        When the user clicks on the "Accessibility statement" link
        Then the user should be on the "GOV.UK PROD Accessibility Statement (English)" page in new Tab
        And the user closes the "GOV.UK PROD Accessibility Statement (English)" page and returns to main page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        And the user clicks on the "Accessibility statement" link in the footer
        Then the user should be on the "GOV.UK PROD Accessibility Statement (Welsh)" page in new Tab
        When the user closes the "GOV.UK PROD Accessibility Statement (Welsh)" page and returns to main page
        And the user clicks the "English" toggle        
        Then the user should be on the "is a registered charity" page
 
    Scenario: Navigate to GOV.UK Accessibility statement from manage account (Opened in new Tab)
            And the registered user is on the "manage account" page
            And the user logs in as a "Direct" Producer with "Approved" role
        Then the "Accessibility statement" link should be displayed
        When the user clicks on the "Accessibility statement" link
        Then the user should be on the "GOV.UK PROD Accessibility Statement (English)" page in new Tab
        And the user closes the "GOV.UK PROD Accessibility Statement (English)" page and returns to main page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        And the user clicks on the "Accessibility statement" link in the footer
        Then the user should be on the "GOV.UK PROD Accessibility Statement (Welsh)" page in new Tab
        When the user closes the "GOV.UK PROD Accessibility Statement (Welsh)" page and returns to main page
        And the user clicks the "English" toggle        
        Then the user should be on the "manage account" page
 
    Scenario: Navigate to GOV.UK Accessibility statement from report data (Opened in new Tab)
        And the registered user is on the "report data" page
        And the user logs in as a "Direct" Producer with "Approved" role
        Then the "Accessibility statement" link should be displayed
        When the user clicks on the "Accessibility statement" link
        Then the user should be on the "GOV.UK PROD Accessibility Statement (English)" page in new Tab
        And the user closes the "GOV.UK PROD Accessibility Statement (English)" page and returns to main page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        And the user clicks on the "Accessibility statement" link in the footer
        Then the user should be on the "GOV.UK PROD Accessibility Statement (Welsh)" page in new Tab
        When the user closes the "GOV.UK PROD Accessibility Statement (Welsh)" page and returns to main page
        And the user clicks the "English" toggle        
        Then the user should be on the "direct producer landing" page        
 
    Scenario: Navigate to GOV.UK Accessibility statement from Regulator Home (Opened in new Tab)
            And the registered user is on the "regulators home" page
            And the user logs in as an automation test user for: "Regulator - SCO"
        Then the "Accessibility statement" link should be displayed
        When the user clicks on the "Accessibility statement" link
        Then the user should be on the "GOV.UK PROD Accessibility Statement (English)" page in new Tab
        And the user closes the "GOV.UK PROD Accessibility Statement (English)" page and returns to main page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        And the user clicks on the "Accessibility statement" link in the footer
        Then the user should be on the "GOV.UK PROD Accessibility Statement (Welsh)" page in new Tab
        When the user closes the "GOV.UK PROD Accessibility Statement (Welsh)" page and returns to main page
        And the user clicks the "English" toggle        
        Then the page title should be correct for the "Regulators Home" page
 
    Scenario: Navigate to GOV.UK Accessibility statement from Obligation Checker(Large producer) (Opened in new Tab)
            And the registered user is on the "large producers public list" page
        Then the "Accessibility statement" link should be displayed
        When the user clicks on the "Accessibility statement" link
        Then the user should be on the "GOV.UK PROD Accessibility Statement (English)" page in new Tab
        And the user closes the "GOV.UK PROD Accessibility Statement (English)" page and returns to main page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        And the user clicks on the "Accessibility statement" link in the footer
        Then the user should be on the "GOV.UK PROD Accessibility Statement (Welsh)" page in new Tab
        When the user closes the "GOV.UK PROD Accessibility Statement (Welsh)" page and returns to main page
        And the user clicks the "English" toggle        
        Then the user should be on the "public list of large producers" page