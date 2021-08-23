const { transaction: service } = require('../../services');

const listTransactions = async (req, res, next) => {
  const userId = req.user.id;
  const query = req.query;
  try {
    const result = await service.listTransactions(userId, query);
    res.status(200).json({
      status: 'success',
      code: 200,
      data: { result },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = listTransactions;
