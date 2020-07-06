const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const pageBody = document.querySelector('body');
const themeSwitch = document.querySelector('.js-switch-input');
const savedTheme = localStorage.getItem('theme');

themeSwitch.addEventListener('change', setTheme);

function setTheme(event) {
  if (event.target.checked) {
    pageBody.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
    pageBody.classList.add(Theme.DARK);
  } else {
    pageBody.classList.remove(Theme.DARK);
    localStorage.setItem('theme', Theme.LIGHT);
    pageBody.classList.add(Theme.LIGHT);
  }
}

export function checkForTheme() {
  if (savedTheme) {
    pageBody.classList.add(storagedTheme);
    if (storagedTheme === Theme.DARK) {
      themeSwitch.checked = true;
    } else {
      ('');
    }
  }
}
