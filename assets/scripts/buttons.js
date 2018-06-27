// function to toggle user info
$(document).ready(function () {
  $('#seeInfo').click(function () {
    $('.userInfo').toggle()
  })
})
// Function to toggle change password
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

// Function to clear user sign in messages
$(document).ready(function () {
  $('#newGame').click(function () {
    $('#userMessage').text('')
    $('#userMessage').css('background-color', '222')
  })
})

// Function to validate emails
const validateEmail = function (email) {
  const re = /\S+@\S+/
  return re.test(email)
}
