// const title = 'Top 10 benefits of React framework';

// const normalizedTitle = title.toLowerCase();
// const words = normalizedTitle.split(' ');
// const slug = words.join('-');

// const slug1 = title.toLowerCase().split(' ').join('-');

// console.log(slug1);

// const slugify = function (string) {
//   const normalizedString = string.toLowerCase();
//   const words = normalizedString.split(' ');
//   const slug = words.join('-');

//   return slug;
// }

// console.log(slugify('Top 10 benefits of React framework'));
// console.log(slugify('Azure Static Wed Apps are Awesome'));
// console.log(slugify('Technical writing tips for non-native English speakers'));

const slugify = function (string) {
  return string.toLowerCase().split(' ').join('-');

};

console.log(slugify('Anton is My Best Friend'));
console.log(slugify('What this Word have to Mean'));
console.log(slugify('i cant shoot Em Anymore'));
