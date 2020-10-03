var {Given} = require('cucumber');
var {When} = require('cucumber');
var {Then} = require('cucumber');
var {expect} = require('chai');

Given('I go to todoist home screen', () => {
  browser.url('/');
});

Given('I am a user logged in todoist website' , () => {
  if($('.top_bar_btn').isDisplayed()){
    $('#top_bar_inner > .left_control > :nth-child(2)').click();
    browser.pause(2000);
  }
  else{
    browser.url('/');
    $('a=Login').waitForExist(5000);
    $('a=Login').waitForDisplayed(5000);
    $('a=Login').click();
    var userInput = $('#email');
    userInput.click();
    userInput.keys('likom79540@jalcemail.com');

    var passwordInput = $('#password');
    passwordInput.click();
    passwordInput.keys('likom79540@jalcemail.com')

    $('button=Log in').click();
    $('.top_bar_btn').waitForExist(5000)
  }
});

When('I go to home page', () => {
  $('#top_bar_inner > .left_control > :nth-child(2)').click();
  browser.pause(2000);
});