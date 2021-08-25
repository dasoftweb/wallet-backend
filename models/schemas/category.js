const { Schema } = require('mongoose');

const categorySchema = Schema(
  {
    name: {
      type: String,
      minlength: [3, 'should consist of more than two characters'],
      required: [true, 'Set name for Category'],
    },
  },
  { versionKey: false, timestamps: true },
);

module.exports = categorySchema;
