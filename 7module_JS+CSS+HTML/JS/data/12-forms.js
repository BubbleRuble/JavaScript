const form = document.querySelector('.js-register-form');

form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit (event) {
  event.preventDefault();

  const formEl = event.currentTarget.elements;

  console.dir(formEl);


  const mail = formEl.email.value;
  const password = formEl.password.value;
  console.log(mail, password);
  
};