const counter = {
  value: 0,
  increment() {
    console.log(this);
    this.value += 1;
  },
  decrement() {
    console.log(this);
    this.value -= 1;
  },
};
const decrementButton = document.querySelector('.js-decrement');
const incrementButton = document.querySelector('.js-increment');
const valueEl = document.querySelector('.js-value')

console.log(decrementButton);
console.log(incrementButton);
console.log(valueEl);

decrementButton.addEventListener('click', function() {
  console.log('Click to the decrement');

  counter.decrement();

  valueEl.textContent = counter.value;
});
incrementButton.addEventListener('click', function() {
  console.log('Click to the increment');

  counter.increment();
  valueEl.textContent = counter.value;
});

