var {Given} = require('cucumber');
var {When} = require('cucumber');
var {Then} = require('cucumber');
var {expect} = require('chai');

When(/^I go to Project (.*)$/, (project) => {
    var projectsGroup = browser.$('.collapse__wrapper_inner');
    projectsGroup.$(`span=${project}`).click();
    browser.pause(1000);
});

When ('I create a new task', () => {
    $('button=Add task').click();
});

When(/^I fill the task info with (.*) and (.*)$/, (name, shedule) => {
    $('.task_editor__editing_area').waitForExist(1000);
    
    var taskGroup = $('.task_editor__editing_area');
    
    var nameInput = taskGroup.$('.DraftEditor-editorContainer');
    var nameText = taskGroup.$('.DraftEditor-editorContainer').getText();
    nameInput.click();
    browser.pause(1000);
    if (nameText != ""){
        nameInput.keys(['Shift', 'Home']);
        // \uE008	"Shift"
        // \uE011	"Home"
    }
    browser.pause(200);
    nameInput.keys(name);
    browser.pause(2000);

    if(shedule != ""){
        taskGroup.$('.item_due_selector').click();
        $('.scheduler-suggestions').waitForExist(1000);
        var sheduleGroup = $('.scheduler-suggestions');
        sheduleGroup.$(`div=${shedule}`).click();
        browser.pause(200);
    }
});

When('I try create the task', () => {
    var buttonsGroup = $('.task_editor__form_actions');
    buttonsGroup.$('button[type="submit"').click();
    browser.pause(2000);
});

When(/^I go to task (.*)$/, (task) => {
    var tasksListGroup = $('.item_tree_list');
    tasksListGroup.$(`div=${task}`).click({button: 'right'});
    browser.pause(1000);
    var listGroup = $('.item_menu_list');
    listGroup.$('div=Edit task').click();
    browser.pause(1000);
});

When(/^I go to delete task (.*)$/, (task) => {
    var tasksListGroup = $('.item_tree_list');
    tasksListGroup.$(`div=${task}`).click({button: 'right'});
    browser.pause(1000);
    var listGroup = $('.item_menu_list');
    listGroup.$('div=Delete task').click();
    browser.pause(1000);
});

When(/^I confirm delete task with Delete button (.*)$/, (name) => {
    var alertText = $('.delete_confirmation');
    var buttonGroup = $('.reactist_modal_box__actions');
    var alertInfo = alertText.$('span').getText();
    expect(alertInfo).to.include(name);
    buttonGroup.$('button[type="submit"').click();
    browser.pause(1000);
});

Then ('I expect to see Add task button disabled', () => {
    var buttonsGroup = $('.task_editor__form_actions');
    var validate = buttonsGroup.$('button[type="submit"').isEnabled();
    expect(validate).to.be.false;
    buttonsGroup.$('button=Cancel').click();
    browser.pause(1000);
});

Then (/^I expect to see the task created (.*)$/, (title) => {
    var tasksListGroup = $('.item_tree_list');
    var validate = tasksListGroup.$(`div=${title}`).isExisting();
    expect(validate).to.be.true;
    browser.pause(1000);
});

Then (/^I dont expect to see the task created (.*)$/, (title) => {
    var tasksListGroup = $('.item_tree_list');
    var validate = tasksListGroup.$(`div=${title}`).isExisting();
    expect(validate).to.be.false;
    browser.pause(1000);
});