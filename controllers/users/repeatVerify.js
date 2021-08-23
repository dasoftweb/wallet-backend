const { user: service } = require('../../services');
const { nanoid } = require('nanoid');
require('dotenv').config();
const { sendMail } = require('../../utils');

const repeatVerify = async (req, res, next) => {
  const { email } = req.body;
  try {
    const user = await service.getOne({ email });

    if (!email) {
      return res.status(400).json({
        status: 'error',
        code: 400,
        message: 'missing required field email',
      });
    }

    if (!user) {
      return res.status(404).json({
        status: 'error',
        code: 404,
        message: 'User not found',
      });
    }

    if (user.verify) {
      return res.status(400).json({
        status: 'error',
        code: 400,
        message: 'Verification has already been passed',
      });
    }
    const id = user._id;
    const verifyToken = nanoid();
    await service.updateById(id, { verifyToken: verifyToken });

    const message = {
      to: email,
      subject: 'Verify your E-mail',
      html: `<h3>Hello,</h3>
      <p>You have requested new E-mail verification, to finish your registation you need to verify your e-mail address</p>
      <center><a href="http://localhost:3000/api/v1/users/verify/${verifyToken}">
      <h3>Verify my email</h3></a></center><hr><h4>Kind regeards, Service Team</h4>`,
    };

    await sendMail(message);

    res.status(201).json({
      status: 'success',
      code: 201,
      message: 'Verification email sent',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = repeatVerify;
