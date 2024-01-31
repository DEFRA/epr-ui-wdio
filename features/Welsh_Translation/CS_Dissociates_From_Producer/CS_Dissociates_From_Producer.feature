@WelshTranslation
Feature: CS Dissociates From Producer functionality - Welsh Translation
    As a Welsh user for a compliance scheme,
    I want to be able to dissociate from a producer (if I have the correct permissions), using the Welsh language
    So that this producer is no longer linked to my compliance scheme

    Background: Set up scenario context
        Given init common scenario context
        And init CS Dissociates From Producers scenario context
        And the registered user is on the "report data" page
        And the user logs in as an "Approved" user of a Compliance Scheme operating in "England and Northern Ireland"
        And cookies are "Accepted"

    Scenario: Home compliance scheme landing page
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        Then the Welsh page H1 header should be correct for the "home compliance scheme" page
        And "Data ar gyfer Asiantaeth yr Amgylchedd" should be displayed as the heading within the tab

    Scenario: Scheme members page
        And the user clicks the "View and remove members" link
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        Then the Welsh page H1 header should be correct for the "scheme members" page

    Scenario: Member details page
        And the user clicks the "View and remove members" link
        And the user searches for an organisation: "KAINOS HEALTHCARE LTD"
        And the user clicks the "KAINOS HEALTHCARE LTD" organisation name link
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        Then the "Tynnu aelodau" link should be displayed

    Scenario: Reason for removal page
        And the user clicks the "View and remove members" link
        And the user searches for an organisation: "KAINOS HEALTHCARE LTD"
        And the user clicks the "KAINOS HEALTHCARE LTD" organisation name link
        And the user clicks the "Remove member" link
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        Then the Welsh page H1 header should be correct for the "reason for removal" page

    Scenario: Tell us more page
        And the user clicks the "View and remove members" link
        And the user searches for an organisation: "KAINOS HEALTHCARE LTD"
        And the user clicks the "KAINOS HEALTHCARE LTD" organisation name link    
        And the user clicks the "Remove member" link
        And the user selects the "It is no longer in operation" radio button as the reason for removal
        And the user clicks the "Continue" button
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        Then the Welsh page H1 header should be correct for the "tell us more" page

    Scenario: Confirm removal page
        And the user clicks the "View and remove members" link
        And the user searches for an organisation: "KAINOS HEALTHCARE LTD"
        And the user clicks the "KAINOS HEALTHCARE LTD" organisation name link    
        And the user clicks the "Remove member" link
        And the user selects the "It is now a subsidiary of another company" radio button as the reason for removal
        And the user clicks the "Continue" button
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        Then the Welsh page H1 header should be correct for the "confirm removal" page

    Scenario: Confirmation of removal page
        And the user clicks the "View and remove members" link
        And the user searches for an organisation: "KAINOS HEALTHCARE LTD"
        And the user clicks the "KAINOS HEALTHCARE LTD" organisation name link    
        And the user clicks the "Remove member" link
        And the user selects the "We’ve ended its membership with this scheme" radio button as the reason for removal
        And the user clicks the "Continue" button
        And the user selects the "Yes, remove this member" radio button when confirming removal
        And the user clicks the "Confirm" button
        And the "Welsh" toggle should be displayed
        When the user clicks the "Welsh" toggle
        Then the Welsh page H1 header should be correct for the "confirmation of removal" page
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