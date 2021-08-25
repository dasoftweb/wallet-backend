const { transaction: service } = require('../../services');

const getTransactionById = async (req, res, next) => {
  const { transactionId } = req.params;
  const userId = req.user.id;
  try {
    const result = await service.getTransactionById(userId, transactionId);
    if (!result) {
      return await res.status(404).json({
        status: 'error',
        code: 404,
        message: 'Not found',
      });
    }
    await res.json({
      status: 'success',
      code: 200,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getTransactionById;
