const { nanoid } = require('nanoid');
const { user: service } = require('../../services');
const { sendMail } = require('../../utils');

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
    const newUser = await service.addUser({ email, password, name, verifyToken });
    const message = {
      to: email,
      subject: 'Verify your E-mail',
      html: `<h3>Hello,</h3>
      <p>to finish your registation you need to verify your e-mail address</p>
      <center><a href="http://localhost:3000/api/v1/users/verify/${verifyToken}">
      <h3>Verify my email</h3></a></center><hr><h4>Kind regeards, Service Team</h4>`,
    };
    await sendMail(message);
    res.status(201).json({
      status: 'Created',
      code: 201,
      data: {
        user: {
          email: newUser.email,
          name: newUser.name,
          message: `Please, verify your E-mail`,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = signup;
