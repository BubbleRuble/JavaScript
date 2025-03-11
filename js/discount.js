let totalSpent = 2000;
let payment = 5000;
let discount = 0;


if (totalSpent < 100) {
console.log('У вас ще немає партнерської знижки') ;
} else if (totalSpent >= 100 && totalSpent < 1000) {
  console.log('Бронзовий партнер, знижка 2%');
  discount = 0.02;
} else if (totalSpent >= 1000 && totalSpent < 5000) {
console.log('Срібний партнер, знижка 5%');
discount = 0.05; 
} else {
  console.log('Золотий партнер, знижка 10%');
discount = 0.1; 
}
payment -= payment * discount;

 console.log(`Оформлюємо замовлення на суму ${payment} зі знижкою ${discount * 100}%`);

 totalSpent += payment;
 console.log('Загальна сума витрачених коштів', totalSpent);


 