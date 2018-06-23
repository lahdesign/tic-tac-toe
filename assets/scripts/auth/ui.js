'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('userMessage').text('Signed up successfully')
  $('userMessage').css('background-color', 'green')
  console.log('signUpSuccess ran. Data is :', data)
}

const signInSuccess = function (data) {
  $('userMessage').text('Signed in successfully')
  $('userMessage').css('background-color', 'green')
  console.log('signInSuccess ran. Data is :', data)
  store.user = data.user
}

const changePassword = function (data) {
  $('userMessage').text('Password changed successfully')
  $('userMessage').css('background-color', 'green')
  console.log('changePassword ran. Data is :', data)
}

const signOutSuccess = function () {
  $('userMessage').text('Signed out successfully')
  $('userMessage').css('background-color', 'green')
  console.log('signOutSuccess ran, and has nothing to return')
  store.user = null
}

const failure = function (error) {
  $('userMessage').text('Error')
  $('userMessage').css('background-color', 'red')
  console.log('Failure ran. Error is :', error)
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  changePassword,
  signOutSuccess,
  failure
}
