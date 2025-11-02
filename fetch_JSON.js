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
