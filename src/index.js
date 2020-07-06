import './styles.css';
import itemTemplate from '../src/templates/menu_template.hbs';
import menu from './menu.json';
import { checkForTheme } from './js/theme.js';

const itemMarkup = itemTemplate(menu);
const menuMarkup = document.querySelector('.js-menu');

menuMarkup.insertAdjacentHTML('beforeend', itemMarkup);

checkForTheme();
