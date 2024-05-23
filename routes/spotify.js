const express = require('express');
const router = express.Router();
const { getRandomTrack } = require('../controllers/spotifyController');

router.get('/random-track', async (req, res) => {
  try {
    const track = await getRandomTrack();
    res.json(track);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch random track' });
  }
});

module.exports = router;
