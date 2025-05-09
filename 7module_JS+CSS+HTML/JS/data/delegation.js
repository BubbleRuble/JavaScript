const container = document.querySelector('.container');

container.addEventListener('click', onClick);

const addButton = document.querySelector('.js-add-btn');
let labelCounter = 6;

addButton.addEventListener('click', onAddBtnClick);

function onClick(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  console.log(e.target.nodeName);
};

function onAddBtnClick (e) {
  const btn = document.createElement('button');
  btn.textContent = `кнопка ${labelCounter}`;
  btn.type = 'button';
  console.log('додав кнопку');

  container.appendChild(btn);
  labelCounter += 1;
};

