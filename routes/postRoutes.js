const router = require('express').Router();
const postController = require('./controllers/postcontroller');

router.use('/posts', postController);

module.exports = router;
