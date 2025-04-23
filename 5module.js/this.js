// const fnA = function() {
//   console.log('Privit')
// };

// const fnB = fnA;
// console.log(fnB === fnA);

//

// const showTag = function() {
//   console.log(this);
//   console.log(this.tag);
// };

// const user = {
//   tag: 'Mango',
// };

// user.showUserTag = showTag;
// console.log('user', user);

// user.showUserTag();

// const user = {
//   tag: 'Mango',
//   showTag() {
//     console.log('showTag -> this', this);
//     console.log('showTag -> this.tag', this.tag);
//   },
// };
// user.showTag();

// const outerShowTag = user.showTag;

// outerShowTag();

// const user = {
//   tag: 'Mango',
//   showTag() {
//     console.log('showTag -> this', this);
//     console.log('showTag -> this.tag', this.tag);
//   },
// };

// const invokeAction = function(action) {
//   console.log(action);

//   action();
// };

// invokeAction(user.showTag);
