const titleEl = document.querySelector('.title');
console.log(titleEl.textContent);
console.log(titleEl.innerHTML);
titleEl.innerHTML += '<a href=""> its a link </a>';
// titleEl.innerHTML = '';

console.log(titleEl);

titleEl.insertAdjacentHTML('afterbegin', '<a href=""> its a link </a>');
