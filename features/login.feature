# features/login.feature

Feature: Login functionality

  Scenario: Successful login with valid credentials
    Given I open the app
    When I enter the username "standard_user"
    And I enter the password "secret_sauce"
    And I click on login button
    Then I should see the home screen
    Then I logout the app