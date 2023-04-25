colorSpreads = document.querySelectorAll(".colorspread")

const removeActiveClass = () => {
  colorSpreads.forEach(colorspread => {
    colorspread.classList.remove('active')
  })
}

colorSpreads.forEach(colorspread => {
  colorspread.addEventListener('click', () => {
    removeActiveClass()
    colorspread.classList.add('active')
    })
});

