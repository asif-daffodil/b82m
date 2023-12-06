var x = 123;
var x = 231;
x = 321;

// let
let y = 123;
// let y = 231; // SyntaxError: Identifier 'y' has already been declared
y = 321;

// const
const z = 123;
// const z = 231; // SyntaxError: Identifier 'z' has already been declared
// z = 321; // TypeError: Assignment to constant variable.

// normal function
function foo() {
    console.log('foo');
}

// function expression
var baz = function () {
    console.log('baz');
};

// arrow function
const bar = () => {
    console.log('bar');
};