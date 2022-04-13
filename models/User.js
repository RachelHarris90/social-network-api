const { Schema, model } = require('mongoose');

// Schema to create Student model
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
  // add friend count virtual
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model('user', userSchema);

module.exports = User;
