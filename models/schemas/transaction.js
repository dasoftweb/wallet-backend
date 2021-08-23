const { Schema, SchemaTypes } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const transactionSchema = Schema(
  {
    name: {
      type: String,
      minlength: [3, 'should consist of more than two characters'],
      required: [true, 'Set name for Transaction'],
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
