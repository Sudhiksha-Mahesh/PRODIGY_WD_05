document.getElementById('getWeather').addEventListener('click', function() {
    const location = document.getElementById('location').value.trim();
    
    if (!location) {
        alert('Please enter a location.');
        return;
    }
    

    fetch(`https://wttr.in/${encodeURIComponent(location)}?format=%t%t%w%t%h`)
        .then(response => response.text())
        .then(data => {
            const [temperature, weather, humidity] = data.split('\t');
            document.getElementById('weatherLocation').textContent = `Weather in ${location}`;
            document.getElementById('weatherDescription').textContent = `Weather: ${weather}`;
            document.getElementById('temperature').textContent = `Temperature: ${temperature}`;
            document.getElementById('humidity').textContent = `Humidity: ${humidity}`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('weatherLocation').textContent = 'Error';
            document.getElementById('weatherDescription').textContent = 'Unable to fetch data';
            document.getElementById('temperature').textContent = '';
            document.getElementById('humidity').textContent = '';
        });
});
