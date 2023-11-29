const myPromise = new Promise((resolve, reject) => {
    const result = false;
    if (result) {
        resolve("It worked!");
    } else {
        reject(
            new Error("Something went wrong!")
        );
    }
});

myPromise.then(function(res) {
    console.log(res);
}).catch(function(err) {
    console.log(err.message);
});


