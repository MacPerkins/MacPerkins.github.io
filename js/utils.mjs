import { fetchAllData, fetchCharacterData, generateCharacterCards, fetchFilmData, generateFilmCards, fetchPlanetData, generatePlanetCards, fetchSpeciesData, generateSpeciesCards, fetchStarshipData, generateStarshipCards, fetchVehicleData, generateVehicleCards, getUrlParameter } from "./details.mjs";

function searchAllData(keyword) {
    const container = document.getElementById('group-container');
    container.innerHTML = '';

    fetchAllData()
        .then(data => {
            const characters = data[1].results.filter(character =>
                JSON.stringify(character).toLowerCase().includes(keyword.toLowerCase())
            );
            generateCharacterCards(characters);

            const films = data[0].results.filter(film =>
                JSON.stringify(film).toLowerCase().includes(keyword.toLowerCase())
            );
            generateFilmCards(films);

            const planets = data[2].results.filter(planet =>
                JSON.stringify(planet).toLowerCase().includes(keyword.toLowerCase())
            );
            generatePlanetCards(planets);

            const species = data[3].results.filter(specie =>
                JSON.stringify(specie).toLowerCase().includes(keyword.toLowerCase())
            );
            generateSpeciesCards(species);

            const starships = data[4].results.filter(starship =>
                JSON.stringify(starship).toLowerCase().includes(keyword.toLowerCase())
            );
            generateStarshipCards(starships);

            const vehicles = data[5].results.filter(vehicle =>
                JSON.stringify(vehicle).toLowerCase().includes(keyword.toLowerCase())
            );
            generateVehicleCards(vehicles);
        })
        .catch(error => {
            console.error('Error searching data:', error);
        });
}

function saveSearchQueries(keyword) {
    let searchQueries = JSON.parse(localStorage.getItem('searchQueries')) || [];
    searchQueries.push(keyword);
    localStorage.setItem('searchQueries', JSON.stringify(searchQueries));
}

function displaySearchQueries() {
    const searchHistoryContainer = document.getElementById('userSearch');
    searchHistoryContainer.innerHTML = ''; // Clear previous search history

    // Retrieve search queries from local storage
    const searchQueries = JSON.parse(localStorage.getItem('searchQueries')) || [];

    // Display each search query in the HTML
    searchQueries.forEach(query => {
        const listItem = document.createElement('li');
        listItem.textContent = query;
        searchHistoryContainer.appendChild(listItem);
    });
}

document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const keyword = document.getElementById('searchInput').value;
    searchAllData(keyword);
    saveSearchQueries(keyword);
    displaySearchQueries();
});