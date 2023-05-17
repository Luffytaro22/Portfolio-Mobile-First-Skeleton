const form = document.querySelector('form');
const email = document.querySelector('input[type="email"]');
const span = document.querySelector('.error');

function showError() {
  /* If the email input is empty */
  if (email.validity.valueMissing) {
    span.textContent = 'Please enter a value.';
  } else if (email.validity.typeMismatch) {
    /* If the input is not an email type */
    span.textContent = 'Please enter a valid email.';
  } else if (email.value !== email.value.toLowerCase()) {
    /* If the input is not in lower case */
    span.textContent = 'Only enter characters in lower case.'
  }
}

/* A input listener to the email input */
email.addEventListener('input', () => {
  if (email.validity.valid) {
    /* If it's valid the text of the error content dissapears */
    span.textContent = '';
    span.className = 'error';
  } else {
    /* If not, then displays the errors */
    showError();
  }
});

/* A submit listener to the form element */
form.addEventListener('submit', (event) => {
  if (!email.validity.valid) {
    /* If it's not valid, displays the error and avoids the form to be submmitted. */
    showError();
    event.preventDefault();
  }
})
