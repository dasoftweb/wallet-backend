const signup = require('./signup.js');
const login = require('./login.js');
const logout = require('./logout.js');
const getCurrentUser = require('./getCurrentUser.js');
const updateUser = require('./updateUser.js');
const verify = require('./verify.js');
const repeatVerify = require('./repeatVerify.js');

module.exports = {
  signup,
  login,
  logout,
  getCurrentUser,
  updateUser,
  verify,
  repeatVerify,
};
