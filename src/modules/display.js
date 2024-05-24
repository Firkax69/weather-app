const display = (() => {
    function setSearchResult(weatherData) {
        if (!weatherData) return;

        const searchResult = document.getElementById('searchResult');
        searchResult.classList.add('active');

        const cityName = document.getElementById('cityName');
        const temperature = document.getElementById('temperature');
        const feelsLike = document.getElementById('feelsLike');
        const humidity = document.getElementById('humidity');
        const wind = document.getElementById('wind');
        const pressure = document.getElementById('pressure');

        cityName.textContent = `${weatherData.cityName}`;
        temperature.textContent = `${weatherData.temperature} °C`;
        feelsLike.textContent = `${weatherData.feelsLike} °C`;
        humidity.textContent = `${weatherData.humidity} %`;
        wind.textContent = `${weatherData.windSpeed} km/h`;
        pressure.textContent = `${weatherData.pressure} hPa`;
    }

    return { setSearchResult };
})();

export default display;