import proacts from './proacts.js';

const makeProductCard = ({ name, description, price }) => {
  const productEl = document.createElement('article');
  productEl.classList.add('product');

  const nameEl = document.createElement('h2');
  nameEl.classList.add('product__name');
  nameEl.textContent = name;

  const descrEl = document.createElement('p');
  descrEl.classList.add('product__descr');
  descrEl.textContent = description;

  const priceEl = document.createElement('p');
  priceEl.classList.add('product__pridct');
  priceEl.textContent = `Ціна: ${price}`;

  productEl.append(nameEl, descrEl, priceEl);

  return productEl;
};

console.log(makeProductCard(proacts[2]));

const elements = proacts.map(makeProductCard) ;

console.log(elements);