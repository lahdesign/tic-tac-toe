// $('#seeInfo').click(function () {
//   $('.userInfo').css('display', 'none')
//   $('.userInfo').css('display', 'block')
// })

$(document).ready(function () {
  $('#seeInfo').click(function () {
    $('.userInfo').toggle()
  })
})

$(document).ready(function () {
  $('#changePassword').click(function () {
    $('#change-password').toggle()
  })
})
