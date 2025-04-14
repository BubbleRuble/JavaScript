// const fnA = function(parameter) {
//   const innerVariable = 'Значення внутрішної змінної функції fnA';

//   const innerFunction = function () {
//     console.log(parameter);
//     console.log(innerVariable);
//     console.log('це виклик innerFunction');
//   };
//   return innerFunction
// };
// const fnB = fnA(555);

// fnB()
// console.log(fnB)


// const makeDish = function (sheffName, dish) {
//   console.log(`${sheffName} is cooking ${dish}`);
// };

// makeDish('Vasyl', 'Pork');
// makeDish('Vasyl', 'Coffee');
// makeDish('Petro', 'Fish');
// makeDish('Petro', 'Spaghetti');

// const makeSheff = function (name) {
//   const makeDish = function (dish) {
//     console.log(`${name} is cooking ${dish}`);
//   };

//   return makeDish;
// };

// const vasyl = makeSheff('Vasyl');
// const petro = makeSheff('Petro');
// const vovchik = makeSheff('Vovchik');

// vasyl('pork');
// petro('spaghetti');
// vovchik('tea'); 

// const floatingPoint = 3.456789;
// const someInt = Math.round(floatingPoint);
// const withDecimals = Number(floatingPoint.toFixed(2));


// console.log(withDecimals);

// const rounder = function (number, places) {
//   return Number(number.toFixed(places))
// };

// const rounder = function (places) {
//   return function (number) {
//     return Number(number.toFixed(places))
//   }
// };

// const rounder2 = rounder(2);
// const rounder3 = rounder(3);

// console.log(rounder2(3.4567));
// console.log(rounder2(3.4567));
// console.log(rounder3(3.4567));
// console.log(rounder3(3.4567));


const salartManagerFactory = function(emploeyyName, baseSalary) {
  let salary = baseSalary;

  const changeBy = function (amount) {
    salary += amount;
  }
};

return {
  raise(amount) {
    changeBy(amount);
  },
  lower(amount) {
    changeBy(amount);
  },
  current(amount) {
    return ` Зарплата на даний момент ${emploeyyName} - ${salary} `;
  },
}


