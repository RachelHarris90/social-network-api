const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    usernmame: {
      type: String,
      required: true,
      unique: true,
      trimmed: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: () => Promise.resolve(false),
        message: 'Email validation failed'
      }
    },
    thoughts:
    // needs to reference the thought model
      [],
    friends: 
      [],
  },
  {
    toJSON: {
      virtuals: true,
        // add friend count virtual
    },
    id: false,
  }
);

const User = model('user', userSchema);

module.exports = User;
