@CSDissociatesFromProducer
Feature: CS Dissociates From Producer functionality
    As a user for a compliance scheme,
    I want to be able to dissociate from a producer (if I have the correct permissions),
    So that this producer is no longer linked to my compliance scheme

    Background: Set up scenario context
        Given init common scenario context
        And init CS Dissociates From Producers scenario context

    # When it comes to testing that the correct emails are sent, need to ensure that both of the following scenarios are covered:
    #  - The nation that the CS belongs to is the same as the nation that the producer belongs to -> 1 email should be sent to the regulator for that nation.
    #  - The nation that the CS belongs to is different to the nation that the producer belongs to -> 2 emails should be sent: 1 email to the regulator for the nation that the CS belongs to and 1 email to the regulator for the nation that the producer belongs to.
    # Each of the above scenarios could be covered within the existing 3 scenarios below.

    Scenario: CS Approved user completes dissociates journey (Select "None of the above" for reason) - Limited Company
        And the registered user is on the "report data" page
        When the user logs in as an "Approved" user of a Compliance Scheme operating in "England and Northern Ireland"
        And cookies are "Accepted"
        And the Compliance Scheme account is linked to a certain number of members
        Then the "View and remove members" link should be displayed
        When the user clicks the "View and remove members" link
        Then the user should be on the "scheme members" page
        And the Compliance Scheme account should be linked to "the same number of members as was displayed on the home page" on the "scheme members" page
        When the user searches for an organisation: "KAINOS HEALTHCARE LTD"
        Then 1 organisation is displayed
        When the user clicks the "KAINOS HEALTHCARE LTD" organisation name link
        Then the user should be on the "member details" page
        And the "Companies House number" field should be displayed
        And the "Remove member" link should be displayed
        When the user clicks the "Remove member" link
        Then the user should be on the "reason for removal" page
        When the user selects the "None of the above" radio button as the reason for removal
        And the user clicks the "Continue" button
        Then the user should be on the "tell us more" page
        When the user enters more information about why they are removing this member: "More info"
        And the user clicks the "Continue" button
        Then the user should be on the "confirm removal" page
        When the user selects the "Yes, remove this member" radio button when confirming removal
        And the user clicks the "Confirm" button
        Then the user should be on the "confirmation of removal" page
        # +------------------------------------------------------------------------------------------------------------------------------------------------------------+
        # | Need to add some steps here to check that the required emails have been sent to the relevant people, etc...                                                |
        # |  - And email(s) should be sent to the relevant approved and delegated user(s) associated with the producer organisation informing them of the dissociation |
        # |  - And email(s) should be sent to the relevant regulator(s) informing them of the dissociation                                                             |
        # +------------------------------------------------------------------------------------------------------------------------------------------------------------+
        When the user clicks the "return to view all scheme members" link
        Then the user should be on the "scheme members" page
        And the Compliance Scheme account should be linked to "1 less member than was displayed on the home page" on the "scheme members" page
        And the last updated date on the "scheme members" page should be the current date
        When the user clicks the home back link
        Then the user should be on the "home compliance scheme" page
        And the Compliance Scheme account should be linked to "1 less member than was displayed on the home page" on the "home compliance scheme" page
        And the last updated date on the "home compliance scheme" page should be the current date
        And the user signs out

        # After scenario for re-associating producer with compliance scheme again so the test is repeatable:
        And the registered user is on the "report data" page
        When the user logs in as a "Limited Company" producer who has been dissociated from a compliance scheme
        Then the user should be on the "direct producer landing" page
        When the user navigates to the add compliance scheme page
        And the user selects "Yes" on the add compliance scheme page
        And the user selects "Comply with Clarity" as the compliance scheme
        And the user clicks the "Confirm" button
        Then the user should be on the "manage compliance scheme" page

    Scenario: CS Delegated user completes dissociates journey (Select "It is no longer in operation" for reason) - Non-Companies House Company
        And the registered user is on the "report data" page
        When the user logs in as a "Delegated" user of a Compliance Scheme operating in "England and Northern Ireland"
        And cookies are "Accepted"
        And the Compliance Scheme account is linked to a certain number of members
        Then the "View and remove members" link should be displayed
        When the user clicks the "View and remove members" link
        Then the user should be on the "scheme members" page
        And the Compliance Scheme account should be linked to "the same number of members as was displayed on the home page" on the "scheme members" page
        When the user searches for an organisation: "Toy Shop"
        Then 1 organisation is displayed
        When the user clicks the "Toy Shop" organisation name link
        Then the user should be on the "member details" page
        And the "Type of organisation" field should be displayed
        And the "Remove member" link should be displayed
        When the user clicks the "Remove member" link
        Then the user should be on the "reason for removal" page
        When the user selects the "It is no longer in operation" radio button as the reason for removal
        And the user clicks the "Continue" button
        Then the user should be on the "tell us more" page
        When the user enters more information about why they are removing this member: "More info"
        And the user clicks the "Continue" button
        Then the user should be on the "confirm removal" page
        When the user selects the "Yes, remove this member" radio button when confirming removal
        And the user clicks the "Confirm" button
        Then the user should be on the "confirmation of removal" page
        # +------------------------------------------------------------------------------------------------------------------------------------------------------------+
        # | Need to add some steps here to check that the required emails have been sent to the relevant people, etc...                                                |
        # |  - And email(s) should be sent to the relevant approved and delegated user(s) associated with the producer organisation informing them of the dissociation |
        # |  - And email(s) should be sent to the relevant regulator(s) informing them of the dissociation                                                             |
        # +------------------------------------------------------------------------------------------------------------------------------------------------------------+
        When the user clicks the "return to view all scheme members" link
        Then the user should be on the "scheme members" page
        And the Compliance Scheme account should be linked to "1 less member than was displayed on the home page" on the "scheme members" page
        And the last updated date on the "scheme members" page should be the current date
        When the user clicks the home back link
        Then the user should be on the "home compliance scheme" page
        And the Compliance Scheme account should be linked to "1 less member than was displayed on the home page" on the "home compliance scheme" page
        And the last updated date on the "home compliance scheme" page should be the current date
        And the user signs out

        # After scenario for re-associating producer with compliance scheme again so the test is repeatable:
        And the registered user is on the "report data" page
        When the user logs in as a "Non-Companies House" producer who has been dissociated from a compliance scheme
        Then the user should be on the "direct producer landing" page
        When the user navigates to the add compliance scheme page
        And the user selects "Yes" on the add compliance scheme page
        And the user selects "Comply with Clarity" as the compliance scheme
        And the user clicks the "Confirm" button
        Then the user should be on the "manage compliance scheme" page

    Scenario: CS Approved user completes dissociates journey (Select any other reason) - Limited Company     
        And the registered user is on the "report data" page
        When the user logs in as an "Approved" user of a Compliance Scheme operating in "England and Northern Ireland"
        And cookies are "Accepted"
        And the Compliance Scheme account is linked to a certain number of members
        Then the "View and remove members" link should be displayed
        When the user clicks the "View and remove members" link
        Then the user should be on the "scheme members" page
        And the Compliance Scheme account should be linked to "the same number of members as was displayed on the home page" on the "scheme members" page
        When the user searches for an organisation: "KAINOS HEALTHCARE LTD"
        Then 1 organisation is displayed
        When the user clicks the "KAINOS HEALTHCARE LTD" organisation name link
        Then the user should be on the "member details" page
        And the "Companies House number" field should be displayed
        And the "Remove member" link should be displayed
        When the user clicks the "Remove member" link
        Then the user should be on the "reason for removal" page
        When the user selects the "It has gone into administration" radio button as the reason for removal
        And the user clicks the "Continue" button
        Then the user should be on the "confirm removal" page
        When the user selects the "Yes, remove this member" radio button when confirming removal
        And the user clicks the "Confirm" button
        Then the user should be on the "confirmation of removal" page
        # +------------------------------------------------------------------------------------------------------------------------------------------------------------+
        # | Need to add some steps here to check that the required emails have been sent to the relevant people, etc...                                                |
        # |  - And email(s) should be sent to the relevant approved and delegated user(s) associated with the producer organisation informing them of the dissociation |
        # |  - And email(s) should be sent to the relevant regulator(s) informing them of the dissociation                                                             |
        # +------------------------------------------------------------------------------------------------------------------------------------------------------------+
        When the user clicks the "return to view all scheme members" link
        Then the user should be on the "scheme members" page
        And the Compliance Scheme account should be linked to "1 less member than was displayed on the home page" on the "scheme members" page
        And the last updated date on the "scheme members" page should be the current date
        When the user clicks the home back link
        Then the user should be on the "home compliance scheme" page
        And the Compliance Scheme account should be linked to "1 less member than was displayed on the home page" on the "home compliance scheme" page
        And the last updated date on the "home compliance scheme" page should be the current date
        And the user signs out

        # After scenario for re-associating producer with compliance scheme again so the test is repeatable:
        And the registered user is on the "report data" page
        When the user logs in as a "Limited Company" producer who has been dissociated from a compliance scheme
        Then the user should be on the "direct producer landing" page
        When the user navigates to the add compliance scheme page
        And the user selects "Yes" on the add compliance scheme page
        And the user selects "Comply with Clarity" as the compliance scheme
        And the user clicks the "Confirm" button
        Then the user should be on the "manage compliance scheme" page

    Scenario: CS Delegated user cancels while completing dissociates journey (Select any other reason) - Limited Company
        And the registered user is on the "report data" page
        When the user logs in as a "Delegated" user of a Compliance Scheme operating in "England and Northern Ireland"
        And cookies are "Accepted"
        And the Compliance Scheme account is linked to a certain number of members
        Then the "View and remove members" link should be displayed
        When the user clicks the "View and remove members" link
        Then the user should be on the "scheme members" page
        And the Compliance Scheme account should be linked to "the same number of members as was displayed on the home page" on the "scheme members" page
        When the user searches for an organisation: "KAINOS HEALTHCARE LTD"
        Then 1 organisation is displayed
        When the user clicks the "KAINOS HEALTHCARE LTD" organisation name link
        Then the user should be on the "member details" page
        And the "Companies House number" field should be displayed
        And the "Remove member" link should be displayed
        When the user clicks the "Remove member" link
        Then the user should be on the "reason for removal" page
        When the user selects the "It has merged with another company" radio button as the reason for removal
        And the user clicks the "Continue" button
        Then the user should be on the "confirm removal" page
        When the user selects the "No, cancel" radio button when confirming removal
        And the user clicks the "Confirm" button
        Then the user should be on the "member details" page
        When the user clicks the back link
        Then the user should be on the "scheme members" page
        And the Compliance Scheme account should be linked to "the same number of members as was displayed on the home page" on the "scheme members" page
        When the user clicks the home back link
        Then the user should be on the "home compliance scheme" page
        And the Compliance Scheme account should be linked to "the same number of members as was displayed on the home page" on the "home compliance scheme" page

    Scenario: CS Admin user can only view member details and not dissociate them - Limited Company
        And the registered user is on the "report data" page
        When the user logs in as an "Admin" user of a Compliance Scheme operating in "England and Northern Ireland"
        And cookies are "Accepted"
        And the Compliance Scheme account is linked to a certain number of members
        Then the "View members" link should be displayed
        And the "View and remove members" link should not be displayed
        When the user clicks the "View members" link
        Then the user should be on the "scheme members" page
        And the Compliance Scheme account should be linked to "the same number of members as was displayed on the home page" on the "scheme members" page
        When the user searches for an organisation: "KAINOS HEALTHCARE LTD"
        Then 1 organisation is displayed
        When the user clicks the "KAINOS HEALTHCARE LTD" organisation name link
        Then the user should be on the "member details" page
        And the "Companies House number" field should be displayed
        And the "Remove member" link should not be displayed

    Scenario: CS Basic user can only view member details and not dissociate them - Non-Companies House Company
        And the registered user is on the "report data" page
        When the user logs in as a "Basic" user of a Compliance Scheme operating in "England and Northern Ireland"
        And cookies are "Accepted"
        And the Compliance Scheme account is linked to a certain number of members
        Then the "View members" link should be displayed
        And the "View and remove members" link should not be displayed
        When the user clicks the "View members" link
        Then the user should be on the "scheme members" page
        And the Compliance Scheme account should be linked to "the same number of members as was displayed on the home page" on the "scheme members" page
        When the user searches for an organisation: "Toy Shop"
        Then 1 organisation is displayed
        When the user clicks the "Toy Shop" organisation name link
        Then the user should be on the "member details" page
        And the "Type of organisation" field should be displayed
        And the "Remove member" link should not be displayed

    Scenario: Relevant heading displays when tab is clicked on the "home compliance scheme" page
        # Checking the English tab:
        And the registered user is on the "report data" page
        When the user logs in as an "Approved" user of a Compliance Scheme operating in "England and Northern Ireland"
        Then the "Comply with Clarity" tab should be displayed
        And the "Comply with Clarity (NIEA)" tab should be displayed
        And "Comply with Clarity" should be displayed above the heading within the tab
        And "Data for the Environment Agency" should be displayed as the heading within the tab
        
        # Checking the Northern Irish tab:
        When the user clicks the "Comply with Clarity (NIEA)" tab
        Then "Comply with Clarity (NIEA)" should be displayed above the heading within the tab
        And "Data for the Northern Ireland Environment Agency" should be displayed as the heading within the tab
        And the user signs out

        # Checking the Welsh tab:
        And the registered user is on the "report data" page
        When the user logs in as an "Approved" user of a Compliance Scheme operating in "Wales"
        Then the "Recycle Wales (NRW)" tab should be displayed
        And "Recycle Wales (NRW)" should be displayed above the heading within the tab
        And "Data for Natural Resources Wales" should be displayed as the heading within the tab
        And the user signs out

        # Checking the Scottish tab:
        And the registered user is on the "report data" page
        When the user logs in as an "Approved" user of a Compliance Scheme operating in "Scotland"
        Then the "Veolia (SEPA)" tab should be displayed
        And "Veolia (SEPA)" should be displayed above the heading within the tab
        And "Data for the Scottish Environment Protection Agency" should be displayed as the heading within the tab

    Scenario: Correct content displayed when CS is not linked to any producers
        And the registered user is on the "report data" page
        When the user logs in as an "Approved" user of a Compliance Scheme operating in "England and Northern Ireland"
        And the user clicks the "Comply with Clarity (NIEA)" tab
        Then the Compliance Scheme account should be linked to "0 members" on the "home compliance scheme" page
        And the following content should be displayed underneath the number of linked members: "When a member selects your compliance scheme in their ‘report packaging data’ account we’ll link them to your account."