'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully')
  $('#message').css('background-color', 'green')
  console.log('signUpSuccess ran. Data is :', data)
}

const signInSuccess = function (data) {
  $('#message').text('Signed in successfully')
  $('#message').css('background-color', 'green')
  console.log('signInSuccess ran. Data is :', data)
  store.user = data.user
}

const changePassword = function (data) {
  $('#message').text('Password changed successfully')
  $('#message').css('background-color', 'green')
  console.log('changePassword ran. Data is :', data)
}

const signOutSuccess = function () {
  $('#message').text('Signed out successfully')
  $('#message').css('background-color', 'green')
  console.log('signOutSuccess ran, and has nothing to return')
  store.user = null
}

const failure = function (error) {
  $('#message').text('Error')
  $('#message').css('background-color', 'red')
  console.log('Failure ran. Error is :', error)
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  changePassword,
  signOutSuccess,
  failure
}
