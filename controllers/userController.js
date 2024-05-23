const User = require('../models/User');
const bcrypt = require('bcrypt');
const { getRandomTrack } = require('../spotify');

exports.signup = async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: 'User created' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user' });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const randomTrack = await getRandomTrack();
    user.posts.push({ content: 'New post with random track', song: randomTrack });
    await user.save();

    res.json({ message: 'User logged in and post created' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to login' });
  }
};

exports.getProfile = async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      res.render('profile', { user });
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch user profile' });
    }
  };