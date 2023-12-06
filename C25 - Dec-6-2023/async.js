async function fetchDataAsync() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const data = await response.json();
      console.log('Fetched data:', data);
      // Display data on the web page
      document.getElementById('resultAsync').textContent = JSON.stringify(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  fetchDataAsync();