const router = require('express').Router();
const {
  createReaction,
  deleteReaction,
} = require('../../controllers/reactionController.js');

// /api/reaction/:reactionId
router
  .route('/:reaction')
  .post(createReaction)
  .delete(deleteReaction);

module.exports = router;
