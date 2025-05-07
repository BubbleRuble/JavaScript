const form = document.querySelector('.js-register-form');

form.addEventListener('submit', handleFormSubmit);

// function handleFormSubmit (event) {
//   event.preventDefault();

//   const formEl = event.currentTarget.elements;

//   console.dir(formEl);

//   const mail = formEl.email.value;
//   const password = formEl.password.value;
//   console.log(mail, password);

// };

function handleFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

  console.log(formData);

  formData.forEach((value, name) => {
    console.log('handleFormSubmit -> value', value);
    console.log('handleFormSubmit -> name', name);
  });
}
