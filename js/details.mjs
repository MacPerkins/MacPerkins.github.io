const baseURL = "https://swapi.py4e.com/api/";

// Function to fetch data from a specific endpoint
function fetchData(endpoint) {
    return fetch(endpoint)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch(error => {
            console.error(`Error fetching data from ${endpoint}:`, error);
        });
}

// Function to generate character cards with links to detail page
function generateCharacterCards(characters) {
    const container = document.getElementById('group-container');
    document.getElementById('group-title').innerHTML = "Characters";
    
    // Iterate over each character
    characters.forEach(character => {
        // Create HTML using the provided template
        // <a href="../detail/index.html?type=characters&?id=${character.url.split('/').slice(-2, -1)}"><h2>${character.name}</h2></a>
        const html = `
            <section class="group-card">
                <h2>${character.name}</h2>
                <p class="character__description">
                    Birth Year: ${character.birth_year}<br>
                    Gender: ${character.gender}<br>
                    Eye Color: ${character.eye_color}<br>
                    Hair Color: ${character.hair_color}<br>
                    Skin Color: ${character.skin_color}<br>
                    Height: ${character.height}<br>
                    Mass: ${character.mass}<br>
                </p>
            </section>`;
        
        // Append the HTML to the container
        container.innerHTML += html;
    });
}

function generateFilmCards(films) {
    const container = document.getElementById('group-container');
    document.getElementById('group-title').innerHTML = "Films";
    
    // Iterate over each character
    films.forEach(film => {
        // Create HTML using the provided template
        // <a href="../detail/index.html?type=characters&?id=${character.url.split('/').slice(-2, -1)}"><h2>${character.name}</h2></a>
        const html = `
            <section class="group-card">
                <h2>${film.title}</h2>
                <p class="film__description">
                    Episode: ${film.episode_id}<br>
                    Director: ${film.director}<br>
                    Producer(s): ${film.producer}<br>
                </p>
            </section>`;
        
        // Append the HTML to the container
        container.innerHTML += html;
    });
}

function generatePlanetCards(planets) {
    const container = document.getElementById('group-container');
    document.getElementById('group-title').innerHTML = "Planets";
    
    // Iterate over each character
    planets.forEach(planet => {
        // Create HTML using the provided template
        // <a href="../detail/index.html?type=characters&?id=${character.url.split('/').slice(-2, -1)}"><h2>${character.name}</h2></a>
        const html = `
            <section class="group-card">
                <h2>${planet.name}</h2>
                <p class="planet__description">
                    Population: ${planet.population}<br>
                    Climate: ${planet.climate}<br>
                    Terrain: ${planet.terrain}<br>
                    Gravity: ${planet.gravity}<br>
                    Surface Water: ${planet.surface_water}<br>
                    Diameter: ${planet.diameter}<br>
                </p>
            </section>`;
        
        // Append the HTML to the container
        container.innerHTML += html;
    });
}

function generateSpeciesCards(species) {
    const container = document.getElementById('group-container');
    document.getElementById('group-title').innerHTML = "Species";
    
    // Iterate over each character
    species.forEach(specie => {
        // Create HTML using the provided template
        // <a href="../detail/index.html?type=characters&?id=${character.url.split('/').slice(-2, -1)}"><h2>${character.name}</h2></a>
        const html = `
            <section class="group-card">
                <h2>${specie.name}</h2>
                <p class="specie__description">
                    Classification: ${specie.classification}<br>
                    Language: ${specie.language}<br>
                    Designation: ${specie.designation}<br>
                    Average Lifespan: ${specie.average_lifespan}<br>
                </p>
            </section>`;
        
        // Append the HTML to the container
        container.innerHTML += html;
    });
}

function generateStarshipCards(starships) {
    const container = document.getElementById('group-container');
    document.getElementById('group-title').innerHTML = "Starships";
    
    // Iterate over each character
    starships.forEach(starship => {
        // Create HTML using the provided template
        // <a href="../detail/index.html?type=characters&?id=${character.url.split('/').slice(-2, -1)}"><h2>${character.name}</h2></a>
        const html = `
            <section class="group-card">
                <h2>${starship.name}</h2>
                <p class="specie__description">
                    Starship Class: ${starship.starship_class}<br>
                    Manufacturer: ${starship.manufacturer}<br>
                    Cost in Credits: ${starship.cost_in_credits}<br>
                    Passengers: ${starship.passengers}<br>
                    HyperDrive Rating: ${starship.hyperdrive_rating}<br>
                    Crew: ${starship.crew}<br>
                    Length: ${starship.length}<br>
                </p>
            </section>`;
        
        // Append the HTML to the container
        container.innerHTML += html;
    });
}

