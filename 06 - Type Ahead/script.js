const searchBox = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
const endpoint =
	'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint).then((blob) => blob.json()).then((data) => cities.push(...data));

function findMatches(wordToMatch, citiesArr) {
	return citiesArr.filter((cityObj) => {
		const { city, state } = cityObj;
		const regexp = new RegExp(wordToMatch, 'gi');
		return city.match(regexp) || state.match(regexp);
	});
}

function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
	const filteredCities = findMatches(this.value, cities);
	const html = filteredCities
		.map((place) => {
			const regexp = new RegExp(this.value, 'gi');
			const cityName = place.city.replace(regexp, `<span class='hl'>${this.value}</span>`);
			const stateName = place.state.replace(regexp, `<span class='hl'>${this.value}</span>`);
			return `<li>
              <span class='name'>${cityName}, ${stateName}</span>
              <span class='population'>${numberWithCommas(place.population)}</span>
              </li>`;
		})
		.join('');
	suggestions.innerHTML = html;
}

searchBox.addEventListener('input', displayMatches);
