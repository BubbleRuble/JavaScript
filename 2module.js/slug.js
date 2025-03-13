const title = 'Top 10 wrestlers of ALL TIME by Mike Jagger';

const normalizedTitle = title.toLowerCase();
// console.log(normalizedTitle);

const link = normalizedTitle.split(' ');
// console.log(link);

const slug = link.join('-');
// console.log(slug);

const slug1 = title.toLowerCase().split(' ').join('-');
console.log(slug1);

