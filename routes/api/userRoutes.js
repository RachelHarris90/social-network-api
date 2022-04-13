const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
} = require('../../controllers/studentController');

// /api/students
router.route('/').get(getUsers).post(createUser);

// /api/students/:studentId
router.route('/:studentId').get(getSingleUser).delete(deleteUser);

module.exports = router;
