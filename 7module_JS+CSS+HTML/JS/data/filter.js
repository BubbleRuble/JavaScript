const tech = [
  { label: 'CSS' },
  { label: 'JavaSctipr' },
  { label: 'Node.js' },
  { label: 'React' },
  { label: 'Vue' },
  { label: 'Next.js' },
  { label: 'Mobx' },
  { label: 'Redux' },
  { label: 'React Router' },
  { label: 'GraphQl' },
  { label: 'PostgreSQL' },
  { label: 'MingoDB' },
];

const refs = {
  list: document.querySelector('.js-list'),
  input: document.querySelector('#filter'),
};

refs.input.addEventListener('input', onFilterChange);

const listItemsMarkup = createListItemsMarkup(tech);

refs.list.innerHTML = listItemsMarkup;

function createListItemsMarkup(items) {
  return items.map(item => `<li>${item.label}</li>`).join('');
}

function onFilterChange(e) {
  const filter = e.target.value.toLowerCase();

  const filteredItems = tech.filter(t =>
    t.label.toLowerCase().includes(filter),
  );

  console.log(filteredItems);
}
