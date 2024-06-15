@Footer_GetHelp
Feature: Footer - Display Get help details
    As a user of the report pakaging data service
            I would like to easily access the EPR customer service contact details
                So that I have my issue resolved quickly

    Background: Display "Get help" details in the footer
        Given init common scenario context

            #Userstory 390003: This scenario is added to validate the customer service
            #contact details in the footer for B2C page. There is only one B2C page, so no need to check other screens.

    Scenario: Display "Get help" details in B2C page
            And the registered user is on the "report data" page
        Then the user should see "Get help" details in the "B2C" footer


            #Userstory 386671: These scenario is added to validate the customer service
            #contact details in the footer for report-data, create-account, manage-account services.

    Scenario: Display "Get help" details  in report data home page
            And the registered user is on the "report data" page
            And the user logs in as a "Direct" Producer with "Approved" role
            And cookies "Accept" button should display
        Then the user should see "Get help" details in the "report data" footer

    Scenario: Display "Get help" details in create account page
        Given init common scenario context
            And the registered user is on the "create account" page
            And the user logs in as an automation test user for: "Account Creation"
            And cookies "Accept" button should display
        Then the user should see "Get help" details in the "create account" footer

    Scenario: Display "Get help" details in manage account page
        Given init common scenario context
            And the registered user is on the "manage account" page
            And the user logs in as a "Direct" Producer with "Approved" role
            And cookies "Accept" button should display
        Then the user should see "Get help" details in the "manage account" footer

    Scenario: Display "Get help" details in large producers
        Given the user is on the "large producers public list" page
        Then the user should be on the "public list of large producers" page
            And the user should see "Get help" details in the "large producers" footer

