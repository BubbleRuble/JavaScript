// const fn = function(a, b, c, ...args) {
//   console.log(a, b, c);
//   console.log(args);

// };

// fn('Anton', 1, 2, 3);
// fn('Petro', 1, 2, 3, 4, 5);
// fn('Galya', 1, 2, 3, 4, 5, 6, 7);

// const add = function (...args) {
//   console.log(args);

//   let total = 0;
//   for (const arg of args) {
//     total += arg;
//   }

//   return total;
// };

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 4, 5, 6));

const filterNumbers = function (array, ...args) {
  console.log('array: ', array);
  console.log('args: ', args);

  const uniqueElements = [];

  for (const element of array) {
    if (args.includes(element)) {
      uniqueElements.push(element);

      console.log(`${element} is everywhere`);
    }
  }

  return uniqueElements
};

console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8));
console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15));
console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64));
