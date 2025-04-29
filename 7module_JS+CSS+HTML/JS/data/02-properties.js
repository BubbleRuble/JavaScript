const newEl = document.querySelector('.site-nav__link');
newEl.textContent = 'я солодкий пиріжечок';

const actions = document.querySelectorAll('.js-action button');
console.log(actions[0].dataset.action);

const inputEl = document.querySelector('.js-input');
console.log(inputEl);
inputEl.value = 'lalalala';
console.log(inputEl.value);
