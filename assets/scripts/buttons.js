// $('#seeInfo').click(function () {
//   $('.userInfo').css('display', 'none')
//   $('.userInfo').css('display', 'block')
// })

// Function to toggle user info
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

// Function to validate emails
const validateEmail = function (email) {
  const re = /\S+@\S+/
  return re.test(email)
}
