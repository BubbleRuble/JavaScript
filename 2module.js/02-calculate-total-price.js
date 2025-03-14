// const cart = [54, 28,  105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;

// for (const value of cart) {
//   total += value;
// }

// console.log('Total: ', total);


const calculateTotalPrice = function (items) {
  console.log(items);

  let total = 0;

  for (const item of items) {
    total += item;
  }
  return total;
};

const r1 = (calculateTotalPrice([1,2,3]));
const r2 = (calculateTotalPrice([5,10,15,20]));
const r3 = (calculateTotalPrice([100,200,300]));

console.log(`Загальна сума покупок: ${r1}`);
console.log(`Загальна сума покупок: ${r2}`);
console.log(`Загальна сума покупок: ${r3}`);


