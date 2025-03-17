// const string = 'qWeRTzxcV';
// const letters = string.split('');
// let invertedString = '';

// for (const letter of letters) {
//   const isEqual = letter === letter.toLowerCase();

//   invertedString += isEqual ? letter.toUpperCase() : letter.toLowerCase();
// }

// console.log('invertedString:  ', invertedString);

const changeCase = function (string) {
  const letters = string.split('');
  let invertedString = '';

  for (const letter of letters) {
    const isInLowerCase = letter === letter.toLowerCase();

    invertedString += isInLowerCase
      ? letter.toUpperCase()
      : letter.toLowerCase();
  }

  return invertedString;
};

console.log(changeCase('qweRTY'));
console.log(changeCase('mAngo'));
console.log(changeCase('AjAx'));
