const express = require('express');
const router = express.Router();
const { signup, login, getProfile } = require('../controllers/userController');

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.post('/signup', signup);

router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', login);

router.get('/profile/:id', getProfile);

module.exports = router;
