Feature: Finish a task into todoist to see in completed task list
    As a logged user I want to create and finish a task in todoist website

Scenario Outline: Crate and finish task

  Given I am a user logged in todoist website
    When I go to home page
    And I go to Project <project>
    And I create a new task
    And I fill the task info with <name> and <shedule>
    And I try create the task
    And I check the button task to completed it <title>
    And I go to completed button list
    Then I expect to see the task completed <title>

    Examples:
      | project         | name          | shedule  | title           |
      | Testing Project | Cucumber test | Tomorrow | Cucumber test   |