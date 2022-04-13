const { thought, user } = require('../models');

module.exports = {
  createFriend(req, res) {
    thought.create(req.body)
      .then((friend) => res.json(friend))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  deleteFriend(req, res) {
    thought.findOneAndDelete({ _id: req.params.friendId })
      .then((friend) =>
        !friend
          ? res.status(404).json({ message: 'No friend with that ID' })
          : user.deleteMany({ _id: { $in: friend.user } })
      )
      .then(() => res.json({ message: 'friend and user deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
};
