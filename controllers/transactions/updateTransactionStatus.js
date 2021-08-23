const { transaction: service } = require('../../services');

const updateTransactionStatus = async (req, res, next) => {
  const { transactionId } = req.params;
  const userId = req.user.id;
  const { favorite = false } = req.body;
  try {
    const result = await service.updateTransactionStatus(userId, transactionId, { favorite });

    if (req.body.favorite == null) {
      return res.status(400).json({
        status: 'error',
        code: 400,
        message: 'missing field favorite',
        data: 'Not Found',
      });
    }
    if (!result) {
      return res.status(404).json({
        status: 'error',
        code: 404,
        message: 'Not found',
      });
    }
    await res.json({
      status: 'success',
      code: 200,
      data: { result },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updateTransactionStatus;
