// const numbers = [5, 10, 15, 20, 25, 30];

// const doubledNums = numbers.map(number => {
//   console.log(number);
//   return number * 2;
// });
// console.log(doubledNums);

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

const playerNames = players.map(player => {
  return player.name;
});

console.log(playerNames);

const playersPoints = players.map(player => player.points);
console.log(playersPoints);

// const updatedPlayers = players.map(player => ({
//   ...players,
//   points: player.points * 1.5
// }));
// console.log(updatedPlayers);

const playerToUpdate = 'player-1';

const updatedPlayers = players.map(player =>
  playerToUpdate === player.id
    ? { ...player, timePlayed: player.timePlayed + 100 }
    : player,
);

console.table(updatedPlayers);

const racers = [
  { id: 'racer-1', name: 'Neymar', timePlayed: 110, points: 54, online: false },
  { id: 'racer-2', name: 'Ronaldo', timePlayed: 270, points: 92, online: true },
  { id: 'racer-3', name: 'Messi', timePlayed: 130, points: 48, online: true },
];

const racerToUpdate = 'racer-1';

const updatedRacers = racers.map(racer =>
  racerToUpdate === racer.id
    ? { ...racer, timePlayed: racer.timePlayed + 50 }
    : racer,
);

console.log(updatedRacers);
