//  (ініціалізація; умова; пост - вираження)

// for (let i = 100; i >= 10; i -= 2){
// console.log(i)
// }

// const minSalary = 500;
// const maxSalary = 5000;
// const epmloyees = 4;
// let totalSalary = 0;


// for (let i = 1; i <= epmloyees; i += 1) {
//   const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary,);
// console.log(`Зарплатня робітника ${i} - ${salary}`);

// totalSalary += salary;
// }
// console.log('totalSalary', totalSalary);

const min = 10;
const max = 30;
let total = 0;

for (let i = min; i <= max; i += 1) {
 if(i % 2 !== 0) {
 console.log('не парне ', i);
 continue
 }
 console.log('парне: ', i);

 total += i;
}
console.log('total', total)


