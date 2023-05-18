/* Referencing the name and email input values */
const inputs = document.querySelectorAll('input');

/* Creating an object for the input's values */
let input = {
  'name': '',
  'email': '',
};

function changeInput() {
  /* Changing the input's keys every time the inputs fields change */
  input.name = document.querySelector('input[name="name"]').value;
  input.email = document.querySelector('input[name="email"]').value;

  /* Adding the input's information to the localStorage object */
  localStorage.setItem('form', JSON.stringify(input));
}

/* An input listener to each input (name and email) */
inputs.forEach((input) => input.addEventListener('input', changeInput));


