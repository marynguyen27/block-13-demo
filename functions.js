// Standard Function Definition

function hello() {
  console.log('hello world');
}

// Arrow Function
// Comes up more when we start using Array Methods

const HelloArrow = () => {
  console.log('hello, arrow function!');
};

// Invoke the function
hello();
HelloArrow();

function sayHello(name) {
  console.log(`Hello, ${name}`);
}

sayHello('Mary');

// with multiple things, the order matters
function favoriteThings(food, number, place) {
  console.log('My favorite food is: ', food);
  console.log('My favorite things are: ', food, number, place);
}

favoriteThings('pizza', 100, 'home');

// Return keyword

function add(a, b) {
  //don't need it to console log, but I do want it to return the correct value
  return a + b;
}

console.log('add a = b:');

let answer = add(5, 7); // return 12

console.log('The answer is:', answer);

let helloAnswer = hello();
console.log('Hello?', helloAnswer);

function returnEarly() {
  return 5;

  // This won't run in the function if it is after the return!
  console.log('Return This!!!');
}

returnEarly();

let number = prompt('what is your favorite number?');
console.log('The number in the prompt is:', number);

// pre-built functions in JS
// the MATH CLASS

console.log(Math.PI);
console.log(Math.random()); // math.random() is a random number from 0 to 1

// Create a random number from 0 to 10
Math.random() * 10;

// 0.. 1
// 0*10 ... 1 * 10
// 0.... 10

// Create a random number from 0 - 2453
Math.random() * 2453;

console.log('Floor', Math.floor(4.99));

console.log('Random Whole #:', Math.floor(Math.random() * 100));
