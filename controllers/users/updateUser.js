const { user: service } = require('../../services');

const updateUser = async (req, res, next) => {
  const userId = req.user.id;
  try {
    const result = await service.updateById(userId, { ...req.body });

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
      data: {
        user: { email: result.email, name: result.name },
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updateUser;
