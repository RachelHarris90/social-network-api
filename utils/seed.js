const connection = require('../config/connection');
const { Thought, User } = require('../models');
const userData = require('./data.json')

connection.on('error', (err) => err);

connection.once('open', async () => {
  try {

  await User.deleteMany({});
  await User.collection.insertMany(userData);

  console.log('Seeding done!');
  process.exit(0);
} catch (err) {
  throw err;
  }
});
