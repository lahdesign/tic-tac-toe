// Get the modal
const modal = document.getElementById('signUp')

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none'
  }
}

// Get the modal
const signIn = document.getElementById('signIn')

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === signIn) {
    signIn.style.display = 'none'
  }
}
