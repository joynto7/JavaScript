//  Fetch JSON from an API

fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse JSON from the response
  })
  .then(data => {
    console.log(data); // Use the JSON data
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
 // creating new one 

 const API_URL = 'https://jsonplaceholder.typicode.com/todos/1';

 // Creating a function 
 function fetchJSONDatawithPromises(){

    // call fetch() which returns a Promise 
// Replace this with the actual API endpoint you want to call
const API_URL = 'https://jsonplaceholder.typicode.com/todos/1';

function fetchJsonDataWithPromises() {
  // 1. Call fetch(), which returns a Promise
  fetch(API_URL)
    .then(response => {
      // 2. Check if the response status is OK (200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      // 3. Return the response parsed as JSON, which returns a new Promise
      return response.json();
    })
    .then(data => {
      // 4. Use the fetched JSON data
      console.log("Successfully fetched data:");
      console.log(data);
      return data;
    })
    .catch(error => {
      // 5. Catch any errors that occurred in the chain
      console.error("Fetch error:", error);
    });
}

fetchJsonDataWithPromises();