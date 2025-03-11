let balance = 10000;
const payment = 2000;

console.log(`Загальна вартість замовлення ${payment} грошей`);

if (balance >= payment) {
  console.log('дякуємо за покупку');

  balance -= payment;
  console.log('Залишок на рахунку: ',balance);
} else {
 console.log('Не вистачає коштів');
}
console.log('operation is finished');