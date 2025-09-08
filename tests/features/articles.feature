@articles
Feature: Articles
    @requiresLogin
    Scenario: Create a new article
        Given the user is logged in
        When the user creates a new article with valid details
        Then the article should be successfully created and displayed