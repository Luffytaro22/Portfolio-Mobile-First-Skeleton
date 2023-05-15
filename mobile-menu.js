const mobileMenu = document.querySelector('#mobile-menu');
const x = document.querySelector('#x');
const hamburguer = document.querySelector('.menu-icon');

function showMenu() {
  mobileMenu.style = 'display: block;';
}

hamburguer.addEventListener('click', showMenu);
