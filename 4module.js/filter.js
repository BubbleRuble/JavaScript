const numbers = [5,10,15,20,25];

const filteredNumbers = numbers.filter((number) => number > 5 && number < 20);

console.log(filteredNumbers)



  const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
  ];

  const friendsOnline = players.filter((player) => player.online);

  console.table(friendsOnline);

  const friendsOffline = players.filter((player) => !player.online );
  console.log(friendsOffline)

  const skillFriends = players.filter((player) => player.points > 50);

  console.log(skillFriends);


