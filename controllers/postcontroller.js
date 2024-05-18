const router = require('express').Router();
const { Post } = require('../models');
const withAuth = require('../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      title: req.body.title,
      content: req.body.post_content,
      song_name: req.body.songName,
      song_artist: req.body.songArtist,
      user_id: req.session.user_id
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
