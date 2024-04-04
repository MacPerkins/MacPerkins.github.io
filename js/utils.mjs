import { fetchAllData, fetchCharacterData, generateCharacterCards, fetchFilmData, generateFilmCards, fetchPlanetData, generatePlanetCards, fetchSpeciesData, generateSpeciesCards, fetchStarshipData, generateStarshipCards, fetchVehicleData, generateVehicleCards, getUrlParameter } from "./details.mjs";

// Function to search all API data for a keyword
function searchAllData(keyword) {
    const container = document.getElementById('group-container');
    container.innerHTML = '';

    // Fetch data for all endpoints
    fetchAllData()
        .then(data => {
            // Filter characters data
            const characters = data[1].results.filter(character =>
                JSON.stringify(character).toLowerCase().includes(keyword.toLowerCase())
            );
            generateCharacterCards(characters);

            // Filter films data
            const films = data[0].results.filter(film =>
                JSON.stringify(film).toLowerCase().includes(keyword.toLowerCase())
            );
            generateFilmCards(films);

            // Filter planets data
            const planets = data[2].results.filter(planet =>
                JSON.stringify(planet).toLowerCase().includes(keyword.toLowerCase())
            );
            generatePlanetCards(planets);

            // Filter species data
            const species = data[3].results.filter(specie =>
                JSON.stringify(specie).toLowerCase().includes(keyword.toLowerCase())
            );
            generateSpeciesCards(species);

            // Filter starships data
            const starships = data[4].results.filter(starship =>
                JSON.stringify(starship).toLowerCase().includes(keyword.toLowerCase())
            );
            generateStarshipCards(starships);

            // Filter vehicles data
            const vehicles = data[5].results.filter(vehicle =>
                JSON.stringify(vehicle).toLowerCase().includes(keyword.toLowerCase())
            );
            generateVehicleCards(vehicles);
        })
        .catch(error => {
            console.error('Error searching data:', error);
        });
}

document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const keyword = document.getElementById('searchInput').value;
    searchAllData(keyword); // Call searchAllData with the input value
});
