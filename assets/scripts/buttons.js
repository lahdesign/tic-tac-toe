// $('#seeInfo').click(function () {
//   $('.userInfo').css('display', 'none')
//   $('.userInfo').css('display', 'block')
// })

// function to toggle user info
$(document).ready(function () {
  $('#seeInfo').click(function () {
    $('.userInfo').toggle()
  })
})

// function to toggle change password form
$(document).ready(function () {
  $('#changePassword').click(function () {
    $('#change-password').toggle()
  })
})

// Function to toggle past games
$(document).ready(function () {
  $('#getGames').click(function () {
    $('#view-games').css('display', 'block')
    // $('#view-games').toggle()
  })
})

// Function to validate emails
const validateEmail = function (email) {
  const re = /\S+@\S+/
  return re.test(email)
}
