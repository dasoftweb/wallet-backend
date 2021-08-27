const listTransactions = require('./listTransactions.js');
const getTransactionById = require('./getTransactionById.js');
const addTransaction = require('./addTransaction.js');
const updateTransaction = require('./updateTransaction.js');
const removeTransaction = require('./removeTransaction.js');
const getStatistics = require('./getStatistics.js');
const getCategories = require('./getCategories.js');

module.exports = {
  listTransactions,
  getTransactionById,
  addTransaction,
  updateTransaction,
  removeTransaction,
  getStatistics,
  getCategories,
};
