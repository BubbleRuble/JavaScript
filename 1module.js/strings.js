// const message = '24 letter in this string';
// console.log(message.length);

// const firstName = 'Chelsy';
// const lastName = 'Emerald';
// const fullName = firstName + ' ' + lastName;

// console.log(fullName);

const firstName = 'Valeriy';
const lastName = 'Vahovskiy';
const type = 'VIP';
const room = 777;


/* використовуюється символ `, тільда зліва від одинички*/

const welcomeMSG = `Guest ${firstName} ${lastName} visit ${type} room ${room}`;
console.log(welcomeMSG);

const quantity = 25;
const orderMsg = `You ordered ${quantity} refregerators`;

console.log(orderMsg) 

let brand = 'Samsung';
console.log(brand.slice(1).toLowerCase());



const blacklistWord1 = 'spam';
const blacklistWord2 = 'sale';

const string1 = 'Hello i am a Mike Tyson, it is not spam i offer you a million';
const string2 = 'The biggest SALE this week, dont miss';
const string3 = 'Add company #fatlivesmatter';

console.log(string1.includes(blacklistWord1));
console.log(string2.toLowerCase().includes(blacklistWord2));
console.log(string3.includes(blacklistWord1));



