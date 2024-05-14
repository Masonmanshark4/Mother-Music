// Function to fetch weather data based on latitude and longitude
async function getWeatherByCoordinates(latitude, longitude) {
    const apiKey = '0ac58c472dada37a5002a871e77ddf07';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const weatherData = await response.json();
        callback(weatherData);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        callback(null);
    }
}

// Obtain user's geolocation
function getUserLocation() {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    resolve({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    });
                },
                (error) => {
                    reject('Error getting geolocation: ' + error.message);
                }
            );
        } else {
            reject('Geolocation is not supported by this browser.');
        }
    });
}

async function fetchWeatherAndGeneratePlaylist() {
    try {
        const { latitude, longitude } = await getUserLocation();
        getWeatherByCoordinates(latitude, longitude, async (weather) => {
            if (weather) {
                await generatePlaylist(weather);
                console.log('Generated playlist:', playlist);
            }
        });
    } catch (error) {
        console.error('Error fetching weather and playlist:', error);
    }
}

fetchWeatherAndGeneratePlaylist();
