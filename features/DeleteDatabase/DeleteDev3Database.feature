@DeleteDev3Database
Feature: Accept Requests on Enrolment Requests Page
  As a Regulator,
  I want to ensure that when I am on Enrolment Requests page,
  I should be able to accept a submission

  Scenario: Open Regulator account page
    Given init common scenario context
    And the user "remove" data in the database