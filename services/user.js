const { User } = require('../models');

const getById = id => {
  return User.findById(id);
};

const getOne = filter => {
  return User.findOne(filter);
};

const addUser = ({ email, password, name, verifyToken }) => {
  const newUser = new User({ email, name, verifyToken });
  newUser.setPassword(password);
  return newUser.save();
};

const updateById = (id, updateInfo) => {
  return User.findByIdAndUpdate(id, updateInfo, { new: true, runValidators: true });
};

module.exports = { getById, getOne, addUser, updateById };
