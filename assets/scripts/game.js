// ************************
// variables
// ************************
const userOne = '🌛'
const userTwo = '🌞'
let currentUser = userTwo
let winner = ''
let scoreO = 0
let scoreX = 0
let executedScore = false

// ************************
// Game play
// ************************

const playerMoves = $('.col1, .col2, .col3').click(function (square) {
  if (winner === '' && square.target.innerHTML === '') {
    displayCurrentUser(currentUser)
    // console.log(square.target.innerHTML)
    // console.log(square.target.id)
    // console.log(square.target)
    // console.log(square)
    if (currentUser === userOne) {
      $(this).html(userTwo)
      currentUser = userTwo
    } else if (currentUser === userTwo) {
      $(this).html(userOne)
      currentUser = userOne
    }
    checkWinner()
    score(winner)
  }
})

// ************************
// function to determine winner
// ************************
const sq = function (number) {
  return document.getElementById('s' + number).innerText
}

const checkWinner = function () {
  for (let i = 1; i <= 9; i++) {
    sq(i)
    // for horizantal rows
  } if (sq(1) !== '' && sq(1) === sq(2) && sq(2) === sq(3)) {
    message(`Congratulations, ${sq(1)}! You win!`)
    winner = sq(1)
    console.log(winner)
  } else if (sq(4) !== '' && sq(4) === sq(5) && sq(5) === sq(6)) {
    message(`Congratulations, ${sq(4)}! You win!`)
    winner = sq(4)
  } else if (sq(7) !== '' && sq(7) === sq(8) && sq(8) === sq(9)) {
    message(`Congratulations, ${sq(7)}! You win!`)
    winner = sq(7)
    // for vertical rows
  } else if (sq(1) !== '' && sq(1) === sq(4) && sq(4) === sq(7)) {
    message(`Congratulations, ${sq(1)}! You win!`)
    winner = sq(1)
  } else if (sq(2) !== '' && sq(2) === sq(5) && sq(5) === sq(8)) {
    message(`Congratulations, ${sq(2)}! You win!`)
    winner = sq(2)
  } else if (sq(3) !== '' && sq(3) === sq(6) && sq(6) === sq(9)) {
    message(`Congratulations, ${sq(3)}! You win!`)
    winner = sq(3)
    // for diagonals
  } else if (sq(1) !== '' && sq(1) === sq(5) && sq(5) === sq(9)) {
    message(`Congratulations, ${sq(1)}! You win!`)
    winner = sq(1)
  } else if (sq(7) !== '' && sq(7) === sq(5) && sq(5) === sq(3)) {
    message(`Congratulations, ${sq(7)}! You win!`)
    winner = sq(7)
  } else {
    // message(`No winner`)
  }
}

// ************************
// functions to display text
// ************************
const message = function (msg) {
  document.getElementById('message').innerText = msg
}

const displayCurrentUser = function (currentUser) {
  document.getElementById('message').innerText = `${currentUser}, it's your turn!`
}
// need to figure out how to display tie
// const displayTie = function () {
//   document.getElementById('message').innerText = 'You tied'
// }

// ************************
// function to add win to score
// ************************
const score = function (winner) {
  if (!executedScore && winner === userOne) {
    scoreX++
    executedScore = true
  } else if (!executedScore && winner === userTwo) {
    scoreO++
    executedScore = true
  }
  document.getElementById('score').innerText = `${userOne}: ${scoreX} and ${userTwo}: ${scoreO}`
}

// ************************
// function to start game
// ************************
const startGame = function () {
  for (let i = 1; i <= 9; i = i + 1) {
    clearBoard(i)
  }
}

// ************************
// function to reset game
// ************************
const clearBoard = function (number) {
  document.getElementById('s' + number).innerText = ''
  winner = ''
  executedScore = false
  message('')
}
document.getElementById('newGame').addEventListener('click', startGame)

// ************************
// function to reset score
// ************************
const resetScore = function () {
  scoreX = 0
  scoreO = 0
  score()
}
document.getElementById('resetScore').addEventListener('click', resetScore)

// ************************
// exports
// ************************
module.exports = {
  playerMoves,
  startGame,
  clearBoard
}
