function getWeather() {
    const city = document.getElementById("cityInput").value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e0ebac425e30cb7e26c08e148e1c1b3e&units=imperial`)
    .then(response => response.json())
    .then(data => {
        document.getElementById("cityName").innerText = data.name;
        document.getElementById("temperature").innerText = `Temperature: ${data.main.temp}°F`;
        document.getElementById("humidity").innerText = `Humidity: ${data.main.humidity}%`;
        document.getElementById("emoji").innerText = getWeatherEmoji(data.weather[0].main);
    })
    .catch(error => console.error('Error:', error));
}

function getWeatherEmoji(weather) {
    switch (weather) {
        case 'Clear':
            return '☀️';
        case 'Clouds':
            return '☁️';
        case 'Rain':
            return '🌧️';
        case 'Drizzle':
            return '🌧️';
        case 'Thunderstorm':
            return '⛈️';
        case 'Snow':
            return '❄️';
        default:
            return '🌫️';
    }
}
