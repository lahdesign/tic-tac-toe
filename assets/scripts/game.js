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
// const square = document.getElementsByTagName('td')
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

const gameboard = $('.col1, .col2, .col3').click(function (square) {
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

// const winner = function () {
//   if (square[0].innerHTML === square[1].innerHTML === square[2].innerHTML) {
//     console.log('you win')
//   } else if (square[3].innerHTML === square[4].innerHTML === square[5].innerHTML) {
//     console.log('you win')
//   } else if (square[6].innerHTML === square[7].innerHTML === square[8].innerHTML) {
//     console.log('you win')
//   } else if (square[0].innerHTML === square[3].innerHTML === square[6].innerHTML) {
//     console.log('you win')
//   } else if (square[1].innerHTML === square[4].innerHTML === square[7].innerHTML) {
//     console.log('you win')
//   } else if (square[2].innerHTML === square[5].innerHTML === square[8].innerHTML) {
//     console.log('you win')
//   } else if (square[0].innerHTML === square[4].innerHTML === square[8].innerHTML) {
//     console.log('you win')
//   } else if (square[6].innerHTML === square[4].innerHTML === square[2].innerHTML) {
//     console.log('you win')
//   }
// }

module.exports = {
  gameboard
}
