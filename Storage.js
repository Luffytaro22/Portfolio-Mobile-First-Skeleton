/* Referencing the name and email input values */
const name = document.querySelector('input[name="name"]');
const email = document.querySelector('input[name="email"]');
let nameValue = document.querySelector('input[name="name"]').value;
let emailValue = document.querySelector('input[name="email"]').value;

/* Creating an object for the input's values */
let input = {
  'name': nameValue,
  'email': emailValue,
};

/* Adding the input's information to the localStorage object */
localStorage.setItem('form', JSON.stringify(input));

