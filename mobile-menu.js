const mobileMenu = document.querySelector('#mobile-menu');
const x = document.querySelector('#x');
const hamburguer = document.querySelector('.menu-icon');
const mobileItems = document.querySelectorAll('#mobile-menu ul li');

function showMenu() {
  mobileMenu.style = 'display: block;';
}

function hideMenu() {
  mobileMenu.style = 'display: none;';
}

hamburguer.addEventListener('click', showMenu);
x.addEventListener('click', hideMenu);

mobileItems.forEach(item => item.addEventListener('click', hideMenu));
