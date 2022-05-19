const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trimmed: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      // validate: {
      //   validator: () => Promise.resolve(false),
      //   message: 'Email validation failed'
      // }
    },
    thoughts: {
      type: Schema.Types.ObjectId,
      ref: 'thought'
       },
    friends: {
      type: Schema.Types.ObjectId,
      ref: 'user'
      }
    },
    {
      toJSON: {
        virtuals: true,
      },
      id: false,
    }
);

userSchema

const User = model('user', userSchema);

module.exports = User;
