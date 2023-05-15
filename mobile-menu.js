const mobileMenu = document.querySelector('#mobile-menu');
const x = document.querySelector('#x');
const hamburguer = document.querySelector('.menu-icon');

function showMenu() {
  mobileMenu.style = 'display: block;';
}

function hideMenu() {
  mobileMenu.style = 'display: none;';
}

hamburguer.addEventListener('click', showMenu);
x.addEventListener('click', hideMenu);
