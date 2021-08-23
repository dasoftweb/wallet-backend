const { Transaction } = require('../models');
const { paginationLabels } = require('../helpers');

const addTransaction = newTransaction => {
  return Transaction.create(newTransaction);
};

const listTransactions = (userId, query) => {
  const { page, limit, offset, sortBy } = query;

  const paginateOptions = {
    page: page || 1,
    limit: limit || 20,
    offset: offset || [(page - 1) * limit],
    sort: {
      ...(sortBy ? { [`${sortBy}`]: 1 } : {}),
    },
    customLabels: paginationLabels,
  };

  const queryList = { owner: userId };

  return Transaction.paginate(queryList, paginateOptions);
};

const getTransactionById = (userId, transactionId) => {
  return Contact.findById({
    owner: userId,
    _id: transactionId,
  });
};

const removeTransaction = (userId, transactionId) => {
  return Transaction.findByIdAndDelete({
    owner: userId,
    _id: transactionId,
  });
};

const updateTransaction = (userId, transactionId, data) => {
  return Transaction.findByIdAndUpdate(
    {
      owner: userId,
      _id: transactionId,
    },
    data,
    { new: true },
  );
};

const updateTransactionStatus = (userId, transactionId, data) => {
  return Transaction.findByIdAndUpdate(
    {
      owner: userId,
      _id: transactionId,
    },
    data,
    { new: true },
  );
};

module.exports = {
  addTransaction,
  listTransactions,
  getTransactionById,
  removeTransaction,
  updateTransaction,
  updateTransactionStatus,
};
