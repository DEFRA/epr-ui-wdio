@Footer_GetHelp
Feature: Footer - Display Get help details - Regulator Service
    As a user of the report pakaging data service
            I would like to easily access the EPR customer service contact details
                So that I have my issue resolved quickly

                #Userstory 386671,390473: This scenario is added to validate the customer service
                #contact details in the footer.

    Scenario: Scenario: Display "Get help" details in regulators page
        Given init common scenario context
            And the registered user is on the "regulators home" page
            And the user logs in as an automation test user for: "Regulator - SCO"
            And the registered user is on the "regulators home" page
        Then the user should see "Get help" details in the "regulators home" footer
            And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        Then the user should see "Get help" details in the "regulators home" footer


    Scenario: Scenario: Display "Get help" details in regulators manage account page
        Given init common scenario context
            And the registered user is on the "regulators home" page
            And the user logs in as an automation test user for: "Regulator - SCO"
            And the user clicks the "Manage your account" link
        Then the user should be on the "regulators manage account" page
            And the user should see "Get help" details in the "regulators service" footer
            And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        Then the user should see "Get help" details in the "regulators service" footer