function asyncOperation() {
    return new Promise((resolve, reject) => {
      // Simulate an asynchronous operation
      setTimeout(() => {
        // Simulate an error
        const randomError = Math.random() > 0.5;
        if (randomError) {
          reject(new Error('Something went wrong'));
        } else {
          resolve('Operation successful');
        }
      }, 1000);
    });
  }
  
  // Using .then() and .catch() for error handling
  asyncOperation()
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.error('Error:', error.message);
    });
  
  // Using try...catch with async/await
  async function executeAsyncOperation() {
    try {
      const result = await asyncOperation();
      console.log(result);
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  
  executeAsyncOperation();