const lazyImages = document.querySelectorAll('img[loading="lazy"]');

lazyImages.forEach(image => {
  image.addEventListener('load', onImageLoaded, {once: true});
});

function onImageLoaded(e) {
  console.log('завантажилось');
  e.target.classList.add('appear')
}