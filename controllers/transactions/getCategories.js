const { transaction: service } = require('../../services');

const getCategories = async (req, res, next) => {
  try {
    const result = await service.getCategories();
    res.status(200).json({
      status: 'success',
      code: 200,
      data: { result },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getCategories;