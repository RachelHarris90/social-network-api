const { User } = require('../models');

module.exports = {
  getUsers(req, res) {
    User.find({})
      .select("-__v")
      .then((user) => res.json(user))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  

  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },

  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body }
    )
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },

    deleteUser(req, res) {
      User.findOneAndDelete(
        { _id: req.params.userId },
        { $set: req.body }
      )
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err));
    },

    createFriend(req, res) {
      User.create(req.body)
        .then((friend) => res.json(friend))
        .catch((err) => {
          console.log(err);
          return res.status(500).json(err);
        });
    },
  
    deleteFriend(req, res) {
      User.findOneAndDelete(
        { _id: req.params.userId },
        { $pull: { friends: params.friendsId } },
        { new: true }
      )
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err));
    },
};