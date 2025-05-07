const refs = {
  output: document.querySelector('.js-output'),
  clearBtn: document.querySelector('.js-clear'),
};

// window.addEventListener('keydown', onKeyPress);
// window.addEventListener('keyup', onKeyPress);
window.addEventListener('keypress', onKeyPress);
refs.clearBtn.addEventListener('click', onClearOutput);

function onKeyPress(event) {
  console.log(event.key);
  // console.log(event.code);

  refs.output.textContent += event.key;
}

function onClearOutput(event) {
  console.log('ти натиснув на кнопочку очистити');
  refs.output.textContent = '';
}
