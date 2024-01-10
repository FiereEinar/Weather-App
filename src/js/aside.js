import sideDataCard from '../components/sideData.js';

import feelsLikeIcon from '../assets/icons/thermometer.png';
import humidityIcon from '../assets/icons/humidity.png';
import rain from '../assets/icons/rain.png';
import wind from '../assets/icons/wind.png';

function makeFeelsLike(data) {
    const aside = document.querySelector('.aside');

    const asideCard = document.createElement('div');

    const metaInfo = `${data.current.feelslike_c}°C / ${data.current.feelslike_f}°F`;

    const metaData = {
        icon: feelsLikeIcon,
        title: 'Feels Like',
        info: metaInfo,
    };

    sideDataCard(asideCard, aside, metaData);
}

function makeHumidity(data) {
    const aside = document.querySelector('.aside');

    const asideCard = document.createElement('div');

    const metaData = {
        icon: humidityIcon,
        title: 'Humidity',
        info: `${data.current.humidity}%`,
    };

    sideDataCard(asideCard, aside, metaData);
}

function makeChanceOfRain(data) {
    const aside = document.querySelector('.aside');

    const asideCard = document.createElement('div');

    const metaData = {
        icon: rain,
        title: 'Chances of Rain',
        info: `${data.current.precip_in}%`,
    };

    sideDataCard(asideCard, aside, metaData);
}

function makeWindSpeed(data) {
    const aside = document.querySelector('.aside');

    const asideCard = document.createElement('div');

    const metaInfo = `${data.current.wind_kph}kph / ${data.current.wind_mph}mph`;

    const metaData = {
        icon: wind,
        title: 'Wind Speed',
        info: metaInfo,
    };

    sideDataCard(asideCard, aside, metaData);
}

export { makeFeelsLike, makeHumidity, makeChanceOfRain, makeWindSpeed };
