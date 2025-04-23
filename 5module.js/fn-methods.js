// const showThis = function (...args) {
//   console.log(args);
//   console.log(this);
// };

// console.log(showThis());

// const obj = {
//   a:5,
//   b:10,
// };

// const numbers = [1,2,3,4]
// showThis.call(obj,5,10,15,20,25);
// showThis.apply(obj,numbers);

const changeColor = function (color) {
  console.log(this);
  this.color = color;
};

const hat = {
  color: 'red',
};

changeColor.call(hat, 'blue');
console.log(hat);

const cap = {
  color: 'yellow',
};

changeColor.call(cap, 'orange');
console.log(cap);
