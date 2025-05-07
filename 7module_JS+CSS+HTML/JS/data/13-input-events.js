const refs = {
  input: document.querySelector('.js-input'),
  nameLabel: document.querySelector('.js-button > span'),
  licenseCheckbox: document.querySelector('.js-license'),
  btn: document.querySelector('.js-button'),
};

// refs.input.addEventListener('focus', onInputFocus);
// refs.input.addEventListener('blur', onInputBlur);
// refs.input.addEventListener('change', onInputChange);
// refs.input.addEventListener('input', onInputChange);
refs.input.addEventListener('input', onInputChange);
refs.licenseCheckbox.addEventListener('change', onLicenseChange);

function onInputFocus() {
  console.log('інпут отримав фокус - подія focus');
}

function onInputBlur() {
  console.log('інпут втратив фокус - подія blur');
}
function onInputChange(event) {
  refs.nameLabel.textContent = event.currentTarget.value;
}

function onLicenseChange(event) {
  console.log(event.currentTarget.checked);
  console.log('кнопка вимкнена', refs.btn.disabled);

  refs.btn.disabled = !event.currentTarget.checked;
}
