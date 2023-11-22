var x = 25;
if (x < 10) {
    console.log("x is less than 10");
} else if (x < 30) {
    console.log("x is less than 30");
} else {
    console.log("x is greater than 10");
}

var isLogin = false;
if (isLogin) {
    console.log("You are logged in");
} else {
    console.log("You are not logged in");
}

var age = 25;
switch (age) {
    case (10):
        console.log("You are 10 years old");
        break;
    case 20:
        console.log("You are 20 years old");
        break;
    case 25:
        console.log("You are 25 years old");
        break;
    default:
        console.log("You are not 10, 20 or 25 years old");
}

/**
 * start point
 * end point
 * increment
 */

/* var a = 0;
while(a < 10){
    console.log(a);
    a++;
} */

for (var i = 0; i <= 100; i += 2) {
    if (i == 10) {
        continue;
    }
    console.log(i);
    if (i == 20) {
        break;
    }
}


function bd (m, n) {
    return m + " " + n;
} 



/* var bd = (m, n) => {
    return m + " " + n + " " + pName;
}
 */
console.log(bd("Bangladesh", "Chittagong"));

// closures
function add (x) {
    return function (y) {
        return y/x;
    }
}

console.log(add(10)(20));