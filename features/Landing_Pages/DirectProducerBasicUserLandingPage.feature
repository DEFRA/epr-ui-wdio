@LandingPages
Feature: Direct Producer Landing page functionality - Basic User
    As Producer, I want to ensure that if I login
    then the correct landing page and options are available for me

    Background: Open report data page
        Given init common scenario context
        And init Landing Pages scenario context
        And the registered user is on the "report data" page
        And the user logs in as a "Direct" Producer with "Basic" role

    Scenario: Landing page for the Direct Producer
        Then the user should be on the "direct producer landing" page
        And the organisation id should be displayed on Direct producer Landing Page
        And the button "add a compliance scheme to your account" should not be displayed
        And the "Report organisation details" card should display on the direct producer landing page
        And the "Report packaging data" card should display on the direct producer landing page
        And the "Waste management fee" card should display on the direct producer landing page
        And the "Packaging waste recovery notes" card should display on the direct producer landing page
