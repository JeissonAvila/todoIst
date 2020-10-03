var {When} = require('cucumber');
var {Then} = require('cucumber');
var {expect} = require('chai');

When('I open the login screen', () => {
  $('a=Login').waitForExist(5000);
  $('a=Login').waitForDisplayed(5000);
  $('a=Login').click();
});

When('I try to login', () => {
  $('button=Log in').click();
});

When(/^I fill with (.*) and (.*)$/ , (user, password) => {

 var userInput = $('#email');
 userInput.click();
 userInput.keys(user);

 var passwordInput = $('#password');
 passwordInput.click();
 passwordInput.keys(password)
});

Then('I expect to see {string}', error => {
  $('.error_msg').waitForDisplayed(5000);
  var alertText = browser.$('.error_msg').getText();
  expect(alertText).to.include(error);
});

Then('I expect to see home button', () => {
	$('.top_bar_btn').waitForExist(5000)
});