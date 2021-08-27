const { Schema } = require('mongoose');

const bcrypt = require('bcryptjs');

const userSchema = Schema(
  {
    password: {
      type: String,
      min: [6, 'Password should contain minimum 6 characters'],
      required: [true, 'Password is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      validate: [
        /^[\w-]+@([\w-]+\.)+[\w-]{2,7}$/,
        'Provided email is invalid. Provide email in aaa@bbb.ccc format',
      ],
      unique: true,
    },
    name: {
      type: String,
      min: [3, 'Name should contain minimum 3 characters'],
      required: [true, 'Name is required'],
    },
    token: {
      type: String,
      default: null,
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verifyToken: {
      type: String,
      required: [true, 'Verify token is required'],
    },
    income: {
      type: Number,
      default: 0,
    },
    outcome: {
      type: Number,
      default: 0,
    },
    balance: {
      type: Number,
      default: 0,
    },
  },
  { versionKey: false, timestamps: true },
);

userSchema.methods.setPassword = function (password) {
  this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = userSchema;
