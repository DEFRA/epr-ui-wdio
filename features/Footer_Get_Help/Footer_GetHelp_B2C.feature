@Footer_GetHelp
Feature: Footer - Display Get help details - B2C 
    As a user of the report pakaging data service
    I would like to easily access the EPR customer service contact details
    So that I have my issue resolved quickly

#Userstory 390003: This scenario is added to validate the customer service 
#contact details in the footer for B2C page. There is only one B2C page, so no need to check other screens.

Scenario: Display "Get help" details in B2C page
    Given init common scenario context
    And the registered user is on the "report data" page
    Then the user should see "Get help" details in the footer