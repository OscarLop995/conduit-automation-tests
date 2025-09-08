@login
Feature: User Login
     Scenario: Successful login
        Given the user is on the login page
        When the user submits valid credentials
        Then the user should be redirected to the homepage and see their username displayed
    @knownBug @skip
    Scenario: Unsuccesful login
        Given the user is on the login page
        When the user submits invalid credentials
        Then an error message should be displayed