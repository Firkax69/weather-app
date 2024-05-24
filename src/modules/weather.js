const weather = (() => {
    function convertData(data) {
        const {
            name: cityName,
            main: { temp: temperature, feels_like: feelsLike, humidity, pressure },
            wind: { speed: windSpeed },
        } = data;

        const temperatureCelsius = temperature - 273.15;
        const feelsLikeCelsius = feelsLike - 273.15;

        return { cityName, temperature: temperatureCelsius.toFixed(2), feelsLike: feelsLikeCelsius.toFixed(2), humidity, windSpeed, pressure };
    }

    async function getData(city) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},uk&APPID=e7cca6d251d2b69562014fc45e0b0b92`, { mode: 'cors' });
            if (!response.ok) throw new Error(`City ${city} not found`)
            const data = convertData(await response.json())
            return data
        } catch (error) {
            alert(error)
            return null
        }
    }

    return { getData };
})();


export default weather;