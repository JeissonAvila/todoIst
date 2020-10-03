Feature: Create, edit and delete a project into todoist
    As a logged user I want to create, edit and delete a project in todoist website

Scenario Outline: Crate project failed with wrong inputs

  Given I am a user logged in todoist website
    When I go to home page
    And I go to Add Project
    And I fill project info with <name>, <color>, <favorite> and <view>
    Then I expect to see Add button disabled

    Examples:
      | name | color | favorite | view  |
      |      | Green | True     | List  |
      |      | Green | False    | Board |
      |      | Green | True     | List  |
      |      |       |          |       |


Scenario Outline: Crate project success with right inputs

  Given I am a user logged in todoist website
    When I go to home page
    And I go to Add Project
    And I fill project info with <name>, <color>, <favorite> and <view>
    And I try create the project with add button
    Then I expect to see the project created <project>

    Examples:
      | name          | color | favorite | view | project         |
      | Cucumber test | Green | True     | List | "Cucumber test" |

Scenario Outline: Edite project success with right inputs

  Given I am a user logged in todoist website
    When I go to home page
    And I go to edit Project <name>
    And I fill project info with <editname>, <color>, <favorite> and <view>
    And I try create the project with add button
    Then I expect to see the project created <project>

    Examples:
      | name          | editname         | color | favorite | view | project            |
      | Cucumber test | Cucumber Editado | Green | False    | List | "Cucumber Editado" |

Scenario Outline: Delete project success with right inputs

  Given I am a user logged in todoist website
    When I go to home page
    And I go to delete Project <name>
    And I confirm delete project with Delete button <name>
    Then I dont expect to see the project created <project>

    Examples:
      | name             | project            |
      | Cucumber Editado | "Cucumber Editado" |