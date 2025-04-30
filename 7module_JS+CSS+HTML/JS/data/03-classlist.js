const navEl = document.querySelector('.site-nav');
console.log(navEl.classList);

navEl.classList.add('site-nav__items');
console.log(navEl.classList);

navEl.classList.remove('site-nav__items');
console.log(navEl.classList);

navEl.classList.replace('site-nav', 'navigation');
console.log(navEl.classList);

console.log(navEl.classList.contains('navigation'));

const currentPageUrl = '/portfolio';

// const linkEl = document.querySelector(
//   `.site-nav__link[href="${currentPageUrl}"]`,
// );

// console.log(linkEl);

const aboutPage = '/about';

const linkEl = document.querySelector(`.site-nav__link[href="${aboutPage}"]`);

console.log(linkEl);
linkEl.classList.add('site-nav__link--current');


