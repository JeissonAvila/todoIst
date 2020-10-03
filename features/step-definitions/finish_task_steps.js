var {Given} = require('cucumber');
var {When} = require('cucumber');
var {Then} = require('cucumber');
var {expect} = require('chai');

When(/^I check the button task to completed it (.*)$/, (title) => {
    var sectionGroup = $('.section_list');
    sectionGroup.$(`div=${title}`).click();
    $('.reactist_modal_box').waitForExist(1000);
    var buttonGroup = $('.reactist_modal_box');
    buttonGroup.$('.item_checkbox').click();
    browser.pause(1000);
    $('.text_holder').waitForExist(2000);
    var textAlert = $('.text_holder').getText();
    expect(textAlert).to.include('1 task completed');
    $('.item_detail_close').click();
    browser.pause(1000);
});

When('I go to completed button list', () => {
    if (!$('.task_list_item--completed').isExisting()){
        $('.gear_icon').click();
        browser.pause(300);
        $('div=Show completed tasks').click();
        browser.pause(300);
    }
});

Then(/^I expect to see the task completed (.*)$/, (title) => {
    var listCompleted = $('.task_list_item--completed');
    var task = listCompleted.$(`div=${title}`).isExisting();
    expect(task).to.be.true;
});