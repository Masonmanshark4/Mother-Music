const router = require('express').Router();
const musicgen = require('./controllers/api/spotify.js');

router.use('/songs', spotify);

module.exports = router;
