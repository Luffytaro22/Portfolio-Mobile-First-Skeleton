/* Referencing the name and email input values */
const inputs = document.querySelectorAll('input');
const imput = document.querySelector('textarea');

/* if the localStorage object is not empty then pre-fill the inputs with the 'form' string */
if (localStorage.getItem('form')) {
  document.querySelector('input[name="name"]').value = JSON.parse(localStorage.getItem('form')).name;
  document.querySelector('input[name="email"]').value = JSON.parse(localStorage.getItem('form')).email;
  document.querySelector('textarea').value = JSON.parse(localStorage.getItem('form')).message;
}
/* Creating an object for the input's values */
const input = {
  name: '',
  email: '',
  message: '',
};

function changeInput() {
  /* Changing the input's keys every time the inputs fields change */
  input.name = document.querySelector('input[name="name"]').value;
  input.email = document.querySelector('input[name="email"]').value;
  input.message = document.querySelector('textarea').value;

  /* Adding the input's information to the localStorage object */
  localStorage.setItem('form', JSON.stringify(input));
}

/* An input listener to each input (name and email) */
inputs.forEach((input) => input.addEventListener('input', changeInput));
imput.addEventListener('input', changeInput);

