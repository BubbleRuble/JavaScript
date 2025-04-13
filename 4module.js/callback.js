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

const buttonRef = document.querySelector('.js-button');

buttonRef.addEventListener('click', function () {
  console.log('Click to button');
});

const onGetCurrentPositionSuccess = function (position) {
  console.log(position);
};

const onGetCurrenPositionError = function (error) {
  console.log(error);
};

window.navigator.geolocation.getCurrentPosition(
  onGetCurrentPositionSuccess,
  onGetCurrenPositionError,
);
