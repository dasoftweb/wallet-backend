const { Schema, SchemaTypes } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const TYPES = {
  INCOME: '+',
  OUTCOME: '-',
};

const CATEGORIES = {
  MAIN_EXPENSES: 'Main expanses',
  FOOD: 'Food',
  CAR: 'Car',
  ENTERTAINMENT: 'Entertainment',
  SELF_CARE: 'Self care',
  CHILD_CARE: 'Child care',
  HOME: 'Home',
  EDUCATION: 'Education',
  RECREATION: 'Trips',
  REGULAR_INCOME: 'Regular Income',
  NON_REGULAR_INCOME: 'Non Regular Income',
};

const transactionSchema = Schema(
  {
    type: {
      type: String,
      required: [true, 'Set type for Transaction'],
      enum: Object.values(TYPES),
    },
    date: {
      type: Date,
      required: [true, 'Set date for Transaction'],
    },
    category: {
      type: String,
      enum: Object.values(CATEGORIES),
      required: true,
    },
    comment: {
      type: String,
      maxlength: 500,
    },
    amount: {
      type: Number,
      required: true,
    },
    balanceAfter: {
      type: Number,
    },
    owner: {
      type: SchemaTypes.ObjectId,
      ref: 'user',
    },
  },
  { versionKey: false, timestamps: true },
);

transactionSchema.plugin(mongoosePaginate);

module.exports = transactionSchema;
