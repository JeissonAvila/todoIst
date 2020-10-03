var {Given} = require('cucumber');
var {When} = require('cucumber');
var {Then} = require('cucumber');
var {expect} = require('chai');

When('I go to Add Project', () => {
   browser.$('a=Add Project').click();
   browser.pause(1000); 
});

When(/^I fill project info with (.*), (.*), (.*) and (.*)$/, (name, color, favorite, view) => {
    $('.reactist_modal_box__header').waitForExist(2000);
    
    var nameInput = $('#edit_project_modal_field_name');
    nameInput.clearValue();
    nameInput.click();
    browser.pause(200);
    nameInput.keys(name);
    browser.pause(200);

    if(color != ""){
        var colorSelect = $('.color_dropdown_toggle');
        colorSelect.click({force: true});
        browser.pause(1000);
        $(`span=${color}`).click({force: true});
    }

    if(favorite == "True"){
        var favoriteCheck = $('input[name="is_favorite"]');
        favoriteCheck.click({force: true});
    }

    if(view == "Board"){
        var boardCheck = $('.edit_project_modal__board_preview');
        boardCheck.click({force: true});
    }
});

When('I try create the project with add button', () => {
    var buttonGroup = $('.reactist_modal_box__actions');
    buttonGroup.$('button[type="submit"').click();
    browser.pause(1000);
});

When(/^I go to edit Project (.*)$/, (project) => {
    var projectsGroup = browser.$('.collapse__wrapper_inner');
    projectsGroup.$(`span=${project}`).click({ button: 'right'});
    browser.pause(1000);
    $('div=Edit project').click();
    browser.pause(1000);
});

When(/^I go to delete Project (.*)$/, (project) => {
    var projectsGroup = browser.$('.collapse__wrapper_inner');
    projectsGroup.$(`span=${project}`).click({ button: 'right'});
    browser.pause(1000);
    $('div=Delete project').click();
    browser.pause(1000); 
});

When(/^I confirm delete project with Delete button (.*)$/, (name) => {
    var alertText = $('.delete_confirmation');
    var buttonGroup = $('.reactist_modal_box__actions');
    var alertInfo = alertText.$('span').getText();
    expect(alertInfo).to.include(name);
    buttonGroup.$('button[type="submit"').click();
    browser.pause(1000);
});

Then('I dont expect to see the project created {string}', (project) => {
    browser.pause(1000);
    var projectLabel = $(`span=${project}`).isExisting();
    expect(projectLabel).to.be.false;
});

Then ('I expect to see Add button disabled', () => {
    var validate = $('button[type="submit"').isEnabled();
    expect(validate).to.be.false;
    $('button=Cancel').click();
    browser.pause(1000);
});

Then ('I expect to see the project created {string}', (project) => {
    var validate = $('.simple_content').getText();
    expect(validate).to.include(project);
    browser.pause(1000);
});