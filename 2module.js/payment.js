// const cart = [54, 28, 105, 70, 92, 17, 120, 25, 52];
// let total = 0;

// for (let i = 0; i < cart.length; i += 1) {
//   console.log(cart[i]);

//   total += cart[i];
// }
// console.log('Total: ',total);

// for (const value of cart) {
//   total += value;
// }
// console.log('Total: ',total);


// for (let i = 0; i < cart.length; i += 1) {
//  cart[i] = Math.round(cart[i] * 1.1);
// }
// console.log(cart);

const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11,14];
let total = 0;


for (let i = 1; i < numbers.length; i += 1) {
  const number = numbers[i];
  console.log(number);

  if(number % 2 === 0) {
    console.log('Парне число');
  total += number;
  }
}

console.log('Total: ',total)

for (const number of numbers) {
  console.log(number)

  if(number % 2 === 0) {
        console.log('Парне число');
      total += number;
      }
}
console.log('Total:  ',total)

