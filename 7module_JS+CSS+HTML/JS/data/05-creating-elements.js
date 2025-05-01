const navEl = document.querySelector('.site-nav');
const heroEl = document.querySelector('.hero');

const titleEl = document.createElement('h1');
titleEl.classList.add('page-title');
titleEl.textContent = 'опа і тут зявився C0n0r';
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

const heroImage = document.createElement('img');
heroImage.classList.add('hero-image');
heroImage.src = '/IMG_1119.png';
heroImage.width = 200;
heroEl.append(titleEl,heroImage);

console.log(heroEl);
