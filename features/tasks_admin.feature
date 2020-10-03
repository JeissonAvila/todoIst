Feature: Create, edit and delete a task into todoist
    As a logged user I want to create, edit and delete a task in todoist website

Scenario Outline: Crate task failed with wrong inputs

  Given I am a user logged in todoist website
    When I go to home page
    And I go to Project <project>
    And I create a new task
    And I fill the task info with <name> and <shedule>
    Then I expect to see Add task button disabled

    Examples:
      | project         | name | shedule |
      | Testing Project |      |         |
      | Testing Project |      | Today   |

Scenario Outline: Crate task success with right inputs

  Given I am a user logged in todoist website
    When I go to home page
    And I go to Project <project>
    And I create a new task
    And I fill the task info with <name> and <shedule>
    And I try create the task
    Then I expect to see the task created <title>

    Examples:
      | project         | name          | shedule  | title           |
      | Testing Project | Cucumber test | Tomorrow | Cucumber test   |

Scenario Outline: Edit task success with right inputs

  Given I am a user logged in todoist website
    When I go to home page
    And I go to Project <project>
    And I go to task <task>
    And I fill the task info with <editname> and <shedule>
    And I try create the task
    Then I expect to see the task created <title>

    Examples:
      | project         | task          | editname  | shedule  | title     |
      | Testing Project | Cucumber test | Edit Task | Today    | Edit Task |

Scenario Outline: Delete task success with right inputs

  Given I am a user logged in todoist website
    When I go to home page
    And I go to Project <project>
    And I go to delete task <name>
    And I confirm delete task with Delete button <name>
    Then I dont expect to see the task created <task>

    Examples:
      | project         | name      | task      |
      | Testing Project | Edit Task | Edit Task |