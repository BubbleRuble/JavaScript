// const c ={
//   z: 5,
// };

// const b = Object.create(c);
// b.y = 2;
// console.log('object c',c);

// console.log('object b',b);

// const a = Object.create(b);
// a.x = 1;

// console.log('object a',a);

// a.z = 10;
// console.log(a);

const dummyObject = Object.create({
  message: 'ЦЕ властивість обєкта прототипу',
});
console.log(dummyObject);
