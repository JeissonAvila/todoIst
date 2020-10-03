Feature: Create account into todoist
    As an user I want to create myself account within todoist website

Scenario Outline: Crate account failed with wrong email

  Given I go to todoist home screen
    When I open the signup screen
    And I fill email info with <email>
    And I try to signup with email
    Then I expect to see signup <error>

    Examples:
      | email                    | error                                      |
      |                          | "Email isn't valid"                        |
      | likom79540@jalcemail.com | "Your email is already registered with us" |
      | likom79544@jalcemail     | "Email isn't valid"                        |


Scenario Outline: Crate account failed with wrong name and password

  Given I go to todoist home screen
    When I open the signup screen
    And I fill email info with <email>
    And I try to signup with email
    And I fill the rest info with <name> and <password>
    And I try to register
    Then I expect to see signup step two <error>

    Examples:
      | email                    | name             | password | error                                         |
      | likom79999@jalcemail.com |                  |          | "Full name can't be empty"                    |
      | likom79999@jalcemail.com | Fernando Pruebas | 12345    | "Password must be at least 8 characters long" |
      | likom79999@jalcemail.com |                  | Prueba12 | "Full name can't be empty"                    |
      | likom79999@jalcemail.com | Fernando Pruebas |          | "Password must be at least 8 characters long" |

Scenario Outline: Crate account success with right inputs

  Given I go to todoist home screen
    When I open the signup screen
    And I fill email info with <email>
    And I try to signup with email
    And I fill the rest info with <name> and <password>
    And I try to register
    Then I expect to see welcome page with <message>

    Examples:
      | email                    | name             | password | message        |
      | likom795501@jalcemail.com | Fernando Pruebas | Prueba12 | "Hi, Fernando" |