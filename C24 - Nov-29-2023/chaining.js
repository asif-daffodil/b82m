function func1() {
    return new Promise(function(resolve, reject) {
        resolve("This is func1");
    });
}

function func2() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("This is func2");
        }, 1000);
    });
}

function func3() {
    return new Promise(function(resolve, reject) {
        resolve("This is func3");
    });
}

function func4() {
    return new Promise(function(resolve, reject) {
        resolve("This is func4");
    });
}

func1().then(function(res) {
    console.log(res);
}).then(func2).then(function(res) {
    console.log(res);
}).then(func4).then(function(res) {
    console.log(res);
}).then(func3).then(function(res) {
    console.log(res);
});