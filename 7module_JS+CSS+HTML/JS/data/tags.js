// const tagsContainer = document.querySelector('.js-tags');
// let selectedTag = null;

// tagsContainer.addEventListener('click', onTagsContainerClick);

// function onTagsContainerClick(e) {
//   if (e.target.nodeName !== 'BUTTON') {
//     return;
//   }
//   const currentActiveBtn = document.querySelector('.js-button');

//   if (currentActiveBtn) {
//     currentActiveBtn.classList.remove('js-button');
//   }

//   // currentActiveBtn?.classList.remove('js-button');

//   const nextActiveButton = e.target;
//   nextActiveButton?.classList.add('js-button');

//   selectedTag = nextActiveButton.dataset.value;
//   console.log(selectedTag);
// }


// const tagsContainer = document.querySelector('.js-tags');
// const selectedTags = new Set();

// tagsContainer.addEventListener('click', onTagsContainerClick);

// function onTagsContainerClick(e) {
//   if (e.target.nodeName !== 'BUTTON') {
//     return;
//   }
//    const tagValue = e.target.dataset.value;

//   e.target.classList.toggle('js-button');

//   if (selectedTags.has(tagValue)) {
//     selectedTags.delete(e.target.dataset.value);
//   } else {
//     selectedTags.add(tagValue)
//   }

//   console.log(selectedTags)
 
// }

// const tagsContainer = document.querySelector('.js-tags');
// const selectedTags = new Set();

// tagsContainer.addEventListener('click', onTagsContainerClick);

// function onTagsContainerClick(e) {
//   if (e.target.nodeName !== 'BUTTON') return;

//   const tagValue = e.target.dataset.value;

//   // Перемикаємо клас
//   e.target.classList.toggle('js-button');

//   // Якщо видалення не вдалося — значить, треба додати
//   if (!selectedTags.delete(tagValue)) {
//     selectedTags.add(tagValue); 
//   }

//   console.log(selectedTags);
// }


