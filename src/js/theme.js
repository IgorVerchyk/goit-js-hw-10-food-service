const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const pageBody = document.querySelector('body');
const themeSwitch = document.querySelector('.js-switch-input');
const savedTheme = localStorage.getItem('theme');

themeSwitch.addEventListener('change', setTheme);

function changeTheme(oldTheme, newTheme) {
  pageBody.classList.remove(oldTheme);
  localStorage.setItem('theme', newTheme);
  pageBody.classList.add(newTheme);
}

function setTheme(event) {
  if (event.target.checked) {
    changeTheme(Theme.LIGHT, Theme.DARK);
  } else {
    changeTheme(Theme.DARK, Theme.LIGHT);
  }
}

export function checkForTheme() {
  if (savedTheme) {
    pageBody.classList.add(savedTheme);
    if (savedTheme === Theme.DARK) {
      themeSwitch.checked = true;
    }
  }
}
