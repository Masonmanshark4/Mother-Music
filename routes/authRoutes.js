const router = require('express').Router();
const authController = require('./controllers/authcontroller');

router.use('/auth', authController);

module.exports = router;
