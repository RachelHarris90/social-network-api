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
      type: string,
      required: true,
      ref: 'User',
    },
    reactions: 
      [],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
        // add reaction count virtual
    },
  }
);

const Course = model('course', thoughtSchema);

module.exports = Course;


// const reactionSchema = new Schema(
//   {
//     reactionId: {
//       type: String,
//       required: true,
//       max_length: 280,
//     },
//     reactionBody: {
//       type: String,
//       required: true,
//       max_length: 280,
//     },
//     username: {
//       type: string,
//       required: true,
//       ref: 'User',
//     },
//     createdAt: {
//       type: Date,
//       default: Date.now(),
//     },
//   },
//   {
//     toJSON: {
//       getters: true,
//       virtuals: true,
//         // add reaction count virtual
//     },
//   }
// );