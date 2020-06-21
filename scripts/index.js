const modal = document.querySelector ('#modal')

document.querySelector ('#button-login').addEventListener ('click', () => {
  modal.classList.add ('active')
})

document.querySelector ('.close-modal').addEventListener ('click', () => {
  modal.classList.remove ('active')
})

