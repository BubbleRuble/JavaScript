const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];
const array3 = [20, 35, 50];
let total = 0;

const numbers = array1.concat(array2, array3);


for (const number of numbers) {
  total += number;
}

console.log(total);
