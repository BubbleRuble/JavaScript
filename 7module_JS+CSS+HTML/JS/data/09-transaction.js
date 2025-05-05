import transactionHistory from './transaction.js';

const makeTransactionTableRawMarkup = transaction => {
  const { id, amount, date, business, name, type, account } = transaction;
  return `
    <tr>
      <td>${id}</td>
      <td>${amount}</td>
      <td>${date}</td>
      <td>${business}</td>
      <td>${name}</td>
      <td>${type}</td>
      <td>${account}</td>
    </tr>
  `;
};

console.log(transactionHistory);
console.log(makeTransactionTableRawMarkup(transactionHistory[0]));

const tableEl = document.querySelector('.js-transation-table');

const makeTransactionTableRows = transactionHistory.map(
  makeTransactionTableRawMarkup,
).join('');

tableEl.insertAdjacentHTML('beforeend', makeTransactionTableRows)


console.log(makeTransactionTableRows);

