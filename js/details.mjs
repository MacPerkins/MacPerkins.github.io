const baseURL = "https://swapi.py4e.com/api/";

// Function to fetch data from a specific endpoint
export function fetchData(endpoint) {
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
export function generateCharacterCards(characters) {
    const container = document.getElementById('group-container');
    const title = document.getElementById('group-title');
    if (title) {
        title.innerHTML = "Characters";
    }
    // document.getElementById('group-title').innerHTML = "Characters";
    
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

export function generateFilmCards(films) {
    const container = document.getElementById('group-container');
    const title = document.getElementById('group-title');
    if (title) {
        title.innerHTML = "Films";
    }
    // document.getElementById('group-title').innerHTML = "Films";
    
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

export function generatePlanetCards(planets) {
    const container = document.getElementById('group-container');
    const title = document.getElementById('group-title');
    if (title) {
        title.innerHTML = "Planets";
    }
    // document.getElementById('group-title').innerHTML = "Planets";
    
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

export function generateSpeciesCards(species) {
    const container = document.getElementById('group-container');
    const title = document.getElementById('group-title');
    if (title) {
        title.innerHTML = "Species";
    }
    // document.getElementById('group-title').innerHTML = "Species";
    
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

export function generateStarshipCards(starships) {
    const container = document.getElementById('group-container');
    const title = document.getElementById('group-title');
    if (title) {
        title.innerHTML = "Starships";
    }
    // document.getElementById('group-title').innerHTML = "Starships";
    
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

export function generateVehicleCards(vehicles) {
    const container = document.getElementById('group-container');
    const title = document.getElementById('group-title');
    if (title) {
        title.innerHTML = "Vehicles";
    }
    // document.getElementById('group-title').innerHTML = "Vehicles";
    
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
export function fetchCharacterData() {
    const charactersURL = baseURL + "people/";
    fetchGroupData(charactersURL, generateCharacterCards);
}

// Function to fetch film data
export function fetchFilmData() {
    const filmsURL = baseURL + "films/";
    fetchGroupData(filmsURL, generateFilmCards);
}

// Function to fetch planet data
export function fetchPlanetData() {
    const planetsURL = baseURL + "planets/";
    fetchGroupData(planetsURL, generatePlanetCards);
}

// Function to fetch species data
export function fetchSpeciesData() {
    const speciesURL = baseURL + "species/";
    fetchGroupData(speciesURL, generateSpeciesCards);
}

// Function to fetch starship data
export function fetchStarshipData() {
    const starshipsURL = baseURL + "starships/";
    fetchGroupData(starshipsURL, generateStarshipCards);
}

// Function to fetch vehicle data
export function fetchVehicleData() {
    const vehiclesURL = baseURL + "vehicles/";
    fetchGroupData(vehiclesURL, generateVehicleCards);
}

// Function to fetch data for a specific group and process it
export function fetchGroupData(groupURL, processDataFunction) {
    // Fetch the first page to determine the total number of pages
    return fetchData(groupURL)
        .then(firstPage => {
            const totalPages = Math.ceil(firstPage.count / firstPage.results.length);
            const fetchPromises = [Promise.resolve(firstPage)];

            // Generate promises to fetch data from each page (excluding the first page)
            for (let page = 2; page <= totalPages; page++) {
                fetchPromises.push(fetchData(`${groupURL}?page=${page}`));
            }

            // Resolve all promises concurrently
            return Promise.all(fetchPromises);
        })
        .then(pagesData => {
            // Combine results from all pages into a single array
            const allData = pagesData.reduce((acc, page) => acc.concat(page.results), []);

            // Process the data using the provided function
            processDataFunction(allData);
        })
        .catch(error => {
            console.error(`Error fetching ${groupURL} data:`, error);
        });
}

// Function to get URL parameter by name
export function getUrlParameter(name) {
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
}

export function fetchAllData() {
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

    // Return a promise that resolves when all fetch operations are complete
    return Promise.all(fetchPromises);
}

// Add an event listener to the "Sort by Name" button
let ascendingOrder = true; // Track the current sorting order
document.getElementById('sortByName').addEventListener('click', function() {
    // Call the sortAllData function to sort all results alphabetically by name
    this.classList.add('spin');
    setTimeout(() => {
        this.classList.remove('spin');
    }, 1000);
    sortAllData();
});

// Function to sort all results alphabetically by name
function sortAllData() {
    const container = document.getElementById('group-container');
    const cards = Array.from(container.querySelectorAll('.group-card'));

    // Sort the cards alphabetically by name
    cards.sort((a, b) => {
        const nameA = a.querySelector('h2').textContent;
        const nameB = b.querySelector('h2').textContent;
        return ascendingOrder ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
    });

    // Reorder the cards in the container
    cards.forEach(card => container.appendChild(card));

    // Toggle the sorting order for the next click
    ascendingOrder = !ascendingOrder;
}

// Call the function to fetch all data
fetchAllData();
