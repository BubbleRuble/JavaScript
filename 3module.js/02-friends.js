const friends = [
  { name: 'Mango', online: false },
  { name: 'Kiwi', online: true },
  { name: 'Poly', online: true },
  { name: 'Ajax', online: false },
];

// friends[0].name = 'Ronaldo';
// friends[1].name = 'Messi';
// friends[2].name = 'Neymar';
// friends[3].name = 'Ribery';

// friends[2].surname = 'JR';

// console.table(friends);

// console.table(friends);
// for (const friend of friends) {

//   friends[0].name = 'Anton';
//   console.log(friend.name);
// }

// console.table(friends);

// const findFriendByName = function (allFriends, friendName) {
//   for (const friend of allFriends) {
//     if (friend.name === friendName) {
//       return 'Знайдено';
//     }
//   }
//   return ' Не Знайдено';
// };

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));

// const getAllNames = function (allFriends) {
//   const names = [];

//   for (const friend of allFriends) {
//     console.log(friend.name);

//     names.push(friend.name);
//   }

//     return names;
// };

// console.log(getAllNames(friends));

const getOnlineFriends = function (allFriends) {
  const onlineFriends = [];
  for (const friend of allFriends) {
    console.log(friend.online);
    if (friend.online) {
      onlineFriends.push(friend);
    }
  }
  return onlineFriends;
};

console.log(getOnlineFriends(friends));
