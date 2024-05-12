// function to fetch weather data
function renderWeather(weatherData) {
    const weatherWidget = document.getElementById('weather-widget');
    weatherWidget.innerHTML = `
        <h2>Weather in ${weatherData.name}</h2>
        <p>Temperature: ${weatherData.main.temp}°C</p>
        <p>Weather: ${weatherData.weather[0].description}</p>
    `;
}

// function to render playlist information in a widget
function renderPlaylist(playlistData) {
    const playlistWidget = document.getElementById('playlist-widget');
    playlistWidget.innerHTML = `
        <h2>Playlist: ${playlistData.name}</h2>
        <p>Playlist ID: ${playlistData.id}</p>
    `;
}

// function to display weather and playlist in separate widgets
async function displayWeatherAndPlaylist() {
    const { weatherData, playlistData } = await fetchWeatherDataAndGeneratePlaylist();
    if (weatherData && playlistData) {
        renderWeather(weatherData);
        renderPlaylist(playlistData);
    } else {
        console.log('Unable to fetch weather data or generate playlist.');
    }
}

// Call function to display weather and playlist on widget
displayWeatherAndPlaylist();
