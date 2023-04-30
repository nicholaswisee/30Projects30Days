const searchButton = document.querySelector('.button')
const searchInput =  document.querySelector('.input')

searchButton.addEventListener('click', () => {
  if (searchInput.classList.contains('visible')) {
    searchInput.classList.remove('visible')
  }
  else {
    searchInput.classList.add('visible')
  }
})