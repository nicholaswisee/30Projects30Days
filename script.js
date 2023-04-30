const colorSpreads = document.querySelectorAll('.colorspread')

function removeActiveClasses() {
  colorSpreads.forEach(colorspread => {
    colorspread.classList.remove('active')
  })
}

colorSpreads.forEach(colorspread => {
  colorspread.addEventListener('click', () => {
    removeActiveClasses()
    colorspread.classList.add('active')
  })
})
