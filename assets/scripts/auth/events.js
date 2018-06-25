'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const game = require('../game.js')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  // important to have event.preventDefault!!!!
  event.preventDefault()
  console.log('sign up ran!')

  const data = getFormFields(this)
  console.log('this is this: ', this)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.failure)
}

const onSignIn = function (event) {
  // important to have event.preventDefault!!!!
  event.preventDefault()
  console.log('sign in ran!')

  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.failure)
}

const onChangePassword = function (event) {
  // important to have event.preventDefault!!!!
  event.preventDefault()
  console.log('change password ran!')

  const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.failure)
}

const onSignOut = function (event) {
  // important to have event.preventDefault!!!!
  event.preventDefault()
  console.log('sign out ran!')

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.failure)
}

const onCreateGame = function (event) {
  event.preventDefault()
  game.startGame()

  api.createGame()
    .then(ui.createSuccess)
    .catch(ui.createSuccess)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#newGame').on('click', onCreateGame)
}

module.exports = {
  addHandlers
}
