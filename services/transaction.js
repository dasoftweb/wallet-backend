const { Transaction } = require('../models');
const { paginationLabels } = require('../helpers');
const mongoose = require('mongoose');

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
  return Transaction.findById({
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

const getStatistics = (userId, { dateFrom, dateTo }) => {
  if (!dateFrom) {
    throw new Error('dateFrom Required');
  }

  if (!dateTo) {
    throw new Error('dateTo Required');
  }

  return Transaction.aggregate([
    {
      $match: {
        owner: new mongoose.Types.ObjectId(userId),
        date: {
          $gte: new Date(dateFrom),
          $lt: new Date(dateTo),
        },
      },
    },
    {
      $project: {
        _id: 0,
        category: 1,
        income: {
          // Collect all transaction incomes
          $cond: [{ $eq: ['$type', '+'] }, '$amount', 0],
        },
        outcome: {
          // Collect all transaction outcomes
          $cond: [{ $eq: ['$type', '-'] }, '$amount', 0],
        },
      },
    },
    {
      $group: {
        _id: '$category',
        totalincom: { $sum: '$income' },
        totaloutcom: { $sum: '$outcome' },
      },
    },
  ]);
};

const getBalance = (userId, { dateFrom, dateTo }) => {
  if (!dateFrom) {
    throw new Error('dateFrom Required');
  }

  if (!dateTo) {
    throw new Error('dateTo Required');
  }

  return Transaction.aggregate([
    {
      $match: {
        owner: new mongoose.Types.ObjectId(userId),
        date: {
          $gte: new Date(dateFrom),
          $lt: new Date(dateTo),
        },
      },
    },
    {
      $project: {
        _id: 0,
        type: 1,
        income: {
          // Collect all transaction incomes
          $cond: [{ $eq: ['$type', '+'] }, '$amount', 0],
        },
        outcome: {
          // Collect all transaction outcomes
          $cond: [{ $eq: ['$type', '-'] }, '$amount', 0],
        },
      },
    },
    {
      $group: {
        _id: "userbalance",
        totalincom: { $sum: '$income' },
        totaloutcom: { $sum: '$outcome' },
      },
    },
    {
      $addFields: {
        balance: {
          $subtract: ['$totalincom', '$totaloutcom'],
        },
      },
    },
  ]);
};

module.exports = {
  addTransaction,
  listTransactions,
  getTransactionById,
  removeTransaction,
  updateTransaction,
  updateTransactionStatus,
  getStatistics,
  getBalance,
};
