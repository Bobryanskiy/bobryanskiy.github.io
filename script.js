const themeToggle = document.getElementById('theme-toggle');
const body = document.querySelector(".container")
let isDarkTheme = false;

themeToggle.addEventListener('click', () => {
  if (isDarkTheme) {
    document.body.style.backgroundColor = '#f4f4f4';
    document.body.style.color = '#333';
    isDarkTheme = false;
  } else {
    document.body.style.backgroundColor = '#333';
    document.body.style.color = '#f4f4f4';
    isDarkTheme = true;
  }
});