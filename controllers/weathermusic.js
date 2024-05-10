








//might have to rethink the purpose of this file


const axios = require('axios'); // For making HTTP requests
const SpotifyWebApi = require('spotify-web-api-node');

const apiKey = 'YOUR_OPENWEATHER_API_KEY';
const city = 'YOUR_CITY_NAME';
const spotifyID = 'YOUR_SPOTITFY_ID';
const spotifySecret = 'YOUR_SPOTIFY_SECRET';

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

const spotifyAPI = new SpotifyWebApi({
    id: spotifyID,
    secret: spotifySecret
});

async function getWeather() {
    try {
        const response = await axios.get(apiUrl);
        const weatherData = response.data;
        return weatherData;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
};

async function authenticateSpotify() {
    try {
        const data = await spotifyAPI.clientCredentialsGrant();
        spotifyAPI.setAccessToken(data.body['access_token']);
    } catch (error) {
        console.error('Error authenticating Spotify:', error);
    }
};

async function selectPlaylist(weatherCondition) {
    
    


    if (weatherCondition === 'Clear') {
      return 'upbeat_playlist';
    } else if (weatherCondition === 'Rain') {
      return 'relaxing_playlist';
    } else {
      return 'default_playlist';
    }
  }
  
  async function generatePlaylist() {
    try {
      await authenticateSpotify();
      const weather = await getWeather();
      if (weather) {
        const playlistName = await selectPlaylist(weather);
        const playlists = await spotifyApi.searchPlaylists(playlistName);
        if (playlists.body.playlists.total > 0) {
          const playlist = playlists.body.playlists.items[0];
          console.log('Generated playlist:', playlist.name);
          console.log('Playlist ID:', playlist.id);
        } else {
          console.log(`No playlist found for "${playlistName}"`);
        }
      } else {
        console.log('Failed to fetch weather data. Unable to generate playlist.');
      }
    } catch (error) {
      console.error('Error generating playlist:', error);
    }
  }
  
  generatePlaylist();