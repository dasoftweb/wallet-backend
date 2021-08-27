const { Transaction } = require('../models');
const { User } = require('../models');
const { Category } = require('../models');
const { paginationLabels } = require('../helpers');

const addTransaction = async newTransaction => {
  const { owner, type, amount } = newTransaction;
  const user = await User.findOne({ _id: owner });
  let incom;
  let outcome;
  let userbalance;

  if (type === '+') {
    incom = user.incom + Number(amount);
    incom = user.incom;
    userbalance = user.balance + Number(amount);
  }
  if (type === '-') {
    incom = user.incom;
    outcome = user.outcome;
    userbalance = user.balance - Number(amount);
  }

  await User.findByIdAndUpdate(owner, {
    incom: incom,
    outcome: outcome,
    balance: userbalance,
  });

  return Transaction.create({ ...newTransaction, balanceAfter: userbalance });
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

const getStatistics = (userId, { date }) => {
  if (!date) {
    throw new Error('date Required');
  }

  return Transaction.aggregate([
    {
      $match: {
        owner: new mongoose.Types.ObjectId(userId),
        date: {
          $gte: new Date(date),
        },
      },
    },
    {
      $project: {
        _id: 0,
        category: 1,
        outcome: {
          // Collect all transaction outcomes
          $cond: [{ $eq: ['$type', '-'] }, '$amount', 0],
        },
      },
    },
    {
      $group: {
        _id: '$category',
        outcom: { $sum: '$outcome' },
      },
    },
  ]);
};

const getCategories = () => {
  const result = Category.find()
  return result
}

module.exports = {
  addTransaction,
  listTransactions,
  getTransactionById,
  removeTransaction,
  updateTransaction,
  getStatistics,
  getCategories,
};
