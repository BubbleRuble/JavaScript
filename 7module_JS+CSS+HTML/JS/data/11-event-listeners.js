const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');

// targetBtn.addEventListener('click',handleTargetButtonClick);
// addListenerBtn.addEventListener('click', addListenerButtonClickHandler);
// removeListenerBtn.addEventListener('click',onRemoveListenerCLick);

// // handle*: handleSubjectEvent
// function handleTargetButtonClick() {
//   console.log('CLICK1');
// }

// //*Handler: subjectEventHandler
// function addListenerButtonClickHandler() {
//   console.log('CLICK2');
// };

// //on*: onSubjectEvent
// function onRemoveListenerCLick() {
//   console.log('CLICK3');
// };

addListenerBtn.addEventListener('click', event => {
 
  console.log('Вішаю слухача події на цільову кнопку');
  targetBtn.addEventListener('click', onTargetBtnClick);
});

removeListenerBtn.addEventListener('click', event => {
  console.log('Знімаю слухача події на цільову кнопку');
  targetBtn.removeEventListener('click', onTargetBtnClick);
});

function onTargetBtnClick(event) {
  console.log('Знімаю слухача події на цільову кнопку');
};










