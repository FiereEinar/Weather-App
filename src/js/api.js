async function getWeather(url) {
    try {
        const response = await fetch(url);
        const weatherData = await response.json(response);

        return weatherData;
    } catch (error) {
        throw new Error(error.message);
    }
}

function buildURL(place) {
    return `https://api.weatherapi.com/v1/current.json?key=cf046dac5ca44be4bf265102240501&q=${place}`;
}

export { getWeather, buildURL };
