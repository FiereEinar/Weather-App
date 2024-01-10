import '../css/style.css';

import * as aside from './aside.js';
import * as api from './api.js';
import * as util from './utils.js';
import countriesList from './countries.js';

const container = document.querySelector('.main');

const condition = container.querySelector('.condition');
const country = container.querySelector('.country');
const city = container.querySelector('.city');
const date = container.querySelector('.date');
const weatherIcon = container.querySelector('.weatherIcon');
const temp = container.querySelector('.temp');

showData('Philippines, malaybalay'); // initialization

async function showData(place) {
    const url = api.buildURL(place);
    const data = await api.getWeather(url);
    console.log(data);
    showMainData(data);
    showAsideData(data);
    // showForecast();
}

function showMainData(data) {
    const location = `${data.location.country}, ${data.location.name}`;
    const tempData = `${data.current.temp_c}°C / ${data.current.temp_f}°F`;

    condition.innerHTML = data.current.condition.text;
    country.innerHTML = location;
    city.innerHTML = data.location.name;
    date.innerHTML = data.location.localtime;
    weatherIcon.src = data.current.condition.icon;
    temp.innerHTML = tempData;
}

function showAsideData(data) {
    const asideContainer = document.querySelector('.aside');
    util.clearElement(asideContainer);

    aside.makeFeelsLike(data);
    aside.makeHumidity(data);
    aside.makeChanceOfRain(data);
    aside.makeWindSpeed(data);
}

const seachFunction = (() => {
    const input = document.querySelector('.input');
    const searchResults = document.querySelector('.searchResults');
    const submitBtn = document.querySelector('.submit');

    const list = countriesList;

    input.addEventListener('input', () => {
        if (input.value !== '') {
            filterList(input.value);
        } else {
            hideResults();
        }
    });

    submitBtn.addEventListener('click', () => {
        showData(input.value);
    });

    function filterList(data) {
        util.clearElement(searchResults);

        const capitalizedData = util.capitalize(data);
        const filteredList = getResults(capitalizedData);

        renderAllResults(filteredList);
    }

    function renderAllResults(resultList) {
        if (resultList.length !== 0) {
            showResults();
            resultList.forEach((item) => {
                const result = document.createElement('p');
                result.addEventListener('click', () => {
                    input.value = item;
                    hideResults();
                });
                result.innerHTML = item;
                searchResults.appendChild(result);
            });
        } else {
            hideResults();
        }
    }

    function getResults(matchingWord) {
        return list.filter((item) => item.includes(matchingWord));
    }

    function showResults() {
        searchResults.classList.add('showSearchResults');
    }

    function hideResults() {
        searchResults.classList.remove('showSearchResults');
    }
})();
