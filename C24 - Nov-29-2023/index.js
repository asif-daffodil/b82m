function func1(callback) {
  console.log('func1');
  callback();
}

function func2(callback) {
    setTimeout(function() {
        console.log('func2');
        callback();
    }, 1000);
}

function func3(callback) {
 console.log('func3');
 callback();
}

function func4() {
 console.log('func4');
}

func1(function() {func2(function() {func3(func4)})});

function selfPower (num) {
    return num * num;
}

function higherFunc (int, callback) {
    return callback(int);
}

console.log(higherFunc(5, selfPower));