'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  // let board = [
  //   ['', '', ''],
  //   ['', '', ''],
  //   ['', '', '']
  // ]

  // let squares = ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9']

  const userOne = 'X'
  const userTwo = 'O'
  let currentUser = userOne
  let square = document.getElementsByTagName('td')
  // console.log(square)

  // *******************
  // works but can re-click and no end
  // ***********************
  // $('.col1, .col2, .col3').click(function () {
  //   if (currentUser === userOne) {
  //     $(this).html(userTwo)
  //     currentUser = userTwo
  //   } else if (currentUser === userTwo) {
  //     $(this).html(userOne)
  //     currentUser = userOne
  //   }
  // })

  // $('.col1, .col2, .col3').click(function () {
  //   if (currentUser === userOne && square[0].innerHTML === '') {
  //     $(this).html(userTwo)
  //     currentUser = userTwo
  //   } else if (currentUser === userTwo) {
  //     $(this).html(userOne)
  //     currentUser = userOne
  //   }
  // })

  $('.col1, .col2, .col3').click(function (square) {
    if (square.target.innerHTML === '') {
      console.log(square.target.innerHTML)
      console.log(square.target)
      console.log(square)
      if (currentUser === userOne) {
        $(this).html(userTwo)
        currentUser = userTwo
      } else if (currentUser === userTwo) {
        $(this).html(userOne)
        currentUser = userOne
      }
    }
  })

  $('.col1, .col2, .col3').click(function (square) {
    if (square.target.innerHTML === '') {
      if (currentUser === userOne) {
        $(this).html(userTwo)
        currentUser = userTwo
      } else if (currentUser === userTwo) {
        $(this).html(userOne)
        currentUser = userOne
      }
    }
  })

  // 0 1 2
  // 3 4 5
  // 6 7 8

  const winner = function () {
    if (square[0].innerHTML === square[1].innerHTML === square[2].innerHTML) {
      console.log('you win')
    } else if (square[3].innerHTML === square[4].innerHTML === square[5].innerHTML) {
      console.log('you win')
    } else if (square[6].innerHTML === square[7].innerHTML === square[8].innerHTML) {
      console.log('you win')
    } else if (square[0].innerHTML === square[3].innerHTML === square[6].innerHTML) {
      console.log('you win')
    } else if (square[1].innerHTML === square[4].innerHTML === square[7].innerHTML) {
      console.log('you win')
    } else if (square[2].innerHTML === square[5].innerHTML === square[8].innerHTML) {
      console.log('you win')
    } else if (square[0].innerHTML === square[4].innerHTML === square[8].innerHTML) {
      console.log('you win')
    } else if (square[6].innerHTML === square[4].innerHTML === square[2].innerHTML) {
      console.log('you win')
    }
  }

  // if (square[0].innerHTML === square[1].innerHTML === square[2].innerHTML) {
  //   console.log('you win')
  // } else if (square[3].innerHTML === square[4].innerHTML === square[5].innerHTML) {
  //   console.log('you win')
  // } else if (square[6].innerHTML === square[7].innerHTML === square[8].innerHTML) {
  //   console.log('you win')
  // } else if (square[0].innerHTML === square[3].innerHTML === square[6].innerHTML) {
  //   console.log('you win')
  // } else if (square[1].innerHTML === square[4].innerHTML === square[7].innerHTML) {
  //   console.log('you win')
  // } else if (square[2].innerHTML === square[5].innerHTML === square[8].innerHTML) {
  //   console.log('you win')
  // } else if (square[0].innerHTML === square[4].innerHTML === square[8].innerHTML) {
  //   console.log('you win')
  // } else if (square[6].innerHTML === square[4].innerHTML === square[2].innerHTML) {
  //   console.log('you win')
  // }

  // document.getElementById('s1').innerHTML = 'O'
  // let switchUser = document.getElementById('s1')
  // switchUser.innerHTML = switchUser.innerHTML === 'X' ? 'O' : 'X'

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
