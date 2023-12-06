function asyncOperation1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Result from asyncOperation1');
      }, 1000);
    });
  }
  
  function asyncOperation2(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`Result from asyncOperation2 using ${data}`);
      }, 1000);
    });
  }
  
  function asyncOperation3(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`Result from asyncOperation3 using ${data}`);
      }, 1000);
    });
  }
  
  // Promise chaining
  asyncOperation1()
    .then(result1 => {
      console.log(result1);
      return asyncOperation2(result1);
    })
    .then(result2 => {
      console.log(result2);
      return asyncOperation3(result2);
    })
    .then(result3 => {
      console.log(result3);
    })
    .catch(error => {
      console.error('Error:', error.message);
    });