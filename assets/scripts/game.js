// your JS code goes here
// let board = [
//   ['', '', ''],
//   ['', '', ''],
//   ['', '', '']
// ]

// let squares = ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9']

// 1 2 3
// 4 5 6
// 7 8 9

// const square = document.getElementsByTagName('td')
// console.log(square)

const userOne = 'X'
const userTwo = 'O'
let currentUser = userTwo
let winner = ''

const playerMoves = $('.col1, .col2, .col3').click(function (square) {
  checkWinner()
  if (winner === '' && square.target.innerHTML === '') {
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
    // console.log(winner)
  } else if (sq(4) !== '' && sq(4) === sq(5) && sq(5) === sq(6)) {
    message(`Congratulations, ${sq(4)}! You win!`)
  } else if (sq(7) !== '' && sq(7) === sq(8) && sq(8) === sq(9)) {
    message(`Congratulations, ${sq(1)}! You win!`)
    // for vertical rows
  } else if (sq(1) !== '' && sq(1) === sq(4) && sq(4) === sq(7)) {
    message(`Congratulations, ${sq(1)}! You win!`)
  } else if (sq(2) !== '' && sq(2) === sq(5) && sq(5) === sq(8)) {
    message(`Congratulations, ${sq(2)}! You win!`)
  } else if (sq(3) !== '' && sq(3) === sq(6) && sq(6) === sq(9)) {
    message(`Congratulations, ${sq(3)}! You win!`)
    // for diagonals
  } else if (sq(1) !== '' && sq(1) === sq(5) && sq(5) === sq(9)) {
    message(`Congratulations, ${sq(1)}! You win!`)
  } else if (sq(7) !== '' && sq(7) === sq(5) && sq(5) === sq(3)) {
    message(`Congratulations, ${sq(7)}! You win!`)
  } else {
    message(`No winner`)
  }
}

const message = function (msg) {
  document.getElementById('message').innerText = msg
}

// const end = function () {
//   if (checkWinner !== 'no winner') {
//     console.log('no go')
//   }
// }
// ************************
// function to add win to score
// ************************

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
}
document.getElementById('reset').addEventListener('click', startGame)

// ************************
// exports
// ************************
module.exports = {
  playerMoves,
  startGame,
  clearBoard
}
