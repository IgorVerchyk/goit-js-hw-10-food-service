const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const pageBody = document.querySelector('body');
const themeSwitch = document.querySelector('.js-switch-input');
const savedTheme = localStorage.getItem('theme');

themeSwitch.addEventListener('change', setTheme);
function changeThemeToDark() {
  pageBody.classList.remove(Theme.LIGHT);
  localStorage.setItem('theme', Theme.DARK);
  pageBody.classList.add(Theme.DARK);
}
function changeThemeToLight() {
  pageBody.classList.remove(Theme.DARK);
  localStorage.setItem('theme', Theme.LIGHT);
  pageBody.classList.add(Theme.LIGHT);
}

function setTheme(event) {
  if (event.target.checked) {
    changeThemeToDark();
  } else {
    changeThemeToLight();
  }
}

export function checkForTheme() {
  if (savedTheme) {
    pageBody.classList.add(savedTheme);
    if (savedTheme === Theme.DARK) {
      themeSwitch.checked = true;
    } else {
      ('');
    }
  }
}
