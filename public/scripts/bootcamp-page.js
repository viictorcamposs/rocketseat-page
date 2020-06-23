const modalOverlay = document.querySelector ('.modal-overlay')
const cards = document.querySelectorAll ('.card')


/* MANIPULANDO CLOSE-MODAL */
document.querySelector ('.close-modal').addEventListener ('click', () => {
  modalOverlay.classList.remove ('active')
  if ( modalOverlay.classList.contains ('maximize') ) {
    modalOverlay.classList.remove ('maximize')
  }
})

/* MANIPULANDO MAXIMIZE */
document.querySelector ('.fullscreen').addEventListener ('click', () => {
  if ( modalOverlay.classList.contains ('maximize') ) {
    modalOverlay.classList.remove ('maximize')
  } else {
    modalOverlay.classList.add ('maximize')
  }
})


/* MANIPULANDO CARDS */
for (let card of cards) {
  card.addEventListener ('click', () => {
    modalOverlay.classList.add ('active')
    /* MANIPULANDO MODAL IFRAME */
    const idPage = card.getAttribute ('id')
    modalOverlay.querySelector ('iframe').src = `https://www.rocketseat.com.br/${idPage}`

  })
}