function generateVehicleCards(vehicles) {
    const container = document.getElementById('group-container');
    document.getElementById('group-title').innerHTML = "Vehicles";
    
    // Iterate over each character
    vehicles.forEach(vehicle => {
        // Create HTML using the provided template
        // <a href="../detail/index.html?type=characters&?id=${character.url.split('/').slice(-2, -1)}"><h2>${character.name}</h2></a>
        const html = `
            <section class="group-card">
                <h2>${vehicle.name}</h2>
                <p class="specie__description">
                    Vehicle Class: ${vehicle.vehicle_class}<br>
                    Manufacturer: ${vehicle.manufacturer}<br>
                    Cost in Credits: ${vehicle.cost_in_credits}<br>
                    Passengers: ${vehicle.passengers}<br>
                    Max Atmosphere Speed: ${vehicle.max_atmosphering_speed}<br>
                    Crew: ${vehicle.crew}<br>
                    Length: ${vehicle.length}<br>
                </p>
            </section>`;
        
        // Append the HTML to the container
        container.innerHTML += html;
    });
}

// Function to fetch character data
function fetchCharacterData() {
    const charactersURL = baseURL + "people/";
    fetchGroupData(charactersURL, generateCharacterCards);
}

// Function to fetch film data
function fetchFilmData() {
    const filmsURL = baseURL + "films/";
    fetchGroupData(filmsURL, generateFilmCards);
}

// Function to fetch planet data
function fetchPlanetData() {
    const planetsURL = baseURL + "planets/";
    fetchGroupData(planetsURL, generatePlanetCards);
}

// Function to fetch species data
function fetchSpeciesData() {
    const speciesURL = baseURL + "species/";
    fetchGroupData(speciesURL, generateSpeciesCards);
}

// Function to fetch starship data
function fetchStarshipData() {
    const starshipsURL = baseURL + "starships/";
    fetchGroupData(starshipsURL, generateStarshipCards);
}

// Function to fetch vehicle data
function fetchVehicleData() {
    const vehiclesURL = baseURL + "vehicles/";
    fetchGroupData(vehiclesURL, generateVehicleCards);
}

// Function to fetch data for a specific group and process it
function fetchGroupData(groupURL, processDataFunction) {
    // Array to store promises for each fetch operation
    const fetchPromises = [];

    // Fetch the first page to determine the total number of pages
    fetchPromises.push(fetchData(groupURL));

    // Resolve the first promise to get the total number of pages
    Promise.all(fetchPromises)
        .then(([firstPage]) => {
            const totalPages = Math.ceil(firstPage.count / firstPage.results.length);

            // Generate promises to fetch data from each page
            for (let page = 2; page <= totalPages; page++) {
                fetchPromises.push(fetchData(`${groupURL}?page=${page}`));
            }

            // Resolve all promises concurrently
            Promise.all(fetchPromises)
                .then(pagesData => {
                    // Combine results from all pages into a single array
                    const allData = pagesData.reduce((acc, page) => acc.concat(page.results), []);

                    // Process the data using the provided function
                    processDataFunction(allData);
                })
                .catch(error => {
                    console.error(`Error fetching ${groupURL} data:`, error);
                });
        })
        .catch(error => {
            console.error(`Error fetching ${groupURL} data:`, error);
        });
}

// Function to get URL parameter by name
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Get the value of the 'type' parameter from the URL
const type = getUrlParameter('type');

if (type === 'characters') {
    fetchCharacterData();
} else if (type === 'films') {
    fetchFilmData();
} else if (type === 'planets') {
    fetchPlanetData();
} else if (type === 'species') {
    fetchSpeciesData();
} else if (type === 'starships') {
    fetchStarshipData();
} else if (type === 'vehicles') {
    fetchVehicleData();
} else {
    console.error('Invalid type parameter:', type);
}

// Function to fetch all data from all endpoints
function fetchAllData() {
    const endpoints = [
        'films',
        'people',
        'planets',
        'species',
        'starships',
        'vehicles'
    ];

    // Array to store promises for each fetch operation
    const fetchPromises = [];

    // Iterate over each endpoint and fetch data
    endpoints.forEach(endpoint => {
        const url = baseURL + endpoint + '/';
        fetchPromises.push(fetchData(url));
    });

    // // Resolve all promises concurrently
    // return Promise.all(fetchPromises)
    //     .then(dataArray => {
    //         // Log the parsed JSON data for each endpoint
    //         dataArray.forEach((data, index) => {
    //             console.log(`Data from ${endpoints[index]}:`, data);
    //         });
    //     })
    //     .catch(error => {
    //         console.error('Error fetching all data:', error);
    //     });
}

// Call the function to fetch all data
fetchAllData();
