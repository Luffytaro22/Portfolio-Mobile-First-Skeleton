const form = document.querySelector('form');
const email = document.querySelector('input[type="email"]');
const user = document.querySelector('input[type="text"]');
const spanMail = document.querySelector('#mail');
const spanUser = document.querySelector('#user');

/* A function for the email's errors */
function showErrorMail() {
  /* If the email input is empty */
  if (email.validity.valueMissing) {
    spanMail.textContent = '* Please enter a value.';
  } else if (email.value !== email.value.toLowerCase()) {
    /* If the input is not in lower case */
    spanMail.textContent = '* Only enter characters in lower case.';
  } else if (email.validity.typeMismatch) {
    /* If the input is not an email type */
    spanMail.textContent = '* Please enter a valid email.';
  }
}

/* A function for the User's name errors */
function showErrorUser() {
  if (user.validity.valueMissing) {
    spanUser.textContent = '* Please enter a value.';
  } else if (user.validity.typeMismatch) {
    spanUser.textContent = '* Please enter a valid name.';
  }
}

/* A input listener to the email input */
email.addEventListener('input', () => {
  if (email.validity.valid) {
    /* If it's valid the text of the error content dissapears */
    spanMail.textContent = '';
    spanMail.className = 'error';
  } else {
    /* If not, then displays the errors */
    showErrorMail();
  }
});

/* A input listener to the user input */
user.addEventListener('input', () => {
  if (user.validity.valid) {
    spanUser.textContent = '';
    spanUser.className = 'error';
  } else {
    showErrorUser();
  }
});

/* A submit listener to the form element */
form.addEventListener('submit', (event) => {
  if (!user.validity.valid) {
    showErrorUser();
    event.preventDefault();
  } else if (!email.validity.valid) {
    /* If it's not valid, displays the error and avoids the form to be submmitted. */
    showErrorMail();
    event.preventDefault();
  }
});
