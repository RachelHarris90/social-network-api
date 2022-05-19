const router = require('express').Router();
const thoughtRoutes = require('./thoughtRoutes');
const userRoutes = require('./userRoutes');
const friendRoutes = require('./friendRoutes');

router.use('/thought', thoughtRoutes);
router.use('/user', userRoutes);
router.use('/user', friendRoutes);

module.exports = router;
