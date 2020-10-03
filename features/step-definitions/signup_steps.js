var {Given} = require('cucumber');
var {When} = require('cucumber');
var {Then} = require('cucumber');
var {expect} = require('chai');

When('I open the signup screen', () =>{
  $('a=Signup').waitForExist(5000);
  $('a=Signup').waitForDisplayed(5000);
  $('a=Signup').click();
});

When(/^I fill email info with (.*)$/, (email) => {
  var emailInput = $('#email');
  emailInput.click();
  emailInput.keys(email);
});

When('I try to signup with email', () => {
  $('#step_one_submit').click();
  browser.pause(1000)
});

Then('I expect to see signup {string}', error => {
  browser.$('.error_msg').waitForExist(5000);
  var alertText = browser.$('.error_msg').getText();
  expect(alertText).to.include(error);
});

When(/^I fill the rest info with (.*) and (.*)$/, (username, password) => {
  $('#full_name').waitForExist(5000);
  var usernameInput = $('#full_name');
  usernameInput.click();
  usernameInput.keys(username);
 
  var passwordInput = $('#pwd');
  passwordInput.click();
  passwordInput.keys(password)

});

When('I try to register', () => {
  $('#step_two_submit').click();
  browser.pause(1000) 
});

Then('I expect to see signup step two {string}', error => {
  var exist = browser.$(`div=${error}`).waitForExist(1000);
  expect(exist).to.be.true;
});

Then('I expect to see welcome page with {string}', message => {
  browser.$('.tdo-title').waitForExist(5000);
  var welcomeMessage = $('.tdo-title').getText();
  expect(welcomeMessage).to.include(message);
});