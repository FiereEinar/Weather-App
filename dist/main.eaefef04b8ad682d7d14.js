/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/components/sideData.js
function sideDataCard(element, parent, data) {
    element.innerHTML = `
        <img src="${data.icon}">
        <div>
            <p>${data.title}</p>
            <h4>${data.info}</h4>
        </div>
    `;
    parent.appendChild(element);
}

;// CONCATENATED MODULE: ./src/assets/icons/thermometer.png
const thermometer_namespaceObject = __webpack_require__.p + "images/f74c9084e0edb6145852.png";
;// CONCATENATED MODULE: ./src/assets/icons/humidity.png
const humidity_namespaceObject = __webpack_require__.p + "images/0fa55e43b0d65b99a3fa.png";
;// CONCATENATED MODULE: ./src/assets/icons/rain.png
const rain_namespaceObject = __webpack_require__.p + "images/bea5abbc5600fe7f5cfb.png";
;// CONCATENATED MODULE: ./src/assets/icons/wind.png
const wind_namespaceObject = __webpack_require__.p + "images/7eea5d060c9786961993.png";
;// CONCATENATED MODULE: ./src/js/aside.js







function makeFeelsLike(data) {
    const aside = document.querySelector('.aside');

    const asideCard = document.createElement('div');

    const metaInfo = `${data.current.feelslike_c}°C / ${data.current.feelslike_f}°F`;

    const metaData = {
        icon: thermometer_namespaceObject,
        title: 'Feels Like',
        info: metaInfo,
    };

    sideDataCard(asideCard, aside, metaData);
}

function makeHumidity(data) {
    const aside = document.querySelector('.aside');

    const asideCard = document.createElement('div');

    const metaData = {
        icon: humidity_namespaceObject,
        title: 'Humidity',
        info: `${data.current.humidity}%`,
    };

    sideDataCard(asideCard, aside, metaData);
}

function makeChanceOfRain(data) {
    const aside = document.querySelector('.aside');

    const asideCard = document.createElement('div');

    const metaData = {
        icon: rain_namespaceObject,
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
        icon: wind_namespaceObject,
        title: 'Wind Speed',
        info: metaInfo,
    };

    sideDataCard(asideCard, aside, metaData);
}



;// CONCATENATED MODULE: ./src/js/api.js
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



;// CONCATENATED MODULE: ./src/js/utils.js
function clearElement(element) {
    const prev = element.querySelectorAll('*');
    if (prev !== null) {
        prev.forEach((elmt) => elmt.remove());
    }
}

function capitalize(word) {
    const str2 = word.charAt(0).toUpperCase() + word.slice(1);
    return str2;
}



;// CONCATENATED MODULE: ./src/js/countries.js
// dont worry, I didnt write all of this by hand, chatGPT wrote all of this.

const countryList = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cabo Verde',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombia',
    'Comoros',
    'Congo (Congo-Brazzaville)',
    'Costa Rica',
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czechia (Czech Republic)',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Holy See',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Morocco',
    'Mozambique',
    'Myanmar (formerly Burma)',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'North Korea',
    'North Macedonia (formerly Macedonia)',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Palestine State',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Philippines, luzon',
    'Philippines, visayas',
    'Philippines, mindanao',
    'Philippines, malaybalay',
    'Philippines, valencia',
    'Philippines, cagayan',
    'Philippines, davao',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent and the Grenadines',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'South Korea',
    'South Sudan',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Sweden',
    'Switzerland',
    'Syria',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Timor-Leste',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe',
];

/* harmony default export */ const countries = (countryList);

;// CONCATENATED MODULE: ./src/js/main.js







const container = document.querySelector('.main');

const condition = container.querySelector('.condition');
const country = container.querySelector('.country');
const city = container.querySelector('.city');
const date = container.querySelector('.date');
const weatherIcon = container.querySelector('.weatherIcon');
const temp = container.querySelector('.temp');

showData('Philippines, malaybalay'); // initialization

async function showData(place) {
    const url = buildURL(place);
    const data = await getWeather(url);
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
    clearElement(asideContainer);

    makeFeelsLike(data);
    makeHumidity(data);
    makeChanceOfRain(data);
    makeWindSpeed(data);
}

const seachFunction = (() => {
    const input = document.querySelector('.input');
    const searchResults = document.querySelector('.searchResults');
    const submitBtn = document.querySelector('.submit');

    const list = countries;

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
        clearElement(searchResults);

        const capitalizedData = capitalize(data);
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

/******/ })()
;