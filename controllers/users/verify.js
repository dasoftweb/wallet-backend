const { user: service } = require('../../services');

const verify = async (req, res, next) => {
  const { verificationToken } = req.params;
 
  try {
    const user = await service.getOne({ verifyToken: verificationToken });

    if (!user) {
      return res.status(404).json({
        status: 'error',
        code: 404,
        message: 'User not found',
      });
    }

    await service.updateById(user._id, {
      verify: true,
      verifyToken: ' ',
    });
    
    res.status(200).json({
      status: 'success',
      code: 200,
      message: 'Verification successful',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = verify;