Feature: Login into todoist
    As an user I want to authenticate myself within todoist website in order to create a project

Scenario Outline: Login failed with wrong inputs

  Given I go to todoist home screen
    When I open the login screen
    And I fill with <email> and <password>
    And I try to login
    Then I expect to see <error>

    Examples:
      | email                    | password | error                      |
      |                          |          | "Invalid email address."   |
      | likom79540@jalcemail.com |    1234  | "Wrong email or password." |
      | likom79540@jalcemail.com |          | "Blank password."          |
      |                          |    1234  | "Invalid email address."   |



Scenario Outline: Login success with right inputs

  Given I go to todoist home screen
    When I open the login screen
    And I fill with <email> and <password>
    And I try to login
    Then I expect to see home button

    Examples:
      | email                     | password                   |
      | likom79540@jalcemail.com  | likom79540@jalcemail.com   |