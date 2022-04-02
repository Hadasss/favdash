const router = require('express').Router();

<<<<<<< HEAD
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).end();
})

module.exports = router;
=======
const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
>>>>>>> 76207e1f70b55b1c5cd9b8a674f849ff004d0718
