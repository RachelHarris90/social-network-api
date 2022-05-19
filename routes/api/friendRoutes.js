const router = require('express').Router();
const {
  createFriend,
  deleteFriend,
} = require('../../controllers/friendController.js');

// /api/friends
router.route('/').post(createFriend);

// /api/courses/:userId
router
  .route('/:userId')
  .delete(deleteFriend);

module.exports = router;
