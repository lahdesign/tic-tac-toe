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
let currentUser = userOne

const playerMoves = $('.col1, .col2, .col3').click(function (square) {
  if (square.target.innerHTML === '') {
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
//   checkWinner()
  sv()
})

// ************************
// function to determine winner
// ************************
// const checkWinner = function () {
//   if (sv(1) !== '' && sv(1) === sv(2) ) {
//     console.log('you win')
//   }
// }

const sq = function (number) {
  return document.getElementById('s' + number).innerText
}

// const winner = function () {
// //   if (sq(1) !== '' && sq(1) === sq(2) === sq(3)) {
// //     console.log('you win')
// //   }
//   if (areEqual(sq(1), sq(2), sq(3))) {
//     console.log('winner')
//   }
// }
const sv = function () {
  for (let i = 1; i <= 9; i++) {
    sq(i)
  } if (sq(1) !== '' && sq(1) === sq(2) && sq(2) === sq(3)) {
    console.log(`${sq(1)} wins`)
  } else if (sq(4) !== '' && sq(4) === sq(5) && sq(5) === sq(6)) {
    console.log(`${sq(4)} wins`)
  } else if (sq(7) !== '' && sq(7) === sq(8) && sq(8) === sq(9)) {
    console.log(`${sq(7)} wins`)
  } else {
    console.log('no winner')
  }
}
//   console.log(squares(1))
//   console.log(squares(2))
//   if (squares(1) === squares(2) === squares(3)) {
//     console.log('you win')
//   }
// }


// const checkWinner = function (move) {
//   let result = false
//   if (checkRow(1, 2, 3, move) ||
//       checkRow(4, 5, 6, move) ||
//       checkRow(7, 8, 9, move) ||
//       checkRow(1, 4, 7, move) ||
//       checkRow(2, 5, 8, move) ||
//       checkRow(3, 6, 9, move) ||
//       checkRow(1, 5, 9, move) ||
//       checkRow(3, 5, 7, move)) {

//     result = true;
//   }
//   return result;
// }

// function checkRow(a, b, c, move) {
//   var result = false
//   if (getBox(a) === move && getBox(b) === move && getBox(c) === move) {
//     result = true
//   }
//  return result
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
