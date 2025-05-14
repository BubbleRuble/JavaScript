const auto = [
  { label: 'BMW' },
  { label: 'Mercedes' },
  { label: 'Porcshe' },
  { label: 'Lamborghini' },
  { label: 'Citroen' },
  { label: 'Fiat' },
  { label: 'Volkswagen' },
  { label: 'Skoda' },
  { label: 'Ferrari' },
  { label: 'Renault' },
  { label: 'Opel' },
  { label: 'Toyota' },
];

const refs = {
  list: document.querySelector('.js-list'),
  input: document.querySelector('#filter'),
};

refs.input.addEventListener('input', _.debounce(onFilterChange, 500));

const listItemsMarkup = createListMarkup(auto);
addList(listItemsMarkup);

function createListMarkup(items) {
  return items.map(el => `<li>${el.label}</li>`).join('');
}

function onFilterChange(e) {
  console.log('INPUT');
  const filter = e.target.value.toLowerCase();

  const filteredItems = auto.filter(el =>
    el.label.toLowerCase().includes(filter),
  );

  const listItemsMarkup = createListMarkup(filteredItems);
  addList(listItemsMarkup);
}

function addList(markup) {
  refs.list.innerHTML = markup;
}
