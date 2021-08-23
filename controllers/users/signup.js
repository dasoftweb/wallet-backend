const { user: service } = require('../../services');
const { nanoid } = require('nanoid');
const { sendMail } = require('../../utils');
require('dotenv').config();

const { BACKEND_URL } = process.env;

const signup = async (req, res, next) => {
  const { email, password, name } = req.body;
  try {
    const result = await service.getOne({ email });
    if (result) {
      res.status(409).json({
        status: 'Conflict',
        code: 409,
        message: 'Email in use',
      });
      return;
    }
    const verifyToken = nanoid();
    const newUser = await service.addUser({
      email,
      password,
      name,
      verifyToken,
    });
    const message = {
      to: email,
      subject: 'Verify your E-mail',
      html: `<h3>Hello, ${name}</h3>
      <p>to finish your registration you need to verify your e-mail address</p>
      <center><a href="${BACKEND_URL}/api/v1/users/verify/${verifyToken}">
      <h3>Verify my email</h3></a></center><hr><h4>Kind regards, Service Team</h4>`,
    };
    await sendMail(message);
    res.status(201).json({
      status: 'Created',
      code: 201,
      data: {
        user: {
          email: newUser.email,
          name: newUser.name,
        },
        message: `Please, verify your E-mail`,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = signup;
