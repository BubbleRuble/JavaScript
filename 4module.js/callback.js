// const a = function (message, callback) {
//   console.log(message);

//   console.log(callback);
//   callback(100);
// };

// const b = function (number) {
//   console.log('This log from b', number);
// };

// a('anton', b);

const doMath = function (a, b, callback) {
  const result = callback(a, b);

  console.log(result);
};

// const add = function (x,y) {
//   return x + y;
// };

// const sub = function (x,y) {
//   return x - y;
// };

// doMath(2,3,function (x,y) {
//   return x + y;
// });
// doMath(10,1,function (x,y) {
//   return x - y;
// });

// const buttonRef = document.querySelector('.js-button');

// buttonRef.addEventListener('click', function () {
//   console.log('Click to button');
// });

// const onGetCurrentPositionSuccess = function (position) {
//   console.log(position);
// };

// const onGetCurrenPositionError = function (error) {
//   console.log(error);
// };

// window.navigator.geolocation.getCurrentPosition(
//   onGetCurrentPositionSuccess,
//   onGetCurrenPositionError,
// );

// console.log('В коді перед таймаутом');

// setTimeout(function () {
//   console.log('Через 3 секунди всередені колбека в таймауті');
// },3000);

// console.log('В коді після таймауту');

// const onRequestSuccess = function (responce) {
//   console.log('Успіх, покемона знайдено!');
// };

// fetch('https://pokeapi.co/api/v2/ability/150/')
//   .then(res => res.json())
//   .then(onRequestSuccess);

const filter = function (array, test) {
  const filteredArray = [];

  for (const el of array) {
    console.log(el);
    const passed = test(el);
    if (passed) {
      filteredArray.push(el);
    }
  }

  return filteredArray;
};

// const callback1 = function (value) {
//   return value >= 3;
// };
// const callback2 = function (value) {
//   return value <= 6;
// };

// const r1 = filter([1, 2, 3, 4, 5], callback1);
// console.log(r1);

// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2);
// console.log(r2);


const fruits = [
  {name: 'apples', quantity: 200, isFresh: true,},
  {name: 'grapes', quantity: 150, isFresh: false,},
  {name: 'bananas', quantity: 100, isFresh: true,},
];

const getFruitsWithQuantity = function (fruit) {
  return fruit.name === 'apples';
};

const result = filter(fruits,getFruitsWithQuantity);
console.log(result);