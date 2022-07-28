const form = document.querySelector('form');
form.addEventListener('submit', e => {
  const pass1 = document.querySelector('#password1');
  const pass2 = document.querySelector('#password2');
  console.log(pass1);
  const errorMsg = document.querySelector('.error-msg');
  if (pass1 !== pass2) {
    e.preventDefault();
    pass1.classList.add('error');
    pass2.classList.add('error');
    errorMsg.style.display = 'block';
  }
});