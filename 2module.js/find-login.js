const logins = ['m4ngoDoge', 'Kividab3st', 'poly1scute', 'aj4xth3m4n'];
const loginToFind = 'poly1scute';
let message = `user ${loginToFind} not find`;

// // for(let i = 0; i < logins.length; i += 1) {
// //   const login = logins[i];

// //   if (login === loginToFind) {
// //     message = `user ${loginToFind} find`;
// //     break;
// //   }
   
  
// // }



// for (const login of logins)  {
//   console.log('Login:  ', login)
//   console.log(`${login} === ${loginToFind}: `, login === loginToFind)

//   if (login === loginToFind) {
//         message = `user ${loginToFind} find`;
//         break;
//       }
// }

// console.log(message)

// console.log(logins.includes('aj4xth3m4n')); 

const alert = (logins.includes('aj4xth3m4n')) ? 'yes' : 'no';
console.log(alert)