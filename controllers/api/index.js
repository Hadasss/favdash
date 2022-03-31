const router = require('express').Router();

const itemRoutes = require('./item-routes.js');
const topicRoutes = require('./topic-routes');
const userRoutes = require('./user-routes');

router.use('/items', itemRoutes);
router.use('/topics', topicRoutes);
router.use('/users', userRoutes);

module.exports = router;
