const router = require('express').Router();
const songController = require('./controllers/api/musicgen');

router.use('/songs', musicgen);

module.exports = router;
