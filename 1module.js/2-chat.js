const isOnline = true;
const isFriend = true;
const isDnd = false;

const canOpenChat = isOnline && isFriend && !isDnd;
console.log('Я можу відкрити чат  ?', canOpenChat)