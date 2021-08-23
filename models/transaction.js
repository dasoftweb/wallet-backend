const { model } = require('mongoose');

const { transactionSchema } = require('./schemas');

const Transaction = model('transaction', transactionSchema);

module.exports = Transaction;
