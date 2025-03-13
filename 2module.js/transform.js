const friends = ['Mango','Poly','Kiwi','Ajax'];
// let string = '';

// for (const friend of friends) {
//   string += friend + ',';
// }
// string = string.slice(0, string.length - 1);
// console.log(string);

const string = friends.join(',');
console.log(string);


const cars = ['Mercedes', 'BMW', 'AUDI', 'Pegout'];

const car = cars.join(' and ');
console.log(car)