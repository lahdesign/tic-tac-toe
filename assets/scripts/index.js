'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  // let board = ['', '', '', '', '', '', '', '', '']
  // let squares = ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9']

  // let x = 'x'

  document.getElementById('s1').innerHTML = 'X'
  let btn = document.getElementById('s1');
  btn.innerHTML = btn.innerHTML === "X" ? "O" : "X";

  // let gameDisplay = function (board, squares) {
  // }
  // gameDisplay()

  // *******************
  // boogle logic for ref
  // *******************
  // const board = ['x', 'o', 'x', 'o', 'o', 'x', 'x', 'o', 'x']
  // const coordinatePairs = [ [0, 0], [1, 1], [2, 2] ]

  // const boggle = function (board, coordinatePairs) {
  //   // step 1 - find letter for first coorinate
  //   const row0 = []
  //   const row1 = []
  //   const row2 = []
  //   // each row is length 4
  //   for (let i = 0; i < board.length; i++) {
  //     if (i >= 0 && i <= 3) {
  //       // on row 0
  //       row0.push(board[i])
  //     } else if (i > 3 && i <= 7) {
  //       // on row 1
  //       row1.push(board[i])
  //     } else {
  //       // on row 1
  //       row2.push(board[i])
  //     }
  //   }
  //   const rows = [row0, row1, row2]
  //   const word = []
  //   for (let i = 0; i < coordinatePairs.length; i++) {
  //     const coordPair = coordinatePairs[i] // when i = 0, [0,0], when i = 1, [1,1]....
  //     /// get correct row
  //     const row = rows[coordPair[0]]
  //     // get correct column
  //     const letter = row[coordPair[1]]
  //     word.push(letter)
  //   }
  //   const finalWord = word.join('')
  //   return finalWord
  // }
  // console.log(boggle(board, coordinatePairs))
})
