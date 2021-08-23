const { transaction: service } = require('../../services');

const updateTransaction = async (req, res, next) => {
  const { transactionId } = req.params;
  const userId = req.user.id;
  try {
    const result = await service.updateTransaction(userId, transactionId, { ...req.body });
    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({
        status: 'error',
        code: 400,
        message: 'missing fields',
      });
    }

    if (!result) {
      return res.status(404).json({
        status: 'error',
        code: 404,
        message: 'Not found',
      });
    }
    await res.status(201).json({
      status: 'success',
      code: 201,
      data: { result },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updateTransaction;
