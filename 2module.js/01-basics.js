// const add = function (a, b) {
  
//   const result = a + b;
//   console.log('a + b: ', result);
  
//   return result;
// };

// console.log(add(10, 3));
// console.log(add(11, 7));
// console.log(add(16, 32));



// const fn = function (value) {
//   console.log(1);

//   console.log(2);

//   if (value < 100) {
//     return 'Менше за 100';
//   } 
//     return 'Більше за 100';

// }

// console.log('Результат функції: ',fn(50));
// console.log('Результат функції: ',fn(500));



const fnA = function () {
  console.log('викoнується функція А');

  fnB();
};

const fnB = function () {
  console.log('викoнується функція B');

 
  fnC();
};

const fnC = function () {
  console.log('викoнується функція C');

  console.log(value);
};

// console.log('Лог перед викликом функції A');
fnA();
// console.log('Лог після викликом функції A');

// console.log('Лог перед викликом функції B');
// fnB();
// console.log('Лог після викликом функції B');

// console.log('Лог перед викликом функції C');
// fnC();
// console.log('Лог після викликом функції C');