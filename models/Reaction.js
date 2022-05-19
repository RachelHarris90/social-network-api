const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: _id,
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
        type: String,
        required: true,
      },
    createdAt: {
    type: Date,
    default: Date.now,
    },
  },
  {
    toJSON: {
      virtuals: true,
        // add friend count virtual
    },
    id: false,
  }
);

const Reaction = model('reaction', reactionSchema);

module.exports = Reaction;