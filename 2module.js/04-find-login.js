const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n']
// const loginToFind = 'aj4xth3m4n';

// const message = logins.includes(loginToFind) ? `Користувача ${loginToFind} знайдено` : `Користувача ${loginToFind} не знайдено`;

// console.log(message);

// const findLogin = function (allLogins, loginToFind) {
 

//   for (const login of allLogins) {
//     if (login === loginToFind) {
//       return `Користувача ${loginToFind} знайдено`;
//     }
//   } 
//   return `Користувача ${loginToFind} не знайдено`;
// };


// console.log(findLogin(logins, 'avocod3r'));
// console.log(findLogin(logins, 'k1widab3st'));
// console.log(findLogin(logins, 'jam4l'));
// console.log(findLogin(logins, 'poly1scute'));


const numbers = ['097 410 54 64', '067 512 12 21', '098 903 38 76', '067 566 65 34'];


// const findNumber = function (allNumbers, numberToFind) {

//   for (const number of allNumbers) {
//     if (number === numberToFind) {
//       return `Цей номер ${numberToFind} телефону не було знайдено`
//     }
//   }
//   return `Цей номер ${numberToFind} телефону було знайдено`

// }

const findNumber = function (allNumbers, numberToFind) {
  return allNumbers.includes(numberToFind)
   ? `Цей номер ${numberToFind} телефону було знайдено`
   : `Цей номер ${numberToFind} телефону не було знайдено`;
};



console.log(findNumber(numbers, '097 950 76 45'));
console.log(findNumber(numbers, '097 410 54 64'));
console.log(findNumber(numbers, '067 566 65 34'));
console.log(findNumber(numbers, '067 942 34 45'));


