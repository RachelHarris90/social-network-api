const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      max_length: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now(),

    },
    username: {
      type: String,
      required: true,
      ref: 'User',
    },
    reactions: {
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
      }
    },
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
        // add reaction count virtual
    },
  }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;

