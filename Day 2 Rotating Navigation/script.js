// Get the button element with class "navbar"
const navbarButton = document.querySelector('.navbutton');
const mainPage = document.querySelector('.mainpage')
const hiddenText = document.querySelector('.hiddentext')
// Add a click event listener to the button
// navbarButton.addEventListener('click', () => {
//   if (document.documentElement.classList.contains('rotate')) {
//     document.documentElement.classList.remove('rotate');
//   }
//   else [
//     document.documentElement.classList.add('rotate')
//   ]
// });

navbarButton.addEventListener('click', () => {
  mainPage.classList.toggle('rotate');
  hiddenText.classList.toggle('translate')
});
