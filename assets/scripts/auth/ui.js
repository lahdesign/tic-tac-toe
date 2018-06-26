'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#userMessage').text('Signed up successfully')
  $('#userMessage').css('background-color', '888')
  console.log('signUpSuccess ran. Data is :', data)
}

const signInSuccess = function (data) {
  $('#userMessage').text('Signed in successfully')
  $('#userMessage').css('background-color', '888')
  // $('#sign-out').removeClass('hidden')
  // $('.userInfo').removeClass('hidden')
  $('.userButtons').css('display', 'block')
  $('.signInUp').css('display', 'none')
  // $('#moves').removeClass('hidden')
  // $('#getGames').removeClass('hidden')
  console.log('signInSuccess ran. Data is :', data)
  store.user = data.user
}

const changePassword = function (data) {
  $('#userMessage').text('Password changed successfully')
  $('#userMessage').css('background-color', '#888')
  console.log('changePassword ran. Data is :', data)
}

const signOutSuccess = function () {
  $('#userMessage').text('Signed out successfully')
  $('#userMessage').css('background-color', '888')
  $('.signInUp').css('display', 'block')
  $('#gameboard').css('display', 'none')
  $('.userButtons').css('display', 'none')
  $('.userInfo').css('display', 'none')
  console.log('signOutSuccess ran, and has nothing to return')
  store.user = null
}

const createSuccess = function (data) {
  $('#gameboard').css('display', 'block')
  console.log('new board created')
  store.game = data.game
  store.game.id = data.game.id
  console.log(store.game)
  console.log(store.game.id)
}

const movesSuccess = function () {
  console.log('moves')
}

const getGamesSuccess = function (data) {
  $('#view-games').css('display', 'block')
  for (let i = 0; i < data.games.length; i++) {
    $('#view-games').append('<p><b>ID:</b>' + data.games[i].id + '    <b>Game Squares</b>' + data.games[i].cells + '</p>')
    console.log(data.games[i])
  }
  console.log('old games')
}

const failure = function (error) {
  $('#userMessage').text('Error')
  $('#userMessage').css('background-color', 'red')
  console.log('Failure ran. Error is :', error)
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  changePassword,
  signOutSuccess,
  createSuccess,
  movesSuccess,
  getGamesSuccess,
  failure
}
