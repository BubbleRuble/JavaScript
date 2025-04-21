// const numbers = [5,10,15,20,25];

// const total = numbers.reduce((acc, number) => acc + number,0);

// console.log(total);

// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };
// const totalSalary = Object.values(salary).reduce(
//   (acc, value) => acc + value,
//   0,
// );

// console.log(totalSalary);

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ];

// const totalTimePlayed = players.reduce(
//   (total, player) => total + player.timePlayed,
//   0,
// );

// console.log(totalTimePlayed);

// const totalPoints = players.reduce(
//   (totalPoints, player) => totalPoints + player.points,
//   0,
// );

// console.log(totalPoints);

// const purchases = [
//   { item: 'Apple', price: 10, quantity: 2 },
//   { item: 'Banana', price: 5, quantity: 5 },
//   { item: 'Orange', price: 8, quantity: 3 },
//   { item: 'Kiwi', price: 15, quantity: 1 },
// ];

// const totalAmount = purchases.reduce(
//   (acc, { price, quantity }) => acc + price * quantity,
//   0,
// );
// console.log(totalAmount);

const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);

console.log(allTags);

const tagStats = allTags.reduce((acc, tag) => {
  return {
    ...acc,
    [tag]: acc[tag] ? acc[tag] + 1 : 1,
  };
}, {});

console.log(tagStats);
