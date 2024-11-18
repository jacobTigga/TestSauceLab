# features/login.feature

Feature: Login functionality

  Scenario: Successful login with valid credentials
    Given I open the app
    When I enter the username "<Username>"
    And I enter the password "<Password>"
    And I click on login button
    Then I should see the home screen
    Then I logout the app

  Examples:
  | Username       | Password          |
  | standard_user  | secret_sauce      |

  Scenario: Login error with invalid credentials
    Given I open the app
    When I enter the username "<Username>"
    And I enter the password "<Password>"
    And I click on login button
    Then I should see the error message for invalid credentials

  Examples:
  | Username         | Password          |
  | locked_out_user  | secret_sauce      |