const tagsContainer = document.querySelector('.js-tags');
tagsContainer.addEventListener('click', onTagsContainerClick);

function onTagsContainerClick(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  const currentActiveBtn = document.querySelector('.js-button');

  console.log(e.target);
  e.target.classList.add('js-button');
  console.log('додав');

}

// if (e.classList !== tags__btn) {
//   return;
// }
