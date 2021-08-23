const { transaction: service } = require('../../services');

const removeTransaction = async (req, res, next) => {
  const { transactionId } = req.params;
  const userId = req.user.id;
  try {
    const result = await service.removeTransaction(userId, transactionId);
    if (!result) {
      return res.status(404).json({
        status: 'error',
        code: 404,
        message: `Such id: ${transactionId} was not found`,
      });
    }
    await res.status(200).json({
      status: 'success',
      code: 200,
      message: 'Transaction removed',
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = removeTransaction;
