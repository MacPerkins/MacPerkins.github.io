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

    // Resolve all promises concurrently
    return Promise.all(fetchPromises)
        .then(dataArray => {
            // Log the parsed JSON data for each endpoint
            dataArray.forEach((data, index) => {
                console.log(`Data from ${endpoints[index]}:`, data);
                // Process the data as needed
                processEndpointData(endpoints[index], data);
            });
        })
        .catch(error => {
            console.error('Error fetching all data:', error);
        });
}

// Function to process data from each endpoint (e.g., display cards)
function processEndpointData(endpoint, data) {
    // Implement processing logic based on the endpoint
    // For example, generate HTML for cards, display them, etc.
    // You can create separate functions for processing different endpoints
    // For demonstration purposes, we'll log the data here
    console.log(`Processing data from ${endpoint}:`, data);
}

// Call the function to fetch all data
fetchAllData();
