const { transaction: service } = require('../../services');

const addTransaction = async (req, res, next) => {
  const { body } = req;
  const userId = req.user.id;
  try {
    const result = await service.addTransaction({ ...body, owner: userId });
    if (!result) {
      res.status(400).json({
        status: 'error',
        code: 400,
        message: 'Bad request',
      });
    }
    res.status(201).json({
      status: 'success',
      code: 201,
      data: { result },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = addTransaction;
