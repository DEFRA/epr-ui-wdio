@ManageOrganisations
Feature: Regulator - Invite new user/existing user to be an approved person
  As an Admin for a Regulator,
  I want to see invite new user/existing user to be an approved person
  So that I can change the user who can submit the Pom file

  Background: Open Regulator account page
    Given init common scenario context
    And init Add New Approved Person scenario context
    And the registered user is on the "regulators home" page
    And the user logs in as an automation test user for: "Regulator - SCO"
    And cookies are "Accepted"

   Scenario: ADO - 249756 AC 1 - Regulator inviting a new user to be an approved person after removing the existing AP
     When the user clicks on "org and their approved person" link and search for "UK TEST LIMITED" organisation
    And the user "removes the existing approved person" on cake place company details page
    And the user answers "true" to organisation nominated a new approved person question
    And the user selects the option "someone new" as an approved person for the "existing journey"
    And the user enters "firstname" "lastname" "swetha.palreddy.external+newap-existingjour@atos.net" and confirms the answers
  
  # #  Then the "Account permissions have changed" page should be displayed


  Scenario: ADO - 249756 AC 2 - Regulator inviting a new user to be an approved person as a part of the new journey 
      When the user clicks on "org and their approved person" link and search for "EXAMPLE 1 LIMITED" organisation
      And the user "Nominate New Approved Person" on cake place company details page
      And the user selects the option "someone new" as an approved person for the "new journey"
      And the user enters "firstname" "lastname" "swetha.palreddy.external+newap@atos.net" and confirms the answers
  
  #  # Then the "Email sent to nominated approved person" page should be displayed



   Scenario: ADO - 249774 AC 1 - Regulator inviting a existing user to be an approved person after removing the existing AP
    # When the user clicks on "org and their approved person" link and search for "UK TEST LIMITED" organisation
    # And the user "removes the existing approved person" on cake place company details page
    # And the user answers "true" to organisation nominated a new approved person question
    # And the user selects the option "existing user" as an approved person for the "existing journey"
    # And the user confirms the answers as a part of the "existing journey"
    
  #  Then the "Account permissions have changed" page should be displayed


  Scenario: ADO - 249774 AC 2 - Regulator inviting a existing user to be an approved person as a part of the new journey 
      When the user clicks on "org and their approved person" link and search for "EXAMPLE 1 LIMITED" organisation
      And the user "Nominate New Approved Person" on cake place company details page
      And the user selects the option "existing user" as an approved person for the "new journey"
      And the user confirms the answers as a part of the "new journey"
      
  #  # Then the "Email sent to nominated approved person" page should be displayed


 


