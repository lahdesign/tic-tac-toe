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

const gameValues = {
  i: 0,
  v: 0,
  isOver: false
}

// ************************
// Game play
// ************************
// let boardStorage = []

// const boardToArray = () => {
//   const tds = $('#theBoard td')
//   let count = 0
//   let tempTds = ''
//   for (let td = 0; td < tds.length; ++td) {
//     // Ternary conditions, making sure that the array will be able to have empty values(non-clicked cells in the board)
//     tds[td].innerHTML === '' ? (tempTds += ' ') : (tempTds += tds[td].innerHTML)
//     ++count // Counting to check everytime the loop increments to the given dimension

//     count === 9 // Ternary condition, if the counter is equal the dimension
//       ? (boardStorage.push(tempTds.split('')), tempTds = '', count = 0)
//       : count
//   }
//   console.log(boardStorage)
// }

const playerMoves = $('.col1, .col2, .col3').click(function (square) {
  if (winner === '' && square.target.innerHTML === '') {
    displayCurrentUser(currentUser)
    // console.log(square.target.innerHTML)
    // console.log(square.target)
    // console.log(square)
    // boardToArray(boardStorage)

    if (currentUser === userOne) {
      // console.log(square.target)
      $(this).html(userTwo)
      // gameValues = boardStorage
      // gameValues.v = currentUser
      // gameValues.i = square.target.id
      currentUser = userTwo
      gameValues.i = square.target.id
      // console.log(square.target.id)
      gameValues.v = userOne
      // console.log(gameValues.v)
      // boardStorage = []
    } else if (currentUser === userTwo) {
      // boardToArray()
      $(this).html(userOne)
      // gameValues.v = currentUser
      // gameValues.i = square.target.id
      currentUser = userOne
      // gameValues.i = boardStorage
      gameValues.i = square.target.id
      gameValues.v = userTwo
      // boardStorage = []
    }
    checkWinner()
    score(winner)
  }
})

// ************************
// function to determine winner
// // ************************
const sq = function (number) {
  return document.getElementById(number).innerText
}

const checkWinner = function () {
  for (let i = 0; i <= 8; i++) {
    let num = i.toString()
    sq(num)
    // for horizantal rows
  } if (sq(0) !== '' && sq(0) === sq(1) && sq(1) === sq(2)) {
    message(`Congratulations, ${sq(0)}! You win!`)
    winner = sq(0)
    gameValues.isOver = true
    console.log(winner)
  } else if (sq(3) !== '' && sq(3) === sq(4) && sq(4) === sq(5)) {
    message(`Congratulations, ${sq(4)}! You win!`)
    winner = sq(4)
    gameValues.isOver = true
  } else if (sq(6) !== '' && sq(6) === sq(7) && sq(7) === sq(8)) {
    message(`Congratulations, ${sq(7)}! You win!`)
    winner = sq(7)
    gameValues.isOver = true
    // for vertical rows
  } else if (sq(0) !== '' && sq(0) === sq(3) && sq(3) === sq(6)) {
    message(`Congratulations, ${sq(0)}! You win!`)
    winner = sq(0)
    gameValues.isOver = true
  } else if (sq(1) !== '' && sq(1) === sq(4) && sq(4) === sq(7)) {
    message(`Congratulations, ${sq(1)}! You win!`)
    winner = sq(1)
    gameValues.isOver = true
  } else if (sq(2) !== '' && sq(2) === sq(5) && sq(5) === sq(8)) {
    message(`Congratulations, ${sq(2)}! You win!`)
    winner = sq(2)
    gameValues.isOver = true
    // for diagonals
  } else if (sq(0) !== '' && sq(0) === sq(4) && sq(4) === sq(8)) {
    message(`Congratulations, ${sq(0)}! You win!`)
    winner = sq(0)
    gameValues.isOver = true
  } else if (sq(6) !== '' && sq(6) === sq(4) && sq(4) === sq(2)) {
    message(`Congratulations, ${sq(7)}! You win!`)
    winner = sq(6)
    gameValues.isOver = true
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
  for (let i = 0; i <= 8; i++) {
    let num = i.toString()
    clearBoard(num)
  }
}

// ************************
// function to reset game
// ************************
const clearBoard = function (number) {
  document.getElementById(number).innerText = ''
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
  // clearBoard,
  gameValues
  // boardStorage
}
