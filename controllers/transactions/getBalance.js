const { transaction: service } = require('../../services');

const getBalance = async (req, res, next) => {
  const userId = req.user.id;
  const query = req.query;
  try {
    const result = await service.getBalance(userId, query);

    res.status(200).json({
      status: 'success',
      code: 200,
      data: { result },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getBalance;
