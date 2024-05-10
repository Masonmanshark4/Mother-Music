// Function to fetch weather data based on latitude and longitude
async function getWeatherByCoordinates(latitude, longitude) {
    const apiKey = 'YOUR_OPENWEATHER_API_KEY';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const weatherData = await response.json();
        return weatherData;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
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
