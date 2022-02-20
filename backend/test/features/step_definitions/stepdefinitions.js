const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const login = require('../../../controllers/login.js');
const logout = require('../../../controllers/logout.js');


var errorMsg = "";
var confirmMsg = "";
var listDrinks = [];

/////////////////////////////////////////////////////////////////////////////
///////////////// Global STEPS //////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
Given('the user {string} with password {string} is logged into their account', function (string, string2) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Given('the following accounts exist in the system:', function (dataTable) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Given('the following drinks exist in the system:', function (dataTable) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('an error message {string} shall be raised', function (string) {
  assert.equal(errorMsg,string);
  // Write code here that turns the phrase above into concrete actions
});
/////////////////////////////////////////////////////////////////////////////
///////////////// CREATE ACCCOUNT ///////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

Given('the username {string} does not already exist', function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Given('the account with the username {string} and password {string} already exists', function (string, string2) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('I create a user account with username {string} and password {string}', function (string, string2) {           // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('the account shall have username {string} and password {string}', function (string, string2) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('I should be logged in as user {string}', function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('no new account shall be created', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

/////////////////////////////////////////////////////////////////////////////
///////////////// CREATE DRINK //////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

When('the user creates a new drink recipe with the name {string} and the ingredients {string}', function (string, string2) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('the new drink {string} is added to the system', function (string, dataTable) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

/////////////////////////////////////////////////////////////////////////////
///////////////// LOGIN /////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

When('the user logs in using {string} and {string}', function (string, string2) {
  try{
    var loginTest = login.login(string, string2);
    assert.equal(true, loginTest);
  }
  catch(err){
    errorMsg = err.message
  }
  // Write code here that turns the phrase above into concrete 
});

Then('the user shall be logged in', function () {
  // Write code here that turns the phrase above into concrete actions
  assert.notEqual(null, sessionStorage.getItem('status'));
});

Then('the user is not logged in', function () {
  // Write code here that turns the phrase above into concrete actions
  assert.equal(null, sessionStorage.getItem('status'));
});

/////////////////////////////////////////////////////////////////////////////
///////////////// LOGOUT ////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
When('the user logs out', function () {
  // Write code here that turns the phrase above into concrete actions
  var logoutTest = logout.logout();
  confirmMsg = logoutTest;
});

Then('the user is logged out of the system with a confirmation message {string}', function (string) {
  // Write code here that turns the phrase above into concrete actions
  assert.equal(null, sessionStorage.getItem('status'));
  assert.equal(string, confirmMsg);
});


/////////////////////////////////////////////////////////////////////////////
///////////////// SEARCH ////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

When('the user {string} provides the drink name {string}', function (string, string2) {
  try {
    let res = await AXIOS.get('/drinks/' + string2 + '/name', {
      user: string,
      rating: parseInt(string2)
    })
  } catch (error) {}
  listDrinks = res.data
});

When('the user {string} provides a list of ingredients {string}', function (string, string2) {
  try {
    let res = await AXIOS.get('/drinks/ingredients', {
      user: string,
      ingredients : string2.split(",")
    })
  } catch (error) {}
  listDrinks = res.data
});

When('the user {string} provides a list of tags {string}', function (string, string2) {
  try {
    let res = await AXIOS.get('/drinks/tags', {
      user: string,
      tags : string2.split(",")
    })
  } catch (error) {}
  listDrinks = res.data
});

When('the user {string} provides a like range of {string}', function (string, string2) { 
  try {
    let res = await AXIOS.get('/drinks/' + string +'/ra', {
      user: string,
      rating: parseInt(string2)
    })
  } catch (error) {}
  listDrinks = res.data
});

When('the user searches a drink made by {string}', function (string) {
  try {
    let res = await AXIOS.get('/drinks/' + string, {
      user: string
    })
  } catch (error) {}
  listDrinks = res.data
});

Then('the drink with name {string}, likes {string} shall be returned', function (string, string2) {
  assert.ok(listDrinks[0]['name'] === string && listDrinks[0]['rating'] === parseInt(string2));
});

Then('the list of drinks shall be {string}', function (string) {
  var resultList = string.split(",");
  var match = true;
  for(var i = 0; i < resultList.length; i++)
  {
    if (resultList[i] != listDrinks[i])
    {
      match = false;
      break;
    }
  }
  assert.ok(match);
});

/////////////////////////////////////////////////////////////////////////////
///////////////// UPDATE ACCOUNT ////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

When('the user inputs the old password {string}, inputs the new password {string} and confirms the new password {string}', function (string, string2, string3) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('the user inputs the wrong old password {string},inputs the new password {string} and confirms the new password {string}', function (string, string2, string3) {
            // Write code here that turns the phrase above into concrete actions
            return 'pending';
          });

Then('the user\'s new password is now {string} and a confirmation message {string} is raised', function (string, string2) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

/////////////////////////////////////////////////////////////////////////////
///////////////// UPDATE DRINK //////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

Given('the user {string} with password {string} is an admin', function (string, string2) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('the user {string} favourites the drink {string}', function (string, string2) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('the user changes the recipe\'s status', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('the user modifies the drink {string} by adding a new ingredient {string}', function (string, string2) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('the drink {string} shall be in the user {string}\'s catalogue', function (string, string2) {      
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('the new ingredient {string} shall be added to drink {string}', function (string, string2) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('there shall be {string} less drink recipe in the system', function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('the new ingredients list {string} shall be displayed', function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('the admin {string} deletes the drink {string}', function (string, string2) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('the user modifies the drink {string} by removing the ingredient {string}', function (string, string2) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('the ingredient {string} shall be removed from the drink {string}', function (string, string2) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('the drink {string} shall have {string} more like', function (string, string2) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('the recipe status shall be {string} and a confirmation message {string} shall be raised', function (string, string2) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('the new ingredient {string} shall not be added to drink {string}', function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

/////////////////////////////////////////////////////////////////////////////
///////////////// VIEW //////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

When('the user {string} requests to view the drinks in alphabetical order', function (string) {
  try {
    let res = await AXIOS.get('/drinks/a', {
      user: string
    })
  } catch (error) {}
  listDrinks = res.data
});

Then('the list of drinks is displayed in alphabetical order', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('the user {string} requests to view drinks by newest', function (string) {
  try {
    let res = await AXIOS.get('/drinks/n', {
      user: string
    })
  } catch (error) {}
  listDrinks = res.data
});

Then('the list of drinks is displayed in order of their creation', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('the user {string} requests to view drinks by their rating', function (string) {
  try {
    let res = await AXIOS.get('/drinks/r', {
      user: string
    })
  } catch (error) {}
  listDrinks = res.data
});

Then('the list of drinks is displayed in descending order of their rating', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Given('that the user {string} has favourited the drink {string}', function (string, string2) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});
When('the user requests to view their favourites', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('the drink {string} shall be displayed', function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('no drinks shall be displayed.', function () {
  assert.ok(listDrinks.length === 0);
});

When('the user {string} displays the list of custom drinks', function () {
  try {
    let res = await AXIOS.get('/drinks/' + string + '/custom', {
      user: string
    })
  } catch (error) {}
  listDrinks = res.data
});

Then('the custom drinks {string} with author {string} shall be displayed', function (string, string2) {        
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});