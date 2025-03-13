const string = 'CoNcEnTrAtIon';
const letters = string.split('');
let invertedString = '';

console.log(letters);

for (const letter of letters) {
  
  // if(letter === letter.toLowerCase()){
  //   console.log('Ці букви в нижньому реєстрі - ', letter);
  // invertedString += letter.toUpperCase();
  // } else {
  //   console.log('Ці букви в верхньому реєстрі -- ', letter);
  //   invertedString += letter.toLowerCase();
  // }

  invertedString += letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase();
  
}
console.log(invertedString);