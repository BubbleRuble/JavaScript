const cards = ['Карточка-1','Карточка-2','Карточка-3','Карточка-4','Карточка-5'];
console.table(cards);

// const cardToRemove = 'Карточка-3';
// const index = cards.indexOf(cardToRemove);
// console.log(index);

// cards.splice(index, 1)

// console.table(cards)




// const cardToInsert = 'Карточка-6';
// const index = 3;

// cards.splice(index, 0, cardToInsert);
// console.table(cards);


const cardToUpdate = 'Карточка-4';
const index = cards.indexOf(cardToUpdate);
console.log(index)

console.table(cardToUpdate);

cards.splice(index, 1, 'Нова оновлена карточка-4');
console.table(cards);