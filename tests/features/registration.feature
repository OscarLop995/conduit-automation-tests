@register
Feature: User Registration
    Scenario: Successful registration
        Given the user is trying to register with valid info
        When the user submits the registration form
        Then the user should be redirected to the homepage
        And should be able to see their username displayed

    Scenario: Registration with existing username
        Given the user is trying to register with an existing username
        When the user submits the registration form
        Then the user should see an error message indicating the username is already taken