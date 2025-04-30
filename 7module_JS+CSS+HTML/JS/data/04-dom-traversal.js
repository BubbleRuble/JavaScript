const navEl = document.querySelector('.site-nav');
console.log(navEl);

// const firstNavItem = navEl.firstElementChild;
// console.log(firstNavItem);

// const lastNavItem = navEl.lastElementChild;
// console.log(lastNavItem);

// console.log(firstNavItem.parentNode);
// console.log(navEl.children);
// console.log(firstNavItem.nextElementSibling);

// const titleEl = document.createElement('h1');
// titleEl.classList.add('page-title');
// titleEl.textContent = 'опа і тут зявився текст';
// console.log(titleEl);
// navEl.appendChild(titleEl)

// APPEND додає в кінець

// const imageEl = document.createElement('img');
// imageEl.src ="/IMG_1119.png";
// imageEl.alt ='McGregor';
// imageEl.width = 200;

// navEl.appendChild(imageEl);
// console.log(imageEl);;

const navItemEl = document.createElement('li');
navItemEl.classList.add('site-nav__item');
navEl.insertBefore(navItemEl, navEl.firstElementChild);

const navLinkEl = document.createElement('a');
navLinkEl.classList.add('site-nav__link');
navLinkEl.textContent = 'Settings';
navLinkEl.href = '/settings';
navItemEl.appendChild(navLinkEl);





