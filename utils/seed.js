const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { getRandomName, getRandomAssignments } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing courses
  await Thought.deleteMany({});

  // Drop existing users
  await User.deleteMany({});

  // Create empty array to hold the user
  const user = [];

  for (let i = 0; i < 20; i++) {
    users.push({
      username,
      email,
      thoughts,
      friends,
    });
  }

  await User.collection.insertMany(users);

  await Thought.collection.insertOne({
    thoughtText: 'Random thought',
    username: users.username,
    reactions: '1',
  });

  console.table(users);
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
