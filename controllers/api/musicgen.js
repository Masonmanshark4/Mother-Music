const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');

const app = express();
const spotifyApi = new SpotifyWebApi({
  clientId: 'your_client_id',
  clientSecret: 'your_client_secret'
});

// Authenticate with Spotify API
spotifyApi.clientCredentialsGrant()
  .then(data => {
    spotifyApi.setAccessToken(data.body.access_token);
  })
  .catch(error => {
    console.error('Error authenticating with Spotify API:', error);
  });

// Route to generate a random song
app.get('/random-song', async (req, res) => {
  try {
    // Get a random track from Spotify
    const randomOffset = Math.floor(Math.random() * 1000); // Adjust as needed
    const randomTracks = await spotifyApi.getPlaylistTracks('your_playlist_id', { offset: randomOffset });
    const randomTrackIndex = Math.floor(Math.random() * randomTracks.body.items.length);
    const randomTrack = randomTracks.body.items[randomTrackIndex].track;

    // Format the response
    const song = {
      name: randomTrack.name,
      artist: randomTrack.artists.map(artist => artist.name).join(', '),
      album: randomTrack.album.name,
      previewUrl: randomTrack.preview_url,
      externalUrl: randomTrack.external_urls.spotify
    };

    res.json(song);
  } catch (error) {
    console.error('Error retrieving random song:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
