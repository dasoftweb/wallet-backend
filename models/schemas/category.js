const { Schema } = require('mongoose');

const TYPES = {
  INCOME: '+',
  OUTCOME: '-',
};

const categorySchema = Schema(
  {
    name: {
      type: String,
      minlength: [3, 'should consist of more than two characters'],
      required: [true, 'Set name for Category'],
    },
    type: {
      type: String,
      required: [true, 'Set type for Transaction'],
      enum: Object.values(TYPES),
    },
  },
  { versionKey: false, timestamps: true },
);

module.exports = categorySchema;
