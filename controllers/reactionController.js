const { reaction, thought } = require('../models');

module.exports = {
  createReaction(req, res) {
    thought.create(req.body)
      .then((reaction) => res.json(reaction))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  deleteReaction(req, res) {
    reaction.findOneAndDelete({ _id: req.params.reactionId })
      .then((reaction) =>
        !reaction
          ? res.status(404).json({ message: 'No reaction with that ID' })
          : user.deleteMany({ _id: { $in: reaction.user } })
      )
      .then(() => res.json({ message: 'Reaction and user deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
};
