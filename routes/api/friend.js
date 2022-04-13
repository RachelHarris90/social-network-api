const router = require('express').Router();
const {
  createFriend,
  deleteFriend,
} = require('../../controllers/friendController.js');

// /api/courses
router.route('/').post(createFriend);

// /api/courses/:courseId
router
  .route('/:courseId')
  .delete(deleteFriend);

module.exports = router;
